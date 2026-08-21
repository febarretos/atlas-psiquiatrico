import { Medicamento } from "../../types";

export const acamprosato: Medicamento = {
  id: "acamprosato",

  nome: "Acamprosato",

  nomeComercial: [
    "Campral",
  ],

  classe: "Modulador glutamatérgico",

  mecanismo:
    "Mecanismo não totalmente elucidado; acredita-se que module o equilíbrio entre neurotransmissão glutamatérgica excitatória (antagonismo funcional de receptores NMDA) e GABAérgica inibitória, normalizando a hiperexcitabilidade do sistema glutamatérgico que persiste após a abstinência de álcool prolongado. Diferente da naltrexona, não atua sobre o sistema opioide — o benefício clínico é sobre a manutenção da abstinência (reduz o craving associado à hiperexcitabilidade pós-abstinência), não sobre o reforço agudo do consumo.",

  posologias: [
    {
      indicacao: "Manutenção da abstinência no Transtorno por Uso de Álcool (iniciar após desintoxicação, com o paciente já abstinente)",
      doseInicial: "666 mg 3x/dia (peso ≥60 kg) ou 666 mg — 666 mg — 333 mg/dia (peso <60 kg)",
      doseUsual: "1998 mg/dia (peso ≥60 kg) ou 1332 mg/dia (peso <60 kg)",
      doseMaxima: "1998 mg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "20-33 horas",

  metabolizacao: "NÃO é metabolizado pelo fígado — eliminação renal na forma inalterada, sem interações farmacocinéticas hepáticas relevantes.",

  indicacoes: [
    "Manutenção da abstinência no Transtorno por Uso de Álcool",
  ],

  contraIndicacoes: [
    "Insuficiência renal grave (clearance de creatinina <30 mL/min)",
    "Hipersensibilidade ao acamprosato",
  ],

  vantagens: [
    "Não é metabolizado pelo fígado — opção particularmente adequada em pacientes com hepatopatia associada ao uso de álcool, cenário clínico comum nessa população",
    "Não é sedativo, não causa dependência nem tem potencial de abuso",
    "Pode ser combinado com naltrexona quando indicado, por mecanismos de ação distintos e complementares",
  ],

  desvantagens: [
    "Posologia de 3 tomadas diárias (6 comprimidos/dia na dose padrão) prejudica a adesão em comparação com opções de dose única",
    "Eficácia depende de o paciente já estar abstinente ao iniciar — não trata intoxicação nem abstinência aguda",
    "Diarreia é efeito adverso frequente e pode levar à descontinuação",
  ],

  efeitosAdversos: [
    "Diarreia (efeito adverso mais comum)",
    "Náusea",
    "Dor abdominal",
    "Cefaleia",
    "Prurido/erupção cutânea (menos comum)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Sem interações farmacocinéticas hepáticas relevantes, dado que não é metabolizado pelo fígado",
    "Sem interação clinicamente significativa descrita com álcool (não causa reação aversiva, diferente do dissulfiram)",
  ],

  ganhoPeso: "Nenhum",

  sedacao: "Nenhuma",

  sexual: "Nenhuma",

  qt: "Nenhum",

  gravidez:
    "Dados limitados em humanos; evitar uso rotineiro na gestação, considerar apenas se o benefício justificar claramente o risco.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados limitados sobre passagem para o leite materno — usar com cautela.",

  lactacaoCategoria: "cautela",

  renal:
    "Contraindicado em insuficiência renal grave (clearance <30 mL/min), pois a eliminação é predominantemente renal. Ajuste de dose necessário em insuficiência renal moderada.",

  ajusteRenalNecessario: true,

  hepatica:
    "Não requer ajuste de dose por insuficiência hepática — não é metabolizado pelo fígado, o que o torna uma opção segura mesmo em hepatopatia relacionada ao álcool.",

  observacoes:
    "O acamprosato é medicação de primeira linha para manutenção da abstinência no Transtorno por Uso de Álcool, com mecanismo de ação distinto e complementar ao da naltrexona (glutamatérgico/GABAérgico vs. opioide). Deve ser iniciado após o paciente já estar abstinente — diferente da naltrexona, que pode ser iniciada mesmo com consumo ainda presente, visando reduzir a quantidade consumida. A ausência de metabolização hepática é uma vantagem prática relevante nessa população, frequentemente com algum grau de disfunção hepática associada ao uso crônico de álcool.",

  perolasClinicas: [
    "Diferente da naltrexona, o acamprosato não reduz o prazer imediato de beber — o benefício é sobre a manutenção da abstinência já alcançada, não sobre o consumo em curso; iniciar apenas após desintoxicação, não durante consumo ativo.",
    "A posologia de 3x/dia é a principal barreira de adesão — dispositivos de lembrete (alarme, blister organizador) ajudam mais aqui do que em fármacos de dose única.",
    "É a opção preferencial quando há hepatopatia significativa que desaconselha naltrexona ou dissulfiram (embora naltrexona seja segura em doses padrão mesmo com função hepática levemente alterada, monitorizada).",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "APA Practice Guideline for the Pharmacological Treatment of Patients with Alcohol Use Disorder",
    "Jonas DE, et al. Pharmacotherapy for adults with alcohol use disorders in outpatient settings: a systematic review and meta-analysis. JAMA. 2014.",
    "Bula de referência ANVISA/FDA (Campral)",
  ],
};
