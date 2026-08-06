import { Medicamento } from "../../types";

export const rivastigmina: Medicamento = {
  id: "rivastigmina",

  nome: "Rivastigmina",

  nomeComercial: [
    "Exelon",
    "Exelon Patch",
  ],

  classe: "Inibidor da colinesterase",

  subclasse: "Inibidor pseudo-irreversível de acetilcolinesterase e butirilcolinesterase (dupla ação)",

  mecanismo:
    "Inibe de forma pseudo-irreversível tanto a acetilcolinesterase quanto a butirilcolinesterase no sistema nervoso central, aumentando a disponibilidade sináptica de acetilcolina. A inibição adicional da butirilcolinesterase (enzima com papel colinérgico compensatório crescente à medida que a doença progride) é uma característica distintiva em relação à donepezila e à galantamina.",

  posologias: [
    {
      indicacao: "Doença de Alzheimer leve a moderada — formulação oral (cápsulas)",
      doseInicial: "1,5 mg, VO, 2x/dia",
      doseUsual: "3 a 6 mg, VO, 2x/dia (aumentar em incrementos de 1,5 mg/dose a cada ≥2 semanas, conforme tolerabilidade)",
      doseMaxima: "6 mg, VO, 2x/dia (12 mg/dia)",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Doença de Alzheimer leve a grave — adesivo transdérmico (formulação preferencial pela melhor tolerabilidade gastrointestinal e adesão)",
      doseInicial: "Adesivo de 4,6 mg/24h, 1x/dia, por 4 semanas",
      doseUsual: "Adesivo de 9,5 mg/24h, 1x/dia (dose eficaz para leve a moderada); considerar 13,3 mg/24h após ≥4 semanas se necessário",
      doseMaxima: "Adesivo de 13,3 mg/24h (dose de referência para moderada a grave)",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Demência associada à Doença de Parkinson (única indicação com aprovação regulatória específica entre os inibidores da colinesterase para este quadro)",
      doseInicial: "1,5 mg, VO, 2x/dia (ou adesivo 4,6 mg/24h)",
      doseUsual: "Titular conforme tolerabilidade, mesmo esquema da Doença de Alzheimer",
      doseMaxima: "6 mg, VO, 2x/dia ou adesivo 13,3 mg/24h",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "~1 hora (via oral) — porém a inibição enzimática pseudo-irreversível prolonga o efeito farmacodinâmico muito além da meia-vida plasmática; o adesivo mantém liberação estável por 24h",

  metabolizacao:
    "Metabolização predominante por hidrólise mediada pelas próprias colinesterases (não depende significativamente do citocromo P450), o que reduz o potencial de interações medicamentosas metabólicas em comparação a donepezila e galantamina. Excreção predominantemente renal dos metabólitos.",

  indicacoes: [
    "Doença de Alzheimer leve a grave",
    "Demência associada à Doença de Parkinson (aprovação regulatória específica)",
    "Demência com Corpos de Lewy (uso apoiado por evidência, extrapolado da experiência em demência parkinsoniana)",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à rivastigmina, a outros carbamatos ou aos componentes do adesivo",
    "Cautela extrema em doença do nó sinusal ou outros distúrbios de condução cardíaca (risco de bradicardia)",
    "Cautela em úlcera péptica ativa ou uso concomitante de anti-inflamatórios",
    "Cautela em asma/DPOC e em história de convulsões",
  ],

  vantagens: [
    "Dupla inibição (acetilcolinesterase e butirilcolinesterase) — mecanismo teoricamente vantajoso em fases mais avançadas da doença, quando a butirilcolinesterase assume papel compensatório maior",
    "Formulação transdérmica reduz significativamente a incidência de efeitos gastrointestinais em comparação à via oral, melhorando adesão — vantagem prática relevante em idosos e cuidadores",
    "Metabolização não hepática via CYP450 — menor risco de interações metabólicas",
    "Única opção da classe com aprovação regulatória específica para demência da Doença de Parkinson",
  ],

  desvantagens: [
    "Maior incidência de efeitos gastrointestinais entre os inibidores da colinesterase na formulação oral, segundo revisão Cochrane (Birks et al., 2015)",
    "Titulação mais lenta e complexa na via oral (2x/dia, múltiplos incrementos)",
    "Reações cutâneas no local de aplicação do adesivo (eritema, prurido) são comuns e podem levar à descontinuação",
    "Benefício sintomático modesto sobre cognição e funcionalidade, sem modificar o curso neurodegenerativo",
  ],

  efeitosAdversos: [
    "Náusea, vômitos, diarreia, perda de apetite (mais frequentes na formulação oral e na titulação)",
    "Reação cutânea local no sítio do adesivo (eritema, prurido) — via transdérmica",
    "Tontura, cefaleia",
    "Bradicardia (raro, mas clinicamente relevante)",
    "Perda de peso",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Fármacos com atividade anticolinérgica (antagonismo farmacodinâmico direto)",
    "Betabloqueadores e outros bradicardizantes (risco aditivo de bradicardia)",
    "Relaxantes musculares tipo succinilcolina (potencialização do bloqueio neuromuscular despolarizante)",
    "Anti-inflamatórios não esteroidais (risco aditivo de sangramento gastrointestinal)",
    "Baixo potencial de interação metabólica via CYP450, diferentemente de donepezila e galantamina",
  ],

  ganhoPeso: "Muito baixo — tende a reduzir apetite/peso.",

  sedacao: "Muito baixo — tontura pode ocorrer, mas sedação franca é incomum.",

  sexual: "Muito baixo — sem efeito relevante conhecido sobre função sexual.",

  qt: "Muito baixo — sem efeito relevante conhecido sobre o intervalo QT.",

  gravidez:
    "Uso não indicado — a Doença de Alzheimer não ocorre tipicamente em idade reprodutiva; dados em humanos são escassos.",

  gravidezCategoria: "evitar",

  lactacao:
    "Sem indicação clínica relevante nessa faixa etária/contexto; dados insuficientes.",

  lactacaoCategoria: "evitar",

  renal:
    "Iniciar com dose mais baixa e titular com cautela redobrada em insuficiência renal moderada a grave, dado que a excreção dos metabólitos é predominantemente renal.",

  ajusteRenalNecessario: true,

  hepatica:
    "Iniciar com dose mais baixa e titular com cautela em insuficiência hepática leve a moderada; uso não recomendado ou com cautela extrema em insuficiência hepática grave.",

  observacoes:
    "A formulação transdérmica é frequentemente preferida na prática clínica geriátrica por melhorar significativamente a adesão e reduzir efeitos gastrointestinais em comparação à via oral, sendo especialmente útil em pacientes com dificuldade de deglutição ou múltiplas medicações orais. É a única opção da classe com aprovação regulatória específica para demência associada à Doença de Parkinson, o que a torna relevante também no contexto de Demência com Corpos de Lewy.",

  perolasClinicas: [
    "Preferir a formulação transdérmica sempre que disponível/acessível — reduz efeitos gastrointestinais e melhora adesão, especialmente relevante em pacientes com múltiplas comorbidades e polifarmácia.",
    "Rodar o local de aplicação do adesivo diariamente (evitar reaplicar no mesmo local por pelo menos 14 dias) para reduzir reações cutâneas.",
    "Ao trocar de via oral para adesivo, seguir a tabela de equivalência de dose do fabricante — não é uma conversão 1:1 simples.",
    "Titular lentamente reduz significativamente a incidência de efeitos colinérgicos, especialmente na via oral.",
  ],

  referencias: [
    "Birks JS, Grimley Evans J. Rivastigmine for Alzheimer's disease. Cochrane Database Syst Rev. 2015.",
    "NICE Technology Appraisal TA217 - Donepezil, galantamine, rivastigmine and memantine for the treatment of Alzheimer's disease.",
    "Academia Brasileira de Neurologia - Diretrizes para diagnóstico e tratamento da Doença de Alzheimer.",
    "Stahl's Essential Psychopharmacology",
  ],
};
