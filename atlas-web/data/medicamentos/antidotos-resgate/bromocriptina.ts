import { Medicamento } from "../../types";

export const bromocriptina: Medicamento = {
  id: "bromocriptina",

  nome: "Bromocriptina",

  nomeComercial: [
    "Parlodel",
  ],

  classe: "Agonista dopaminérgico",

  subclasse: "Antídoto/agente de resgate (derivado do ergot)",

  mecanismo:
    "Agonista dos receptores D2 dopaminérgicos, repondo a atividade dopaminérgica central reduzida pelo bloqueio D2 dos antipsicóticos — mecanismo considerado central na fisiopatologia da Síndrome Neuroléptica Maligna — ou pela retirada abrupta de agonistas dopaminérgicos em doença de Parkinson.",

  posologias: [
    {
      indicacao: "Síndrome Neuroléptica Maligna (moderada a grave, adjuvante ao suporte clínico)",
      doseInicial: "2,5 mg VO/SNG, 2–3x/dia",
      doseUsual: "2,5–10 mg 3x/dia, podendo chegar a 20–30 mg/dia em casos graves",
      doseMaxima: "40 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Hiperprolactinemia (indicação original)",
      doseInicial: "1,25–2,5 mg/dia",
      doseUsual: "2,5–15 mg/dia",
      doseMaxima: "15 mg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "~3–8 horas (efeitos clínicos podem persistir mais, por acúmulo de metabólitos ativos)",

  metabolizacao:
    "Metabolização hepática extensa pela CYP3A4, com excreção predominantemente biliar/fecal.",

  indicacoes: [
    "Síndrome Neuroléptica Maligna moderada a grave (adjuvante ou alternativa ao dantroleno, especialmente quando a retirada abrupta de agonista dopaminérgico for a causa)",
    "Hiperprolactinemia (indicação original, aprovação regulatória)",
    "Parkinsonismo (uso neurológico, fora do contexto de emergência psiquiátrica)",
  ],

  contraIndicacoes: [
    "Hipertensão não controlada",
    "Pré-eclâmpsia/eclâmpsia",
    "Hipersensibilidade a derivados do ergot",
    "Psicose grave não controlada (contraindicação relativa importante neste contexto — ver observações)",
  ],

  vantagens: [
    "Reverte diretamente o mecanismo dopaminérgico central proposto para a NMS, de forma complementar ao mecanismo periférico do dantroleno",
    "Disponível por via oral/sonda nasogástrica — não exige acesso parenteral como o dantroleno",
    "Especialmente indicada quando a causa foi retirada abrupta de agonista dopaminérgico (ex.: levodopa em Parkinson)",
  ],

  desvantagens: [
    "Pode exacerbar os sintomas psicóticos de base — risco clinicamente relevante, já que a NMS costuma ocorrer justamente em pacientes em tratamento antipsicótico para um transtorno psicótico",
    "Início de ação mais lento que o dantroleno",
    "Hipotensão postural e náusea/vômito frequentes",
    "Evidência para uso em NMS baseada em séries de casos e opinião de especialista, não em ensaios clínicos randomizados",
  ],

  efeitosAdversos: [
    "Náusea e vômito",
    "Hipotensão postural",
    "Cefaleia",
    "Confusão",
    "Exacerbação de sintomas psicóticos",
    "Discinesias",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Outros agonistas dopaminérgicos (efeito aditivo)",
    "Antipsicóticos (antagonismo mútuo — pode reduzir a eficácia de ambos e piorar a psicose de base)",
    "Anti-hipertensivos (efeito hipotensor aditivo)",
    "Inibidores potentes da CYP3A4, como macrolídeos (ex. eritromicina) — podem aumentar os níveis séricos de bromocriptina",
  ],

  ganhoPeso: "Não aplicável — uso agudo/pontual no contexto de emergência.",

  sedacao: "Baixa",

  sexual: "Não aplicável — sem dados relevantes para uso agudo em emergência.",

  qt: "Baixo — sem efeito relevante consistentemente descrito.",

  gravidez:
    "Atravessa a placenta. Uso na gestação é controverso e geralmente evitado, exceto quando o benefício justifica claramente o risco — há histórico de eventos cardiovasculares maternos associados ao uso para supressão de lactação.",

  gravidezCategoria: "evitar",

  lactacao:
    "Suprime a lactação pelo próprio mecanismo de ação (inibição da secreção de prolactina) — não é compatível com amamentação.",

  lactacaoCategoria: "evitar",

  renal:
    "Dados limitados sobre necessidade de ajuste específico; usar com cautela na insuficiência renal.",

  hepatica:
    "Metabolização hepática extensa — usar com cautela e considerar redução de dose em insuficiência hepática significativa.",

  observacoes:
    "A bromocriptina é usada na Síndrome Neuroléptica Maligna como adjuvante ao dantroleno e ao suporte clínico, ou como alternativa quando a causa identificada é a retirada abrupta de um agonista dopaminérgico (nesse cenário específico, a conduta correta inclui reintroduzir o próprio agonista, não necessariamente a bromocriptina). A principal ressalva clínica é que, sendo um agonista dopaminérgico, pode piorar os sintomas psicóticos que motivaram o uso do antipsicótico causador da NMS — a decisão de uso deve pesar a gravidade da NMS contra esse risco, geralmente em ambiente de terapia intensiva com reavaliação psiquiátrica próxima.",

  perolasClinicas: [
    "Efeito mais lento que o dantroleno — não esperar resposta imediata; a melhora do quadro de NMS costuma ser observada em dias, não em horas.",
    "Monitorar ativamente sinais de exacerbação psicótica durante o uso, especialmente em pacientes com esquizofrenia ou outro transtorno psicótico de base.",
    "Quando a NMS foi precipitada por retirada abrupta de agonista dopaminérgico (ex.: em Parkinson), a conduta mais direta costuma ser reintroduzir o próprio agonista que foi suspenso, não necessariamente trocar para bromocriptina.",
    "Orientar sobre hipotensão postural ao mobilizar o paciente, especialmente nas primeiras doses.",
  ],

  referencias: [
    "Strawn JR, Keck PE, Caroff SN. Neuroleptic malignant syndrome. Am J Psychiatry. 2007.",
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};
