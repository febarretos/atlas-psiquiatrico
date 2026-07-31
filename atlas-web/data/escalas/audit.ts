import { Escala, EscalaOpcao } from "./types";

const opcoesFrequencia: EscalaOpcao[] = [
  { label: "Nunca", valor: 0 },
  { label: "Mensalmente ou menos", valor: 1 },
  { label: "2 a 4 vezes por mês", valor: 2 },
  { label: "2 a 3 vezes por semana", valor: 3 },
  { label: "4 ou mais vezes por semana", valor: 4 },
];

const opcoesFrequenciaSintoma: EscalaOpcao[] = [
  { label: "Nunca", valor: 0 },
  { label: "Menos que mensalmente", valor: 1 },
  { label: "Mensalmente", valor: 2 },
  { label: "Semanalmente", valor: 3 },
  { label: "Diariamente ou quase todos os dias", valor: 4 },
];

const opcoesBinariaGravidade: EscalaOpcao[] = [
  { label: "Não", valor: 0 },
  { label: "Sim, mas não no último ano", valor: 2 },
  { label: "Sim, no último ano", valor: 4 },
];

export const audit: Escala = {
  id: "audit",

  nome: "Alcohol Use Disorders Identification Test",

  sigla: "AUDIT",

  categoria: "Uso de Substâncias",

  descricao:
    "Instrumento de rastreio desenvolvido pela OMS para identificar padrões de consumo de álcool de risco, uso nocivo e possível dependência.",

  instrucoes:
    "Considere os hábitos de consumo de álcool do paciente ao longo do último ano ao selecionar as respostas abaixo.",

  itens: [
    {
      id: "audit-1",
      texto: "Com que frequência o paciente consome bebidas alcoólicas?",
      opcoes: opcoesFrequencia,
    },
    {
      id: "audit-2",
      texto:
        "Quantas doses de bebida alcoólica o paciente consome tipicamente num dia em que bebe (1 dose ≈ 1 lata de cerveja, 1 taça de vinho ou 1 dose de destilado)?",
      opcoes: [
        { label: "1 ou 2 doses", valor: 0 },
        { label: "3 ou 4 doses", valor: 1 },
        { label: "5 ou 6 doses", valor: 2 },
        { label: "7 a 9 doses", valor: 3 },
        { label: "10 ou mais doses", valor: 4 },
      ],
    },
    {
      id: "audit-3",
      texto:
        "Com que frequência o paciente consome 6 ou mais doses em uma única ocasião?",
      opcoes: opcoesFrequenciaSintoma,
    },
    {
      id: "audit-4",
      texto:
        "Com que frequência, no último ano, o paciente não conseguiu parar de beber depois de começar?",
      opcoes: opcoesFrequenciaSintoma,
    },
    {
      id: "audit-5",
      texto:
        "Com que frequência, no último ano, o paciente deixou de fazer algo que era esperado dele por causa da bebida?",
      opcoes: opcoesFrequenciaSintoma,
    },
    {
      id: "audit-6",
      texto:
        "Com que frequência, no último ano, o paciente precisou beber pela manhã para se sentir melhor após um episódio de consumo excessivo?",
      opcoes: opcoesFrequenciaSintoma,
    },
    {
      id: "audit-7",
      texto:
        "Com que frequência, no último ano, o paciente sentiu culpa ou remorso após beber?",
      opcoes: opcoesFrequenciaSintoma,
    },
    {
      id: "audit-8",
      texto:
        "Com que frequência, no último ano, o paciente foi incapaz de se lembrar do que aconteceu na noite anterior por causa da bebida?",
      opcoes: opcoesFrequenciaSintoma,
    },
    {
      id: "audit-9",
      texto:
        "O paciente já se machucou ou machucou alguém como consequência da bebida?",
      opcoes: opcoesBinariaGravidade,
    },
    {
      id: "audit-10",
      texto:
        "Algum familiar, amigo, médico ou outro profissional de saúde já demonstrou preocupação com o consumo de álcool do paciente ou sugeriu que ele diminuísse?",
      opcoes: opcoesBinariaGravidade,
    },
  ],

  faixas: [
    {
      min: 0,
      max: 7,
      label: "Baixo risco",
      cor: "green",
      descricao: "Consumo de baixo risco; orientação educativa geral.",
    },
    {
      min: 8,
      max: 15,
      label: "Uso de risco",
      cor: "blue",
      descricao:
        "Padrão de consumo de risco; indicado aconselhamento breve e monitoramento.",
    },
    {
      min: 16,
      max: 19,
      label: "Uso nocivo",
      cor: "yellow",
      descricao:
        "Uso nocivo; indicado aconselhamento breve, monitoramento contínuo e avaliação diagnóstica adicional.",
    },
    {
      min: 20,
      max: 40,
      label: "Possível dependência",
      cor: "red",
      descricao:
        "Sugestivo de dependência de álcool; indicada avaliação diagnóstica completa e encaminhamento para tratamento especializado.",
    },
  ],

  notaInterpretacao:
    "Pontuação máxima possível: 40. Pontos de corte podem variar conforme sexo, idade e contexto cultural; usar como ferramenta de rastreio, não diagnóstica.",

  referencias: [
    "Babor TF, Higgins-Biddle JC, Saunders JB, Monteiro MG. AUDIT: The Alcohol Use Disorders Identification Test. World Health Organization, 2001.",
  ],
};
