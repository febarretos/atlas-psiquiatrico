import { Emergencia } from "./types";

export const agitacaoPsicomotoraAguda: Emergencia = {
  id: "agitacao-psicomotora-aguda",

  nome: "Agitação Psicomotora Aguda / Manejo do Paciente Agressivo",

  categoria: "Emergência comportamental",

  gravidade: "muito alta",

  descricao:
    "Estado de hiperatividade motora e verbal descontrolada, com risco iminente de heteroagressão ou autoagressão. É uma apresentação transdiagnóstica — pode ocorrer em psicose aguda, mania, intoxicação ou abstinência de substâncias, delirium de causa orgânica, transtornos de personalidade em crise, ou combinação desses fatores — e a causa de base deve sempre ser investigada, não apenas o sintoma controlado. A de-escalação verbal é sempre a primeira linha; contenção química e mecânica são recursos progressivos, usados na menor intensidade e pelo menor tempo necessários, nunca como primeira resposta automática.",

  quadroClinico: [
    "Inquietação motora acentuada, incapacidade de permanecer parado ou sentado",
    "Hostilidade verbal, ameaças, tom de voz elevado ou discurso desorganizado",
    "Comportamento imprevisível e impulsividade",
    "Recusa em cooperar com a avaliação ou com instruções da equipe",
    "Sinais de iminência de violência: punhos cerrados, invasão de espaço pessoal, quebra de objetos, posturas de confronto",
    "Pode associar-se a alteração do nível de consciência (delirium), sintomas psicóticos (alucinações, delírios persecutórios), sintomas maníacos, ou sinais de intoxicação/abstinência de substância",
  ],

  criteriosDiagnosticos: [
    "Agitação psicomotora crescente e refratária à abordagem verbal",
    "Ameaças verbais diretas ou comportamento assertivamente hostil",
    "Histórico prévio de violência ou de episódios semelhantes",
    "Presença de objeto no ambiente que possa ser usado como arma",
    "Sinais de intoxicação aguda por substância, que aumenta a imprevisibilidade e reduz o limiar para violência",
  ],

  causasComuns: [
    "Intoxicação aguda por álcool ou outras substâncias, especialmente estimulantes",
    "Abstinência de álcool ou benzodiazepínicos",
    "Delirium por causa orgânica (infecção, distúrbio metabólico, hipóxia)",
    "Episódio maníaco ou misto",
    "Sintomas psicóticos agudos (esquizofrenia, transtorno esquizoafetivo, surto psicótico)",
    "Transtornos de personalidade em contexto de crise, especialmente transtorno de personalidade borderline",
    "Causas orgânicas não psiquiátricas: hipoglicemia, hipóxia, traumatismo cranioencefálico, estado pós-ictal",
  ],

  condutaImediata: [
    "Garantir a segurança do ambiente antes de abordar o paciente: remover objetos potencialmente perigosos, manter saída desobstruída para a equipe, acionar apoio/segurança quando indicado",
    "De-escalação verbal como primeira linha sempre que a situação permitir: tom de voz calmo, postura corporal não confrontativa, oferecer escolhas ao paciente, validar a angústia, evitar confronto direto",
    "Oferecer medicação oral voluntária antes de considerar via parenteral ou contenção física, respeitando a autonomia do paciente sempre que a situação de segurança permitir",
    "Contenção química (farmacológica) quando a de-escalação verbal for insuficiente: antipsicótico intramuscular (ex.: haloperidol 2,5–5 mg IM ou olanzapina 2,5–10 mg IM ou ziprasidona 10–20 mg IM), associado ou não a benzodiazepínico (ex.: lorazepam 1–2 mg IM ou IV), conforme a causa suspeita e as comorbidades do paciente",
    "Evitar associar olanzapina intramuscular a benzodiazepínico parenteral na mesma administração — essa combinação específica tem alerta de bula por risco de sedação excessiva e depressão cardiorrespiratória",
    "Contenção mecânica apenas como último recurso, pelo menor tempo necessário, com monitorização contínua de sinais vitais, posicionamento adequado (evitar decúbito ventral prolongado, pelo risco de asfixia posicional) e reavaliação frequente para liberação assim que for seguro",
    "Documentar detalhadamente a indicação, o processo e as reavaliações de qualquer contenção química ou mecânica, conforme exigência ética e legal",
    "Investigar e tratar a causa de base assim que o paciente estiver contido — rastrear ativamente causas orgânicas (glicemia, intoxicação, hipóxia) antes de assumir etiologia puramente psiquiátrica",
  ],

  examesComplementares: [
    "Glicemia capilar, para excluir hipoglicemia como causa",
    "Triagem toxicológica quando houver suspeita de intoxicação por substância",
    "Exames laboratoriais gerais e neuroimagem quando houver suspeita de causa orgânica (delirium, trauma cranioencefálico)",
    "Monitorização de sinais vitais durante e após qualquer contenção química ou mecânica",
  ],

  diagnosticoDiferencial: [
    "Agitação de causa orgânica (delirium, hipóxia, hipoglicemia, trauma cranioencefálico) versus agitação psiquiátrica primária",
    "Agitação por intoxicação versus por abstinência de substância",
    "Agitação de padrão maníaco versus psicótico versus associada a transtorno de personalidade em crise",
  ],

  referencias: [
    "Wilson MP, et al. The psychopharmacology of agitation: consensus statement of the American Association for Emergency Psychiatry Project BETA psychopharmacology workgroup. West J Emerg Med. 2012.",
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};
