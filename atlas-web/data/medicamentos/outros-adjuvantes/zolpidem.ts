import { Medicamento } from "../../types";

export const zolpidem: Medicamento = {
  id: "zolpidem",

  nome: "Zolpidem",

  nomeComercial: [
    "Stilnox",
    "Patz",
  ],

  classe: "Hipnótico",

  subclasse: "Agonista seletivo de receptores GABA-A (Z-drug)",

  mecanismo:
    "Agonista seletivo da subunidade alfa-1 do receptor GABA-A, diferente dos benzodiazepínicos, que atuam de forma não seletiva em múltiplas subunidades (alfa-1, alfa-2, alfa-3, alfa-5). Essa seletividade confere efeito predominantemente hipnótico/sedativo, com efeito ansiolítico, miorrelaxante e anticonvulsivante muito menos pronunciado.",

  posologias: [
    {
      indicacao: "Insônia de Início (dificuldade para iniciar o sono)",
      doseInicial: "5 mg (10 mg em não idosos, se necessário), imediatamente antes de deitar",
      doseUsual: "5–10 mg à noite",
      doseMaxima: "10 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Insônia em Idosos ou Hepatopatas",
      doseInicial: "5 mg à noite",
      doseUsual: "5 mg à noite",
      doseMaxima: "5 mg/dia",
      nivelEvidencia: 3,
    },
  ],

  meiaVida: "2–3 horas",

  metabolizacao:
    "Metabolização hepática pela CYP3A4, gerando metabólitos inativos.",

  indicacoes: [
    "Insônia de início, para tratamento de curto prazo (idealmente poucas semanas)",
  ],

  contraIndicacoes: [
    "Miastenia gravis",
    "Insuficiência respiratória grave",
    "Síndrome da apneia do sono não tratada",
    "Insuficiência hepática grave",
    "Hipersensibilidade ao zolpidem",
  ],

  vantagens: [
    "Meia-vida curta (aproximadamente 2–3 horas), resultando em menos ressaca matinal e sonolência residual do que benzodiazepínicos de ação mais longa",
    "Efeito predominantemente hipnótico, com menor impacto na arquitetura do sono em relação a alguns benzodiazepínicos",
    "Início de ação rápido, útil especificamente para dificuldade de iniciar o sono",
    "Menor efeito miorrelaxante e anticonvulsivante que benzodiazepínicos, o que pode reduzir alguns efeitos adversos associados a essas propriedades",
  ],

  desvantagens: [
    "Não deve ser considerado primeira linha para tratamento da insônia — a Terapia Cognitivo-Comportamental para Insônia (TCC-I) é a primeira linha reconhecida pelas diretrizes",
    "Relatos de comportamentos complexos do sono, incluindo sonambulismo, alimentação noturna sem consciência plena (\"sleep-eating\") e dirigir dormindo (\"sleep-driving\")",
    "Potencial de dependência física e psicológica com uso prolongado, além de tolerância",
    "Risco de rebote de insônia e sintomas de abstinência com a descontinuação abrupta após uso regular",
    "Maior risco de quedas e comprometimento cognitivo/psicomotor em idosos",
  ],

  efeitosAdversos: [
    "Sonolência residual",
    "Tontura",
    "Cefaleia",
    "Amnésia anterógrada",
    "Comportamentos complexos do sono (sonambulismo, sleep-eating, sleep-driving)",
    "Alterações de percepção em doses altas",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Baixa",

  interacoes: [
    "Álcool e outros depressores do sistema nervoso central (potencialização de sedação e risco de depressão respiratória)",
    "Opioides (risco aumentado de sedação profunda e depressão respiratória)",
    "Inibidores da CYP3A4 (cetoconazol, itraconazol) aumentam níveis séricos e efeito sedativo",
    "Indutores da CYP3A4 (rifampicina, carbamazepina) reduzem a eficácia",
    "Sertralina (aumenta a Cmax do zolpidem em cerca de 43%, podendo potencializar o efeito sedativo)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Alta",

  sexual: "Muito baixa",

  qt: "Muito baixo",

  sintomasDescontinuacao: "Moderado",

  gravidez:
    "Dados limitados; associação com possível risco de baixo peso ao nascer e parto prematuro relatada em alguns estudos observacionais. Evitar quando possível, especialmente próximo ao parto.",

  gravidezCategoria: "evitar",

  lactacao:
    "Passa para o leite materno em pequena quantidade; usar com cautela, preferindo alternativas quando possível.",

  lactacaoCategoria: "cautela",

  renal:
    "Geralmente não necessita ajuste de dose na insuficiência renal leve a moderada; usar com cautela em insuficiência grave.",

  ajusteRenalNecessario: false,

  hepatica:
    "Requer redução de dose (5 mg) em insuficiência hepática; contraindicado em insuficiência hepática grave pelo risco de encefalopatia.",

  observacoes:
    "O zolpidem é um dos hipnóticos mais prescritos para insônia de início, sendo classificado como \"Z-drug\" por seu mecanismo seletivo no receptor GABA-A, distinto dos benzodiazepínicos clássicos. Apesar de sua meia-vida curta e menor ressaca matinal, não deve ser considerado tratamento de primeira linha para insônia — a Terapia Cognitivo-Comportamental para Insônia (TCC-I) é a abordagem inicial recomendada pelas diretrizes, reservando-se o zolpidem para uso de curto prazo ou como adjuvante. É fundamental orientar o paciente sobre a necessidade de ingestão imediatamente antes de deitar e garantir pelo menos 7–8 horas disponíveis para sono, dado o risco de comportamentos complexos do sono e comprometimento psicomotor residual. O uso prolongado deve ser evitado pelo potencial de dependência e tolerância, e a descontinuação após uso regular deve ser gradual.",

  perolasClinicas: [
    "Avisar explicitamente sobre o risco de comportamentos complexos do sono (sonambulismo, 'sleep-eating', dirigir dormindo) ANTES de prescrever, especialmente em quem mora sozinho ou terá menos de 7-8h disponíveis para dormir — é um efeito adverso pouco perguntado espontaneamente pelo paciente.",
    "Mulheres eliminam zolpidem mais lentamente que homens em média — algumas agências reguladoras (FDA) recomendam dose inicial menor especificamente para mulheres pelo risco de comprometimento psicomotor residual na manhã seguinte.",
    "Não é hipnótico eficaz para insônia de manutenção (despertares no meio da noite) pela meia-vida curta — se essa for a queixa principal, considerar trazodona em dose baixa ou outro agente de ação mais prolongada.",
    "Reavaliar a indicação a cada prescrição — é comum o zolpidem ser renovado por anos sem nunca se ter tentado ativamente TCC-I ou uma tentativa estruturada de retirada.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "AASM Clinical Practice Guideline for Insomnia",
    "Bula de referência ANVISA/FDA (Stilnox)",
  ],
};
