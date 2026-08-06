import { Medicamento } from "../../types";

export const memantina: Medicamento = {
  id: "memantina",

  nome: "Memantina",

  nomeComercial: [
    "Ebix",
    "Alois",
    "Namenda",
  ],

  classe: "Antagonista de receptor NMDA",

  subclasse: "Antagonista não competitivo de baixa/moderada afinidade, voltagem-dependente, do receptor NMDA de glutamato",

  mecanismo:
    "Bloqueia de forma não competitiva e voltagem-dependente o receptor NMDA de glutamato, reduzindo a excitotoxicidade mediada por níveis tonicamente elevados de glutamato (fenômeno implicado na neurodegeneração da Doença de Alzheimer), sem interferir de forma relevante na neurotransmissão glutamatérgica fásica normal necessária para memória e aprendizado — mecanismo farmacológico distinto e complementar ao dos inibidores da colinesterase, permitindo associação.",

  posologias: [
    {
      indicacao: "Doença de Alzheimer moderada a grave",
      doseInicial: "5 mg, VO, 1x/dia",
      doseUsual: "Titular em incrementos de 5 mg/semana até 20 mg/dia (10 mg 2x/dia a partir da 3ª semana)",
      doseMaxima: "20 mg/dia (10 mg, VO, 2x/dia)",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Doença de Alzheimer moderada a grave — formulação de liberação prolongada (ER), quando disponível",
      doseInicial: "7 mg, VO, 1x/dia",
      doseUsual: "Titular em incrementos de 7 mg/semana",
      doseMaxima: "28 mg/dia, 1x/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "~60-80 horas",

  metabolizacao:
    "Metabolização hepática mínima (parcialmente via CYP450, sem inibição/indução enzimática relevante); excreção predominantemente renal do fármaco inalterado — perfil de interação metabólica baixo.",

  indicacoes: [
    "Doença de Alzheimer moderada a grave, em monoterapia ou associada a inibidor da colinesterase",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à memantina",
    "Cautela em insuficiência renal grave (ajuste de dose obrigatório, ver campo renal)",
    "Cautela em história de convulsões",
  ],

  vantagens: [
    "Mecanismo de ação distinto dos inibidores da colinesterase, permitindo associação com benefício aditivo em fases moderadas a graves",
    "Perfil de tolerabilidade geralmente mais favorável que os inibidores da colinesterase, com baixa incidência de efeitos gastrointestinais",
    "Metabolização hepática mínima — baixo potencial de interação medicamentosa metabólica, relevante em polifarmácia geriátrica",
    "Formulação de liberação prolongada permite dose única diária",
  ],

  desvantagens: [
    "Evidência de benefício mais robusta em fases moderadas a graves; benefício em fases leves não está bem estabelecido",
    "Revisão Cochrane (McShane et al., 2019) mostra benefício estatisticamente significativo, porém modesto, sobre cognição e funcionalidade, sem efeito significativo sobre sintomas comportamentais isolados",
    "Necessário ajuste de dose em insuficiência renal",
    "Não indicada como monoterapia em fases leves da doença",
  ],

  efeitosAdversos: [
    "Tontura",
    "Cefaleia",
    "Constipação",
    "Sonolência (menos frequente que com inibidores da colinesterase)",
    "Confusão (paradoxal, mais comum em doses mais altas ou titulação rápida)",
    "Hipertensão arterial (raro)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Outros antagonistas NMDA (ex.: amantadina, dextrometorfano, cetamina) — risco de efeitos aditivos sobre o sistema nervoso central, incluindo confusão e alucinações",
    "Fármacos que alcalinizam a urina (ex.: inibidores da anidrase carbônica, bicarbonato em altas doses) podem reduzir a depuração renal da memantina e aumentar seus níveis séricos",
    "Baixo potencial de interação metabólica via CYP450",
  ],

  ganhoPeso: "Muito baixo — sem efeito relevante conhecido sobre peso.",

  sedacao: "Baixo — sonolência é possível, mas menos proeminente que com inibidores da colinesterase.",

  sexual: "Muito baixo — sem efeito relevante conhecido sobre função sexual.",

  qt: "Muito baixo — sem efeito relevante conhecido sobre o intervalo QT.",

  gravidez:
    "Uso não indicado — a Doença de Alzheimer não ocorre tipicamente em idade reprodutiva; dados em humanos são escassos.",

  gravidezCategoria: "evitar",

  lactacao:
    "Sem indicação clínica relevante nessa faixa etária/contexto; dados insuficientes.",

  lactacaoCategoria: "evitar",

  renal:
    "Ajuste obrigatório em insuficiência renal grave (clearance de creatinina 5-29 mL/min): dose-alvo reduzida para 10 mg/dia (5 mg, VO, 2x/dia). Sem necessidade de ajuste em insuficiência renal leve a moderada.",

  ajusteRenalNecessario: true,

  hepatica:
    "Sem necessidade de ajuste específico em insuficiência hepática leve a moderada; dados limitados em insuficiência hepática grave, usar com cautela.",

  observacoes:
    "Indicada para Doença de Alzheimer moderada a grave, frequentemente associada a um inibidor da colinesterase (donepezila, rivastigmina ou galantamina) para benefício aditivo — combinação respaldada por ensaios clínicos e amplamente adotada na prática. Mecanismo de ação distinto (antagonismo NMDA, não colinérgico) explica a ausência de sobreposição de efeitos adversos relevantes com os inibidores da colinesterase, viabilizando a associação.",

  perolasClinicas: [
    "Titular lentamente (incrementos semanais de 5 mg) reduz o risco de confusão paradoxal e tontura na fase inicial.",
    "Pode ser associada a qualquer um dos três inibidores da colinesterase sem necessidade de ajuste de dose recíproco — mecanismos de ação não se sobrepõem.",
    "Em insuficiência renal grave, lembrar de reduzir a dose-alvo para 10 mg/dia — erro comum de subdosagem ou superdosagem nesse subgrupo.",
    "Considerar como opção preferencial de início em pacientes com maior sensibilidade a efeitos colinérgicos gastrointestinais, dado seu perfil de tolerabilidade mais favorável nesse aspecto.",
  ],

  referencias: [
    "McShane R, Westby MJ, Roberts E, et al. Memantine for dementia. Cochrane Database Syst Rev. 2019.",
    "NICE Technology Appraisal TA217 - Donepezil, galantamine, rivastigmine and memantine for the treatment of Alzheimer's disease.",
    "Academia Brasileira de Neurologia - Diretrizes para diagnóstico e tratamento da Doença de Alzheimer.",
    "Stahl's Essential Psychopharmacology",
  ],
};
