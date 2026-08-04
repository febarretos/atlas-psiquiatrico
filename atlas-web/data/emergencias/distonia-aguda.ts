import { Emergencia } from "./types";

export const distoniaAguda: Emergencia = {
  id: "distonia-aguda",

  nome: "Distonia Aguda",

  categoria: "Induzida por medicamento",

  gravidade: "alta",

  descricao:
    "Contração muscular sustentada e involuntária que causa posturas anormais, tipicamente surgindo horas a poucos dias após o início ou aumento de dose de um antipsicótico de alta potência (ou antiemético com ação antidopaminérgica, como a metoclopramida). É assustadora para o paciente, mas costuma responder rapidamente ao tratamento com anticolinérgico. A forma laríngea/faríngea, embora rara, é uma emergência de via aérea e deve ser sempre ativamente considerada diante de estridor ou dispneia.",

  quadroClinico: [
    "Crise oculógira (desvio ocular sustentado para cima)",
    "Torcicolo (distonia cervical)",
    "Trismo e protrusão da língua",
    "Opistótono (arqueamento do tronco)",
    "Blefaroespasmo",
    "Forma laríngea/faríngea (rara): estridor, dispneia, disfonia — risco de comprometimento de via aérea",
  ],

  criteriosDiagnosticos: [
    "Início tipicamente dentro de 24-96 horas do início ou aumento de dose de antipsicótico, mais comum com agentes de alta potência (ex.: haloperidol)",
    "Maior risco em pacientes jovens do sexo masculino",
    "Resposta rápida e completa a anticolinérgico parenteral é praticamente diagnóstica",
  ],

  causasComuns: [
    "Início recente ou aumento de dose de antipsicótico de alta potência",
    "Uso de antiemético com ação antidopaminérgica (ex.: metoclopramida)",
    "Fatores de risco: sexo masculino, idade jovem, uso concomitante de cocaína, história prévia de distonia induzida por antipsicótico",
  ],

  condutaImediata: [
    "Avaliar via aérea prioritariamente se houver suspeita de distonia laríngea/faríngea (estridor, dispneia) — emergência de via aérea, acionar suporte avançado imediatamente",
    "Biperideno 2,5-5 mg IM ou IV, podendo repetir em 30 minutos se necessário (dose máxima 20 mg/dia por via parenteral)",
    "A via parenteral tem resposta em minutos — não aguardar o efeito de uma formulação oral em uma emergência",
    "Reavaliar a necessidade e a escolha do antipsicótico causador após o episódio agudo resolvido, considerando redução de dose ou troca por agente de menor risco de sintomas extrapiramidais",
  ],

  examesComplementares: [
    "Geralmente diagnóstico clínico, sem necessidade de exames de rotina",
    "Considerar avaliação laboratorial ampliada diante de sinais atípicos, para descartar diagnósticos diferenciais como hipocalcemia",
  ],

  diagnosticoDiferencial: [
    "Convulsão",
    "Tétano",
    "Crise funcional/conversiva",
    "Hipocalcemia com tetania",
    "Acatisia (apresentação distinta — inquietação subjetiva e motora, não postura sustentada; ver entrada específica neste módulo)",
    "Catatonia",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};
