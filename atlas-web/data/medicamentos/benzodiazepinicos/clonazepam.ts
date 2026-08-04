import { Medicamento } from "../../types";

export const clonazepam: Medicamento = {
  id: "clonazepam",

  nome: "Clonazepam",

  nomeComercial: [
    "Rivotril",
    "Clonotril",
    "Uni Clonazepax",
  ],

  classe: "Benzodiazepínico",

  subclasse: "Ação longa",

  mecanismo:
    "Agonista do receptor GABA-A, potencializando a ação inibitória do GABA no SNC ao aumentar a frequência de abertura dos canais de cloreto, com consequente hiperpolarização neuronal e efeito ansiolítico, sedativo, anticonvulsivante e miorrelaxante.",

  posologias: [
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "0,25 mg 2x/dia",
      doseUsual: "1–2 mg/dia",
      doseMaxima: "4 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "0,25–0,5 mg/dia",
      doseUsual: "0,5–2 mg/dia",
      doseMaxima: "4 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Fobia Social",
      doseInicial: "0,25 mg 2x/dia",
      doseUsual: "1–3 mg/dia",
      doseMaxima: "4 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Coadjuvante em Transtorno Bipolar (agitação/ansiedade)",
      doseInicial: "0,5 mg/dia",
      doseUsual: "0,5–2 mg/dia",
      doseMaxima: "4 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Acatisia Induzida por Antipsicóticos",
      doseInicial: "0,5 mg/dia",
      doseUsual: "0,5–2 mg/dia",
      doseMaxima: "2 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Epilepsia (mioclônica, ausência, síndrome de Lennox-Gastaut)",
      doseInicial: "0,5 mg/dia",
      doseUsual: "1–4 mg/dia",
      doseMaxima: "20 mg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "30–40 horas",

  metabolizacao:
    "Metabolização hepática predominantemente pela CYP3A4, sem metabólitos ativos clinicamente significativos.",

  indicacoes: [
    "Transtorno do Pânico",
    "Transtorno de Ansiedade Generalizada",
    "Fobia Social",
    "Coadjuvante em episódios de mania/agitação no Transtorno Bipolar",
    "Acatisia induzida por antipsicóticos",
    "Epilepsia (crises mioclônicas, ausência)",
    "Insônia (uso pontual e de curto prazo)",
  ],

  contraIndicacoes: [
    "Miastenia gravis",
    "Insuficiência respiratória grave",
    "Apneia do sono grave não tratada",
    "Glaucoma de ângulo fechado",
    "Hipersensibilidade a benzodiazepínicos",
    "Uso concomitante com álcool ou opioides (risco de depressão respiratória)",
  ],

  vantagens: [
    "Meia-vida longa, permitindo doses únicas ou em duas tomadas diárias",
    "Alta potência, eficaz mesmo em doses baixas",
    "Boa evidência em transtorno do pânico e como coadjuvante em ansiedade",
    "Útil como anticonvulsivante e em acatisia induzida por antipsicóticos",
    "Menor flutuação plasmática em comparação a benzodiazepínicos de ação curta",
  ],

  desvantagens: [
    "Risco de dependência física e psicológica com uso prolongado",
    "Sedação e prejuízo cognitivo, especialmente em idosos",
    "Acúmulo em uso crônico devido à meia-vida longa",
    "Necessidade de retirada gradual para evitar síndrome de abstinência",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Prejuízo de memória (amnésia anterógrada)",
    "Ataxia e incoordenação motora",
    "Tontura",
    "Fadiga",
    "Alterações de humor (irritabilidade, desinibição paradoxal)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Álcool",
    "Opioides (risco de sedação profunda, depressão respiratória e óbito — alerta de tarja preta da FDA para o uso concomitante de benzodiazepínicos e opioides)",
    "Outros depressores do SNC",
    "Inibidores potentes da CYP3A4 (ex: cetoconazol, ritonavir)",
    "Relaxantes musculares",
    "Clozapina (relatos de sedação marcante, hipotensão, delirium e depressão/parada respiratória — reservar para quando não houver alternativa, com monitorização estreita)",
    "Fluconazol (inibidor da CYP3A4 — caso relatado de depressão respiratória grave com essa combinação)",
    "Indutores da CYP3A4 (ex: carbamazepina, fenitoína, rifampicina — reduzem os níveis séricos de clonazepam)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Alta",

  sexual: "Muito baixa",

  qt: "Muito baixo",

  sintomasDescontinuacao: "Moderado",

  gravidez:
    "Evitar, especialmente no primeiro trimestre (associação a fenda palatina) e no periparto (risco de floppy infant syndrome e síndrome de abstinência neonatal). Uso apenas quando estritamente necessário e por menor tempo possível.",

  gravidezCategoria: "evitar",

  lactacao:
    "Passagem para o leite materno; pode causar sedação e dificuldade de sucção no lactente. Evitar uso prolongado durante a amamentação.",

  lactacaoCategoria: "evitar",

  renal:
    "Não requer ajuste significativo na insuficiência renal leve a moderada; usar com cautela em casos graves.",

  ajusteRenalNecessario: false,

  hepatica:
    "Usar com cautela e considerar doses menores em insuficiência hepática, pelo risco de acúmulo e sedação excessiva.",

  observacoes:
    "O clonazepam é um dos benzodiazepínicos mais utilizados na prática psiquiátrica pela alta potência e meia-vida longa, sendo particularmente eficaz no transtorno do pânico e como coadjuvante em quadros de ansiedade e agitação. Deve ser prescrito pelo menor tempo possível devido ao risco de dependência, tolerância e síndrome de abstinência. A combinação com álcool ou opioides deve ser evitada pelo risco de depressão respiratória grave. Em idosos, recomenda-se cautela redobrada pelo risco aumentado de quedas, fraturas e prejuízo cognitivo. A retirada deve ser sempre gradual.",

  perolasClinicas: [
    "É o benzodiazepínico de escolha para acatisia induzida por antipsicótico quando o anticolinérgico (biperideno) não é indicado ou não resolve — muitas vezes mais eficaz que o anticolinérgico nesse efeito adverso específico.",
    "Por ser altamente potente (equivalência ~0,5mg = 10mg de diazepam), erros de prescrição ao trocar de outro benzodiazepínico são comuns — sempre recalcular pela tabela de equivalência, não por 'número de comprimidos'.",
    "Em uso crônico como coadjuvante de ansiedade, reavaliar periodicamente se ainda é necessário — é frequentemente 'esquecido' na receita por anos sem reavaliação da indicação original.",
    "Equivalência aproximada tendo o diazepam como referência: clonazepam 0,5–1 mg ≈ diazepam 10 mg (Ashton Manual; Maudsley Prescribing Guidelines relata a mesma ordem de grandeza, com variação entre fontes). Serve como orientação qualitativa, não conversão exata — a meia-vida mais longa do clonazepam e a tolerância cruzada incompleta entre benzodiazepínicos exigem ajuste clínico gradual ao trocar de agente, nunca troca automática mg-a-mg.",
  ],

  referencias: [
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
    "APA Practice Guideline",
    "CANMAT 2023",
    "UpToDate",
  ],
};
