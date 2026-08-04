import { Medicamento } from "../../types";

export const alprazolam: Medicamento = {
  id: "alprazolam",

  nome: "Alprazolam",

  nomeComercial: [
    "Frontal",
    "Apraz",
    "Alprax",
  ],

  classe: "Benzodiazepínico",

  subclasse: "Ação curta",

  mecanismo:
    "Agonista do receptor GABA-A, potencializando a ação inibitória do GABA no SNC ao aumentar a frequência de abertura dos canais de cloreto. Apresenta alta potência e afinidade pelo receptor, com efeito ansiolítico e sedativo pronunciado.",

  posologias: [
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "0,25–0,5 mg 3x/dia",
      doseUsual: "1–6 mg/dia",
      doseMaxima: "10 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "0,25 mg 3x/dia",
      doseUsual: "0,5–4 mg/dia",
      doseMaxima: "4 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Ansiedade Antecipatória / Situacional",
      doseInicial: "0,25–0,5 mg",
      doseUsual: "0,25–0,5 mg conforme necessário",
      doseMaxima: "1 mg/dia",
      nivelEvidencia: 2,
    },
  ],

  meiaVida: "11 horas (variação de 6–20 horas)",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP3A4, com formação de metabólitos com atividade farmacológica mínima.",

  indicacoes: [
    "Transtorno do Pânico",
    "Transtorno de Ansiedade Generalizada",
    "Ansiedade antecipatória/situacional",
    "Insônia associada à ansiedade (uso pontual e de curto prazo)",
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
    "Alta potência e rápido início de ação, útil no controle agudo de crises de pânico",
    "Boa evidência de eficácia no transtorno do pânico",
    "Perfil relativamente previsível de resposta clínica",
  ],

  desvantagens: [
    "Meia-vida curta, favorecendo sintomas de rebote e ansiedade entre as doses",
    "Maior risco de dependência e abuso em comparação a benzodiazepínicos de ação mais longa",
    "Síndrome de abstinência mais intensa e de instalação mais rápida",
    "Necessidade de múltiplas tomadas diárias, dificultando a adesão",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Prejuízo de memória (amnésia anterógrada)",
    "Ataxia e incoordenação motora",
    "Irritabilidade e ansiedade de rebote entre doses",
    "Tontura",
    "Desinibição paradoxal",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Álcool",
    "Opioides (risco de sedação profunda, depressão respiratória e óbito — alerta de tarja preta da FDA para o uso concomitante de benzodiazepínicos e opioides)",
    "Outros depressores do SNC",
    "Inibidores potentes da CYP3A4 (ex: cetoconazol, claritromicina, ritonavir)",
    "Carbamazepina (redução dos níveis de alprazolam)",
    "Fluvoxamina (inibidor potente da CYP3A4 — pode aproximadamente dobrar os níveis plasmáticos de alprazolam)",
    "Fluoxetina (inibe a CYP3A4, aumentando a concentração plasmática e a meia-vida do alprazolam)",
    "Suco de toranja/grapefruit (inibe a CYP3A4 intestinal, podendo aumentar os níveis de alprazolam)",
    "Digoxina (alprazolam pode aumentar a digoxinemia, com maior risco em idosos)",
    "Clozapina (relatos de sedação intensa, hipotensão e depressão/parada respiratória com a combinação — usar com extrema cautela)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Alta",

  sexual: "Muito baixa",

  qt: "Muito baixo",

  sintomasDescontinuacao: "Muito alto",

  gravidez:
    "Evitar, especialmente no primeiro trimestre (associação a fenda palatina) e no periparto (risco de floppy infant syndrome e síndrome de abstinência neonatal). Uso apenas quando estritamente necessário.",

  gravidezCategoria: "evitar",

  lactacao:
    "Passagem para o leite materno; pode causar sedação e dificuldade de sucção no lactente. Evitar uso durante a amamentação sempre que possível.",

  lactacaoCategoria: "evitar",

  renal:
    "Não requer ajuste significativo na insuficiência renal leve a moderada; usar com cautela em casos graves.",

  ajusteRenalNecessario: false,

  hepatica:
    "Usar com cautela e considerar doses menores em insuficiência hepática, pelo risco de acúmulo e sedação excessiva.",

  observacoes:
    "O alprazolam é um dos benzodiazepínicos mais prescritos para transtorno do pânico, mas sua meia-vida curta é responsável por um perfil de maior risco de dependência, tolerância e sintomas de rebote entre as doses, quando comparado a benzodiazepínicos de ação mais longa como o clonazepam. Seu uso deve ser criterioso, restrito ao menor tempo possível, com plano de retirada gradual bem estabelecido desde o início do tratamento. A descontinuação abrupta pode precipitar crises convulsivas e deve ser sempre evitada.",

  perolasClinicas: [
    "É o benzodiazepínico com maior potencial de dependência/abuso reconhecido da classe — considerar clonazepam como alternativa de meia-vida mais longa quando tratamento continuado for necessário, mesmo que a dose inicial pareça 'mais fraca'.",
    "Ao trocar por outro benzodiazepínico, converter pela tabela de equivalência (não pelo número de comprimidos) — a alta potência do alprazolam faz com que doses aparentemente pequenas correspondam a doses relevantes de outros agentes.",
    "Ansiedade de rebote entre as doses é frequentemente confundida pelo paciente e pelo médico com 'piora da ansiedade de base', levando a escalonamento inadequado da dose — considerar trocar para formulação de liberação prolongada ou para agente de meia-vida mais longa antes de aumentar a dose.",
    "Equivalência aproximada tendo o diazepam como referência: alprazolam 0,5–1 mg ≈ diazepam 10 mg (Ashton Manual; Maudsley Prescribing Guidelines cita valores da mesma ordem de grandeza, com variação entre fontes). Útil sobretudo para orientar a troca por um benzodiazepínico de meia-vida mais longa no desmame — não é uma conversão mg-a-mg automática: a alta potência e a farmacocinética distinta do alprazolam exigem ajuste clínico gradual, com margem de segurança.",
  ],

  referencias: [
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
    "APA Practice Guideline",
    "CANMAT 2023",
    "UpToDate",
  ],
};
