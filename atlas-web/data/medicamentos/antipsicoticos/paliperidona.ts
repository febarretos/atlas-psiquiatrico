import { Medicamento } from "../../types";

export const paliperidona: Medicamento = {
  id: "paliperidona",

  nome: "Paliperidona",

  nomeComercial: [
    "Invega",
    "Xeplion",
    "Trevicta",
  ],

  classe: "Antipsicótico",

  subclasse: "Atípico (2ª geração)",

  mecanismo:
    "Metabólito ativo principal da risperidona (9-hidroxi-risperidona), com o mesmo perfil farmacodinâmico: antagonismo dos receptores dopaminérgicos D2 e serotoninérgicos 5-HT2A, com afinidade adicional por receptores alfa-1 e alfa-2 adrenérgicos e H1 histaminérgicos.",

  posologias: [
    {
      indicacao: "Esquizofrenia (via oral, liberação prolongada OROS)",
      doseInicial: "6 mg/dia",
      doseUsual: "6–12 mg/dia",
      doseMaxima: "12 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Esquizofrenia (injetável de ação prolongada mensal)",
      doseInicial: "150 mg no dia 1 e 100 mg no dia 8 (deltoide)",
      doseUsual: "75–150 mg/mês",
      doseMaxima: "150 mg/mês",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Esquizofrenia (injetável de ação prolongada trimestral)",
      doseInicial: "Após pelo menos 4 meses de formulação mensal estabilizada",
      doseUsual: "175–525 mg a cada 3 meses (dose proporcional à mensal)",
      doseMaxima: "525 mg a cada 3 meses",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Transtorno Esquizoafetivo",
      doseInicial: "6 mg/dia (oral)",
      doseUsual: "6–12 mg/dia",
      doseMaxima: "12 mg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "23 horas (oral); 25–49 dias (injetável trimestral, reflete liberação prolongada)",

  metabolizacao:
    "Eliminação predominantemente renal (cerca de 80% inalterada ou por via não hepática), com metabolização hepática mínima (CYP2D6 e CYP3A4 contribuem de forma pouco significativa) — diferença farmacocinética relevante frente à maioria dos antipsicóticos.",

  indicacoes: [
    "Esquizofrenia",
    "Transtorno Esquizoafetivo",
    "Manutenção de longo prazo em esquizofrenia com formulações injetáveis de ação prolongada",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à paliperidona ou à risperidona",
  ],

  vantagens: [
    "Formulação oral de liberação prolongada (tecnologia OROS) proporciona absorção mais estável e níveis plasmáticos mais constantes, reduzindo picos e vales",
    "Disponível em formulações injetáveis de ação prolongada mensal e trimestral, amplamente utilizadas para melhorar adesão em esquizofrenia, especialmente em pacientes com histórico de descontinuação de tratamento oral",
    "Eliminação predominantemente renal (não hepática) reduz o risco de interações medicamentosas mediadas por enzimas do citocromo P450",
    "Não requer titulação complexa nem ajuste por metabolizadores CYP2D6",
  ],

  desvantagens: [
    "Hiperprolactinemia relativamente frequente, podendo causar galactorreia, amenorreia e disfunção sexual",
    "Sintomas extrapiramidais dose-dependentes, mais frequentes que em outros atípicos de perfil mais favorável",
    "Eliminação renal exige ajuste cuidadoso e contraindica formulações injetáveis em insuficiência renal grave",
    "Comprimido de liberação prolongada (OROS) não deve ser mastigado ou partido, e o invólucro não absorvível pode aparecer nas fezes, o que costuma gerar dúvidas do paciente",
  ],

  efeitosAdversos: [
    "Sedação",
    "Sintomas extrapiramidais (acatisia, parkinsonismo)",
    "Hiperprolactinemia",
    "Taquicardia",
    "Cefaleia",
    "Ganho de peso moderado",
  ],

  interacoes: [
    "Fármacos que prolongam o intervalo QT (efeito aditivo, ainda que menos pronunciado que a ziprasidona)",
    "Agonistas dopaminérgicos (levodopa) — antagonismo de efeito",
    "Anti-hipertensivos (risco de hipotensão ortostática, especialmente por efeito alfa-1 antagonista)",
    "Carbamazepina (indutor enzimático, pode reduzir níveis séricos por aumento do clearance)",
  ],

  ganhoPeso: "Moderado",

  sedacao: "Moderada",

  sexual: "Alta",

  qt: "Baixo",

  gravidez:
    "Dados limitados; uso possível quando o benefício justificar o risco, com monitorização de sintomas extrapiramidais e de abstinência no recém-nascido.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno; dados limitados sobre segurança, usar com cautela e monitorização do lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Requer ajuste de dose conforme a função renal na formulação oral; formulações injetáveis de ação prolongada são contraindicadas ou requerem cautela significativa em insuficiência renal moderada a grave.",

  ajusteRenalNecessario: true,

  hepatica:
    "Não necessita ajuste de dose na insuficiência hepática leve a moderada, dado o metabolismo hepático mínimo; dados limitados em insuficiência grave.",

  observacoes:
    "A paliperidona é o metabólito ativo da risperidona e compartilha seu perfil farmacodinâmico e a maior parte de seus efeitos adversos, especialmente hiperprolactinemia e sintomas extrapiramidais dose-dependentes. Sua principal diferença prática está na farmacocinética: a formulação oral utiliza tecnologia OROS de liberação prolongada, proporcionando níveis plasmáticos mais estáveis, e a eliminação é predominantemente renal, ao contrário da maioria dos antipsicóticos que dependem de metabolismo hepático — isso reduz o potencial de interações medicamentosas via citocromo P450, mas exige atenção redobrada e ajuste de dose em pacientes com insuficiência renal. É amplamente utilizada em suas formulações injetáveis de ação prolongada (mensal e trimestral), que são pilares importantes no manejo de manutenção da esquizofrenia, particularmente em pacientes com baixa adesão ao tratamento oral.",

  perolasClinicas: [
    "Orientar o paciente que o invólucro não absorvível do comprimido OROS pode aparecer inteiro/visível nas fezes — é esperado e não significa falha de absorção do princípio ativo, mas gera dúvida frequente se não for explicado antecipadamente.",
    "Por depender pouco do metabolismo hepático/CYP, é uma opção interessante em pacientes polimedicados com múltiplas interações via citocromo P450 já estabelecidas com outros fármacos.",
    "A transição direta de risperidona oral para paliperidona injetável de ação prolongada é a estratégia mais comum na prática — não é necessário 'provar' paliperidona oral antes, já que farmacologicamente é a mesma molécula ativa.",
    "Diferente da maioria dos antipsicóticos, a dose deve ser reduzida (não apenas monitorizada) proativamente conforme o clearance de creatinina cai — checar função renal antes de cada início ou reinício de tratamento.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia",
    "Bula de referência ANVISA/FDA (Invega)",
  ],
};
