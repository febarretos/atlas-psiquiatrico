import { diagnosticos } from "../data/diagnosticos";
import { medicamentos } from "../data/medicamentos";
import { dominiosPsicopatologicos } from "../data/psicopatologia";
import { depressaoPsicoticaCotard } from "../data/casos-clinicos/depressao-psicotica-cotard";
import type { ArtigoInspiracao } from "./buscarInspiracaoEuropePmc";
import type { CasoSemAlternativas } from "./casoSemAlternativasSchema";

export type Dificuldade = "classico" | "atipico" | "diferencial-dificil";

const DIFICULDADE_INSTRUCAO: Record<Dificuldade, string> = {
  classico:
    "Apresentação CLÁSSICA e prototípica do diagnóstico — sintomas nucleares bem demarcados, poucos elementos que confundem. Adequado para quem está aprendendo o quadro pela primeira vez.",
  atipico:
    "Apresentação ATÍPICA: sintomas nucleares presentes, mas com uma variação relevante (idade incomum, comorbidade que mascara parte do quadro, contexto cultural, sintoma predominante fora do habitual) que exige raciocínio além do padrão de livro-texto.",
  "diferencial-dificil":
    "Foco no DIAGNÓSTICO DIFERENCIAL: o quadro deve compartilhar sobreposição real com pelo menos um diagnóstico concorrente plausível, e pelo menos uma etapa deve exigir discriminar entre as duas hipóteses com um achado específico, não óbvio.",
};

export function resolverDiagnosticoId(entrada: string | undefined): string {
  if (entrada && diagnosticos.some((d) => d.id === entrada)) return entrada;

  const idx = Math.floor(Math.random() * diagnosticos.length);
  return diagnosticos[idx].id;
}

function montarBlocoInspiracao(inspiracao: ArtigoInspiracao[]): string {
  if (inspiracao.length === 0) return "";

  const resumos = inspiracao
    .map((a, i) => `${i + 1}. "${a.titulo}"\n${a.abstractText}`)
    .join("\n\n");

  return `\n## Resumos de relatos de caso reais (inspiração de apresentação clínica)

Os resumos abaixo são de relatos de caso reais, publicados em acesso aberto. Servem APENAS como inspiração para a apresentação clínica (sintomas, evolução, achados incongruentes, contexto do paciente) — NÃO copie frases ou estrutura desses resumos. Escreva uma vinheta inteiramente original e reescrita com suas próprias palavras, adaptada ao formato de etapas com perguntas do nosso app.

${resumos}
`;
}

function montarBlocoContexto(diagnosticoId: string, dificuldade: Dificuldade): {
  diagnostico: ReturnType<typeof diagnosticos.find>;
  listaDiagnosticos: string;
  listaMedicamentos: string;
  listaAchados: string;
  dificuldadeInstrucao: string;
} {
  const diagnostico = diagnosticos.find((d) => d.id === diagnosticoId);

  const listaDiagnosticos = diagnosticos.map((d) => `- ${d.id}: ${d.nome}`).join("\n");
  const listaMedicamentos = medicamentos
    .map((m) => `- ${m.id}: ${m.nome} (${m.classe})`)
    .join("\n");
  const listaAchados = dominiosPsicopatologicos
    .map(
      (dom) =>
        `- domínio "${dom.id}" (${dom.nome}):\n` +
        dom.achados.map((a) => `  - ${a.id}: ${a.nome}`).join("\n")
    )
    .join("\n");

  return {
    diagnostico,
    listaDiagnosticos,
    listaMedicamentos,
    listaAchados,
    dificuldadeInstrucao: DIFICULDADE_INSTRUCAO[dificuldade],
  };
}

// Exemplo de estilo para a chamada 1 (sem alternativas): a mesma vinheta de
// referência do módulo, reduzida a pergunta + resposta certa por etapa —
// não mostra opções, porque o modelo não deve gerar opções nesta chamada.
const EXEMPLO_ETAPA1: CasoSemAlternativas = {
  id: depressaoPsicoticaCotard.id,
  titulo: depressaoPsicoticaCotard.titulo,
  categoria: depressaoPsicoticaCotard.categoria,
  apresentacaoInicial: depressaoPsicoticaCotard.apresentacaoInicial,
  etapas: depressaoPsicoticaCotard.etapas.map((etapa) => {
    const certa = etapa.opcoes.find((o) => o.correta)!;
    return {
      id: etapa.id,
      narrativaAdicional: etapa.narrativaAdicional,
      pergunta: etapa.pergunta,
      respostaCorreta: certa.texto,
      explicacaoCorreta: certa.explicacao,
    };
  }),
  diagnosticoFinal: depressaoPsicoticaCotard.diagnosticoFinal,
  diagnosticoId: depressaoPsicoticaCotard.diagnosticoId,
  medicamentosRelacionados: depressaoPsicoticaCotard.medicamentosRelacionados,
  achadosPsicopatologicos: depressaoPsicoticaCotard.achadosPsicopatologicos,
  pontosDeEnsino: depressaoPsicoticaCotard.pontosDeEnsino,
};

// CHAMADA 1 do modo múltipla-escolha: gera o caso e a resposta certa de
// cada etapa, mas nenhuma alternativa errada — essas vêm de uma chamada
// separada (montarPromptDistratores) que só vê pergunta+resposta certa,
// nunca este prompt inteiro. Separar as duas chamadas evita que o mesmo
// raciocínio que "sabe" a resposta certa também escreva os distratores de
// forma óbvia demais.
export function montarPromptEtapa1(
  diagnosticoId: string,
  dificuldadeEntrada: Dificuldade | undefined,
  inspiracao: ArtigoInspiracao[]
): { prompt: string; dificuldade: Dificuldade } {
  const dificuldade = dificuldadeEntrada ?? "classico";
  const { diagnostico, listaDiagnosticos, listaMedicamentos, listaAchados, dificuldadeInstrucao } =
    montarBlocoContexto(diagnosticoId, dificuldade);

  const exemploJson = JSON.stringify(EXEMPLO_ETAPA1, null, 2);

  const prompt = `Você é um psiquiatra experiente escrevendo um caso clínico interativo para o Atlas Psiquiátrico, uma ferramenta de ensino para psiquiatras e residentes.

Sua resposta será validada automaticamente contra um schema JSON — respeite os tipos e a estrutura, mas o que este texto pede é o que o schema sozinho não consegue garantir: conteúdo clínico de qualidade e ids válidos.

Esta é a PRIMEIRA de duas chamadas para gerar este caso. Nesta chamada você escreve a vinheta, as perguntas de cada etapa e a resposta certa de cada uma — NÃO invente alternativas erradas, isso é feito em uma chamada separada por outro prompt.

## Diagnóstico-alvo deste caso

${diagnostico ? `${diagnostico.nome} (id: "${diagnostico.id}")` : diagnosticoId}

## Nível de dificuldade

${dificuldadeInstrucao}

## Ids válidos — use APENAS estes ids nos campos diagnosticoId, medicamentosRelacionados e achadosPsicopatologicos. Nunca invente um id novo; se nenhum id existente encaixar bem, omita o campo (todos são opcionais).

### Diagnósticos válidos (para diagnosticoId)
${listaDiagnosticos}

### Medicamentos válidos (para medicamentosRelacionados)
${listaMedicamentos}

### Achados de psicopatologia válidos (para achadosPsicopatologicos)
${listaAchados}

## Exemplo de caso real, no estilo e profundidade esperados (NÃO copie o conteúdo clínico, é só referência de estilo/estrutura/qualidade)

${exemploJson}
${montarBlocoInspiracao(inspiracao)}
## Instruções finais
- respostaCorreta deve ser a resposta certa por extenso (não um resumo de uma palavra), no mesmo estilo de uma alternativa de múltipla escolha — ela será usada depois para gerar 3 alternativas erradas de comprimento parecido.
- explicacaoCorreta explica por que essa é a resposta certa, específico ao quadro apresentado, não a definição genérica do termo.
- 4 a 5 etapas, dificuldade crescente, terminando numa pergunta sobre conduta terapêutica.
- NÃO preencha um campo "referencias" — um caso sintético não deve citar fontes bibliográficas reais que não foram checadas por ninguém.`;

  return { prompt, dificuldade };
}

// CHAMADA 2 do modo múltipla-escolha: examinador adversarial. Só recebe o
// resultado da chamada 1 (pergunta + resposta certa de cada etapa) — nunca
// o prompt clínico original — para forçar o modelo a inventar distratores
// a partir do zero, em vez de reaproveitar raciocínio já feito.
export function montarPromptDistratores(caso: CasoSemAlternativas): string {
  const etapasJson = JSON.stringify(
    caso.etapas.map((e) => ({
      etapaId: e.id,
      pergunta: e.pergunta,
      respostaCorreta: e.respostaCorreta,
    })),
    null,
    2
  );

  return `Você é um examinador adversarial de psiquiatria. Sua única tarefa é criar 3 alternativas erradas PARA CADA etapa abaixo que enganariam um residente de psiquiatria competente.

## Etapas (pergunta + resposta certa, na íntegra)

${etapasJson}

## Regras obrigatórias

1. MESMO COMPRIMENTO da resposta certa (~20% de variação) — nunca deixe um distrator visivelmente mais curto ou mais longo que a resposta certa.
2. ERROS REAIS DA PRÁTICA CLÍNICA, não invenções absurdas: cada alternativa errada deve representar uma confusão que um residente cometeria de verdade — um diagnóstico diferencial próximo mas descartável por 1-2 critérios específicos, uma conduta que já foi correta em diretriz antiga, ou uma confusão comum entre conceitos parecidos.
3. SEM QUALIFICADORES ABSOLUTOS que denunciem a alternativa errada ("nunca", "sempre", "é impossível"). Todas as alternativas devem soar igualmente confiantes e afirmativas.
4. NÃO revele qual é a resposta certa nem mencione isso no texto ou na explicação das alternativas erradas — escreva como se cada distrator pudesse ser a resposta certa.
5. TESTE MENTAL OBRIGATÓRIO antes de finalizar cada etapa: "um residente de segundo ano, sem ver a resposta certa, teria pelo menos 40-50% de chance de escolher um destes distratores pela plausibilidade?" Se não, reescreva para ficarem mais próximos/tentadores.
6. etapaId de cada item da resposta deve corresponder exatamente ao etapaId recebido, na mesma ordem.
7. Toda alternativa errada precisa de uma explicação didática de por que ela NÃO é compatível com o quadro apresentado nesta etapa — não apenas repetir a definição do termo.`;
}

// Exemplo de referência para o modo resposta-livre — mesma vinheta,
// reduzida a pergunta + gabarito por etapa, sem alternativas.
const EXEMPLO_CASO_LIVRE = {
  id: depressaoPsicoticaCotard.id,
  titulo: depressaoPsicoticaCotard.titulo,
  categoria: depressaoPsicoticaCotard.categoria,
  vinheta: depressaoPsicoticaCotard.apresentacaoInicial,
  perguntasAbertas: depressaoPsicoticaCotard.etapas.map((etapa, i) => {
    const certa = etapa.opcoes.find((o) => o.correta)!;
    const rotulos = [
      "achado psicopatológico",
      "mecanismo de formação do delírio",
      "hipótese diagnóstica",
      "conduta terapêutica",
    ];
    return {
      etapa: rotulos[i] ?? `etapa-${i + 1}`,
      pergunta: etapa.pergunta,
      contextoAdicional: etapa.narrativaAdicional,
      gabaritoInterno: `${certa.texto} — ${certa.explicacao}`,
    };
  }),
  diagnosticoFinal: depressaoPsicoticaCotard.diagnosticoFinal,
  diagnosticoId: depressaoPsicoticaCotard.diagnosticoId,
  medicamentosRelacionados: depressaoPsicoticaCotard.medicamentosRelacionados,
  achadosPsicopatologicos: depressaoPsicoticaCotard.achadosPsicopatologicos,
  pontosDeEnsino: depressaoPsicoticaCotard.pontosDeEnsino,
};

// Modo resposta-livre: uma única chamada, sem alternativas — o residente
// escreve a resposta livremente e ela é avaliada depois por
// app/api/avaliar-resposta-livre.
export function montarPromptCasoLivre(
  diagnosticoId: string,
  dificuldadeEntrada: Dificuldade | undefined,
  inspiracao: ArtigoInspiracao[]
): { prompt: string; dificuldade: Dificuldade } {
  const dificuldade = dificuldadeEntrada ?? "classico";
  const { diagnostico, listaDiagnosticos, listaMedicamentos, listaAchados, dificuldadeInstrucao } =
    montarBlocoContexto(diagnosticoId, dificuldade);

  const exemploJson = JSON.stringify(EXEMPLO_CASO_LIVRE, null, 2);

  const prompt = `Você é um psiquiatra experiente escrevendo um caso clínico de RESPOSTA LIVRE (modo difícil) para o Atlas Psiquiátrico, uma ferramenta de ensino para psiquiatras e residentes. Neste modo não há alternativas de múltipla escolha — o residente escreve a resposta com as próprias palavras e ela é avaliada depois por outra IA, então cada gabaritoInterno precisa ser preciso e completo o suficiente para servir de referência de correção.

Sua resposta será validada automaticamente contra um schema JSON — respeite os tipos e a estrutura, mas o que este texto pede é o que o schema sozinho não consegue garantir: conteúdo clínico de qualidade e ids válidos.

## Diagnóstico-alvo deste caso

${diagnostico ? `${diagnostico.nome} (id: "${diagnostico.id}")` : diagnosticoId}

## Nível de dificuldade

${dificuldadeInstrucao}

## Ids válidos — use APENAS estes ids nos campos diagnosticoId, medicamentosRelacionados e achadosPsicopatologicos. Nunca invente um id novo; se nenhum id existente encaixar bem, omita o campo (todos são opcionais).

### Diagnósticos válidos (para diagnosticoId)
${listaDiagnosticos}

### Medicamentos válidos (para medicamentosRelacionados)
${listaMedicamentos}

### Achados de psicopatologia válidos (para achadosPsicopatologicos)
${listaAchados}

## Exemplo de caso real, no estilo e profundidade esperados (NÃO copie o conteúdo clínico, é só referência de estilo/estrutura/qualidade)

${exemploJson}
${montarBlocoInspiracao(inspiracao)}
## Instruções finais
- 3 a 5 perguntasAbertas, dificuldade crescente, terminando numa pergunta sobre conduta terapêutica.
- "etapa" é um rótulo curto do que está sendo avaliado (ex.: "hipótese diagnóstica inicial", "conduta imediata", "diagnóstico diferencial a descartar") — "pergunta" é o texto completo da pergunta feita ao residente.
- contextoAdicional só deve conter informação REALMENTE nova (evolução do caso, exame do estado mental, exames) revelada nessa etapa — omita quando a etapa for só uma pergunta sobre o que já foi apresentado.
- gabaritoInterno deve ser completo o bastante para uma IA avaliadora reconhecer respostas clinicamente equivalentes, mesmo com formulação diferente — não é uma palavra-chave, é a resposta esperada por extenso com seu raciocínio.
- NÃO preencha um campo "referencias" — um caso sintético não deve citar fontes bibliográficas reais que não foram checadas por ninguém.`;

  return { prompt, dificuldade };
}
