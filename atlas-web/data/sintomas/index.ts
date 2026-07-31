export interface Sintoma {
  id: string;
  rotulo: string;
  categoria: string;
}

// Taxonomia curada de sintomas/sinais usados como base para o Assistente de
// Avaliação (sintomas -> diagnósticos prováveis -> perfil de medicamento).
// Cada diagnóstico referencia um subconjunto destes ids em `sintomasChave`
// (ver data/diagnosticos/types.ts) — a lista é intencionalmente enxuta e
// categorizada para caber em um formulário de checkboxes navegável, não uma
// enumeração exaustiva de cada critério do DSM-5-TR.
export const sintomas: Sintoma[] = [
  // Humor
  { id: "humor-deprimido", rotulo: "Humor deprimido / tristeza persistente", categoria: "Humor" },
  { id: "anedonia", rotulo: "Perda de interesse ou prazer (anedonia)", categoria: "Humor" },
  { id: "humor-elevado", rotulo: "Humor elevado, expansivo ou eufórico", categoria: "Humor" },
  { id: "irritabilidade", rotulo: "Irritabilidade persistente", categoria: "Humor" },
  { id: "labilidade-afetiva", rotulo: "Labilidade afetiva / oscilações rápidas de humor", categoria: "Humor" },
  { id: "desesperanca", rotulo: "Desesperança", categoria: "Humor" },
  { id: "culpa-inutilidade", rotulo: "Culpa ou sentimento de inutilidade excessivos", categoria: "Humor" },
  { id: "vazio-cronico", rotulo: "Sensação crônica de vazio", categoria: "Humor" },

  // Ansiedade e medo
  { id: "ansiedade-excessiva", rotulo: "Ansiedade/preocupação excessiva e difícil de controlar", categoria: "Ansiedade e Medo" },
  { id: "ataques-panico", rotulo: "Ataques de pânico recorrentes e inesperados", categoria: "Ansiedade e Medo" },
  { id: "medo-social", rotulo: "Medo/ansiedade marcante em situações sociais", categoria: "Ansiedade e Medo" },
  { id: "evitacao-fobica", rotulo: "Comportamento de evitação fóbica", categoria: "Ansiedade e Medo" },
  { id: "tensao-muscular", rotulo: "Tensão muscular / inquietação física", categoria: "Ansiedade e Medo" },
  { id: "medo-abandono", rotulo: "Medo intenso de abandono, real ou imaginado", categoria: "Ansiedade e Medo" },

  // Sono
  { id: "insonia", rotulo: "Insônia (dificuldade em iniciar ou manter o sono)", categoria: "Sono" },
  { id: "hipersonia", rotulo: "Hipersonia / sono excessivo", categoria: "Sono" },
  { id: "reducao-necessidade-sono", rotulo: "Redução da necessidade de sono, sem fadiga", categoria: "Sono" },

  // Energia e psicomotricidade
  { id: "fadiga", rotulo: "Fadiga ou perda de energia", categoria: "Energia e Psicomotricidade" },
  { id: "agitacao-psicomotora", rotulo: "Agitação psicomotora", categoria: "Energia e Psicomotricidade" },
  { id: "retardo-psicomotor", rotulo: "Retardo psicomotor", categoria: "Energia e Psicomotricidade" },
  { id: "aumento-energia", rotulo: "Aumento de energia / atividade dirigida a objetivos", categoria: "Energia e Psicomotricidade" },
  { id: "fala-acelerada", rotulo: "Fala acelerada ou pressionada", categoria: "Energia e Psicomotricidade" },
  { id: "pensamento-acelerado", rotulo: "Pensamento acelerado / fuga de ideias", categoria: "Energia e Psicomotricidade" },

  // Cognição e atenção
  { id: "dificuldade-concentracao", rotulo: "Dificuldade de concentração", categoria: "Cognição e Atenção" },
  { id: "desatencao", rotulo: "Desatenção / dificuldade em manter o foco em tarefas", categoria: "Cognição e Atenção" },
  { id: "hiperatividade", rotulo: "Hiperatividade / inquietação motora persistente", categoria: "Cognição e Atenção" },
  { id: "impulsividade", rotulo: "Impulsividade", categoria: "Cognição e Atenção" },
  { id: "declinio-cognitivo", rotulo: "Declínio cognitivo em relação ao nível prévio (memória, linguagem, função executiva)", categoria: "Cognição e Atenção" },
  { id: "confusao-aguda-flutuante", rotulo: "Confusão mental aguda e flutuante", categoria: "Cognição e Atenção" },

  // Pensamento e percepção
  { id: "obsessoes", rotulo: "Pensamentos intrusivos e repetitivos (obsessões)", categoria: "Pensamento e Percepção" },
  { id: "compulsoes", rotulo: "Comportamentos ou rituais repetitivos (compulsões)", categoria: "Pensamento e Percepção" },
  { id: "delirios", rotulo: "Delírios (crenças fixas e falsas)", categoria: "Pensamento e Percepção" },
  { id: "alucinacoes", rotulo: "Alucinações", categoria: "Pensamento e Percepção" },
  { id: "discurso-desorganizado", rotulo: "Discurso ou pensamento desorganizado", categoria: "Pensamento e Percepção" },
  { id: "ideacao-paranoide", rotulo: "Ideação paranoide / desconfiança marcante", categoria: "Pensamento e Percepção" },

  // Trauma e estresse
  { id: "reexperienciacao", rotulo: "Revivência de evento traumático (flashbacks, pesadelos)", categoria: "Trauma e Estresse" },
  { id: "hipervigilancia", rotulo: "Hipervigilância", categoria: "Trauma e Estresse" },
  { id: "evitacao-lembretes-trauma", rotulo: "Evitação de lembranças do trauma", categoria: "Trauma e Estresse" },
  { id: "exposicao-estressor", rotulo: "Exposição recente a evento estressor identificável", categoria: "Trauma e Estresse" },

  // Comportamento e relacionamentos
  { id: "instabilidade-relacionamentos", rotulo: "Relacionamentos instáveis e intensos", categoria: "Comportamento e Relacionamentos" },
  { id: "autolesao", rotulo: "Autolesão ou comportamento suicida recorrente", categoria: "Comportamento e Relacionamentos" },
  { id: "raiva-intensa", rotulo: "Raiva intensa e desproporcional", categoria: "Comportamento e Relacionamentos" },
  { id: "impulsividade-autodestrutiva", rotulo: "Impulsividade em áreas potencialmente autodestrutivas (gastos, sexo, substâncias, direção)", categoria: "Comportamento e Relacionamentos" },

  // Alimentação e peso
  { id: "restricao-alimentar", rotulo: "Restrição alimentar significativa / medo de ganhar peso", categoria: "Alimentação e Peso" },
  { id: "compulsao-alimentar", rotulo: "Episódios de compulsão alimentar", categoria: "Alimentação e Peso" },
  { id: "comportamento-compensatorio", rotulo: "Comportamento compensatório (vômito, laxantes, exercício excessivo)", categoria: "Alimentação e Peso" },
  { id: "perda-peso-significativa", rotulo: "Perda de peso significativa e não intencional", categoria: "Alimentação e Peso" },

  // Uso de substâncias
  { id: "perda-controle-uso", rotulo: "Perda de controle sobre o uso de álcool/substância", categoria: "Uso de Substâncias" },
  { id: "tolerancia-abstinencia", rotulo: "Tolerância ou sintomas de abstinência", categoria: "Uso de Substâncias" },
  { id: "uso-apesar-problemas", rotulo: "Uso continuado apesar de problemas causados", categoria: "Uso de Substâncias" },
  { id: "relacao-temporal-substancia", rotulo: "Sintomas que surgiram durante ou logo após uso/abstinência de substância ou medicamento", categoria: "Uso de Substâncias" },

  // Desenvolvimento e funcionamento social
  { id: "dificuldade-comunicacao-social", rotulo: "Dificuldade persistente de comunicação/interação social", categoria: "Desenvolvimento e Funcionamento Social" },
  { id: "interesses-restritos", rotulo: "Interesses restritos ou comportamentos repetitivos", categoria: "Desenvolvimento e Funcionamento Social" },
  { id: "sintomas-desde-infancia", rotulo: "Sintomas presentes desde a infância/adolescência", categoria: "Desenvolvimento e Funcionamento Social" },

  // Risco
  { id: "ideacao-suicida", rotulo: "Ideação suicida ou de morte", categoria: "Risco" },

  // Curso temporal
  { id: "inicio-agudo-dias", rotulo: "Início agudo, em horas a dias", categoria: "Curso Temporal" },
  { id: "curso-cronico-meses", rotulo: "Curso persistente, presente há meses ou anos", categoria: "Curso Temporal" },
  { id: "flutuacao-ciclica", rotulo: "Sintomas em ciclos ou episódios distintos, com alternância de polaridade", categoria: "Curso Temporal" },
  { id: "sintomas-ciclo-menstrual", rotulo: "Sintomas que pioram na semana pré-menstrual e melhoram após o início da menstruação", categoria: "Curso Temporal" },
];

export const categoriasSintomas = Array.from(
  new Set(sintomas.map((s) => s.categoria))
);
