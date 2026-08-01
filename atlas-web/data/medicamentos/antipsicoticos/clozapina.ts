import { Medicamento } from "../../types";

export const clozapina: Medicamento = {
  id: "clozapina",

  nome: "Clozapina",

  nomeComercial: [
    "Leponex",
    "Clozan",
  ],

  classe: "Antipsicótico",

  subclasse: "Atípico (2ª geração)",

  mecanismo:
    "Antagonista de múltiplos receptores, com afinidade relativamente baixa por D2 e alta por D4, 5-HT2A, alfa-1 adrenérgicos, H1 histaminérgicos e muscarínicos, o que explica sua eficácia superior e seu perfil de efeitos adversos único.",

  posologias: [
    {
      indicacao: "Esquizofrenia Refratária",
      doseInicial: "12,5–25 mg/dia",
      doseUsual: "300–450 mg/dia",
      doseMaxima: "900 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Redução de Comportamento Suicida na Esquizofrenia",
      doseInicial: "12,5–25 mg/dia",
      doseUsual: "300–450 mg/dia",
      doseMaxima: "900 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Psicose associada à Doença de Parkinson (off-label, doses baixas)",
      doseInicial: "6,25 mg/dia",
      doseUsual: "12,5–50 mg/dia",
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "12 horas (8–16 horas)",

  metabolizacao:
    "Metabolização hepática extensa principalmente pela CYP1A2, com contribuição da CYP3A4 e CYP2D6.",

  indicacoes: [
    "Esquizofrenia refratária ao tratamento (falha de pelo menos 2 antipsicóticos em dose e tempo adequados)",
    "Redução do risco de comportamento suicida recorrente na esquizofrenia e transtorno esquizoafetivo",
    "Psicose associada à Doença de Parkinson (off-label, doses baixas)",
  ],

  contraIndicacoes: [
    "História de agranulocitose ou granulocitopenia grave induzida por clozapina",
    "Contagem de neutrófilos incapaz de ser monitorizada regularmente",
    "Doença cardíaca grave não controlada (ex.: miocardite ativa)",
    "Íleo paralítico",
    "Doença hepática grave e insuficiência renal grave",
    "Epilepsia não controlada",
  ],

  vantagens: [
    "Maior eficácia entre todos os antipsicóticos, padrão-ouro para esquizofrenia refratária",
    "Única evidência robusta de redução do risco de suicídio na esquizofrenia",
    "Praticamente ausente de sintomas extrapiramidais e discinesia tardia",
    "Eficaz em sintomas negativos refratários a outros antipsicóticos",
  ],

  desvantagens: [
    "Risco de agranulocitose, exigindo monitorização hematológica obrigatória e rigorosa (hemograma semanal nas primeiras 18 semanas, depois mensal)",
    "Risco de miocardite, especialmente nas primeiras semanas de tratamento",
    "Convulsões dose-dependentes",
    "Sialorreia intensa e constipação grave, com risco de íleo paralítico",
    "Sedação, ganho de peso e risco metabólico elevados",
    "Necessidade de titulação lenta e cuidadosa, com monitorização contínua",
  ],

  efeitosAdversos: [
    "Agranulocitose/neutropenia (risco grave, requer monitorização hematológica obrigatória)",
    "Sialorreia (hipersalivação)",
    "Sedação intensa",
    "Constipação (pode evoluir para íleo paralítico)",
    "Ganho de peso e alterações metabólicas",
    "Taquicardia sinusal",
    "Convulsões dose-dependentes",
    "Miocardite (principalmente nas primeiras 6-8 semanas)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Alta",

  interacoes: [
    "Fármacos mielossupressores (aumentam risco de agranulocitose, ex.: carbamazepina)",
    "Tabagismo (indução da CYP1A2, reduz níveis séricos; cessação do tabagismo pode elevar níveis abruptamente)",
    "Inibidores da CYP1A2 (fluvoxamina, ciprofloxacino) aumentam níveis séricos significativamente (redução de até 1/3 da dose costuma ser necessária)",
    "Benzodiazepínicos (risco de sedação excessiva, depressão respiratória e colapso cardiorrespiratório, especialmente na titulação inicial)",
    "Outros agentes que reduzem o limiar convulsivo",
    "Opioides e outros depressores respiratórios do SNC (risco aditivo de depressão respiratória e do SNC)",
    "Outros fármacos que prolongam o QT e distúrbios eletrolíticos — hipocalemia/hipomagnesemia (monitorar eletrólitos periodicamente)",
    "Anticolinérgicos (efeito aditivo — risco aumentado de retenção urinária, glaucoma de ângulo fechado e íleo paralítico)",
    "Omeprazol (indutor da CYP1A2, pode reduzir níveis séricos de clozapina)",
  ],

  ganhoPeso: "Muito alto",

  sedacao: "Muito alta",

  sexual: "Moderada",

  qt: "Moderado",

  gravidez:
    "Uso restrito a casos em que os benefícios superam claramente os riscos, dada a gravidade da esquizofrenia refratária; requer monitorização hematológica também do recém-nascido.",

  gravidezCategoria: "cautela",

  lactacao:
    "Geralmente não recomendada devido ao risco de agranulocitose e sedação no lactente; requer avaliação especializada caso a caso.",

  lactacaoCategoria: "evitar",

  renal:
    "Contraindicada em insuficiência renal grave; usar com cautela e doses reduzidas em graus leves a moderados.",

  ajusteRenalNecessario: true,

  hepatica:
    "Contraindicada em doença hepática grave; monitorizar função hepática durante o tratamento.",

  observacoes:
    "A clozapina é reservada exclusivamente para esquizofrenia refratária (falha de pelo menos dois antipsicóticos em dose e tempo adequados) devido ao seu perfil de segurança exigente, sendo considerada o tratamento mais eficaz disponível para essa indicação. Seu uso exige monitorização hematológica obrigatória (hemograma semanal nas primeiras 18 semanas, depois quinzenal e mensal) devido ao risco de agranulocitose, além de vigilância cardíaca nas primeiras semanas pelo risco de miocardite. Efeitos anticolinérgicos como constipação grave podem evoluir para íleo paralítico e devem ser monitorizados ativamente. Apesar dos riscos, é a única medicação com evidência robusta de redução de comportamento suicida na esquizofrenia.",

  perolasClinicas: [
    "É amplamente subutilizada na prática — a maioria dos pacientes com critérios de refratariedade nunca chega a receber uma tentativa adequada de clozapina, apesar de ser a opção com maior chance de resposta nesse cenário. Não postergar a indicação por receio da monitorização hematológica.",
    "A constipação deve ser tratada proativamente desde o início do tratamento (laxante profilático), não apenas quando sintomática — é a causa evitável de morbimortalidade mais subestimada da clozapina, podendo evoluir para íleo paralítico e obstrução fatal.",
    "Retomar a clozapina após interrupção de mais de 48 horas exige reiniciar a titulação do zero (não retomar na última dose usada) pelo risco de hipotensão grave e síncope com a reintrodução em dose plena.",
    "A sialorreia noturna pode ser manejada com atropina colírio 1% aplicada por via sublingual (uso off-label) antes de considerar reduzir a dose do antipsicótico.",
    "Interromper o tabagismo durante o tratamento eleva os níveis séricos de clozapina de forma abrupta (a fumaça, não a nicotina, induz a CYP1A2) — pacientes que pararam de fumar recentemente (ex: durante internação) têm risco aumentado de toxicidade se a dose não for ajustada.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia",
    "Bula de referência ANVISA/FDA (Leponex)",
  ],
};
