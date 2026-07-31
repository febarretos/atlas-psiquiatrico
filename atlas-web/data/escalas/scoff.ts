import { Escala, EscalaOpcao } from "./types";

const opcoesSimNao: EscalaOpcao[] = [
  { label: "Sim", valor: 1 },
  { label: "Não", valor: 0 },
];

export const scoff: Escala = {
  id: "scoff",

  nome: "Questionário SCOFF",

  sigla: "SCOFF",

  categoria: "Transtornos Alimentares",

  descricao:
    "Instrumento breve de autorrelato (ou aplicado pelo entrevistador) com 5 perguntas de sim/não para rastreio de transtornos alimentares (anorexia nervosa e bulimia nervosa) em contextos de atenção primária e ambulatorial.",

  instrucoes:
    "Faça as perguntas abaixo ao paciente. Cada resposta \"Sim\" vale 1 ponto.",

  itens: [
    {
      id: "scoff-1",
      texto:
        "Você já provocou vômito porque se sentiu incomodamente cheio(a)? (Sick)",
      opcoes: opcoesSimNao,
    },
    {
      id: "scoff-2",
      texto:
        "Você se preocupa por sentir que perdeu o controle sobre quanto come? (Control)",
      opcoes: opcoesSimNao,
    },
    {
      id: "scoff-3",
      texto:
        "Você já perdeu mais de aproximadamente 6 kg (uma \"stone\") em um período de 3 meses? (One stone)",
      opcoes: opcoesSimNao,
    },
    {
      id: "scoff-4",
      texto:
        "Você acredita que está gordo(a), mesmo quando outras pessoas dizem que você está magro(a)? (Fat)",
      opcoes: opcoesSimNao,
    },
    {
      id: "scoff-5",
      texto: "Você diria que a comida domina sua vida? (Food)",
      opcoes: opcoesSimNao,
    },
  ],

  faixas: [
    {
      min: 0,
      max: 1,
      label: "Rastreio negativo",
      cor: "green",
      descricao: "Baixa probabilidade de transtorno alimentar com base no rastreio.",
    },
    {
      min: 2,
      max: 5,
      label: "Rastreio positivo",
      cor: "red",
      descricao:
        "Sugestivo de transtorno alimentar; avaliação clínica especializada indicada.",
    },
  ],

  notaInterpretacao:
    "Pontuação ≥2 apresenta sensibilidade de aproximadamente 85% para identificar casos de anorexia nervosa ou bulimia nervosa em populações de rastreio. É um instrumento breve de triagem, não diagnóstico: um resultado positivo deve ser seguido por avaliação clínica detalhada, incluindo história alimentar, peso, índice de massa corporal e comorbidades, para confirmação diagnóstica segundo os critérios do DSM-5.",

  referencias: [
    "Morgan JF, Reid F, Lacey JH. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ. 1999.",
  ],
};
