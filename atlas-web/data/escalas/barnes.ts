import { Escala } from "./types";

export const barnes: Escala = {
  id: "barnes",

  nome: "Barnes Akathisia Rating Scale",

  sigla: "BARS",

  categoria: "Efeitos Adversos de Antipsicóticos",

  descricao:
    "Escala heteroaplicada (aplicada pelo entrevistador) para avaliação e monitoramento da acatisia induzida por antipsicóticos, combinando observação objetiva do comportamento motor com o relato subjetivo do paciente sobre a inquietação e o sofrimento associado.",

  instrucoes:
    "Observe o paciente sem que ele saiba que está sendo avaliado para acatisia, por pelo menos 2 minutos enquanto está sentado ou em pé (por exemplo, durante a entrevista clínica de rotina). Em seguida, questione o paciente sobre a percepção subjetiva de inquietação e o sofrimento associado.",

  itens: [
    {
      id: "barnes-1",
      texto: "Acatisia objetiva (observação de movimentos característicos de inquietação motora)",
      opcoes: [
        { label: "Normal, sem movimentos característicos de inquietação", valor: 0 },
        {
          label:
            "Movimentos inquietos característicos (balançar as pernas, mudar de posição, mexer os pés) presentes, mas por menos da metade do tempo observado",
          valor: 1,
        },
        {
          label: "Movimentos característicos presentes na maior parte do tempo observado (mais da metade)",
          valor: 2,
        },
        {
          label:
            "Movimentos presentes o tempo todo; paciente incapaz de permanecer sentado(a) ou parado(a) por mais de alguns segundos",
          valor: 3,
        },
      ],
    },
    {
      id: "barnes-2",
      texto: "Consciência subjetiva da inquietação",
      opcoes: [
        { label: "Nenhuma consciência de inquietação ou impulso para se mover", valor: 0 },
        { label: "Consciência inespecífica de sensação de inquietação", valor: 1 },
        {
          label:
            "Paciente percebe incapacidade de manter as pernas paradas, ou um desejo consciente de se mover, associado à inquietação relatada",
          valor: 2,
        },
        {
          label:
            "Paciente relata consciência intensa da inquietação e de um impulso incontrolável para se mover na maior parte do tempo",
          valor: 3,
        },
      ],
    },
    {
      id: "barnes-3",
      texto: "Sofrimento relacionado à acatisia",
      opcoes: [
        { label: "Nenhum sofrimento associado à inquietação", valor: 0 },
        { label: "Sofrimento leve", valor: 1 },
        { label: "Sofrimento moderado", valor: 2 },
        { label: "Sofrimento grave e angustiante", valor: 3 },
      ],
    },
  ],

  faixas: [
    {
      min: 0,
      max: 1,
      label: "Acatisia ausente",
      cor: "green",
      descricao: "Sem evidência clínica relevante de acatisia.",
    },
    {
      min: 2,
      max: 3,
      label: "Acatisia leve / questionável",
      cor: "blue",
      descricao: "Sinais discretos, de significado clínico questionável; observar evolução.",
    },
    {
      min: 4,
      max: 5,
      label: "Acatisia leve definida",
      cor: "yellow",
      descricao: "Acatisia leve, porém clinicamente definida; considerar ajuste terapêutico.",
    },
    {
      min: 6,
      max: 7,
      label: "Acatisia moderada",
      cor: "yellow",
      descricao: "Acatisia moderada; avaliar redução de dose ou troca do antipsicótico e/ou tratamento sintomático.",
    },
    {
      min: 8,
      max: 9,
      label: "Acatisia grave",
      cor: "red",
      descricao:
        "Acatisia grave, com sofrimento intenso; intervenção terapêutica prioritária, incluindo reavaliação do esquema antipsicótico.",
    },
  ],

  notaInterpretacao:
    "A escala BARS original completa também inclui um item de avaliação clínica global da acatisia, pontuado de 0 (ausente) a 5 (acatisia grave com sofrimento intenso e incapacitante), preenchido pelo avaliador com base no conjunto dos itens anteriores. Nesta versão simplificada, considera-se apenas a soma dos 3 itens centrais (objetivo, subjetivo e sofrimento, 0-9) para fins de rastreio e monitoramento longitudinal. A acatisia é um efeito adverso extrapiramidal comum a antipsicóticos (especialmente de primeira geração e alguns de segunda geração) e deve ser diferenciada de agitação psicótica ou ansiedade, já que seu manejo (redução de dose, troca de antipsicótico, betabloqueador ou benzodiazepínico) difere do manejo da agitação primária.",

  referencias: [
    "Barnes TR. A rating scale for drug-induced akathisia. Br J Psychiatry. 1989.",
  ],
};
