import { Medicamento } from "../../types";

export const lorazepam: Medicamento = {
  id: "lorazepam",

  nome: "Lorazepam",

  nomeComercial: [
    "Lorax",
    "Mesmerin",
  ],

  classe: "Benzodiazepínico",

  subclasse: "Ação intermediária",

  mecanismo:
    "Agonista do receptor GABA-A, potencializando a ação inibitória do GABA no SNC ao aumentar a frequência de abertura dos canais de cloreto. Sua metabolização hepática simples, por glucuronidação direta, sem passagem pelo sistema CYP450, confere um perfil farmacocinético mais previsível.",

  posologias: [
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "0,5–1 mg 2–3x/dia",
      doseUsual: "2–6 mg/dia",
      doseMaxima: "10 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Catatonia",
      doseInicial: "1–2 mg IV ou VO (teste do lorazepam)",
      doseUsual: "2–8 mg/dia",
      doseMaxima: "24 mg/dia (sob monitorização)",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Status Epilepticus",
      doseInicial: "4 mg IV (0,1 mg/kg), podendo repetir em 10–15 min",
      doseUsual: "4–8 mg IV",
      doseMaxima: "8 mg por episódio agudo",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Agitação Psicomotora Aguda",
      doseInicial: "1–2 mg IM ou IV",
      doseUsual: "2–4 mg/dia",
      doseMaxima: "8 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Síndrome de Abstinência Alcoólica",
      doseInicial: "2 mg a cada 6–8h (esquema fixo ou sintomático)",
      doseUsual: "4–8 mg/dia (esquema decrescente)",
      doseMaxima: "12 mg/dia (sob monitorização)",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "10–20 horas",

  metabolizacao:
    "Metabolização hepática por glucuronidação direta (via UGT), sem passagem significativa pelo sistema CYP450 e sem formação de metabólitos ativos.",

  indicacoes: [
    "Transtorno de Ansiedade Generalizada",
    "Catatonia (primeira linha)",
    "Status epilepticus",
    "Agitação psicomotora aguda",
    "Síndrome de abstinência alcoólica, especialmente em hepatopatas",
    "Sedação pré-procedimento",
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
    "Metabolização hepática simples (glucuronidação), sem metabólitos ativos, sendo preferido em hepatopatas e idosos",
    "Disponível para uso parenteral (IM e IV), útil em contextos de urgência",
    "Primeira linha no tratamento da catatonia",
    "Perfil farmacocinético previsível, com menor risco de interações via CYP450",
    "Amplamente utilizado em ambiente hospitalar para agitação aguda e status epilepticus",
  ],

  desvantagens: [
    "Risco de dependência física e psicológica com uso prolongado",
    "Sedação e prejuízo cognitivo, especialmente em idosos",
    "Necessidade de retirada gradual para evitar síndrome de abstinência",
    "Meia-vida intermediária pode favorecer sintomas entre doses em alguns pacientes",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Amnésia anterógrada",
    "Ataxia e incoordenação motora",
    "Depressão respiratória (especialmente via parenteral)",
    "Confusão mental em idosos",
    "Tontura",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Álcool",
    "Opioides (risco de sedação profunda, depressão respiratória e óbito — alerta de tarja preta da FDA para o uso concomitante de benzodiazepínicos e opioides)",
    "Outros depressores do SNC",
    "Ácido valproico (pode aumentar níveis de lorazepam por inibição da glicuronidação)",
    "Probenecida (reduz clearance do lorazepam)",
    "Clozapina (relatos de sedação intensa, hipersalivação, hipotensão, ataxia, delirium e parada respiratória — associação a evitar, especialmente por via parenteral)",
    "Teofilina/aminofilina (podem reduzir o efeito ansiolítico/sedativo do lorazepam)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Alta",

  sexual: "Muito baixa",

  qt: "Muito baixo",

  sintomasDescontinuacao: "Alto",

  gravidez:
    "Evitar, especialmente no primeiro trimestre (associação a fenda palatina) e no periparto (risco de floppy infant syndrome e síndrome de abstinência neonatal). Reservar para situações de urgência, como status epilepticus ou catatonia grave.",

  gravidezCategoria: "evitar",

  lactacao:
    "Passagem para o leite materno, com risco de sedação e letargia no lactente. Evitar uso prolongado durante a amamentação.",

  lactacaoCategoria: "evitar",

  renal:
    "Não necessita ajuste significativo na insuficiência renal, mas usar com cautela em casos graves pelo risco de acúmulo do metabólito glicuronídeo inativo.",

  ajusteRenalNecessario: false,

  hepatica:
    "Benzodiazepínico preferencial em insuficiência hepática, devido à metabolização por glucuronidação direta, sem necessidade das etapas oxidativas hepáticas (CYP450) comprometidas nessa condição.",

  observacoes:
    "O lorazepam se destaca entre os benzodiazepínicos por sua metabolização hepática simples, sem metabólitos ativos, o que o torna a escolha preferencial em pacientes idosos e hepatopatas. É considerado a primeira linha no tratamento da catatonia (teste do lorazepam) e é amplamente utilizado em ambiente hospitalar para agitação psicomotora aguda, status epilepticus e abstinência alcoólica, especialmente pela disponibilidade de apresentação parenteral. Como os demais benzodiazepínicos, deve ser utilizado pelo menor tempo possível, com atenção ao risco de dependência, tolerância e depressão respiratória, sobretudo quando associado a opioides ou álcool.",

  perolasClinicas: [
    "O 'teste do lorazepam' na catatonia (1-2mg IV/IM, observando resposta em 5-10 minutos) é ao mesmo tempo diagnóstico e terapêutico — resposta positiva confirma catatonia e frequentemente já melhora o quadro, sendo o primeiro passo antes de considerar ECT.",
    "É o benzodiazepínico preferido em hepatopatas graves justamente pelo mesmo motivo que o torna ideal em catatonia/emergências: metabolização por glucuronidação direta, sem depender das vias oxidativas hepáticas comprometidas na insuficiência hepática.",
    "Doses repetidas ou altas em catatonia (até 24mg/dia) são seguras e esperadas — não confundir a dose necessária para catatonia com a dose ansiolítica habitual, muito menor.",
    "Equivalência aproximada tendo o diazepam como referência: lorazepam 1–2 mg ≈ diazepam 10 mg (Ashton Manual; Maudsley Prescribing Guidelines cita valores na mesma faixa, com variação entre fontes). Serve como orientação qualitativa para troca de benzodiazepínico (ex.: ao converter para lorazepam em hepatopatas, pela metabolização mais simples) — não é uma conversão farmacocinética exata; ajustar clinicamente considerando meia-vida, tolerância cruzada incompleta e resposta individual.",
  ],

  referencias: [
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
    "APA Practice Guideline",
    "UpToDate",
    "American Society of Addiction Medicine (ASAM) Guideline",
  ],
};
