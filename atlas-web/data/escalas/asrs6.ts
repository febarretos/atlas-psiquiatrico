import { Escala, EscalaOpcao } from "./types";

const opcoesFrequencia: EscalaOpcao[] = [
  { label: "Nunca", valor: 0 },
  { label: "Raramente", valor: 1 },
  { label: "Às vezes", valor: 2 },
  { label: "Frequentemente", valor: 3 },
  { label: "Muito frequentemente", valor: 4 },
];

export const asrs6: Escala = {
  id: "asrs6",

  nome: "Adult ADHD Self-Report Scale (Parte A)",

  sigla: "ASRS-6",

  categoria: "TDAH",

  descricao:
    "Instrumento de autorrelato para rastreio de Transtorno de Déficit de Atenção/Hiperatividade (TDAH) em adultos, correspondente aos 6 itens da Parte A (mais discriminativos) da ASRS-v1.1 desenvolvida pela OMS.",

  instrucoes:
    "Considerando como o paciente se sentiu e se comportou nos últimos 6 meses, indique a frequência de cada um dos comportamentos abaixo.",

  itens: [
    {
      id: "asrs6-1",
      texto:
        "Com que frequência tem dificuldade em finalizar os últimos detalhes de um projeto, uma vez que as partes mais desafiadoras já foram feitas?",
      opcoes: opcoesFrequencia,
    },
    {
      id: "asrs6-2",
      texto:
        "Com que frequência tem dificuldade em colocar as coisas em ordem quando precisa realizar uma tarefa que exige organização?",
      opcoes: opcoesFrequencia,
    },
    {
      id: "asrs6-3",
      texto:
        "Com que frequência tem problemas para se lembrar de compromissos ou obrigações?",
      opcoes: opcoesFrequencia,
    },
    {
      id: "asrs6-4",
      texto:
        "Quando tem uma tarefa que exige muita reflexão, com que frequência evita ou adia começá-la?",
      opcoes: opcoesFrequencia,
    },
    {
      id: "asrs6-5",
      texto:
        "Com que frequência se mexe ou se contorce com as mãos ou os pés quando precisa ficar sentado(a) por muito tempo?",
      opcoes: opcoesFrequencia,
    },
    {
      id: "asrs6-6",
      texto:
        "Com que frequência se sente excessivamente ativo(a) e compelido(a) a fazer coisas, como se estivesse \"elétrico(a)\" ou movido(a) a motor?",
      opcoes: opcoesFrequencia,
    },
  ],

  faixas: [
    {
      min: 0,
      max: 9,
      label: "Baixa probabilidade",
      cor: "green",
      descricao: "Padrão de sintomas pouco sugestivo de TDAH em adultos.",
    },
    {
      min: 10,
      max: 13,
      label: "Probabilidade intermediária",
      cor: "yellow",
      descricao:
        "Sintomas presentes em grau que merece atenção; considerar investigação adicional.",
    },
    {
      min: 14,
      max: 24,
      label: "Rastreio positivo",
      cor: "red",
      descricao:
        "Padrão de sintomas altamente sugestivo de TDAH em adultos; avaliação diagnóstica completa indicada.",
    },
  ],

  notaInterpretacao:
    "O método oficial de pontuação da ASRS-6 usa uma tabela de 'caixas sombreadas' específica por item (para os itens 1-3, considera-se positivo a partir da resposta 'Às vezes'; para os itens 4-6, a partir de 'Frequentemente'), sendo o rastreio positivo definido por 4 ou mais respostas na caixa sombreada — a soma simples usada aqui (ponto de corte aproximado ≥14) é uma alternativa amplamente utilizada na prática clínica, mas menos precisa que o método oficial. Este é um instrumento de rastreio, não diagnóstico: o diagnóstico de TDAH em adultos exige confirmação de início dos sintomas antes dos 12 anos e prejuízo funcional em múltiplos contextos, idealmente com relato de terceiros e revisão de histórico escolar/desenvolvimental.",

  referencias: [
    "Kessler RC, et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med. 2005.",
    "APA. Diagnostic and Statistical Manual of Mental Disorders, 5th ed., Text Revision (DSM-5-TR).",
  ],
};
