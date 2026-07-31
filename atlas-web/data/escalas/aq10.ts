import { Escala } from "./types";

// Nas escalas AQ, o sentido "associado ao espectro autista" (valor = 1) varia por item —
// por isso cada item define suas próprias opções em vez de reutilizar um array comum.
function opcoesAgreeMarca1() {
  return [
    { label: "Concordo totalmente", valor: 1 },
    { label: "Concordo em parte", valor: 1 },
    { label: "Discordo em parte", valor: 0 },
    { label: "Discordo totalmente", valor: 0 },
  ];
}

function opcoesDisagreeMarca1() {
  return [
    { label: "Concordo totalmente", valor: 0 },
    { label: "Concordo em parte", valor: 0 },
    { label: "Discordo em parte", valor: 1 },
    { label: "Discordo totalmente", valor: 1 },
  ];
}

export const aq10: Escala = {
  id: "aq10",

  nome: "Autism Spectrum Quotient (versão curta)",

  sigla: "AQ-10",

  categoria: "Transtorno do Espectro Autista",

  descricao:
    "Instrumento de autorrelato para rastreio de traços do espectro autista em adultos com inteligência preservada, versão curta de 10 itens derivada do AQ original de 50 itens.",

  instrucoes:
    "Para cada afirmação, indique o quanto ela descreve o paciente atualmente.",

  itens: [
    {
      id: "aq10-1",
      texto: "Costuma perceber sons pequenos quando outras pessoas não percebem.",
      opcoes: opcoesAgreeMarca1(),
    },
    {
      id: "aq10-2",
      texto:
        "Geralmente se concentra mais no quadro geral do que em pequenos detalhes.",
      opcoes: opcoesDisagreeMarca1(),
    },
    {
      id: "aq10-3",
      texto: "Acha fácil fazer mais de uma coisa ao mesmo tempo.",
      opcoes: opcoesDisagreeMarca1(),
    },
    {
      id: "aq10-4",
      texto:
        "Se houver uma interrupção, consegue voltar rapidamente ao que estava fazendo.",
      opcoes: opcoesDisagreeMarca1(),
    },
    {
      id: "aq10-5",
      texto:
        "Acha fácil 'ler nas entrelinhas' quando alguém está conversando com ele(a).",
      opcoes: opcoesDisagreeMarca1(),
    },
    {
      id: "aq10-6",
      texto: "Sabe perceber quando quem o(a) escuta está ficando entediado(a).",
      opcoes: opcoesDisagreeMarca1(),
    },
    {
      id: "aq10-7",
      texto:
        "Quando está lendo uma história, tem dificuldade em identificar as intenções dos personagens.",
      opcoes: opcoesAgreeMarca1(),
    },
    {
      id: "aq10-8",
      texto: "Gosta de colecionar informações sobre categorias de coisas (ex: tipos de carro, pássaros, trens, plantas).",
      opcoes: opcoesAgreeMarca1(),
    },
    {
      id: "aq10-9",
      texto:
        "Acha fácil perceber o que alguém está pensando ou sentindo apenas olhando para o rosto da pessoa.",
      opcoes: opcoesDisagreeMarca1(),
    },
    {
      id: "aq10-10",
      texto: "Tem dificuldade em identificar as intenções das outras pessoas.",
      opcoes: opcoesAgreeMarca1(),
    },
  ],

  faixas: [
    {
      min: 0,
      max: 3,
      label: "Baixa probabilidade",
      cor: "green",
      descricao: "Poucos traços associados ao espectro autista endossados.",
    },
    {
      min: 4,
      max: 5,
      label: "Zona limítrofe",
      cor: "yellow",
      descricao:
        "Número intermediário de traços; considerar contexto clínico e história desenvolvimental.",
    },
    {
      min: 6,
      max: 10,
      label: "Rastreio positivo",
      cor: "red",
      descricao:
        "Sugere encaminhamento para avaliação diagnóstica completa do espectro autista.",
    },
  ],

  notaInterpretacao:
    "Ponto de corte validado ≥6 (sensibilidade ~0,88; especificidade ~0,91) para indicar avaliação diagnóstica especializada em adultos com inteligência preservada. É um instrumento de rastreio, não diagnóstico: a confirmação do diagnóstico de Transtorno do Espectro Autista exige avaliação multiprofissional especializada, com história desenvolvimental detalhada e, idealmente, instrumentos padronizados como ADOS-2 e ADI-R.",

  referencias: [
    "Allison C, Auyeung B, Baron-Cohen S. Toward brief 'red flags' for autism screening: the short Autism Spectrum Quotient and the short Quantitative Checklist in 1,000 cases and 3,000 controls. J Am Acad Child Adolesc Psychiatry. 2012.",
    "Baron-Cohen S, et al. The Autism-Spectrum Quotient (AQ): evidence from Asperger syndrome/high-functioning autism, males and females, scientists and mathematicians. J Autism Dev Disord. 2001.",
  ],
};
