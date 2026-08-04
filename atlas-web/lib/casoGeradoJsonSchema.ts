// Schema no formato aceito por generationConfig.responseSchema da API do
// Gemini (subconjunto do OpenAPI 3.0 Schema Object — tipos em MAIÚSCULO,
// "STRING"/"OBJECT"/"ARRAY"/"BOOLEAN"). Isso força a resposta a já vir no
// formato certo mecanicamente, mas não expressa tudo: não há como um JSON
// Schema garantir "exatamente uma opção correta por etapa" (é uma restrição
// entre itens de um array), nem que um id citado realmente exista no app —
// por isso lib/casoGeradoSchema.ts (zod) continua sendo a validação real,
// nunca dispensada só por causa deste schema.

interface GeminiSchema {
  type: "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY" | "OBJECT";
  description?: string;
  properties?: Record<string, GeminiSchema>;
  required?: string[];
  items?: GeminiSchema;
}

const opcaoCasoJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    texto: { type: "STRING", description: "O texto da alternativa." },
    correta: {
      type: "BOOLEAN",
      description: "true se esta é a alternativa correta. Exatamente uma opção do array deve ter true.",
    },
    explicacao: {
      type: "STRING",
      description:
        "Mostrada após a escolha, certa ou errada — explique por que esta alternativa específica é ou não compatível com o quadro, não repita só a definição do termo.",
    },
  },
  required: ["texto", "correta", "explicacao"],
};

const etapaCasoJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    id: { type: "STRING", description: 'Ex.: "etapa-1", "etapa-2".' },
    narrativaAdicional: {
      type: "STRING",
      description:
        "Informação nova revelada nesta etapa (exame do estado mental, evolução, exames). Omitir se a etapa for só uma pergunta sobre o que já foi apresentado.",
    },
    pergunta: { type: "STRING" },
    opcoes: {
      type: "ARRAY",
      description: "Exatamente 4 opções, com exatamente uma correta:true.",
      items: opcaoCasoJsonSchema,
    },
  },
  required: ["id", "pergunta", "opcoes"],
};

const achadoReferenciadoJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    dominioId: { type: "STRING", description: "Deve ser um dos ids de domínio fornecidos no prompt." },
    achadoId: { type: "STRING", description: "Deve ser um dos ids de achado DENTRO desse domínio." },
  },
  required: ["dominioId", "achadoId"],
};

export const casoGeradoJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    id: { type: "STRING", description: "kebab-case, curto, descritivo." },
    titulo: {
      type: "STRING",
      description:
        'Frase curta e evocativa, não o nome do diagnóstico (ex.: "Ela diz que já está morta", não "Depressão Psicótica").',
    },
    categoria: { type: "STRING", description: 'Categoria diagnóstica ampla, ex.: "Transtornos do Humor".' },
    apresentacaoInicial: {
      type: "STRING",
      description:
        "Vinheta inicial: idade, sexo, contexto, motivo da consulta, sinais/sintomas — sem revelar o diagnóstico.",
    },
    etapas: {
      type: "ARRAY",
      description: "4 a 5 etapas, dificuldade crescente, terminando na conduta terapêutica.",
      items: etapaCasoJsonSchema,
    },
    diagnosticoFinal: {
      type: "STRING",
      description: "Frase completa com o diagnóstico e especificadores relevantes.",
    },
    diagnosticoId: {
      type: "STRING",
      description: "Se houver um diagnóstico correspondente na lista de ids válidos do prompt.",
    },
    medicamentosRelacionados: {
      type: "ARRAY",
      description: "Ids da lista de medicamentos válidos do prompt.",
      items: { type: "STRING" },
    },
    achadosPsicopatologicos: {
      type: "ARRAY",
      description: "Achados de psicopatologia ilustrados pelo caso.",
      items: achadoReferenciadoJsonSchema,
    },
    pontosDeEnsino: {
      type: "ARRAY",
      description: "3 a 5 lições didáticas do caso, além do diagnóstico em si.",
      items: { type: "STRING" },
    },
  },
  required: [
    "id",
    "titulo",
    "categoria",
    "apresentacaoInicial",
    "etapas",
    "diagnosticoFinal",
    "pontosDeEnsino",
  ],
};
