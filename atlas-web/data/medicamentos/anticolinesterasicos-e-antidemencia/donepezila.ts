import { Medicamento } from "../../types";

export const donepezila: Medicamento = {
  id: "donepezila",

  nome: "Donepezila",

  nomeComercial: [
    "Eranz",
    "Aricept",
  ],

  classe: "Inibidor da colinesterase",

  subclasse: "Anticolinesterásico de ação central, seletivo para acetilcolinesterase",

  mecanismo:
    "Inibe reversível e seletivamente a acetilcolinesterase no sistema nervoso central, aumentando a disponibilidade sináptica de acetilcolina para compensar o déficit colinérgico associado à degeneração de neurônios colinérgicos do núcleo basal de Meynert, característica da Doença de Alzheimer.",

  posologias: [
    {
      indicacao: "Doença de Alzheimer leve a moderada (e moderada a grave, conforme NICE TA217)",
      doseInicial: "5 mg/dia, VO, à noite",
      doseUsual: "10 mg/dia (aumentar após 4-6 semanas na dose inicial, se bem tolerado)",
      doseMaxima: "10 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Demência com Corpos de Lewy / Demência da Doença de Parkinson (uso apoiado por evidência, sem aprovação regulatória formal específica na maioria dos países)",
      doseInicial: "5 mg/dia, VO, à noite",
      doseUsual: "10 mg/dia, conforme tolerabilidade",
      doseMaxima: "10 mg/dia",
      nivelEvidencia: 3,
    },
  ],

  meiaVida: "~70 horas — permite dose única diária e reduz flutuação plasmática entre doses",

  metabolizacao:
    "Metabolização hepática via CYP2D6 e CYP3A4, com formação de metabólitos ativos; excreção renal e fecal.",

  indicacoes: [
    "Doença de Alzheimer leve, moderada e grave (aprovação regulatória para todo o espectro de gravidade)",
    "Demência com Corpos de Lewy e demência associada à Doença de Parkinson (uso off-label bem respaldado pela literatura)",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à donepezila ou a derivados de piperidina",
    "Cautela extrema em doença do nó sinusal ou outros distúrbios de condução cardíaca supraventricular (risco de bradicardia/bloqueio por efeito colinérgico)",
    "Cautela em úlcera péptica ativa ou uso concomitante de anti-inflamatórios (aumento de secreção ácida gástrica por efeito colinérgico)",
    "Cautela em asma/DPOC (broncoconstrição colinérgica) e em história de convulsões",
  ],

  vantagens: [
    "Dose única diária, meia-vida longa — maior comodidade posológica e adesão em comparação aos demais inibidores da colinesterase",
    "Menor incidência de efeitos adversos gastrointestinais em comparação à rivastigmina, segundo revisão Cochrane (Birks, 2006)",
    "Titulação simples (2 etapas)",
    "Aprovado para todos os estágios de gravidade da Doença de Alzheimer (leve a grave)",
  ],

  desvantagens: [
    "Benefício sintomático modesto sobre cognição e funcionalidade — não modifica o curso neurodegenerativo da doença (revisão Cochrane, Birks & Harvey, 2018)",
    "Efeitos colinérgicos gastrointestinais (náusea, diarreia, vômitos), mais frequentes na fase de titulação",
    "Risco de bradicardia e síncope, relevante em idosos com cardiopatia estrutural ou de condução",
    "Pode causar insônia e sonhos vívidos/pesadelos, por isso administrado preferencialmente à noite (embora alguns pacientes se beneficiem de administração matinal se houver insônia)",
  ],

  efeitosAdversos: [
    "Náusea, vômitos, diarreia (mais comuns na titulação)",
    "Insônia, sonhos vívidos/pesadelos",
    "Cãibras musculares",
    "Bradicardia, síncope (raro, mas clinicamente relevante)",
    "Perda de apetite e de peso",
    "Incontinência urinária",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Fármacos com atividade anticolinérgica (antagonismo farmacodinâmico direto — evitar associação com antipsicóticos, antidepressivos tricíclicos ou anti-histamínicos de alta carga anticolinérgica)",
    "Betabloqueadores e outros bradicardizantes (risco aditivo de bradicardia)",
    "Inibidores de CYP2D6/CYP3A4 (ex.: quetiapina, alguns antifúngicos) podem aumentar níveis séricos de donepezila",
    "Relaxantes musculares tipo succinilcolina (potencialização do bloqueio neuromuscular despolarizante)",
    "Anti-inflamatórios não esteroidais (risco aditivo de sangramento gastrointestinal por aumento de secreção ácida)",
  ],

  ganhoPeso: "Muito baixo — tende a reduzir apetite/peso, não a aumentar.",

  sedacao: "Muito baixo — pode causar insônia mais do que sedação.",

  sexual: "Muito baixo — sem efeito relevante conhecido sobre função sexual.",

  qt: "Muito baixo — sem efeito relevante conhecido sobre o intervalo QT; risco cardíaco relevante é bradicardia/bloqueio, não prolongamento de QT.",

  gravidez:
    "Uso não indicado — a Doença de Alzheimer não ocorre tipicamente em idade reprodutiva; dados em humanos são escassos.",

  gravidezCategoria: "evitar",

  lactacao:
    "Sem indicação clínica relevante nessa faixa etária/contexto; dados insuficientes.",

  lactacaoCategoria: "evitar",

  renal:
    "Sem necessidade de ajuste de dose em insuficiência renal leve a moderada; cautela em insuficiência renal grave, com dados limitados.",

  ajusteRenalNecessario: false,

  hepatica:
    "Ajuste com cautela em insuficiência hepática leve a moderada, iniciando com a dose mais baixa e titulando lentamente; dados limitados em insuficiência hepática grave.",

  observacoes:
    "Um dos três inibidores da colinesterase de primeira linha para Doença de Alzheimer (junto com rivastigmina e galantamina), com perfil de tolerabilidade geralmente considerado o mais favorável do grupo pela posologia única diária e menor incidência de efeitos gastrointestinais. Frequentemente combinado com memantina em fases moderadas a graves. Reavaliar periodicamente a relação risco-benefício e considerar suspensão gradual em fases terminais de demência ou quando não houver benefício funcional claro.",

  perolasClinicas: [
    "Iniciar à noite para minimizar efeitos colinérgicos diurnos, mas trocar para a manhã se o paciente relatar insônia ou sonhos vívidos.",
    "Titular lentamente (aguardar 4-6 semanas antes de aumentar a dose) reduz significativamente a incidência de efeitos gastrointestinais.",
    "Solicitar ECG antes de iniciar em pacientes com fatores de risco cardiovascular ou história de síncope, pelo risco de bradicardia/bloqueio de condução.",
    "Não suspender abruptamente sem necessidade — descontinuação pode associar-se a piora cognitiva/comportamental aguda em alguns pacientes; se for suspender, considerar redução gradual e monitorar.",
  ],

  referencias: [
    "Birks JS, Harvey RJ. Donepezil for dementia due to Alzheimer's disease. Cochrane Database Syst Rev. 2018.",
    "NICE Technology Appraisal TA217 - Donepezil, galantamine, rivastigmine and memantine for the treatment of Alzheimer's disease.",
    "Academia Brasileira de Neurologia - Diretrizes para diagnóstico e tratamento da Doença de Alzheimer.",
    "Stahl's Essential Psychopharmacology",
  ],
};
