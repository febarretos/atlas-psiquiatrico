import { Medicamento } from "../../types";

export const biperideno: Medicamento = {
  id: "biperideno",

  nome: "Biperideno",

  nomeComercial: [
    "Akineton",
    "Cinetol",
  ],

  classe: "Anticolinérgico",

  subclasse: "Antiparkinsoniano",

  mecanismo:
    "Antagonista muscarínico (anticolinérgico) de ação central, restaurando o equilíbrio entre dopamina e acetilcolina no estriado, reduzindo os sintomas extrapiramidais causados pelo bloqueio dopaminérgico dos antipsicóticos.",

  posologias: [
    {
      indicacao: "Distonia Aguda Induzida por Antipsicótico",
      doseInicial: "2,5–5 mg (IM ou IV)",
      doseUsual: "2,5–5 mg, podendo repetir em 30 minutos se necessário",
      doseMaxima: "20 mg/dia (parenteral)",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Parkinsonismo Induzido por Antipsicótico (via oral)",
      doseInicial: "1–2 mg/dia",
      doseUsual: "2–6 mg/dia (2–3 tomadas)",
      doseMaxima: "16 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Doença de Parkinson (uso neurológico)",
      doseInicial: "1 mg/dia",
      doseUsual: "3–12 mg/dia",
      doseMaxima: "16 mg/dia",
      nivelEvidencia: 3,
    },
  ],

  meiaVida: "18–24 horas",

  metabolizacao:
    "Metabolização hepática; dados farmacocinéticos completos limitados na literatura.",

  indicacoes: [
    "Distonia aguda induzida por antipsicótico",
    "Parkinsonismo (rigidez, bradicinesia, tremor) induzido por antipsicótico",
    "Doença de Parkinson idiopática (uso neurológico)",
  ],

  contraIndicacoes: [
    "Glaucoma de ângulo fechado",
    "Hipertrofia prostática com retenção urinária",
    "Megacólon",
    "Miastenia gravis",
    "Hipersensibilidade ao biperideno",
  ],

  vantagens: [
    "Ação rápida e eficaz no tratamento da distonia aguda (uso parenteral)",
    "Alívio efetivo do parkinsonismo induzido por antipsicótico",
    "Disponível em apresentação oral e parenteral, permitindo uso em emergência e manutenção",
  ],

  desvantagens: [
    "Não deve ser usado profilaticamente de rotina em todo paciente iniciando antipsicótico — reservado para quando surgem sintomas extrapiramidais ou há alto risco individual reconhecido",
    "Risco de abuso e dependência psicológica leve, relacionado a efeito euforizante/ansiolítico percebido por alguns pacientes",
    "Pode causar ou agravar déficit cognitivo, especialmente em idosos (efeito anticolinérgico central)",
    "Mascara sinais precoces de discinesia tardia, podendo retardar seu reconhecimento",
    "Contraindicação relativa em glaucoma de ângulo fechado e hipertrofia prostática",
  ],

  efeitosAdversos: [
    "Boca seca",
    "Visão turva",
    "Constipação",
    "Retenção urinária",
    "Taquicardia",
    "Confusão mental e prejuízo cognitivo (especialmente em idosos)",
    "Euforia leve",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Alta",

  interacoes: [
    "Outros anticolinérgicos (efeito anticolinérgico cumulativo/toxicidade)",
    "Antidepressivos tricíclicos (potencialização de efeitos anticolinérgicos)",
    "Antipsicóticos de baixa potência com efeito anticolinérgico próprio (clorpromazina, olanzapina, clozapina)",
    "Álcool (potencialização de efeitos sedativos/cognitivos)",
    "Inibidores da colinesterase (donepezila, rivastigmina, galantamina) — antagonismo mútuo, pode reduzir a eficácia de ambos e agravar declínio cognitivo em pacientes com demência",
    "Digoxina (anticolinérgicos podem aumentar a absorção gastrointestinal da digoxina pela redução da motilidade intestinal, elevando o risco de toxicidade digitálica)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Moderada",

  sexual: "Baixa",

  qt: "Muito baixo",

  gravidez:
    "Dados limitados em humanos; usar apenas quando o benefício justificar claramente o risco.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados insuficientes sobre passagem para o leite materno; usar com cautela e considerar alternativas quando possível.",

  lactacaoCategoria: "cautela",

  renal:
    "Usar com cautela em insuficiência renal; considerar redução de dose por possível acúmulo.",

  ajusteRenalNecessario: true,

  hepatica:
    "Usar com cautela em insuficiência hepática; considerar redução de dose.",

  observacoes:
    "O biperideno é o anticolinérgico mais utilizado na prática psiquiátrica brasileira para tratamento e profilaxia de sintomas extrapiramidais (SEP) induzidos por antipsicóticos, especialmente distonia aguda e parkinsonismo. Não deve ser prescrito de forma rotineira e profilática a todo paciente em uso de antipsicótico — as diretrizes recomendam reservá-lo para quando os sintomas extrapiramidais efetivamente surgem, ou em pacientes de alto risco identificado (ex: uso de antipsicóticos de alta potência em pacientes jovens do sexo masculino). O uso crônico desnecessário expõe o paciente a efeitos anticolinérgicos cumulativos, risco de abuso e prejuízo cognitivo, sem benefício adicional. Deve ser evitado ou usado com extrema cautela em idosos pelo risco de piora cognitiva e delirium anticolinérgico.",

  perolasClinicas: [
    "Diante de distonia aguda, a via parenteral (IM/IV) tem resposta em minutos — não esperar o efeito oral em uma emergência, já que a distonia laríngea, embora rara, pode comprometer a via aérea.",
    "Reavaliar periodicamente (a cada poucas semanas/meses) a real necessidade de manutenção — muitos pacientes seguem recebendo biperideno cronicamente após o antipsicótico já ter sido trocado ou a dose reduzida, sem reavaliação se ainda é necessário.",
    "Eficácia limitada como tratamento de acatisia isolada — não é primeira linha; propranolol ou benzodiazepínico são as opções corretas para acatisia pura. Reservar para quando há parkinsonismo/sintomas extrapiramidais concomitantes.",
    "O efeito euforizante leve percebido por alguns pacientes é a base do potencial de abuso — ficar atento a pedidos de aumento de dose sem sintomas extrapiramidais objetivos correspondentes.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia",
    "Bula de referência ANVISA (Akineton)",
  ],
};
