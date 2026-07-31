import { Escala, EscalaOpcao } from "./types";

// Cada opção já carrega o valor 1 apenas a partir do ponto de corte oficial
// ("caixa sombreada") daquele item específico — por isso a pontuação final,
// somada normalmente (modoDePontuacao "soma"), corresponde exatamente à
// contagem oficial de itens sombreados/positivos da ASRS-v1.1.
function opcoesLimiar(indiceLimiar: 2 | 3 | 4): EscalaOpcao[] {
  const rotulos = [
    "Nunca",
    "Raramente",
    "Às vezes",
    "Frequentemente",
    "Muito frequentemente",
  ];

  return rotulos.map((label, indice) => ({
    label,
    valor: indice >= indiceLimiar ? 1 : 0,
  }));
}

export const asrs18: Escala = {
  id: "asrs18",

  nome: "Adult ADHD Self-Report Scale (Completa — Partes A e B)",

  sigla: "ASRS-v1.1",

  categoria: "TDAH",

  descricao:
    "Versão completa de 18 itens da ASRS-v1.1 desenvolvida pela OMS: os 6 itens da Parte A (rastreio validado) mais os 12 itens adicionais da Parte B, que detalham o perfil sintomático de desatenção, hiperatividade e impulsividade. Complementa a versão resumida ASRS-6 já disponível neste módulo.",

  instrucoes:
    "Considerando como o paciente se sentiu e se comportou nos últimos 6 meses, indique a frequência de cada um dos comportamentos abaixo.",

  modoDePontuacao: "soma",

  itens: [
    {
      id: "asrs18-1",
      texto:
        "Com que frequência tem dificuldade em finalizar os últimos detalhes de um projeto, uma vez que as partes mais desafiadoras já foram feitas?",
      opcoes: opcoesLimiar(2),
    },
    {
      id: "asrs18-2",
      texto:
        "Com que frequência tem dificuldade em colocar as coisas em ordem quando precisa realizar uma tarefa que exige organização?",
      opcoes: opcoesLimiar(2),
    },
    {
      id: "asrs18-3",
      texto:
        "Com que frequência tem problemas para se lembrar de compromissos ou obrigações?",
      opcoes: opcoesLimiar(2),
    },
    {
      id: "asrs18-4",
      texto:
        "Quando tem uma tarefa que exige muita reflexão, com que frequência evita ou adia começá-la?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-5",
      texto:
        "Com que frequência se mexe ou se contorce com as mãos ou os pés quando precisa ficar sentado(a) por muito tempo?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-6",
      texto:
        "Com que frequência se sente excessivamente ativo(a) e compelido(a) a fazer coisas, como se estivesse \"elétrico(a)\" ou movido(a) a motor?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-7",
      texto:
        "Com que frequência comete erros por descuido quando precisa trabalhar em um projeto chato ou difícil?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-8",
      texto:
        "Com que frequência tem dificuldade em manter a atenção quando está fazendo um trabalho chato ou repetitivo?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-9",
      texto:
        "Com que frequência tem dificuldade em se concentrar no que as pessoas dizem, mesmo quando estão falando diretamente com o paciente?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-10",
      texto:
        "Com que frequência perde ou tem dificuldade em encontrar coisas em casa ou no trabalho?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-11",
      texto: "Com que frequência se distrai com atividade ou barulho ao redor?",
      opcoes: opcoesLimiar(4),
    },
    {
      id: "asrs18-12",
      texto:
        "Com que frequência se levanta do lugar em reuniões ou outras situações em que se espera que permaneça sentado(a)?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-13",
      texto: "Com que frequência se sente inquieto(a) ou agitado(a)?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-14",
      texto:
        "Com que frequência tem dificuldade em relaxar quando tem tempo livre para si mesmo(a)?",
      opcoes: opcoesLimiar(4),
    },
    {
      id: "asrs18-15",
      texto:
        "Com que frequência se percebe falando demais em situações sociais?",
      opcoes: opcoesLimiar(4),
    },
    {
      id: "asrs18-16",
      texto:
        "Em uma conversa, com que frequência termina as frases das pessoas com quem está falando antes que elas mesmas consigam terminar?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-17",
      texto:
        "Com que frequência tem dificuldade em esperar a sua vez em situações que exigem isso?",
      opcoes: opcoesLimiar(3),
    },
    {
      id: "asrs18-18",
      texto: "Com que frequência interrompe os outros quando estão ocupados?",
      opcoes: opcoesLimiar(3),
    },
  ],

  faixas: [
    {
      min: 0,
      max: 3,
      label: "Baixa probabilidade",
      cor: "green",
      descricao: "Poucos itens em zona sombreada no conjunto completo.",
    },
    {
      min: 4,
      max: 8,
      label: "Perfil sugestivo — atenção",
      cor: "yellow",
      descricao:
        "Número relevante de itens em zona sombreada; correlacionar com a Parte A isoladamente e com o histórico desenvolvimental.",
    },
    {
      min: 9,
      max: 18,
      label: "Perfil fortemente sugestivo",
      cor: "red",
      descricao:
        "Padrão extenso de sintomas em zona sombreada nos domínios de desatenção, hiperatividade e impulsividade.",
    },
  ],

  notaInterpretacao:
    "O CRITÉRIO DE RASTREIO OFICIAL da ASRS-v1.1 baseia-se apenas na Parte A (os 6 primeiros itens, idênticos à escala ASRS-6 já disponível neste módulo): rastreio positivo se 4 ou mais desses 6 itens caírem na 'caixa sombreada' (aqui, valor 1). Os 12 itens adicionais da Parte B não têm ponto de corte formalmente validado isoladamente — servem para enriquecer o perfil clínico (quais domínios de desatenção, hiperatividade e impulsividade predominam) e apoiar a entrevista clínica, não para redefinir o critério de positividade do rastreio. As faixas acima somam os 18 itens apenas como guia aproximado de intensidade global. Este é um instrumento de rastreio, não diagnóstico: o diagnóstico de TDAH em adultos exige confirmação de início dos sintomas antes dos 12 anos e prejuízo funcional em múltiplos contextos, idealmente com relato de terceiros e revisão de histórico escolar/desenvolvimental.",

  referencias: [
    "Kessler RC, et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med. 2005.",
    "Kessler RC, et al. Validity of the World Health Organization Adult ADHD Self-Report Scale (ASRS) Screener in a representative sample of health plan members. Int J Methods Psychiatr Res. 2007.",
    "APA. Diagnostic and Statistical Manual of Mental Disorders, 5th ed., Text Revision (DSM-5-TR).",
  ],
};
