import { Medicamento } from "../../types";

export const carbamazepina: Medicamento = {
  id: "carbamazepina",

  nome: "Carbamazepina",

  nomeComercial: [
    "Tegretol",
    "Tegretol CR",
    "Tegrezin",
    "Tegretard",
    "Tegrex",
    "Carmazin",
    "Uni Carbamaz",
  ],

  classe: "Estabilizador de Humor",

  subclasse: "Anticonvulsivante",

  mecanismo:
    "Bloqueio de canais de sódio dependentes de voltagem, reduzindo a excitabilidade neuronal e a propagação de descargas repetitivas.",

  posologias: [
    {
      indicacao: "Transtorno Bipolar - Mania Aguda",
      doseInicial: "200–400 mg/dia",
      doseUsual: "600–1200 mg/dia, ajustada conforme nível sérico (4–12 µg/mL)",
      doseMaxima: "1600 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Transtorno Bipolar - Profilaxia/Manutenção",
      doseInicial: "200 mg/dia",
      doseUsual: "400–1000 mg/dia",
      doseMaxima: "1200 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Epilepsia",
      doseInicial: "200 mg/dia",
      doseUsual: "600–1200 mg/dia",
      doseMaxima: "1600–2000 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Neuralgia do Trigêmeo",
      doseInicial: "100–200 mg/dia",
      doseUsual: "400–800 mg/dia",
      doseMaxima: "1200 mg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "12–17 horas (pode reduzir para 5–14 horas após autoindução com uso crônico)",

  metabolizacao:
    "Metabolização hepática pelo CYP3A4, com formação do metabólito ativo carbamazepina-10,11-epóxido. Potente indutor enzimático, com autoindução do próprio metabolismo e indução de diversas outras enzimas.",

  indicacoes: [
    "Transtorno Bipolar - Mania Aguda",
    "Transtorno Bipolar - Profilaxia/Manutenção",
    "Epilepsia",
    "Neuralgia do Trigêmeo",
  ],

  contraIndicacoes: [
    "História de depressão medular óssea",
    "Porfiria aguda intermitente",
    "Bloqueio atrioventricular",
    "Uso concomitante com IMAO",
    "Hipersensibilidade à carbamazepina ou a antidepressivos tricíclicos (reação cruzada)",
    "Presença do alelo HLA-B*1502 em populações de risco, quando conhecido",
  ],

  vantagens: [
    "Eficácia estabelecida na mania aguda e em episódios mistos",
    "Útil em pacientes com resposta inadequada ao lítio",
    "Boa opção em pacientes com ciclagem rápida",
    "Também eficaz na neuralgia do trigêmeo",
  ],

  desvantagens: [
    "Potente indutor enzimático, com numerosas interações medicamentosas",
    "Risco raro, porém grave, de agranulocitose e anemia aplásica",
    "Risco de reações cutâneas graves, como a Síndrome de Stevens-Johnson",
    "Autoindução do metabolismo, exigindo reajustes de dose ao longo do tempo",
    "Necessidade de monitorização laboratorial frequente",
  ],

  efeitosAdversos: [
    "Tontura",
    "Sonolência",
    "Diplopia e visão turva",
    "Ataxia",
    "Náusea",
    "Hiponatremia (SIADH)",
    "Erupção cutânea",
    "Leucopenia leve e transitória",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Contraceptivos hormonais (redução da eficácia)",
    "Varfarina (indução do metabolismo, com redução do efeito anticoagulante — risco de subanticoagulação)",
    "Outros anticonvulsivantes",
    "Antipsicóticos e antidepressivos (redução de níveis séricos)",
    "IMAO (uso contraindicado)",
    "Inibidores da protease e outros substratos ou inibidores do CYP3A4",
    "Macrolídeos (eritromicina e claritromicina — inibem a CYP3A4, podendo causar toxicidade por carbamazepina, com náusea, diplopia, tontura e ataxia)",
    "Clozapina (associação considerada contraindicada pelo risco aditivo de agranulocitose/supressão de medula óssea)",
    "Diuréticos tiazídicos e outros fármacos associados a hiponatremia (ex: ISRS — risco aditivo de hiponatremia/SIADH)",
    "Inibidores da CYP3A4 (ex: verapamil, diltiazem, cetoconazol, suco de toranja — aumentam os níveis de carbamazepina e o risco de toxicidade)",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Moderada",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Associada a risco teratogênico, incluindo defeitos do tubo neural e outras malformações congênitas. Deve ser evitada na gestação sempre que possível, avaliando-se cuidadosamente riscos e benefícios quando não houver alternativa adequada; recomenda-se suplementação de ácido fólico em mulheres em idade fértil em uso do fármaco.",

  gravidezCategoria: "evitar",

  lactacao:
    "Apresenta passagem para o leite materno em quantidade relativamente baixa, sendo considerada compatível com a amamentação na maioria dos casos, com monitorização clínica do lactente.",

  lactacaoCategoria: "compativel",

  renal:
    "Geralmente não requer ajuste específico de dose na insuficiência renal, mas deve-se monitorar sinais de hiponatremia.",

  ajusteRenalNecessario: false,

  hepatica:
    "Contraindicada ou utilizada com extrema cautela em disfunção hepática significativa, exigindo monitorização da função hepática pelo potencial de hepatotoxicidade.",

  observacoes:
    "É indispensável a monitorização de níveis séricos (faixa terapêutica de aproximadamente 4–12 µg/mL), hemograma completo, sódio sérico e função hepática, especialmente nas primeiras semanas de tratamento e após ajustes de dose. Devido à autoindução enzimática, pode ser necessário aumentar a dose ao longo das primeiras semanas para manter a eficácia terapêutica. A triagem do alelo HLA-B*1502 deve ser considerada em pacientes de ascendência asiática, pelo risco aumentado de reações cutâneas graves.",

  perolasClinicas: [
    "A autoindução do próprio metabolismo significa que o nível sérico obtido nas primeiras 2-3 semanas tende a CAIR mesmo sem mudança de dose — reavaliar o nível sérico após esse período é mais informativo que confiar apenas na dosagem inicial.",
    "É um dos fármacos psiquiátricos com mais interações clinicamente relevantes por indução enzimática — sempre revisar toda a lista de medicamentos em uso (incluindo contraceptivos hormonais e outros psicofármacos) antes de iniciar ou após qualquer ajuste de dose.",
    "Considerar rastreio de HLA-B*1502 antes de iniciar em pacientes de ascendência asiática (han chinesa, tailandesa, entre outras) — o risco de Stevens-Johnson/necrólise epidérmica tóxica é ordens de magnitude maior nesse subgrupo genético.",
    "Hoje é considerada opção de segunda linha frente ao lítio e valproato na maioria dos algoritmos, reservada principalmente para não-respondedores a essas opções, dado o perfil de interação mais complexo.",
  ],

  referencias: [
    "CANMAT 2018 Bipolar Guidelines",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};
