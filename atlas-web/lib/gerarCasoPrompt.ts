import { diagnosticos } from "../data/diagnosticos";
import { medicamentos } from "../data/medicamentos";
import { dominiosPsicopatologicos } from "../data/psicopatologia";
import { depressaoPsicoticaCotard } from "../data/casos-clinicos/depressao-psicotica-cotard";

export type Dificuldade = "classico" | "atipico" | "diferencial-dificil";

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

// Não inclui mais o schema como texto (TypeScript/JSON-Schema) — isso agora
// é aplicado mecanicamente pelo responseSchema do Gemini (ver
// lib/casoGeradoJsonSchema.ts), que já traz a semântica de cada campo nos
// próprios `description`. O prompt só precisa do contexto que o schema não
// consegue expressar: quais ids são válidos, o exemplo de estilo, e a regra
// "exatamente uma opção correta por etapa" (uma restrição entre campos que
// nenhum JSON Schema consegue garantir sozinho — por isso a validação zod
// em lib/casoGeradoSchema.ts continua sendo a segunda camada obrigatória).
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

Sua resposta será validada automaticamente contra um schema JSON — respeite os tipos e a estrutura, mas o que este texto pede é o que o schema sozinho não consegue garantir: conteúdo clínico de qualidade e ids válidos.

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
- NÃO preencha um campo "referencias" — um caso sintético não deve citar fontes bibliográficas reais que não foram checadas por ninguém.
- Cada etapa deve ter exatamente 4 opções, com EXATAMENTE UMA marcada correta:true — essa contagem não é garantida pelo schema, verifique você mesmo antes de responder.
- Toda alternativa (certa e erradas) precisa de uma explicação didática específica — por que ela é ou não compatível com o quadro apresentado, não apenas repetir a definição do termo.
- 4 a 5 etapas, dificuldade crescente, terminando numa pergunta sobre conduta terapêutica.`;

  return { prompt, diagnosticoId, dificuldade };
}
