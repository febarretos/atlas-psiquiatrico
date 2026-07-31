import { Escala, EscalaOpcao } from "./types";

const opcoesPadrao: EscalaOpcao[] = [
  { label: "Ausente", valor: 0 },
  { label: "Mínimo, pode ser extremo normal", valor: 1 },
  { label: "Leve", valor: 2 },
  { label: "Moderado", valor: 3 },
  { label: "Grave", valor: 4 },
];

export const aims: Escala = {
  id: "aims",

  nome: "Abnormal Involuntary Movement Scale",

  sigla: "AIMS",

  categoria: "Efeitos Adversos de Antipsicóticos",

  descricao:
    "Escala heteroaplicada (aplicada pelo entrevistador) para rastreio e monitoramento de discinesia tardia e outros movimentos involuntários anormais associados ao uso crônico de antipsicóticos, avaliando a gravidade dos movimentos nas principais regiões corporais.",

  instrucoes:
    "Observe o paciente em repouso (sentado, mãos apoiadas, boca levemente entreaberta) e durante manobras de ativação (ex: caminhar, abrir e fechar as mãos, língua para fora), sem que ele tente disfarçar os movimentos. Avalie a gravidade dos movimentos anormais observados em cada região corporal, considerando o pior episódio observado durante o exame.",

  itens: [
    {
      id: "aims-1",
      texto: "Movimentos faciais e da musculatura perioral (ex: careteamento, piscamento excessivo)",
      opcoes: opcoesPadrao,
    },
    {
      id: "aims-2",
      texto: "Movimentos labiais e perioral (ex: franzir, estalar os lábios)",
      opcoes: opcoesPadrao,
    },
    {
      id: "aims-3",
      texto: "Movimentos da mandíbula (ex: mastigação, protrusão, lateralização, mordida)",
      opcoes: opcoesPadrao,
    },
    {
      id: "aims-4",
      texto: "Movimentos da língua (ex: protrusão, movimentos vermiformes, tremor)",
      opcoes: opcoesPadrao,
    },
    {
      id: "aims-5",
      texto:
        "Movimentos dos membros superiores (mãos, dedos, punhos, braços) — coreicos, atetoides ou rítmicos",
      opcoes: opcoesPadrao,
    },
    {
      id: "aims-6",
      texto:
        "Movimentos dos membros inferiores (pés, dedos dos pés, joelhos) — coreicos, atetoides ou rítmicos",
      opcoes: opcoesPadrao,
    },
    {
      id: "aims-7",
      texto: "Movimentos do tronco e pescoço (ex: balanceio, torção, rotação pélvica)",
      opcoes: opcoesPadrao,
    },
  ],

  faixas: [
    {
      min: 0,
      max: 2,
      label: "Sem discinesia significativa",
      cor: "green",
      descricao: "Ausência de movimentos involuntários clinicamente relevantes.",
    },
    {
      min: 3,
      max: 7,
      label: "Discinesia leve / em observação",
      cor: "blue",
      descricao: "Movimentos discretos; manter monitoramento periódico e reavaliar em curto prazo.",
    },
    {
      min: 8,
      max: 14,
      label: "Discinesia moderada",
      cor: "yellow",
      descricao:
        "Movimentos moderados; considerar avaliação de risco-benefício do antipsicótico em uso.",
    },
    {
      min: 15,
      max: 28,
      label: "Discinesia grave",
      cor: "red",
      descricao:
        "Movimentos graves e disseminados; reavaliação prioritária do esquema antipsicótico indicada.",
    },
  ],

  notaInterpretacao:
    "A escala AIMS original completa possui 12 itens, incluindo também a avaliação de incapacidade funcional causada pelos movimentos e do grau de consciência do próprio paciente sobre eles, além de itens dentários (dentaduras, problemas com dentes/gengivas) usados como possíveis fatores de confusão. Esta versão simplificada considera apenas os 7 itens motores centrais (soma 0-28) para fins de rastreio. Recomenda-se aplicar a escala antes de iniciar o tratamento antipsicótico (avaliação basal) e repeti-la periodicamente durante o seguimento (por exemplo, a cada 6 meses, ou com maior frequência em pacientes de alto risco), já que a detecção precoce da discinesia tardia é fundamental para orientar decisões terapêuticas.",

  referencias: [
    "Guy W. ECDEU Assessment Manual for Psychopharmacology, revised edition. Abnormal Involuntary Movement Scale (AIMS). National Institute of Mental Health, 1976.",
  ],
};
