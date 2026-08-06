import { Medicamento } from "../../types";

export const galantamina: Medicamento = {
  id: "galantamina",

  nome: "Galantamina",

  nomeComercial: [
    "Reminyl",
    "Razadyne",
  ],

  classe: "Inibidor da colinesterase",

  subclasse: "Inibidor da acetilcolinesterase com modulação alostérica nicotínica",

  mecanismo:
    "Inibe reversível e competitivamente a acetilcolinesterase e, adicionalmente, modula de forma alostérica os receptores nicotínicos pré-sinápticos, potencializando a liberação de acetilcolina — mecanismo dual teoricamente distinto de donepezila e rivastigmina, embora sem superioridade clínica comprovada de forma consistente.",

  posologias: [
    {
      indicacao: "Doença de Alzheimer leve a moderada — formulação de liberação prolongada (ER), preferencial",
      doseInicial: "8 mg, VO, 1x/dia (pela manhã, com alimento), por 4 semanas",
      doseUsual: "16 mg/dia (aumentar após 4 semanas se bem tolerado); considerar 24 mg/dia após novas 4 semanas se necessário",
      doseMaxima: "24 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Doença de Alzheimer leve a moderada — formulação de liberação imediata (menos usada atualmente)",
      doseInicial: "4 mg, VO, 2x/dia, por 4 semanas",
      doseUsual: "8 a 12 mg, VO, 2x/dia, conforme tolerabilidade",
      doseMaxima: "12 mg, VO, 2x/dia (24 mg/dia)",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "~7 horas",

  metabolizacao:
    "Metabolização hepática via CYP2D6 e CYP3A4, com excreção predominantemente renal — perfil de interação medicamentosa semelhante ao da donepezila.",

  indicacoes: [
    "Doença de Alzheimer leve a moderada",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à galantamina",
    "Insuficiência renal grave (clearance de creatinina < 9 mL/min) e insuficiência hepática grave (Child-Pugh C)",
    "Cautela extrema em doença do nó sinusal ou outros distúrbios de condução cardíaca",
    "Cautela em úlcera péptica ativa, asma/DPOC e história de convulsões",
  ],

  vantagens: [
    "Mecanismo dual (inibição da colinesterase + modulação nicotínica alostérica), com racional farmacológico teoricamente atrativo",
    "Formulação de liberação prolongada (1x/dia) melhora a comodidade posológica em relação à formulação de liberação imediata",
    "Eficácia comparável aos demais inibidores da colinesterase em metanálises diretas e indiretas",
  ],

  desvantagens: [
    "Comparações indiretas sugerem resposta global e sobre comportamento discretamente inferior à donepezila em algumas metanálises, embora sem diferença consistente em desfechos cognitivos diretos",
    "Contraindicado em insuficiência renal e hepática graves, diferentemente de donepezila e rivastigmina",
    "Efeitos colinérgicos gastrointestinais semelhantes aos demais fármacos da classe",
    "Benefício sintomático modesto sobre cognição e funcionalidade, sem modificar o curso neurodegenerativo",
  ],

  efeitosAdversos: [
    "Náusea, vômitos, diarreia, perda de apetite (mais frequentes na titulação)",
    "Tontura, cefaleia",
    "Perda de peso",
    "Bradicardia (raro, mas clinicamente relevante)",
    "Síncope",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Fármacos com atividade anticolinérgica (antagonismo farmacodinâmico direto)",
    "Betabloqueadores e outros bradicardizantes (risco aditivo de bradicardia)",
    "Inibidores de CYP2D6/CYP3A4 (ex.: quetiapina, paroxetina, alguns antifúngicos) podem aumentar níveis séricos de galantamina, exigindo ajuste de dose",
    "Relaxantes musculares tipo succinilcolina",
    "Anti-inflamatórios não esteroidais (risco aditivo de sangramento gastrointestinal)",
  ],

  ganhoPeso: "Muito baixo — tende a reduzir apetite/peso.",

  sedacao: "Muito baixo — sem efeito sedativo relevante.",

  sexual: "Muito baixo — sem efeito relevante conhecido sobre função sexual.",

  qt: "Muito baixo — sem efeito relevante conhecido sobre o intervalo QT.",

  gravidez:
    "Uso não indicado — a Doença de Alzheimer não ocorre tipicamente em idade reprodutiva; dados em humanos são escassos.",

  gravidezCategoria: "evitar",

  lactacao:
    "Sem indicação clínica relevante nessa faixa etária/contexto; dados insuficientes.",

  lactacaoCategoria: "evitar",

  renal:
    "Ajuste de dose necessário em insuficiência renal moderada (dose máxima 16 mg/dia); contraindicado em insuficiência renal grave (clearance de creatinina < 9 mL/min).",

  ajusteRenalNecessario: true,

  hepatica:
    "Ajuste de dose necessário em insuficiência hepática leve a moderada (dose máxima 16 mg/dia em Child-Pugh B); contraindicado em insuficiência hepática grave (Child-Pugh C).",

  observacoes:
    "Terceira opção entre os inibidores da colinesterase de primeira linha para Doença de Alzheimer leve a moderada, com eficácia geral comparável a donepezila e rivastigmina. Diferentemente destas, é contraindicada em insuficiência renal ou hepática graves, o que a torna menos favorável nesse subgrupo de pacientes. Não possui indicação formal para Demência com Corpos de Lewy ou demência da Doença de Parkinson na bula, embora alguns dados observacionais existam.",

  perolasClinicas: [
    "Preferir a formulação de liberação prolongada (1x/dia) sempre que disponível, pela maior comodidade posológica e adesão.",
    "Verificar função renal e hepática antes de iniciar — é a opção da classe com restrições mais estritas nesses cenários.",
    "Administrar sempre com alimento para reduzir efeitos gastrointestinais.",
    "Atenção a interações via CYP2D6/CYP3A4 — reduzir dose se associada a inibidores potentes dessas enzimas.",
  ],

  referencias: [
    "Loy C, Schneider L. Galantamine for Alzheimer's disease and mild cognitive impairment. Cochrane Database Syst Rev. 2006.",
    "NICE Technology Appraisal TA217 - Donepezil, galantamine, rivastigmine and memantine for the treatment of Alzheimer's disease.",
    "Academia Brasileira de Neurologia - Diretrizes para diagnóstico e tratamento da Doença de Alzheimer.",
    "Stahl's Essential Psychopharmacology",
  ],
};
