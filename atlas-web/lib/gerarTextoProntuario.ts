import type { Medicamento } from "../data/types";
import type { Diagnostico } from "../data/diagnosticos/types";
import type { Escala, EscalaFaixa } from "../data/escalas/types";
import type { FluxogramaNode } from "../data/fluxogramas/types";

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
