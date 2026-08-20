import { Diagnostico } from "./types";

export const bipolarTipo2: Diagnostico = {
  id: "bipolar-tipo-2",

  nome: "Transtorno Bipolar Tipo II",

  categoria: "Transtorno Bipolar e Relacionados",

  cid11: "6A61",

  cid10: "F31.8",

  descricao:
    "Transtorno do humor definido pela ocorrência de pelo menos um episódio hipomaníaco e pelo menos um episódio depressivo maior ao longo da vida, na ausência de qualquer episódio maníaco pleno. Frequentemente subdiagnosticado, pois os episódios hipomaníacos raramente motivam busca de tratamento por si mesmos.",

  criteriosDiagnosticos: [
    "Critérios do Episódio Hipomaníaco:",
    "A. Período distinto de humor anormal e persistentemente elevado, expansivo ou irritável, e aumento anormal e persistente da energia/atividade, presente na maior parte do dia, quase todos os dias, por pelo menos 4 dias consecutivos.",
    "B. Durante o período, 3 ou mais dos seguintes sintomas (4 se o humor é apenas irritável): autoestima inflada/grandiosidade; redução da necessidade de sono; loquacidade aumentada; fuga de ideias/pensamento acelerado; distratibilidade; aumento de atividade dirigida a objetivos ou agitação psicomotora; envolvimento excessivo em atividades de risco.",
    "C. O episódio está associado a mudança inequívoca no funcionamento, não característica do indivíduo fora do episódio.",
    "D. A alteração do humor e do funcionamento é observável por terceiros.",
    "E. O episódio não é suficientemente grave para causar prejuízo acentuado no funcionamento social/ocupacional, não requer hospitalização e não apresenta características psicóticas (se presentes, o episódio é, por definição, maníaco).",
    "F. O episódio não é atribuível aos efeitos fisiológicos de uma substância ou condição médica.",
    "Critérios do Episódio Depressivo Maior (ver Transtorno Depressivo Maior — necessário ao menos um ao longo da vida):",
    "Critérios diagnósticos do Transtorno Bipolar II:",
    "A. Preenche os critérios para pelo menos um episódio hipomaníaco e pelo menos um episódio depressivo maior.",
    "B. Nunca houve episódio maníaco pleno.",
    "C. A ocorrência do(s) episódio(s) hipomaníaco(s) e depressivo(s) maior(es) não é mais bem explicada por transtorno esquizoafetivo, esquizofrenia ou outro transtorno psicótico.",
    "D. Os sintomas depressivos ou a imprevisibilidade causada pela alternância frequente entre episódios causam sofrimento clinicamente significativo ou prejuízo funcional.",
  ],

  especificadores: [
    "Com características ansiosas",
    "Com características mistas",
    "Com ciclagem rápida (≥4 episódios de humor em 12 meses)",
    "Com características melancólicas ou atípicas (episódio depressivo)",
    "Com características psicóticas (apenas no episódio depressivo, por definição)",
    "Com catatonia",
    "Com início no periparto",
    "Com padrão sazonal",
    "Episódio atual hipomaníaco, depressivo ou em remissão parcial/completa",
  ],

  duracaoMinima: "Episódio hipomaníaco: pelo menos 4 dias consecutivos; episódio depressivo maior: pelo menos 2 semanas",

  prevalencia:
    "Prevalência ao longo da vida em torno de 0,5-1,5% na população geral, ligeiramente mais comum em mulheres. Idade média de início próxima à do Transtorno Bipolar I, em torno dos 20 anos.",

  cursoEPrognostico:
    "Curso crônico, com maior tempo total em fase depressiva do que hipomaníaca — a depressão é frequentemente a queixa predominante e o principal motivo de prejuízo funcional. Historicamente considerado mais 'leve' que o Tipo I, mas associado a risco de suicídio igual ou até superior, além de taxas significativas de cronificação e comprometimento funcional. Conversão para Transtorno Bipolar I é relativamente incomum.",

  diagnosticoDiferencial: [
    "Transtorno Bipolar Tipo I (presença de episódio maníaco pleno, com prejuízo acentuado ou psicose)",
    "Transtorno Depressivo Maior recorrente (rastreio ativo de hipomania prévia é essencial — subdiagnóstico de bipolaridade é comum)",
    "Transtorno Ciclotímico (oscilações crônicas de humor de menor intensidade, sem preencher critérios plenos de episódio hipomaníaco ou depressivo maior, por pelo menos 2 anos)",
    "Transtorno de Personalidade Borderline (instabilidade afetiva reativa, de curta duração e ligada a estressores interpessoais, não episódica)",
    "TDAH (distratibilidade e impulsividade crônicas, sem periodicidade de humor)",
    "Hipomania induzida por antidepressivo ou substância",
    "Transtorno Depressivo com características mistas subliminares",
  ],

  comorbidadesComuns: [
    "Transtornos de ansiedade (presentes em mais da metade dos casos)",
    "Transtornos por uso de substâncias",
    "Transtornos alimentares (especialmente bulimia nervosa)",
    "TDAH",
    "Transtornos da personalidade, especialmente borderline",
  ],

  tratamentoPrimeiraLinha: [
    "Quetiapina com evidência robusta tanto para depressão bipolar quanto para prevenção de recorrência",
    "Lítio como estabilizador de primeira linha, com efeito antissuicida bem documentado",
    "Lamotrigina como opção de primeira linha, particularmente eficaz na prevenção de episódios depressivos (menos eficaz na prevenção de hipomania)",
    "Lurasidona como opção com boa evidência para depressão bipolar",
    "Evitar antidepressivos em monoterapia (risco de viragem hipomaníaca ou indução de ciclagem rápida); quando utilizados, sempre associados a estabilizador do humor",
    "Psicoeducação e terapia focada na família/TCC adaptada como adjuvantes com evidência consistente de redução de recaída",
  ],

  sintomasChave: [
    { id: "humor-deprimido", peso: 3 },
    { id: "flutuacao-ciclica", peso: 3 },
    { id: "humor-elevado", peso: 2 },
    { id: "aumento-energia", peso: 1 },
    { id: "reducao-necessidade-sono", peso: 1 },
  ],

  medicamentosPrimeiraLinha: ["quetiapina", "litio", "lamotrigina", "lurasidona"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CANMAT/ISBD 2018 Guidelines for the Management of Patients with Bipolar Disorder (com atualizações posteriores)",
    "NICE Guideline NG185 - Bipolar disorder: assessment and management",
    "CID-11 (OMS)",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a"],
    criterios: [
      { id: "a", pergunta: "Você já teve um período de pelo menos 4 dias consecutivos em que se sentiu anormalmente elevado(a), expansivo(a) ou irritável, com muito mais energia do que o habitual, na maior parte do dia?" },
      { id: "b1", pergunta: "Durante esse período, você se sentiu com autoestima muito maior que o normal, ou com ideias de grandiosidade?" },
      { id: "b2", pergunta: "Você sentiu menos necessidade de dormir?" },
      { id: "b3", pergunta: "Você ficou muito mais falante do que o habitual?" },
      { id: "b4", pergunta: "Seus pensamentos pareciam acelerados, ou várias ideias vinham à cabeça ao mesmo tempo?" },
      { id: "b5", pergunta: "Você ficou muito mais facilmente distraído(a)?" },
      { id: "b6", pergunta: "Você ficou muito mais ativo(a) do que o habitual ou muito agitado(a)?" },
      { id: "b7", pergunta: "Você se envolveu em atividades arriscadas com alto potencial de consequências ruins?" },
    ],
    algoritmo: {
      contagemMinima: 3,
      itensContaveis: ["b1", "b2", "b3", "b4", "b5", "b6", "b7"],
      duracaoMinima: "Pelo menos 4 dias consecutivos",
      observacaoExclusao:
        "Contagem mínima passa a 4 (não 3) se o humor for exclusivamente irritável. C/D (episódio hipomaníaco): a mudança precisa ser observável por terceiros, mas SEM prejuízo acentuado, SEM necessidade de hospitalização e SEM características psicóticas — se algum desses estiver presente, o episódio é maníaco, não hipomaníaco (reclassifica como Bipolar I). F (episódio): não atribuível a substância/condição médica. Um episódio hipomaníaco isolado não fecha Bipolar II: exige também história de pelo menos 1 episódio depressivo maior (ver módulo Depressão Maior) e ausência de qualquer episódio maníaco pleno ao longo da vida. C (nível transtorno — não confundir com o C/D do episódio acima): a ocorrência dos episódios hipomaníaco(s) e depressivo(s) maior(es) não pode ser mais bem explicada por transtorno esquizoafetivo, esquizofrenia, transtorno esquizofreniforme, transtorno delirante ou outro transtorno do espectro psicótico. D (nível transtorno): os sintomas depressivos ou a imprevisibilidade causada pela alternância frequente entre episódios causam sofrimento clinicamente significativo ou prejuízo funcional.",
    },
  },
};
