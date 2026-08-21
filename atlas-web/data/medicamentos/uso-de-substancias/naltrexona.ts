import { Medicamento } from "../../types";

export const naltrexona: Medicamento = {
  id: "naltrexona",

  nome: "Naltrexona",

  nomeComercial: [
    "Revia",
  ],

  classe: "Antagonista opioide",

  mecanismo:
    "Antagonista competitivo dos receptores opioides mu. No Transtorno por Uso de Álcool, reduz o reforço/euforia associados ao consumo ao bloquear a liberação de opioides endógenos induzida pelo álcool, reduzindo craving e a quantidade consumida por episódio de recaída. No Transtorno por Uso de Opioides, bloqueia o efeito de opioides exógenos, prevenindo recaída após desintoxicação completa.",

  posologias: [
    {
      indicacao: "Transtorno por Uso de Álcool",
      doseInicial: "25 mg/dia (primeiros 3-4 dias, para tolerabilidade)",
      doseUsual: "50 mg/dia",
      doseMaxima: "100 mg/dia (uso off-label em não respondedores à dose padrão)",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno por Uso de Opioides (prevenção de recaída, pós-desintoxicação)",
      doseInicial: "25 mg/dia",
      doseUsual: "50 mg/dia",
      doseMaxima: "50 mg/dia (via oral) — existe formulação injetável de depósito mensal (naltrexona ER, 380 mg IM a cada 4 semanas) em alguns mercados, não abordada aqui",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "4 horas (naltrexona); 13 horas (6-beta-naltrexol, metabólito ativo) — efeito de bloqueio opioide dura cerca de 24-72h por dose, por maior afinidade/tempo de ocupação do receptor",

  metabolizacao: "Metabolização hepática (di-hidrodiol desidrogenase), com eliminação predominantemente renal dos metabólitos.",

  indicacoes: [
    "Transtorno por Uso de Álcool — redução do consumo e prevenção de recaída ao padrão de uso intenso",
    "Transtorno por Uso de Opioides — prevenção de recaída após desintoxicação completa",
  ],

  contraIndicacoes: [
    "Uso atual de opioides (exógenos, incluindo analgésicos opioides e opioides ilícitos) — precipita síndrome de abstinência aguda grave; exige período sem opioides de pelo menos 7-10 dias antes de iniciar",
    "Insuficiência hepática aguda ou hepatite aguda",
    "Hipersensibilidade à naltrexona",
    "ATENÇÃO — risco de segurança: paciente em naltrexona que descontinua o tratamento e retorna ao uso de opioides perde a tolerância prévia — se usar a mesma dose que usava antes, o risco de overdose respiratória aumenta significativamente. Orientar explicitamente sobre esse risco ao suspender.",
  ],

  vantagens: [
    "Reduz consumo de álcool e frequência de recaída ao padrão de uso intenso, com boa evidência em Transtorno por Uso de Álcool",
    "Não é sedativo, não causa dependência nem tem potencial de abuso próprio",
    "Formulação oral simples, uma tomada diária",
  ],

  desvantagens: [
    "Bloqueia completamente o efeito de opioides — inutiliza analgesia opioide em emergências/cirurgias enquanto em uso, exigindo comunicação com a equipe de saúde",
    "Exige verificação confiável de que o paciente está sem uso de opioides antes de iniciar",
    "Hepatotoxicidade dose-dependente em doses supraterapêuticas (historicamente descrita em doses ≥300 mg/dia, bem acima da dose padrão de 50 mg/dia)",
  ],

  efeitosAdversos: [
    "Náusea (efeito adverso mais comum, geralmente transitório)",
    "Cefaleia",
    "Tontura",
    "Fadiga",
    "Elevação de transaminases hepáticas (monitorizar função hepática, sobretudo no início do tratamento)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Opioides (analgésicos ou ilícitos): naltrexona bloqueia o efeito analgésico/euforizante — evitar uso concomitante; em emergências, a equipe precisa de estratégias analgésicas alternativas (ex.: analgesia regional, anti-inflamatórios, doses maiores de opioide sob monitorização em ambiente controlado, quando inevitável)",
    "Antitussígenos/antidiarreicos com codeína ou derivados opioides — podem perder eficácia",
  ],

  ganhoPeso: "Nenhum",

  sedacao: "Nenhuma",

  sexual: "Baixa",

  qt: "Nenhum",

  gravidez:
    "Dados limitados em humanos; evitar uso rotineiro na gestação, considerar apenas se o benefício justificar claramente o risco.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados limitados; passa para o leite materno em pequena quantidade — usar com cautela, monitorando o lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Usar com cautela em insuficiência renal; dados limitados sobre necessidade de ajuste específico de dose.",

  hepatica:
    "Contraindicado em insuficiência hepática aguda/hepatite aguda. Monitorizar função hepática antes de iniciar e periodicamente durante o tratamento, especialmente nos primeiros meses.",

  observacoes:
    "A naltrexona é medicação de primeira linha para Transtorno por Uso de Álcool, com o mecanismo mais direto entre as opções farmacológicas (reduz o reforço positivo do consumo). Diferente do dissulfiram, não causa reação aversiva ao álcool — o paciente pode consumir álcool sob naltrexona sem reação física, o que reduz o risco de eventos adversos graves mas também depende mais da adesão voluntária. Antes de iniciar, é essencial confirmar ausência de uso recente de opioides (histórico detalhado e, quando disponível, teste toxicológico) para evitar abstinência precipitada.",

  perolasClinicas: [
    "Sempre perguntar ativamente sobre uso de opioides — incluindo analgésicos prescritos recentes e uso recreativo — antes de iniciar naltrexona; a abstinência precipitada em quem ainda tem opioide no organismo é abrupta e grave.",
    "Pacientes que usam naltrexona para álcool podem seguir bebendo sem reação física adversa (ao contrário do dissulfiram) — o benefício aparece como redução do craving e do consumo, não como aversão; ajustar a expectativa do paciente evita frustração precoce com o tratamento.",
    "Se o paciente precisar de analgesia opioide para procedimento eletivo, planejar a suspensão da naltrexona com antecedência (geralmente 72h antes) e alinhar com a equipe cirúrgica/anestesiologia.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "APA Practice Guideline for the Pharmacological Treatment of Patients with Alcohol Use Disorder",
    "Jonas DE, et al. Pharmacotherapy for adults with alcohol use disorders in outpatient settings: a systematic review and meta-analysis. JAMA. 2014.",
    "Bula de referência ANVISA/FDA (Revia)",
  ],
};
