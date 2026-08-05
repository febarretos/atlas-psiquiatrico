// Schema no formato aceito por generationConfig.responseSchema da API do
// Gemini (subconjunto do OpenAPI 3.0 Schema Object). Como em
// lib/casoGeradoJsonSchema.ts: garante a forma da resposta mecanicamente,
// mas não expressa restrições entre campos (proximoNoId apontar pra um
// nó que existe, alcançabilidade, desfecho ser terminal) — isso é
// responsabilidade de lib/simuladorGeradoSchema.ts (zod), a validação
// real, nunca dispensada por causa deste schema.

interface GeminiSchema {
  type: "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY" | "OBJECT";
  description?: string;
  properties?: Record<string, GeminiSchema>;
  required?: string[];
  items?: GeminiSchema;
  enum?: string[];
}

const opcaoSimuladorJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    texto: {
      type: "STRING",
      description: "O que o jogador escolhe fazer/dizer nesta opção.",
    },
    consequencia: {
      type: "STRING",
      description:
        "O que acontece na história imediatamente como resultado direto desta escolha — mostrado ao jogador assim que ele escolhe.",
    },
    medicamentoId: {
      type: "STRING",
      description:
        "Preencher apenas se esta opção envolve prescrever um medicamento específico da lista de ids válidos fornecida no prompt. Omitir se não aplicável.",
    },
    proximoNoId: {
      type: "STRING",
      description: "Deve ser o id de um nó que realmente existe na árvore gerada.",
    },
    qualidadeDecisao: {
      type: "STRING",
      enum: ["ideal", "aceitavel", "problematica"],
      description:
        "Avaliação clínica honesta desta escolha, usada só no resumo final — nunca visível durante o jogo.",
    },
  },
  required: ["texto", "consequencia", "proximoNoId", "qualidadeDecisao"],
};

const noSimuladorJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    id: { type: "STRING", description: 'kebab-case, curto, ex.: "entrevista-1", "desfecho-bom".' },
    turno: {
      type: "STRING",
      enum: ["entrevista", "exames", "conduta", "evolucao", "desfecho"],
    },
    narrativa: {
      type: "STRING",
      description:
        "A cena. Tom anedótico/leve na ambientação, mas fatos clínicos citados (critérios, farmacologia, fisiologia) precisam ser exatos.",
    },
    opcoes: {
      type: "ARRAY",
      description:
        "4-5 opções em nós de decisão (entrevista/exames/conduta/evolução). Array VAZIO em nós turno 'desfecho', que são terminais.",
      items: opcaoSimuladorJsonSchema,
    },
  },
  required: ["id", "turno", "narrativa", "opcoes"],
};

export const casoSimuladorGeradoJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    id: { type: "STRING", description: "kebab-case, curto, descritivo do caso inteiro." },
    tituloAnedotico: {
      type: "STRING",
      description:
        "Título curto e evocativo, no tom leve/anedótico do caso — não o nome do diagnóstico.",
    },
    diagnosticoRealId: {
      type: "STRING",
      description: "Deve ser exatamente o id do diagnóstico-alvo fornecido no prompt.",
    },
    nos: {
      type: "ARRAY",
      description:
        "A árvore inteira de decisão: profundidade de 3-4 turnos (entrevista → exames → conduta → evolução), convergindo em 2-3 nós turno 'desfecho' dependendo da qualidade das decisões tomadas pelo caminho.",
      items: noSimuladorJsonSchema,
    },
    noInicialId: {
      type: "STRING",
      description: "Deve ser o id do primeiro nó (tipicamente turno 'entrevista').",
    },
  },
  required: ["id", "tituloAnedotico", "diagnosticoRealId", "nos", "noInicialId"],
};
