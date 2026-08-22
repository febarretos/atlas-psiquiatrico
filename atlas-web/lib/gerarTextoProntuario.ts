import type { Medicamento } from "../data/types";
import type { Diagnostico } from "../data/diagnosticos/types";
import type { Escala, EscalaFaixa } from "../data/escalas/types";
import type { FluxogramaNode } from "../data/fluxogramas/types";
import type { CasoClinico, OpcaoInterativa } from "../data/casos-clinicos/types";
import type { DominioPsicopatologico } from "../data/psicopatologia/types";
import type { EntradaHistorico } from "./historicoEscalas";
import { avaliarAlgoritmo, avaliarRastreio, contagemExibivel } from "./entrevistaEstruturada";

// Geração de texto pronto pra colar em prontuário eletrônico — cada
// função aqui produz uma frase redigida como nota clínica real, nunca um
// dump do JSON estruturado ou uma lista de bullets do banco de dados.
// perolasClinicas e referencias nunca entram aqui: são conteúdo de
// estudo, não de registro clínico.

// Usa a primeira posologia cadastrada (por convenção, a indicação
// principal/mais comum do fármaco nos dados deste app) — não há como
// saber pela função sozinha qual indicação está sendo tratada na
// consulta atual.
export function gerarTextoMedicamento(medicamento: Medicamento): string {
  const posologiaPrincipal = medicamento.posologias[0];

  if (!posologiaPrincipal) {
    return `${medicamento.nome}, conforme posologia habitual.`;
  }

  return `${medicamento.nome}, iniciada na dose de ${posologiaPrincipal.doseInicial}, com plano de titulação até dose terapêutica (${posologiaPrincipal.doseUsual}) conforme resposta e tolerabilidade.`;
}

// Os textos de `especificadores` no app são frases descritivas longas,
// muitas vezes com uma explicação entre parênteses (ex.: "Com
// características psicóticas (delírios e/ou alucinações...)") — a
// explicação é conteúdo de estudo, não algo que pertence a uma linha de
// prontuário. Mantém só o rótulo curto antes do parêntese, se houver.
function especificadorParaProntuario(especificador: string): string {
  return especificador.split("(")[0].trim();
}

export function gerarTextoDiagnostico(
  diagnostico: Diagnostico,
  especificadoresSelecionados: string[] = []
): string {
  const cid = diagnostico.cid11
    ? `CID-11: ${diagnostico.cid11}`
    : diagnostico.cid10
      ? `CID-10: ${diagnostico.cid10}`
      : undefined;

  const especificadoresTexto = especificadoresSelecionados
    .map(especificadorParaProntuario)
    .filter(Boolean)
    .join(", ");

  const nomeCompleto = especificadoresTexto
    ? `${diagnostico.nome}, ${especificadoresTexto}`
    : diagnostico.nome;

  return cid ? `${nomeCompleto} (${cid}).` : `${nomeCompleto}.`;
}

export function gerarTextoEscala(
  escala: Escala,
  respostasDoUsuario: number[],
  pontuacaoCalculada: number,
  faixaCorrespondente: EscalaFaixa
): string {
  // Reservado pra uma versão futura mais rica (ex.: sinalizar item
  // específico positivo em escalas hierárquicas como o C-SSRS) — o
  // formato atual, validado com o usuário, usa só a pontuação total.
  void respostasDoUsuario;

  const faixaTexto =
    faixaCorrespondente.label.charAt(0).toLowerCase() + faixaCorrespondente.label.slice(1);

  return `Aplicado ${escala.sigla} (${escala.nome}), pontuação total de ${pontuacaoCalculada}, compatível com ${faixaTexto}.`;
}

function formatarDataCurta(dataISO: string): string {
  return new Date(dataISO).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

// Resume a evolução de um paciente numa escala, comparando as duas
// aplicações mais recentes do histórico local (ver lib/historicoEscalas.ts)
// — pensado pra ser colado junto de gerarTextoConduta numa nota de
// evolução. Devolve "" com menos de 2 entradas, pra quem chama poder
// simplesmente omitir a frase em vez de tratar caso especial.
export function gerarTextoTendenciaEscala(
  siglaEscala: string,
  entradas: EntradaHistorico[]
): string {
  if (entradas.length < 2) return "";

  const ordenadas = [...entradas].sort((a, b) => a.dataISO.localeCompare(b.dataISO));
  const anterior = ordenadas[ordenadas.length - 2];
  const atual = ordenadas[ordenadas.length - 1];

  const periodo = `entre ${formatarDataCurta(anterior.dataISO)} e ${formatarDataCurta(atual.dataISO)}`;

  if (atual.pontuacao === anterior.pontuacao) {
    return `${siglaEscala} manteve-se estável em ${atual.pontuacao} pontos ${periodo}.`;
  }

  const verbo = atual.pontuacao < anterior.pontuacao ? "caiu" : "subiu";
  return `${siglaEscala} ${verbo} de ${anterior.pontuacao} para ${atual.pontuacao} pontos ${periodo}.`;
}

// Remove o "Sim, "/"Não, " inicial (comum nos rótulos de opção deste
// app) e ajusta a primeira letra pra minúscula, pra o rótulo entrar bem
// no meio de uma frase de trilha de decisões — ex.: "Não, risco baixo"
// vira "risco baixo", "Moderada a grave" vira "moderada a grave".
export function limparRotuloParaTrilha(label: string): string {
  const semPrefixo = label.replace(/^(sim|não)\s*,?\s*/i, "").trim();
  const texto = semPrefixo || label;
  return texto.charAt(0).toLowerCase() + texto.slice(1);
}

export function gerarTextoConduta(
  node: FluxogramaNode,
  trilhaDeDecisoes: string[]
): string {
  // node.texto normalmente já termina em "." (é escrito como frase
  // completa) — remove esse ponto antes de recompor, pra nunca gerar
  // "....".
  const textoBase = node.texto.trim();
  const semPontoFinal = textoBase.endsWith(".") ? textoBase.slice(0, -1) : textoBase;
  const base = `Conduta: ${semPontoFinal}.`;

  if (trilhaDeDecisoes.length === 0) {
    return base;
  }

  return `${base} Baseado em avaliação de ${trilhaDeDecisoes.join(", ")}.`;
}

export interface RespostaModuloEntrevista {
  diagnostico: Diagnostico;
  // Ids brutos de CriterioEntrevista (não a chave composta usada na UI) -> resposta.
  respostasCriterios: Map<string, boolean>;
}

// Nota de entrevista estruturada — só inclui módulos com rastreio positivo
// (os negativos foram pulados, não têm o que registrar; "pendente" também
// fica de fora, pois o módulo ainda não foi respondido o suficiente pra
// saber se abre ou pula). Recebe a lista completa de módulos respondidos
// (não filtrada por busca), pra nunca perder um item marcado que saiu de
// um filtro de UI no meio da sessão. Nunca declara diagnóstico fechado:
// reporta a contagem formal do algoritmo e lembra explicitamente de
// confirmar duração/exclusões.
export function gerarTextoEntrevistaEstruturada(modulos: RespostaModuloEntrevista[]): string {
  const comRastreioPositivo = modulos.filter(
    (m) =>
      m.diagnostico.entrevistaEstruturada &&
      avaliarRastreio(m.respostasCriterios, m.diagnostico.entrevistaEstruturada.criteriosRastreioIds) ===
        "positivo"
  );

  if (comRastreioPositivo.length === 0) return "";

  const porCategoria = new Map<string, RespostaModuloEntrevista[]>();
  for (const m of comRastreioPositivo) {
    const lista = porCategoria.get(m.diagnostico.categoria) ?? [];
    lista.push(m);
    porCategoria.set(m.diagnostico.categoria, lista);
  }

  const linhas: string[] = ["ENTREVISTA ESTRUTURADA — módulos com rastreio positivo:", ""];

  for (const [categoria, lista] of porCategoria) {
    linhas.push(`## ${categoria}`);

    for (const m of lista) {
      const entrevista = m.diagnostico.entrevistaEstruturada!;
      const resultado = avaliarAlgoritmo(m.respostasCriterios, entrevista.algoritmo);
      const { contagem: contagemExibida, total } = contagemExibivel(m.respostasCriterios, entrevista.algoritmo);
      const contagem = total > 0 ? ` (${contagemExibida}/${total})` : "";

      const status = resultado.criteriosFormaisAtingidos
        ? `critérios formais atingidos${contagem} — confirmar duração e exclusões antes de considerar o diagnóstico`
        : `critérios formais não atingidos${contagem}`;

      linhas.push(`${m.diagnostico.nome}: ${status}`);

      for (const criterio of entrevista.criterios) {
        if (m.respostasCriterios.get(criterio.id)) {
          linhas.push(`  [x] ${criterio.pergunta}`);
        }
      }

      if (entrevista.algoritmo.duracaoMinima) {
        linhas.push(`  Duração mínima exigida: ${entrevista.algoritmo.duracaoMinima}`);
      }
      if (entrevista.algoritmo.observacaoExclusao) {
        linhas.push(`  ${entrevista.algoritmo.observacaoExclusao}`);
      }

      linhas.push("");
    }
  }

  return linhas.join("\n").trim();
}

// Resumo do caso jogado (estilo narrativo, com qualidadeDecisao — ex-
// Simulador de Psiquiatria, hoje fundido em Casos Clínicos), como uma
// nota de evolução — o diagnóstico real (só revelado no desfecho) e a
// sequência de decisões tomadas pelo caminho, sem os rótulos internos
// "ideal"/"aceitavel"/"problematica" (são feedback pra quem jogou, não
// pertencem a uma nota clínica). Só faz sentido pra caminhos com
// `qualidadeDecisao` — casos de múltipla escolha pura não usam esta função.
export function gerarTextoEvolucaoCasoInterativo(
  caso: CasoClinico,
  diagnosticoReal: Diagnostico,
  opcoesEscolhidas: OpcaoInterativa[]
): string {
  const cid = diagnosticoReal.cid11
    ? `CID-11: ${diagnosticoReal.cid11}`
    : diagnosticoReal.cid10
      ? `CID-10: ${diagnosticoReal.cid10}`
      : undefined;

  const diagnosticoTexto = cid ? `${diagnosticoReal.nome} (${cid})` : diagnosticoReal.nome;

  const base = `Nota de evolução (caso simulado "${caso.titulo}"): diagnóstico ${diagnosticoTexto}.`;

  if (opcoesEscolhidas.length === 0) {
    return base;
  }

  // opcao.texto no estilo narrativo costuma ser uma frase completa
  // (termina em "."), diferente dos rótulos curtos de opção do
  // fluxograma — remove esse ponto final antes de juntar, pelo mesmo
  // motivo de gerarTextoConduta: nunca gerar "..".
  const trilha = opcoesEscolhidas
    .map((opcao) => limparRotuloParaTrilha(opcao.texto).replace(/\.+$/, ""))
    .join(", ");

  return `${base} Conduta seguida ao longo do caso: ${trilha}.`;
}

// Exame do Estado Mental montado a partir dos achados psicopatológicos
// marcados como observados — um parágrafo por domínio, na mesma ordem
// clássica em que os domínios são listados (que já corresponde à
// estrutura tradicional de um EEM redigido). Só lista o que foi
// explicitamente marcado: nunca declara "demais funções sem alterações"
// pra domínios sem achados marcados, pois a ferramenta não tem como
// saber se aquele domínio foi de fato avaliado ou só não foi revisado
// ainda — essa conclusão cabe ao médico, editando o texto antes de copiar.
export function gerarTextoExameEstadoMental(
  dominios: DominioPsicopatologico[],
  idsSelecionados: string[]
): string {
  const linhas: string[] = [];

  for (const dominio of dominios) {
    const achadosDoDominio = dominio.achados.filter((a) => idsSelecionados.includes(a.id));
    if (achadosDoDominio.length === 0) continue;

    const nomes = achadosDoDominio.map((a) => a.nome).join(", ");
    linhas.push(`${dominio.nome}: ${nomes}.`);
  }

  return linhas.join("\n");
}
