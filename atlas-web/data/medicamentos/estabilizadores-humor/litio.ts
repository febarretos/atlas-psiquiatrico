import { Medicamento } from "../../types";

export const litio: Medicamento = {
  id: "litio",

  nome: "Lítio",

  nomeComercial: [
    "Carbolitium",
  ],

  classe: "Estabilizador de Humor",

  subclasse: "Sal de lítio",

  mecanismo:
    "Mecanismo de ação ainda não totalmente esclarecido; envolve modulação de vias de segundo mensageiro, inibição da inositol monofosfatase e da glicogênio sintase quinase 3-beta (GSK-3β), com efeitos neurotróficos e estabilizadores da excitabilidade neuronal.",

  posologias: [
    {
      indicacao: "Transtorno Bipolar - Mania Aguda",
      doseInicial: "300–600 mg/dia (2–3 tomadas)",
      doseUsual: "900–1800 mg/dia, ajustada conforme litemia (0,8–1,2 mEq/L)",
      doseMaxima: "2400 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno Bipolar - Profilaxia/Manutenção",
      doseInicial: "300 mg/dia",
      doseUsual: "600–1200 mg/dia, ajustada conforme litemia (0,6–0,8 mEq/L)",
      doseMaxima: "1800 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Potencialização de Antidepressivos na Depressão Resistente",
      doseInicial: "300 mg/dia",
      doseUsual: "600–900 mg/dia, ajustada conforme litemia (0,4–0,8 mEq/L)",
      doseMaxima: "1200 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "18–24 horas (pode ser prolongada em idosos e na insuficiência renal)",

  metabolizacao:
    "Não sofre metabolização hepática. Eliminação praticamente exclusiva por via renal, na forma inalterada, por filtração glomerular e reabsorção tubular proximal.",

  indicacoes: [
    "Transtorno Bipolar - Mania Aguda",
    "Transtorno Bipolar - Profilaxia/Manutenção",
    "Potencialização de Antidepressivos na Depressão Resistente",
    "Redução do Risco de Suicídio em Transtornos do Humor",
  ],

  contraIndicacoes: [
    "Insuficiência renal significativa (evitar ou usar com extrema cautela)",
    "Doença cardiovascular grave e instável",
    "Síndrome de Brugada",
    "Depleção significativa de sódio ou desidratação",
    "Hipersensibilidade ao lítio",
  ],

  vantagens: [
    "Eficácia comprovada na prevenção de recorrências maníacas e depressivas",
    "Único estabilizador de humor com evidência robusta de redução do risco de suicídio",
    "Ampla experiência clínica acumulada ao longo de décadas",
    "Potente potencializador em depressão resistente",
    "Não é sedativo e não causa disfunção sexual relevante",
  ],

  desvantagens: [
    "Janela terapêutica estreita, com risco significativo de toxicidade",
    "Necessidade de monitorização laboratorial frequente",
    "Múltiplas interações medicamentosas clinicamente relevantes",
    "Efeitos adversos renais e tireoidianos a longo prazo",
    "Início de ação mais lento em comparação a outros estabilizadores",
  ],

  efeitosAdversos: [
    "Tremor de extremidades",
    "Poliúria e polidipsia",
    "Ganho de peso",
    "Hipotireoidismo",
    "Diabetes insípida nefrogênica",
    "Alterações cognitivas (lentificação, sensação de embotamento)",
    "Desconforto gastrointestinal e diarreia",
    "Leucocitose benigna",
  ],

  serotoninergico: true,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Diuréticos tiazídicos (aumentam a litemia)",
    "IECA e antagonistas da angiotensina II (aumentam a litemia)",
    "AINEs, exceto AAS em baixas doses (aumentam a litemia)",
    "Diuréticos poupadores de potássio",
    "Metronidazol",
    "ISRS (risco de síndrome serotoninérgica; associação exige monitorização mais próxima da litemia e de sinais de toxicidade serotoninérgica)",
    "Antipsicóticos, especialmente haloperidol (relatos de síndrome encefalopática com sinais neurológicos por vezes irreversíveis; risco de síndrome neuroléptica maligna também descrito com antipsicóticos atípicos, como risperidona)",
    "Cafeína (a retirada abrupta do consumo habitual pode elevar a litemia; manter ingestão estável)",
    "Verapamil e diltiazem (bloqueadores de canal de cálcio — risco de neurotoxicidade por sinergismo, além de possível alteração do clearance renal do lítio)",
  ],

  ganhoPeso: "Moderado",

  sedacao: "Baixa",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Associado a risco aumentado de anomalia de Ebstein (malformação cardíaca) quando utilizado no primeiro trimestre. O uso na gestação deve ser cuidadosamente avaliado, ponderando riscos e benefícios, com monitorização ecocardiográfica fetal quando o tratamento for mantido.",

  gravidezCategoria: "cautela",

  lactacao:
    "Apresenta passagem significativa para o leite materno, com risco de toxicidade no lactente. Geralmente não recomendado durante a amamentação, exceto em situações específicas com monitorização rigorosa da litemia e das funções renal e tireoidiana do lactente.",

  lactacaoCategoria: "evitar",

  renal:
    "A eliminação renal quase exclusiva torna a função renal determinante para a posologia. Contraindicado ou utilizado com extrema cautela na insuficiência renal significativa, exigindo ajuste de dose e monitorização intensiva.",

  ajusteRenalNecessario: true,

  hepatica:
    "Não requer ajuste específico de dose na insuficiência hepática, uma vez que não é metabolizado pelo fígado.",

  observacoes:
    "É fundamental a monitorização periódica de litemia (a cada 3-6 meses em manutenção, mais frequente no início do tratamento e após ajustes de dose), função renal (creatinina e taxa de filtração glomerular) e função tireoidiana (TSH), além de eletrólitos, especialmente sódio. A coleta da litemia deve ser realizada aproximadamente 12 horas após a última dose (nível de vale). Estados de depleção de sódio, desidratação, febre ou uso de determinados medicamentos aumentam significativamente o risco de toxicidade.",

  perolasClinicas: [
    "É o único psicofármaco com evidência robusta e replicada de redução de mortalidade por suicídio a longo prazo — vale considerar essa vantagem específica na decisão de manutenção, mesmo quando outro estabilizador pareceria 'suficiente' para o controle de humor.",
    "Sempre colher a litemia 12 horas após a última dose (nível de vale) — uma coleta em horário diferente invalida a interpretação e pode levar a ajustes de dose incorretos.",
    "Orientar o paciente sobre manutenção de hidratação e ingesta de sódio estável — dietas de emagrecimento com restrição de sal, diarreia por gastroenterite, ou exposição a calor extremo (verão, sauna) são causas comuns e evitáveis de toxicidade aguda.",
    "O tremor fino de mãos é dose-dependente e comum; já um tremor grosseiro associado a ataxia ou confusão mental é sinal de alarme para toxicidade e exige litemia e avaliação clínica imediata, não apenas 'observação'.",
    "Dosar TSH e função renal basais antes de iniciar, não apenas durante o seguimento — hipotireoidismo subclínico preexistente pode ser confundido com efeito adverso do lítio se não houver valor basal para comparação.",
  ],

  referencias: [
    "CANMAT 2018 Bipolar Guidelines",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};
