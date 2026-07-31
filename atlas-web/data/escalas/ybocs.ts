import { Escala, EscalaOpcao } from "./types";

function opcoesTempo(): EscalaOpcao[] {
  return [
    { label: "Nenhum tempo ocupado", valor: 0 },
    { label: "Leve (menos de 1 hora/dia, ou intrusões infrequentes)", valor: 1 },
    { label: "Moderado (1 a 3 horas/dia, ou intrusões frequentes)", valor: 2 },
    { label: "Grave (mais de 3 a 8 horas/dia, ou intrusões muito frequentes)", valor: 3 },
    { label: "Extremo (mais de 8 horas/dia, ou intrusões quase constantes)", valor: 4 },
  ];
}

function opcoesInterferencia(): EscalaOpcao[] {
  return [
    { label: "Nenhuma interferência", valor: 0 },
    { label: "Leve, pouca interferência nas atividades sociais ou ocupacionais", valor: 1 },
    { label: "Moderada, interferência definida mas ainda manejável", valor: 2 },
    { label: "Grave, causa prejuízo substancial no funcionamento", valor: 3 },
    { label: "Extrema, incapacitante", valor: 4 },
  ];
}

function opcoesSofrimento(): EscalaOpcao[] {
  return [
    { label: "Nenhum sofrimento", valor: 0 },
    { label: "Leve, infrequente e não muito perturbador", valor: 1 },
    { label: "Moderado, frequente e perturbador, mas ainda manejável", valor: 2 },
    { label: "Grave, muito frequente e bastante perturbador", valor: 3 },
    { label: "Extremo, quase constante e incapacitante", valor: 4 },
  ];
}

function opcoesResistencia(): EscalaOpcao[] {
  return [
    { label: "Tenta sempre resistir, ou os sintomas já são mínimos", valor: 0 },
    { label: "Tenta resistir na maior parte do tempo", valor: 1 },
    { label: "Faz algum esforço para resistir", valor: 2 },
    { label: "Cede a quase todos os sintomas, com alguma relutância", valor: 3 },
    { label: "Cede completa e voluntariamente aos sintomas", valor: 4 },
  ];
}

function opcoesControle(): EscalaOpcao[] {
  return [
    { label: "Controle completo", valor: 0 },
    { label: "Controle considerável, geralmente capaz de interromper ou desviar", valor: 1 },
    { label: "Controle moderado, às vezes capaz de interromper ou desviar", valor: 2 },
    { label: "Pouco controle, raramente consegue interromper, apenas desviar a atenção com esforço", valor: 3 },
    { label: "Nenhum controle, experiência vivida como totalmente involuntária", valor: 4 },
  ];
}

export const ybocs: Escala = {
  id: "ybocs",

  nome: "Yale-Brown Obsessive Compulsive Scale",

  sigla: "Y-BOCS",

  categoria: "TOC",

  descricao:
    "Escala heteroaplicada (aplicada pelo entrevistador) considerada padrão-ouro para quantificar a gravidade dos sintomas do Transtorno Obsessivo-Compulsivo, independentemente do conteúdo específico das obsessões e compulsões. Avalia separadamente cinco dimensões (tempo ocupado, interferência, sofrimento, resistência e controle) tanto para obsessões quanto para compulsões.",

  instrucoes:
    "Avalie cada item com base na última semana, considerando entrevista clínica estruturada. Os primeiros 5 itens referem-se a obsessões e os 5 itens seguintes a compulsões. Caso o paciente apresente apenas obsessões ou apenas compulsões, os itens do domínio ausente devem ser pontuados com base no fenômeno mais próximo (ex: evitação) conforme orientação do manual original; nesta versão simplificada, considere o quadro clínico predominante.",

  itens: [
    {
      id: "ybocs-1",
      texto: "Obsessões — tempo ocupado por pensamentos obsessivos",
      opcoes: opcoesTempo(),
    },
    {
      id: "ybocs-2",
      texto:
        "Obsessões — interferência causada pelos pensamentos obsessivos no funcionamento social ou ocupacional",
      opcoes: opcoesInterferencia(),
    },
    {
      id: "ybocs-3",
      texto: "Obsessões — sofrimento (angústia) associado aos pensamentos obsessivos",
      opcoes: opcoesSofrimento(),
    },
    {
      id: "ybocs-4",
      texto: "Obsessões — resistência ativa exercida contra os pensamentos obsessivos",
      opcoes: opcoesResistencia(),
    },
    {
      id: "ybocs-5",
      texto: "Obsessões — grau de controle percebido sobre os pensamentos obsessivos",
      opcoes: opcoesControle(),
    },
    {
      id: "ybocs-6",
      texto: "Compulsões — tempo gasto realizando comportamentos compulsivos",
      opcoes: opcoesTempo(),
    },
    {
      id: "ybocs-7",
      texto:
        "Compulsões — interferência causada pelos comportamentos compulsivos no funcionamento social ou ocupacional",
      opcoes: opcoesInterferencia(),
    },
    {
      id: "ybocs-8",
      texto:
        "Compulsões — sofrimento (ansiedade) associado a impedir a realização dos comportamentos compulsivos",
      opcoes: opcoesSofrimento(),
    },
    {
      id: "ybocs-9",
      texto: "Compulsões — resistência ativa exercida contra os comportamentos compulsivos",
      opcoes: opcoesResistencia(),
    },
    {
      id: "ybocs-10",
      texto: "Compulsões — grau de controle percebido sobre os comportamentos compulsivos",
      opcoes: opcoesControle(),
    },
  ],

  faixas: [
    {
      min: 0,
      max: 7,
      label: "Subclínico",
      cor: "green",
      descricao: "Sintomas mínimos, abaixo do limiar clínico habitual.",
    },
    {
      min: 8,
      max: 15,
      label: "TOC leve",
      cor: "blue",
      descricao: "Sintomas obsessivo-compulsivos de intensidade leve.",
    },
    {
      min: 16,
      max: 23,
      label: "TOC moderado",
      cor: "yellow",
      descricao: "Sintomas obsessivo-compulsivos de intensidade moderada; tratamento indicado.",
    },
    {
      min: 24,
      max: 31,
      label: "TOC grave",
      cor: "red",
      descricao: "Sintomas obsessivo-compulsivos de intensidade grave, com prejuízo funcional relevante.",
    },
    {
      min: 32,
      max: 40,
      label: "TOC extremo",
      cor: "red",
      descricao:
        "Sintomas obsessivo-compulsivos extremos, com incapacitação acentuada; considerar tratamento intensivo.",
    },
  ],

  notaInterpretacao:
    "A pontuação total é a soma dos 10 itens (0-40); as subpontuações de obsessões (itens 1-5) e compulsões (itens 6-10) também podem ser analisadas separadamente (0-20 cada) para acompanhar a evolução de cada domínio. Este instrumento é uma ferramenta de apoio à avaliação de gravidade e ao monitoramento de resposta ao tratamento, não substituindo o julgamento clínico nem os critérios diagnósticos formais para Transtorno Obsessivo-Compulsivo.",

  referencias: [
    "Goodman WK, Price LH, Rasmussen SA, et al. The Yale-Brown Obsessive Compulsive Scale: I. Development, use, and reliability. Arch Gen Psychiatry. 1989.",
  ],
};
