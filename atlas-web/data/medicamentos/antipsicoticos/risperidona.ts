import { Medicamento } from "../../types";

export const risperidona: Medicamento = {
  id: "risperidona",

  nome: "Risperidona",

  nomeComercial: [
    "Risperdal",
    "Viverdal",
  ],

  classe: "Antipsicótico",

  subclasse: "Atípico (2ª geração)",

  mecanismo:
    "Antagonista dos receptores dopaminérgicos D2 e serotoninérgicos 5-HT2A, com afinidade adicional por receptores alfa-1 e alfa-2 adrenérgicos e H1 histaminérgicos.",

  posologias: [
    {
      indicacao: "Esquizofrenia",
      doseInicial: "1–2 mg/dia",
      doseUsual: "2–6 mg/dia",
      doseMaxima: "16 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Mania Aguda (Transtorno Bipolar)",
      doseInicial: "2–3 mg/dia",
      doseUsual: "1–6 mg/dia",
      doseMaxima: "6 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Irritabilidade associada ao Autismo",
      doseInicial: "0,25–0,5 mg/dia",
      doseUsual: "0,5–3 mg/dia",
      doseMaxima: "3 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Agitação Psicomotora",
      doseInicial: "0,5–1 mg",
      doseUsual: "1–2 mg",
      doseMaxima: "4 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "20 horas (incluindo o metabólito ativo 9-hidroxi-risperidona/paliperidona)",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6, gerando o metabólito ativo 9-hidroxi-risperidona (paliperidona).",

  indicacoes: [
    "Esquizofrenia",
    "Episódios maníacos do Transtorno Bipolar",
    "Irritabilidade associada a Transtorno do Espectro Autista",
    "Agitação psicomotora",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à risperidona ou paliperidona",
    "Demência com corpos de Lewy (maior sensibilidade a efeitos extrapiramidais)",
  ],

  vantagens: [
    "Boa eficácia em sintomas positivos",
    "Disponível em formulação de ação prolongada (injetável mensal)",
    "Ampla experiência clínica e uso pediátrico bem estabelecido",
    "Menor sedação e ganho de peso do que olanzapina e clozapina",
  ],

  desvantagens: [
    "Alto risco de sintomas extrapiramidais em doses mais altas (dose-dependente)",
    "Hiperprolactinemia proeminente, mais que outros atípicos",
    "Risco de disfunção sexual e ginecomastia relacionados à prolactina",
  ],

  efeitosAdversos: [
    "Sintomas extrapiramidais (tremor, rigidez, acatisia)",
    "Hiperprolactinemia (galactorreia, amenorreia, ginecomastia)",
    "Ganho de peso moderado",
    "Sedação",
    "Hipotensão ortostática",
    "Aumento do intervalo QT (dose-dependente)",
  ],

  interacoes: [
    "Inibidores da CYP2D6 (fluoxetina, paroxetina) aumentam níveis séricos",
    "Carbamazepina reduz níveis séricos (indução enzimática)",
    "Outros agentes que prolongam QT",
    "Depressores do SNC (potencialização de sedação)",
    "Anti-hipertensivos (risco de hipotensão aditiva)",
  ],

  ganhoPeso: "Moderado",

  sedacao: "Baixa",

  sexual: "Alta",

  qt: "Baixo",

  gravidez:
    "Dados limitados; uso durante o terceiro trimestre pode associar-se a sintomas extrapiramidais e de abstinência no recém-nascido. Utilizar apenas se o benefício justificar o risco.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno em pequenas quantidades; usar com cautela, monitorando sedação e ganho de peso no lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Ajuste de dose recomendado na insuficiência renal moderada a grave; iniciar com doses mais baixas e titular lentamente.",

  ajusteRenalNecessario: true,

  hepatica:
    "Ajuste de dose recomendado na insuficiência hepática; iniciar com doses mais baixas devido à redução do clearance.",

  observacoes:
    "A risperidona é um dos antipsicóticos atípicos mais utilizados por seu perfil favorável em relação a ganho de peso e sedação quando comparada à olanzapina e clozapina, porém apresenta maior risco de sintomas extrapiramidais e hiperprolactinemia entre os atípicos, especialmente em doses acima de 6 mg/dia. É amplamente utilizada em crianças e adolescentes para irritabilidade associada ao autismo. Como todo antipsicótico, requer atenção a risco de síndrome neuroléptica maligna e discinesia tardia em uso prolongado.",

  perolasClinicas: [
    "É o antipsicótico com a curva dose-EPS mais previsível da classe: até 4-6 mg/dia o perfil se assemelha ao de outros atípicos, mas acima disso a incidência de sintomas extrapiramidais se aproxima da de um antipsicótico típico — evitar ultrapassar essa faixa sem necessidade clara.",
    "A hiperprolactinemia é a mais pronunciada entre os atípicos porque a 9-hidroxi-risperidona (paliperidona) atravessa pouco a barreira hematoencefálica mas se acumula perifericamente, bloqueando D2 na hipófise de forma desproporcional ao efeito central.",
    "Em pacientes com Parkinson ou demência com corpos de Lewy, evitar mesmo em doses baixas — a sensibilidade a EPS nessa população é desproporcional à dose usada.",
    "Ao trocar para a formulação injetável de ação prolongada, manter a via oral sobreposta por cerca de 3 semanas até o nível sérico do injetável atingir platô — a formulação de depósito não atinge concentração terapêutica imediatamente.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia",
    "Bula de referência ANVISA/FDA (Risperdal)",
  ],
};
