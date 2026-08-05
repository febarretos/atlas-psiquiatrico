// Schema no formato aceito por generationConfig.responseSchema da API do
// Gemini. Como nos outros *JsonSchema.ts deste projeto: garante a forma
// da resposta mecanicamente, mas não expressa invariantes do motor (ter
// pelo menos uma ação que reduza risco, riscoIminente inicial não estar
// nos extremos etc.) — isso é responsabilidade de
// lib/simuladorEmergenciaGeradoSchema.ts (zod), nunca dispensada.

interface GeminiSchema {
  type: "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY" | "OBJECT";
  description?: string;
  properties?: Record<string, GeminiSchema>;
  required?: string[];
  items?: GeminiSchema;
  enum?: string[];
}

const pressaoArterialJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    sistolica: { type: "NUMBER" },
    diastolica: { type: "NUMBER" },
  },
  required: ["sistolica", "diastolica"],
};

const efeitoPressaoArterialJsonSchema: GeminiSchema = {
  type: "OBJECT",
  description: "Delta a somar — omitir o subcampo que não muda.",
  properties: {
    sistolica: { type: "NUMBER" },
    diastolica: { type: "NUMBER" },
  },
};

const nivelConscienciaEnum = ["alerta", "sonolento", "confuso", "torporoso", "coma"];

const sinaisVitaisJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    frequenciaCardiaca: { type: "NUMBER", description: "bpm" },
    pressaoArterial: pressaoArterialJsonSchema,
    temperatura: { type: "NUMBER", description: "°C" },
    saturacaoO2: { type: "NUMBER", description: "%" },
    nivelConsciencia: { type: "STRING", enum: nivelConscienciaEnum },
    agitacaoPsicomotora: { type: "NUMBER", description: "0-10" },
    rigidezMuscular: { type: "NUMBER", description: "0-10, se relevante pro quadro" },
    riscoIminente: {
      type: "NUMBER",
      description: "0-10 — termômetro geral de gravidade. 0 = estabilizado, 10 = óbito.",
    },
  },
  required: [
    "frequenciaCardiaca",
    "pressaoArterial",
    "temperatura",
    "saturacaoO2",
    "nivelConsciencia",
    "agitacaoPsicomotora",
    "riscoIminente",
  ],
};

// Usado em efeitoPorTurno/efeitoImediato/riscoSeIncorreta — campos
// numéricos são DELTA aditivo. NÃO tem nivelConsciencia: esse campo é
// sempre calculado pelo motor a partir dos demais sinais vitais
// (riscoIminente, temperatura, saturacaoO2, rigidezMuscular), nunca
// definido diretamente por uma ação. Todo campo é opcional: omitir os
// que não são afetados.
const efeitoSinaisVitaisJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    frequenciaCardiaca: { type: "NUMBER" },
    pressaoArterial: efeitoPressaoArterialJsonSchema,
    temperatura: { type: "NUMBER" },
    saturacaoO2: { type: "NUMBER" },
    agitacaoPsicomotora: { type: "NUMBER" },
    rigidezMuscular: { type: "NUMBER" },
    riscoIminente: { type: "NUMBER" },
  },
};

// Mesma forma acima, MAS com nivelConsciencia — usado só em
// limiaresDesfecho, onde o campo é um valor-alvo comparado contra o
// nível já calculado pelo motor (não um efeito sendo aplicado).
const limiarSinaisVitaisJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    ...efeitoSinaisVitaisJsonSchema.properties,
    nivelConsciencia: {
      type: "STRING",
      enum: nivelConscienciaEnum,
      description: "Valor-alvo: o motor considera atingido quando o nível JÁ CALCULADO chega nessa gravidade ou pior.",
    },
  },
};

const regraEvolucaoJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    condicao: {
      type: "STRING",
      description: "Rótulo legível do processo fisiológico não tratado, ex.: 'Rigidez e hipertermia da NMS sem tratamento'.",
    },
    efeitoPorTurno: {
      ...efeitoSinaisVitaisJsonSchema,
      description:
        "Delta aplicado A CADA TURNO que se passa, incondicionalmente — representa a doença piorando sozinha. Seja fisiologicamente agressivo o suficiente pra criar pressão de tempo real.",
    },
  },
  required: ["condicao", "efeitoPorTurno"],
};

const acaoDisponivelJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    id: { type: "STRING", description: "kebab-case, curto." },
    label: { type: "STRING", description: "Texto do botão, ex.: 'Suspender o antipsicótico'." },
    categoria: {
      type: "STRING",
      enum: ["medicacao", "exame", "suporte", "contencao", "comunicacao"],
    },
    medicamentoId: {
      type: "STRING",
      description:
        "Preencher SOMENTE se o medicamento estiver na lista de ids válidos fornecida no prompt. Se o fármaco correto (ex.: dantroleno, bromocriptina) não estiver na lista, omitir este campo e deixar o nome só no label/descrição — nunca inventar um id.",
    },
    custoTempo: { type: "NUMBER", description: "Quantos turnos esta ação consome (pode ser 0 pra ações quase instantâneas)." },
    efeitoImediato: {
      ...efeitoSinaisVitaisJsonSchema,
      description: "Delta aplicado uma vez, ao executar a ação.",
    },
    condicaoDeUso: {
      type: "STRING",
      description: "Texto informativo mostrado ao jogador (ex.: 'indicado se temperatura > 39°C') — não é avaliado mecanicamente.",
    },
    riscoSeIncorreta: {
      ...efeitoSinaisVitaisJsonSchema,
      description:
        "Preencher APENAS em ações que são incorretas NESTE caso específico (ex.: manter/aumentar o antipsicótico numa NMS) — é aplicado sempre que o jogador escolhe essa ação, então o efeito precisa ser severo e realista, nunca decorativo. Omitir completamente em ações que são sempre razoáveis.",
    },
    resultadoTexto: {
      type: "STRING",
      description:
        "Resultado narrativo fixo mostrado ao jogador quando ele escolhe esta ação (ex.: 'CK sérica: 18.400 U/L — muito elevada. Função renal preservada.', 'A UTI confirma leito em 15 minutos.'). OBRIGATÓRIO sempre que efeitoImediato não mudar nenhum sinal vital (comum em ações de categoria exame/comunicacao) — sem isso a ação não dá NENHUM feedback ao jogador. Puramente narrativo, não é lido pelo motor do jogo.",
    },
    repetivel: {
      type: "BOOLEAN",
      description:
        "OBRIGATÓRIO em toda ação, sem exceção. true SOMENTE em ações de categoria medicacao que representem dose titulável (ex.: redose de um benzodiazepínico) E que tenham custoTempo maior que 0 — NUNCA combine repetivel:true com custoTempo:0 (isso já causou um bug real: uma ação grátis e repetível resolveu um caso sozinha só de ser clicada várias vezes). false em TODA ação de categoria suporte/comunicacao/contencao (são decisões de uma vez só: 'ambiente calmo', 'chamar a UTI', 'contenção mecânica') e na maioria das ações de exame — a interface desabilita o botão dessas depois do primeiro uso.",
    },
  },
  required: ["id", "label", "categoria", "custoTempo", "efeitoImediato", "repetivel"],
};

export const casoSimuladorEmergenciaGeradoJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    id: { type: "STRING", description: "kebab-case, curto, descritivo do caso inteiro." },
    emergenciaBaseId: { type: "STRING", description: "Deve ser exatamente o id da emergência-base fornecida no prompt." },
    nomeAnedotico: {
      type: "STRING",
      description: "Nome curto e evocativo do plantão/cenário, ex.: 'Plantão de sexta à noite'.",
    },
    historiaClinica: {
      type: "STRING",
      description:
        "Parágrafo narrativo apresentado ao jogador no início da partida: quem é o paciente (idade, contexto), o que levou a esse quadro, e por que a crise já está instalada quando o jogador assume o caso. É a única fonte de contexto clínico antes do monitor de sinais vitais — precisa ser concreta e específica, não genérica.",
    },
    sinaisVitaisIniciais: {
      ...sinaisVitaisJsonSchema,
      description:
        "O quadro JÁ INSTALADO, não o início dos sintomas — o jogador entra em cena com urgência real. Nem no extremo mínimo (0) nem no extremo máximo (10) de riscoIminente.",
    },
    regrasDeEvolucaoNatural: {
      type: "ARRAY",
      description: "Como o quadro evolui sem intervenção correta — pelo menos 1 regra.",
      items: regraEvolucaoJsonSchema,
    },
    acoesDisponiveis: {
      type: "ARRAY",
      description:
        "Pelo menos 6-8 ações, misturando categorias (medicacao, exame, suporte, contencao, comunicacao). Pelo menos uma precisa reduzir riscoIminente (senão o caso é impossível de vencer) e pelo menos uma precisa ser uma ação incorreta plausível com riscoSeIncorreta severo.",
      items: acaoDisponivelJsonSchema,
    },
    turnosMaximos: {
      type: "INTEGER",
      description: "Pressão de tempo — número de turnos disponíveis antes do desfecho ser considerado tardio demais.",
    },
    limiaresDesfecho: {
      type: "OBJECT",
      description:
        "Cada campo especificado aqui funciona como VALOR-ALVO (não delta). estabilizacao é só informativo (a vitória real é riscoIminente chegar a 0); obito e piora são condições adicionais de alerta/derrota além de riscoIminente chegar a 10.",
      properties: {
        estabilizacao: limiarSinaisVitaisJsonSchema,
        obito: limiarSinaisVitaisJsonSchema,
        piora: limiarSinaisVitaisJsonSchema,
      },
      required: ["estabilizacao", "obito", "piora"],
    },
  },
  required: [
    "id",
    "emergenciaBaseId",
    "nomeAnedotico",
    "historiaClinica",
    "sinaisVitaisIniciais",
    "regrasDeEvolucaoNatural",
    "acoesDisponiveis",
    "turnosMaximos",
    "limiaresDesfecho",
  ],
};
