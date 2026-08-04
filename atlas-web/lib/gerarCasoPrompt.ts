import { diagnosticos } from "../data/diagnosticos";
import { medicamentos } from "../data/medicamentos";
import { dominiosPsicopatologicos } from "../data/psicopatologia";
import { depressaoPsicoticaCotard } from "../data/casos-clinicos/depressao-psicotica-cotard";

export type Dificuldade = "classico" | "atipico" | "diferencial-dificil";

// Mantido em sincronia manualmente com data/casos-clinicos/types.ts —
// é texto para o prompt, não um import de tipo (o LLM não lê TypeScript
// de verdade, precisa do formato explicado em prosa/JSON).
const SCHEMA_TEXTO = `interface OpcaoCaso {
  texto: string;
  correta: boolean;
  // Mostrada após a escolha, seja ela certa ou errada — explique por que
  // cada alternativa (inclusive as erradas) é ou não compatível com o
  // quadro, não repita só a definição do termo certo.
  explicacao: string;
}

interface EtapaCaso {
  id: string; // ex: "etapa-1", "etapa-2"...
  narrativaAdicional?: string; // informação nova revelada nesta etapa (exame do estado mental, evolução, exames) — omitir se a etapa for só uma pergunta sobre o que já foi apresentado
  pergunta: string;
  opcoes: OpcaoCaso[]; // 4 opções, EXATAMENTE UMA com correta:true
}

interface AchadoReferenciado {
  dominioId: string; // deve ser um dos ids de domínio da lista abaixo
  achadoId: string; // deve ser um dos ids de achado DENTRO desse domínio
}

interface CasoClinico {
  id: string; // kebab-case, curto, descritivo
  titulo: string; // frase curta e evocativa, não o nome do diagnóstico (ex: "Ela diz que já está morta", não "Depressão Psicótica")
  categoria: string; // categoria diagnóstica ampla, ex: "Transtornos do Humor"
  apresentacaoInicial: string; // vinheta inicial: idade, sexo, contexto, motivo da consulta, sinais/sintomas — sem revelar o diagnóstico
  etapas: EtapaCaso[]; // 4 a 5 etapas, dificuldade crescente, terminando na conduta terapêutica
  diagnosticoFinal: string; // frase completa com o diagnóstico e especificadores relevantes
  diagnosticoId?: string; // se houver um diagnóstico correspondente na lista de ids válidos abaixo
  medicamentosRelacionados?: string[]; // ids da lista de medicamentos válidos abaixo
  achadosPsicopatologicos?: AchadoReferenciado[]; // achados de psicopatologia ilustrados pelo caso
  pontosDeEnsino: string[]; // 3 a 5 lições didáticas do caso, além do diagnóstico em si
}`;

const DIFICULDADE_INSTRUCAO: Record<Dificuldade, string> = {
  classico:
    "Apresentação CLÁSSICA e prototípica do diagnóstico — sintomas nucleares bem demarcados, poucos elementos que confundem. Adequado para quem está aprendendo o quadro pela primeira vez.",
  atipico:
    "Apresentação ATÍPICA: sintomas nucleares presentes, mas com uma variação relevante (idade incomum, comorbidade que mascara parte do quadro, contexto cultural, sintoma predominante fora do habitual) que exige raciocínio além do padrão de livro-texto.",
  "diferencial-dificil":
    "Foco no DIAGNÓSTICO DIFERENCIAL: o quadro deve compartilhar sobreposição real com pelo menos um diagnóstico concorrente plausível, e pelo menos uma etapa deve exigir discriminar entre as duas hipóteses com um achado específico, não óbvio.",
};

function escolherDiagnosticoAleatorio(): string {
  const idx = Math.floor(Math.random() * diagnosticos.length);
  return diagnosticos[idx].id;
}

export function montarPrompt(
  diagnosticoIdEntrada: string | undefined,
  dificuldadeEntrada: Dificuldade | undefined
): { prompt: string; diagnosticoId: string; dificuldade: Dificuldade } {
  const diagnosticoId = diagnosticoIdEntrada ?? escolherDiagnosticoAleatorio();
  const dificuldade = dificuldadeEntrada ?? "classico";

  const diagnostico = diagnosticos.find((d) => d.id === diagnosticoId);

  const listaDiagnosticos = diagnosticos
    .map((d) => `- ${d.id}: ${d.nome}`)
    .join("\n");

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

  // Remove `referencias` do exemplo mostrado: o modelo não deve gerar
  // esse campo, então o exemplo também não deve exibi-lo.
  const { referencias: _referencias, ...exemploSemReferencias } =
    depressaoPsicoticaCotard;
  void _referencias;
  const exemploJson = JSON.stringify(exemploSemReferencias, null, 2);

  const prompt = `Você é um psiquiatra experiente escrevendo um caso clínico interativo para o Atlas Psiquiátrico, uma ferramenta de ensino para psiquiatras e residentes.

## Formato exigido (TypeScript, para você entender a estrutura — a resposta deve ser JSON, não TypeScript)

${SCHEMA_TEXTO}

## Diagnóstico-alvo deste caso

${diagnostico ? `${diagnostico.nome} (id: "${diagnostico.id}")` : diagnosticoId}

## Nível de dificuldade

${DIFICULDADE_INSTRUCAO[dificuldade]}

## Ids válidos — use APENAS estes ids nos campos diagnosticoId, medicamentosRelacionados e achadosPsicopatologicos. Nunca invente um id novo; se nenhum id existente encaixar bem, omita o campo (todos são opcionais).

### Diagnósticos válidos (para diagnosticoId)
${listaDiagnosticos}

### Medicamentos válidos (para medicamentosRelacionados)
${listaMedicamentos}

### Achados de psicopatologia válidos (para achadosPsicopatologicos)
${listaAchados}

## Exemplo de caso real, no estilo e profundidade esperados (NÃO copie o conteúdo clínico, é só referência de estilo/estrutura/qualidade das explicações)

${exemploJson}

## Instruções finais
- Responda APENAS com um objeto JSON válido no formato CasoClinico acima — sem markdown, sem \`\`\`json, sem texto antes ou depois do JSON.
- NÃO preencha um campo "referencias" — um caso sintético não deve citar fontes bibliográficas reais que não foram checadas por ninguém.
- Cada etapa deve ter exatamente 4 opções, com exatamente uma marcada correta:true.
- Toda alternativa (certa e erradas) precisa de uma explicação didática específica — por que ela é ou não compatível com o quadro apresentado, não apenas repetir a definição do termo.
- 4 a 5 etapas, dificuldade crescente, terminando numa pergunta sobre conduta terapêutica.`;

  return { prompt, diagnosticoId, dificuldade };
}
