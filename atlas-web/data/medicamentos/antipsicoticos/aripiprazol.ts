import { Medicamento } from "../../types";

export const aripiprazol: Medicamento = {
  id: "aripiprazol",

  nome: "Aripiprazol",

  nomeComercial: [
    "Abilify",
    "Aristab",
  ],

  classe: "Antipsicótico",

  subclasse: "Atípico (2ª geração)",

  mecanismo:
    "Agonista parcial dos receptores dopaminérgicos D2 e serotoninérgicos 5-HT1A, e antagonista dos receptores 5-HT2A, atuando como estabilizador do sistema dopamina-serotonina.",

  posologias: [
    {
      indicacao: "Esquizofrenia",
      doseInicial: "10–15 mg/dia",
      doseUsual: "10–15 mg/dia",
      doseMaxima: "30 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Mania Aguda (Transtorno Bipolar)",
      doseInicial: "15 mg/dia",
      doseUsual: "15–30 mg/dia",
      doseMaxima: "30 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Potencialização em Depressão Resistente (TDM)",
      doseInicial: "2–5 mg/dia",
      doseUsual: "5–10 mg/dia",
      doseMaxima: "15 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Irritabilidade associada ao Autismo",
      doseInicial: "2 mg/dia",
      doseUsual: "5–10 mg/dia",
      doseMaxima: "15 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Agitação Psicomotora",
      doseInicial: "9,75 mg (IM)",
      doseUsual: "9,75 mg (IM)",
      doseMaxima: "30 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "75 horas (metabólito ativo desidro-aripiprazol: 94 horas)",

  metabolizacao:
    "Metabolização hepática pela CYP2D6 e CYP3A4, gerando o metabólito ativo desidro-aripiprazol.",

  indicacoes: [
    "Esquizofrenia",
    "Episódios maníacos do Transtorno Bipolar",
    "Manutenção do Transtorno Bipolar",
    "Potencializador em Transtorno Depressivo Maior resistente (adjuvante)",
    "Irritabilidade associada a Transtorno do Espectro Autista",
    "Transtorno de Tourette (off-label)",
  ],

  contraIndicacoes: [
    "Hipersensibilidade ao aripiprazol",
  ],

  vantagens: [
    "Baixo risco de ganho de peso em comparação com a maioria dos atípicos",
    "Baixa sedação, favorável para pacientes que necessitam manter funcionalidade diurna",
    "Baixo risco de hiperprolactinemia (pode até reduzir prolactina)",
    "Boa opção como potencializador em depressão resistente em doses baixas",
    "Disponível em formulação injetável de ação prolongada (mensal e trimestral)",
  ],

  desvantagens: [
    "Acatisia é efeito adverso relevante e frequente, especialmente no início do tratamento",
    "Meia-vida longa dificulta ajustes rápidos de dose",
    "Pode causar insônia e ativação/inquietação em alguns pacientes",
    "Impulsividade e comportamentos compulsivos (jogo patológico, hiperfagia) raramente relatados",
  ],

  efeitosAdversos: [
    "Acatisia",
    "Insônia",
    "Cefaleia",
    "Náusea",
    "Ansiedade/inquietação",
    "Tontura",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Baixa",

  interacoes: [
    "Inibidores da CYP2D6 (fluoxetina, paroxetina) aumentam níveis séricos — requer redução de dose",
    "Inibidores da CYP3A4 (cetoconazol) aumentam níveis séricos",
    "Indutores da CYP3A4 (carbamazepina, rifampicina) reduzem níveis séricos significativamente",
    "Anti-hipertensivos (risco de hipotensão, embora menos comum que outros antipsicóticos)",
    "Quinidina (inibidor potente da CYP2D6, aumenta níveis séricos — requer redução de dose)",
    "Benzodiazepínicos e álcool (potencialização de sedação, tontura e hipotensão)",
    "Antiparkinsonianos/agonistas dopaminérgicos — levodopa (antagonismo mútuo do efeito, mesmo sendo agonista parcial D2; pode piorar parkinsonismo ou reduzir a eficácia do levodopa)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Muito baixa",

  sexual: "Baixa",

  qt: "Muito baixo",

  gravidez:
    "Dados limitados; uso possível quando o benefício justifica o risco, com monitorização de sintomas extrapiramidais e de abstinência no recém-nascido.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno; dados limitados sobre segurança, usar com cautela e monitorização do lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose na insuficiência renal.",

  ajusteRenalNecessario: false,

  hepatica:
    "Não necessita ajuste de dose na insuficiência hepática leve a moderada.",

  observacoes:
    "O aripiprazol destaca-se dos demais antipsicóticos atípicos por seu mecanismo de agonismo parcial dopaminérgico, resultando em perfil metabólico muito mais favorável (baixo ganho de peso, baixa sedação) e baixo risco de hiperprolactinemia. É amplamente utilizado como potencializador em depressão resistente em doses baixas (2–10 mg/dia). Seu principal efeito adverso limitante é a acatisia, que deve ser diferenciada de piora da agitação psicótica. Como os demais antipsicóticos, requer atenção a risco de síndrome neuroléptica maligna e discinesia tardia, ainda que com incidência menor.",

  perolasClinicas: [
    "Acatisia induzida por aripiprazol pode ser confundida com piora da ansiedade/agitação de base — se o paciente relatar 'inquietação interna' e piora após início ou aumento de dose, considerar acatisia antes de aumentar a dose (o que pioraria o quadro); redução de dose ou associação de propranolol/benzodiazepínico costuma resolver.",
    "Como potencializador em depressão resistente, doses baixas (2-5 mg) costumam ser tão eficazes quanto doses mais altas e com muito menos acatisia — evitar a tentação de titular para doses antipsicóticas plenas (15-30 mg) nessa indicação.",
    "É contraintuitivo, mas por ser agonista parcial em vez de antagonista puro, pode ocasionalmente PIORAR sintomas psicóticos em pacientes muito graves ou em populações com hiperatividade dopaminérgica extrema (efeito 'agonista' insuficiente para bloquear picos de dopamina) — situação rara mas descrita, relevante em falhas terapêuticas aparentemente paradoxais.",
    "Ao trocar de outro antipsicótico com bloqueio D2 potente (ex. risperidona, haloperidol) para aripiprazol, uma sobreposição cruzada muito rápida pode gerar piora transitória de sintomas psicóticos por 'gap' funcional de ocupação D2 — titulação cruzada mais gradual que o habitual costuma ser mais segura.",
    "Casos raros de comportamentos compulsivos novos (jogo patológico, compras compulsivas, hipersexualidade, hiperfagia) já foram relatados com aripiprazol — perguntar ativamente sobre isso, pois o paciente frequentemente não associa espontaneamente ao medicamento.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia",
    "Bula de referência ANVISA/FDA (Abilify)",
  ],
};
