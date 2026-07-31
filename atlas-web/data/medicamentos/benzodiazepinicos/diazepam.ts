import { Medicamento } from "../../types";

export const diazepam: Medicamento = {
  id: "diazepam",

  nome: "Diazepam",

  nomeComercial: [
    "Valium",
    "Dienpax",
    "Kiatrium",
    "Ansilive",
    "Calmociteno",
    "Uni Diazepax",
  ],

  classe: "Benzodiazepínico",

  subclasse: "Ação longa",

  mecanismo:
    "Agonista do receptor GABA-A, potencializando a ação inibitória do GABA no SNC ao aumentar a frequência de abertura dos canais de cloreto. Sua alta lipofilicidade proporciona início de ação rápido, com efeito ansiolítico, sedativo, anticonvulsivante e miorrelaxante.",

  posologias: [
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "2–5 mg 2–3x/dia",
      doseUsual: "5–20 mg/dia",
      doseMaxima: "40 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Síndrome de Abstinência Alcoólica",
      doseInicial: "10 mg a cada 6–8h (esquema fixo ou sintomático)",
      doseUsual: "20–40 mg/dia (esquema decrescente)",
      doseMaxima: "60 mg/dia (sob monitorização)",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Status Epilepticus",
      doseInicial: "5–10 mg IV (0,15–0,2 mg/kg)",
      doseUsual: "10–20 mg IV, podendo repetir",
      doseMaxima: "30 mg por episódio agudo",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Espasticidade Muscular",
      doseInicial: "2 mg 3x/dia",
      doseUsual: "5–15 mg/dia",
      doseMaxima: "40 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Sedação Pré-Procedimento",
      doseInicial: "5–10 mg VO ou IV",
      doseUsual: "5–10 mg",
      doseMaxima: "20 mg",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "20–100 horas (contando o metabólito ativo desmetildiazepam)",

  metabolizacao:
    "Metabolização hepática pela CYP2C19 e CYP3A4, com formação de metabólitos ativos de meia-vida longa (desmetildiazepam, temazepam, oxazepam), o que favorece o acúmulo em uso prolongado.",

  indicacoes: [
    "Transtorno de Ansiedade Generalizada",
    "Síndrome de Abstinência Alcoólica",
    "Status epilepticus e crises convulsivas agudas",
    "Espasticidade muscular de origem central",
    "Sedação pré-procedimento",
    "Agitação psicomotora aguda",
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
    "Início de ação muito rápido devido à alta lipofilicidade",
    "Disponível em apresentação oral, retal e injetável (IV)",
    "Referência clássica no tratamento da abstinência alcoólica e do status epilepticus",
    "Meia-vida longa (com metabólitos ativos), reduzindo flutuações e sintomas entre doses",
  ],

  desvantagens: [
    "Alto risco de acúmulo em uso prolongado, especialmente em idosos e hepatopatas",
    "Risco de dependência física e psicológica",
    "Sedação intensa e prejuízo psicomotor, sobretudo no início do tratamento",
    "Necessidade de retirada gradual para evitar síndrome de abstinência",
  ],

  efeitosAdversos: [
    "Sonolência intensa",
    "Ataxia e incoordenação motora",
    "Amnésia anterógrada",
    "Hipotensão (via IV)",
    "Depressão respiratória (especialmente via IV ou associado a outros depressores)",
    "Confusão mental em idosos",
  ],

  interacoes: [
    "Álcool",
    "Opioides",
    "Outros depressores do SNC",
    "Inibidores da CYP2C19/CYP3A4 (ex: fluvoxamina, cimetidina)",
    "Antiácidos (podem alterar a absorção)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Muito alta",

  sexual: "Muito baixa",

  qt: "Muito baixo",

  gravidez:
    "Evitar, especialmente no primeiro trimestre (associação a fenda palatina) e no periparto (risco de floppy infant syndrome e síndrome de abstinência neonatal). Reservar para situações de urgência, como status epilepticus.",

  gravidezCategoria: "evitar",

  lactacao:
    "Passagem significativa para o leite materno, com risco de sedação e letargia no lactente. Evitar uso prolongado durante a amamentação.",

  lactacaoCategoria: "evitar",

  renal:
    "Usar com cautela na insuficiência renal; embora não exija ajuste importante na função renal isolada, o acúmulo de metabólitos ativos pode prolongar seus efeitos.",

  ajusteRenalNecessario: false,

  hepatica:
    "Contraindicado ou usar com extrema cautela em insuficiência hepática significativa, pelo alto risco de acúmulo do fármaco e de seus metabólitos ativos, podendo precipitar encefalopatia hepática.",

  observacoes:
    "O diazepam é o benzodiazepínico clássico para manejo da síndrome de abstinência alcoólica e do status epilepticus, devido ao início de ação rápido e à formação de metabólitos ativos de meia-vida longa, que conferem um efeito de 'autoafilamento' na retirada. Seu uso prolongado deve ser evitado pelo risco de acúmulo, especialmente em idosos e hepatopatas, situações em que benzodiazepínicos de metabolização mais simples (como o lorazepam) são preferíveis. A combinação com álcool ou opioides deve ser sempre evitada pelo risco de depressão respiratória grave.",

  perolasClinicas: [
    "O efeito de 'autoafilamento' (self-tapering) pelos metabólitos ativos de meia-vida longa é uma vantagem específica na abstinência alcoólica — a própria farmacocinética faz uma retirada gradual mesmo sem redução ativa da dose, reduzindo risco de rebote abrupto.",
    "Via retal é uma alternativa útil e pouco lembrada para controle de crises convulsivas fora do ambiente hospitalar (ex: crise febril prolongada em criança, indisponibilidade de acesso venoso).",
    "Evitar em idosos para uso ansiolítico crônico — a meia-vida efetiva pode ultrapassar 100 horas nessa população pela redução do metabolismo hepático, levando a acúmulo silencioso e quedas.",
  ],

  referencias: [
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
    "APA Practice Guideline",
    "UpToDate",
    "American Society of Addiction Medicine (ASAM) Guideline",
  ],
};
