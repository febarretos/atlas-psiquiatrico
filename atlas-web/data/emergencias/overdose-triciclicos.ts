import { Emergencia } from "./types";

export const overdoseTriciclicos: Emergencia = {
  id: "overdose-triciclicos",

  nome: "Overdose de Antidepressivo Tricíclico",

  categoria: "Induzida por medicamento",

  gravidade: "muito alta",

  descricao:
    "Toxicidade potencialmente fatal por overdose de antidepressivo tricíclico (TCA), historicamente a classe de antidepressivos mais letal em superdosagem, por combinar cardiotoxicidade (bloqueio de canais de sódio, com alargamento do QRS e risco de arritmias ventriculares), toxicidade anticolinérgica e depressão do sistema nervoso central com risco de convulsão. Uma quantidade relativamente modesta acima da dose terapêutica diária pode ser letal — por isso a quantidade de comprimidos dispensada por receita deve ser sempre considerada com cautela em pacientes com risco de suicídio.",

  quadroClinico: [
    "Síndrome anticolinérgica: midríase, mucosas secas, retenção urinária, redução dos ruídos hidroaéreos, hipertermia, taquicardia, agitação ou delirium progredindo para coma",
    "Cardiotoxicidade: taquicardia sinusal (frequentemente o sinal mais precoce), alargamento do QRS, prolongamento do QT, hipotensão, arritmias ventriculares — incluindo torsades de pointes (ver entrada específica neste módulo) — podendo evoluir para parada cardíaca",
    "Sintomas do sistema nervoso central: sedação, confusão, coma, convulsões, que podem ser refratárias",
    "Deterioração clínica pode ser súbita — um paciente inicialmente estável pode piorar rapidamente, o que exige monitorização contínua mesmo na ausência de sintomas graves iniciais",
  ],

  criteriosDiagnosticos: [
    "Ingestão conhecida ou suspeita de antidepressivo tricíclico em dose supraterapêutica",
    "Sinais anticolinérgicos e cardiotóxicos concomitantes",
    "QRS alargado (>100 ms) no eletrocardiograma é o achado mais preditivo de gravidade e de risco de convulsão/arritmia — mais confiável para estimar o risco do que a dose relatada pelo paciente ou o nível sérico do fármaco",
  ],

  causasComuns: [
    "Tentativa de suicídio — contexto mais comum de overdose por antidepressivo tricíclico",
    "Ingestão acidental, especialmente em crianças",
    "Erro de dose ou de prescrição em paciente em uso de múltiplos medicamentos sedativos/anticolinérgicos associados",
  ],

  condutaImediata: [
    "Avaliação e suporte de via aérea, respiração e circulação (ABC), com monitorização cardíaca contínua desde a chegada — a deterioração pode ser súbita",
    "Bicarbonato de sódio intravenoso é o tratamento específico de escolha diante de cardiotoxicidade (QRS alargado, arritmia ventricular, hipotensão refratária) — alcaliniza o pH sérico e aumenta a fração ligada a proteínas/sódio extracelular, revertendo parcialmente o bloqueio dos canais de sódio",
    "Carvão ativado se a ingestão foi recente (idealmente dentro de 1-2 horas) e a via aérea estiver protegida",
    "Benzodiazepínico para controle de convulsões — evitar fenitoína, que também bloqueia canais de sódio e pode agravar a toxicidade cardíaca",
    "Evitar antiarrítmicos das classes Ia e Ic (ex.: procainamida, quinidina), que também bloqueiam canais de sódio e podem agravar a toxicidade",
    "Internação em unidade de terapia intensiva com monitorização cardíaca contínua por no mínimo 24 horas após a estabilização, mesmo se o paciente estiver assintomático inicialmente, pelo risco de deterioração tardia",
    "Avaliação psiquiátrica assim que a estabilização clínica permitir (ver 'Risco de Suicídio Agudo' neste módulo)",
  ],

  examesComplementares: [
    "Eletrocardiograma seriado (QRS, QTc)",
    "Eletrólitos",
    "Gasometria arterial, para guiar a alcalinização terapêutica",
    "Função renal",
    "Nível sérico do antidepressivo tricíclico, quando disponível — mais útil para confirmar a exposição do que para prever a gravidade clínica, já que o QRS e o quadro clínico são mais preditivos",
    "Rastreio de coingestão (ex.: paracetamol, salicilatos), especialmente em contexto de tentativa de suicídio",
  ],

  diagnosticoDiferencial: [
    "Overdose por outros agentes com toxicidade cardíaca, especialmente antipsicóticos que prolongam o QT (ver Torsades de Pointes neste módulo)",
    "Síndrome anticolinérgica pura por outro agente",
    "Overdose por outras classes de antidepressivos",
    "Causa cardíaca primária não relacionada a intoxicação",
  ],

  referencias: [
    "Kaplan & Sadock's Comprehensive Textbook of Psychiatry",
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};
