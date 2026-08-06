import { Medicamento } from "../../types";

export const naloxona: Medicamento = {
  id: "naloxona",

  nome: "Naloxona",

  nomeComercial: [
    "Narcan",
  ],

  classe: "Antagonista opioide",

  subclasse: "Antídoto/agente de resgate",

  mecanismo:
    "Antagonista competitivo puro dos receptores opioides mu (µ), deslocando agonistas opioides desses receptores e revertendo rapidamente a depressão respiratória e do sistema nervoso central causada por overdose de opioide.",

  posologias: [
    {
      indicacao: "Overdose/Intoxicação Aguda por Opioides",
      doseInicial: "0,4–2 mg IV, IM, SC, ou 4 mg via spray intranasal",
      doseUsual: "Repetir 0,4–2 mg a cada 2–3 minutos conforme resposta, até reversão da depressão respiratória",
      doseMaxima: "10 mg (dose cumulativa) — sem resposta nesse ponto, reconsiderar a causa da depressão respiratória",
      nivelEvidencia: 5,
    },
  ],

  meiaVida:
    "~30–90 minutos — mais curta que a maioria dos opioides, o que gera risco real de re-sedação após a reversão inicial (ver observações)",

  metabolizacao:
    "Metabolização hepática (glucuronidação), com excreção predominantemente renal dos metabólitos.",

  indicacoes: [
    "Overdose/intoxicação aguda por opioides, com depressão respiratória e/ou rebaixamento do nível de consciência",
    "Reversão de depressão respiratória induzida por opioide em contexto perioperatório",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à naloxona (rara)",
    "Não há contraindicação absoluta relevante dado o contexto de risco iminente de vida da overdose opioide",
  ],

  vantagens: [
    "Reversão rápida e eficaz da depressão respiratória potencialmente fatal por overdose opioide",
    "Perfil de segurança excelente — mesmo em dose incorreta ou uso desnecessário, o risco é baixo comparado ao benefício potencial",
    "Disponível em apresentação intranasal, permitindo uso leigo em kits comunitários de resposta a overdose",
  ],

  desvantagens: [
    "Meia-vida mais curta que a maioria dos opioides (especialmente metadona e fentanil) — risco real de depressão respiratória recorrente ('re-sedação') após o efeito da naloxona passar, exigindo observação prolongada ou doses repetidas",
    "Precipita síndrome de abstinência aguda e intensa em pacientes dependentes — extremamente desconfortável, embora não seja tipicamente fatal, e pode gerar agitação e comportamento imprevisível",
    "Não reverte depressão respiratória por outras causas (ex.: benzodiazepínicos, álcool)",
  ],

  efeitosAdversos: [
    "Síndrome de abstinência precipitada (taquicardia, hipertensão, agitação, náusea/vômito, piloereção, lacrimejamento)",
    "Agitação",
    "Raramente, edema pulmonar (mais descrito com reversão muito rápida em dose alta)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Outros opioides — antagonismo direto, é o próprio mecanismo terapêutico da naloxona",
    "Sem interações farmacocinéticas clinicamente relevantes conhecidas",
  ],

  ganhoPeso: "Não aplicável — uso agudo/pontual em emergência.",

  sedacao: "Nenhuma — reverte sedação, não causa.",

  sexual: "Não aplicável — sem dados relevantes para uso agudo.",

  qt: "Muito baixo — sem efeito relevante conhecido sobre o intervalo QT.",

  gravidez:
    "Atravessa a placenta; pode precipitar abstinência fetal/neonatal em gestante dependente de opioides. Ainda assim, overdose materna não tratada representa risco maior à vida da mãe e do feto — o uso não deve ser retido por esse motivo numa emergência.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados limitados sobre passagem para o leite materno; geralmente considerada compatível dado o contexto emergencial e a baixa exposição esperada por essa via.",

  lactacaoCategoria: "cautela",

  renal:
    "Sem necessidade de ajuste específico bem estabelecida para o uso agudo em emergência.",

  hepatica:
    "Metabolização hepática — a duração de ação pode ser menos previsível em hepatopatia grave, mas isso não deve atrasar o uso emergencial diante de depressão respiratória.",

  observacoes:
    "A naloxona é o antídoto de escolha na overdose opioide, com uso amplamente disseminado inclusive fora do ambiente hospitalar (kits comunitários, spray intranasal para uso leigo). O ponto de segurança mais importante na prática é sua meia-vida curta em relação a muitos opioides: um paciente revertido pode voltar a apresentar depressão respiratória horas depois, especialmente após overdose por opioides de ação prolongada (metadona) ou muito potentes (fentanil e análogos) — por isso a observação clínica prolongada após a reversão inicial é indispensável, não opcional.",

  perolasClinicas: [
    "Titular a dose para reverter a depressão respiratória, não para 'acordar' completamente o paciente — reversão excessivamente rápida/completa pode precipitar abstinência grave e agitação intensa, dificultando o manejo.",
    "Sempre manter observação prolongada após a reversão, especialmente diante de overdose por opioides de ação longa (metadona) ou muito potentes (fentanil e análogos), pelo risco de re-sedação quando a naloxona 'passar' antes do opioide.",
    "A formulação intranasal foi desenhada justamente para uso leigo/comunitário — orientar familiares de pacientes em risco sobre sua disponibilidade e uso é uma intervenção de redução de danos com evidência robusta.",
    "Não hesitar em administrar por suspeita clínica de overdose opioide mesmo sem confirmação — o risco de uso desnecessário é baixo frente ao benefício potencial.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "World Health Organization (WHO). Community management of opioid overdose.",
    "Stahl's Essential Psychopharmacology",
  ],
};
