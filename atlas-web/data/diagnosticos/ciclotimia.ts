import { Diagnostico } from "./types";

export const ciclotimia: Diagnostico = {
  id: "ciclotimia",

  nome: "Transtorno Ciclotímico",

  categoria: "Transtorno Bipolar e Relacionados",

  cid11: "6A62",

  cid10: "F34.0",

  descricao:
    "Transtorno crônico e flutuante do humor caracterizado por numerosos períodos com sintomas hipomaníacos e numerosos períodos com sintomas depressivos, que não preenchem os critérios completos para episódio hipomaníaco ou episódio depressivo maior, presentes por um período prolongado e associados a prejuízo funcional e sofrimento significativos, apesar de o quadro sindrômico completo nunca ter sido observado.",

  criteriosDiagnosticos: [
    "A. Por pelo menos 2 anos (1 ano em crianças e adolescentes), presença de numerosos períodos com sintomas hipomaníacos que não satisfazem os critérios para episódio hipomaníaco e numerosos períodos com sintomas depressivos que não satisfazem os critérios para episódio depressivo maior.",
    "B. Durante esse período de 2 anos (1 ano em crianças/adolescentes), os períodos hipomaníacos e depressivos estiveram presentes pelo menos metade do tempo, e o indivíduo não ficou sem os sintomas por mais de 2 meses consecutivos.",
    "C. Os critérios para episódio depressivo maior, maníaco ou hipomaníaco nunca foram satisfeitos.",
    "D. Os sintomas do critério A não são mais bem explicados por transtorno esquizoafetivo, esquizofrenia, transtorno esquizofreniforme, transtorno delirante, ou outro transtorno do espectro psicótico especificado ou não especificado.",
    "E. Os sintomas não são atribuíveis aos efeitos fisiológicos de uma substância ou de outra condição médica.",
    "F. Os sintomas causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes.",
  ],

  especificadores: [
    "Com ansiedade (especificador de gravidade transversal aplicável a sintomas atuais)",
  ],

  duracaoMinima: "Pelo menos 2 anos em adultos (1 ano em crianças e adolescentes), com sintomas presentes pelo menos metade do tempo e sem intervalo livre de sintomas superior a 2 meses",

  prevalencia:
    "Prevalência ao longo da vida estimada entre 0,4-1% na população geral, podendo ser maior em contextos clínicos especializados em transtornos do humor; distribuição semelhante entre sexos, embora mulheres busquem tratamento com maior frequência.",

  cursoEPrognostico:
    "Início tipicamente insidioso na adolescência ou início da vida adulta, frequentemente confundido com instabilidade de personalidade ou traço temperamental. Curso crônico, com flutuações contínuas do humor de intensidade subsindrômica. Risco elevado (estimado entre 15-50% em diferentes séries) de evolução para Transtorno Bipolar tipo I ou II ao longo da vida, o que torna o acompanhamento longitudinal essencial. Associado a risco significativo de disfunção interpessoal e ocupacional pela cronicidade da instabilidade do humor.",

  diagnosticoDiferencial: [
    "Transtorno Bipolar tipo II (episódios hipomaníacos e depressivos maiores completos, diferentemente dos sintomas subsindrômicos da ciclotimia)",
    "Transtorno Bipolar tipo I",
    "Transtorno de Personalidade Borderline (instabilidade afetiva reativa a gatilhos interpessoais, com duração de horas, versus flutuações mais autônomas e sustentadas na ciclotimia — sobreposição fenomenológica relevante e possível coexistência)",
    "TDAH (sobreposição de impulsividade e labilidade do humor, especialmente em adolescentes)",
    "Transtorno Depressivo Persistente (Distimia) — ausência de sintomas hipomaníacos",
    "Instabilidade de humor secundária a uso de substâncias",
    "Variação normal de humor/temperamento hipertímico ou ciclotímico sem prejuízo funcional significativo",
  ],

  comorbidadesComuns: [
    "Transtornos por uso de substâncias (comorbidade muito frequente)",
    "Transtornos de ansiedade",
    "TDAH",
    "Transtornos do sono",
    "Transtornos de personalidade (especialmente borderline)",
  ],

  tratamentoPrimeiraLinha: [
    "Estabilizadores de humor (lítio, valproato, lamotrigina) como base farmacológica, extrapolando evidências de Transtorno Bipolar dada a escassez de ensaios clínicos específicos para ciclotimia",
    "Evitar antidepressivos em monoterapia pelo risco de indução de sintomas hipomaníacos ou aceleração de ciclagem do humor",
    "Psicoeducação sobre o transtorno do humor e monitorização ativa do curso (uso de gráficos de humor) para identificar precocemente eventual evolução para Transtorno Bipolar tipo I ou II",
    "Psicoterapia com foco em regulação do humor e rotina (Terapia do Ritmo Social e Interpessoal, TCC adaptada a transtornos do humor) como adjuvante",
    "Higiene do sono e regularidade de rotina, dado o papel de disruptores do ritmo circadiano na flutuação do humor",
  ],

  sintomasChave: [
    { id: "humor-elevado", peso: 2 },
    { id: "humor-deprimido", peso: 2 },
    { id: "flutuacao-ciclica", peso: 3 },
    { id: "curso-cronico-meses", peso: 2 },
  ],

  medicamentosPrimeiraLinha: ["litio", "valproato", "lamotrigina"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CANMAT/ISBD 2018/2021 Guidelines for the Management of Patients with Bipolar Disorder",
    "Van Meter AR et al. - Revisões sobre epidemiologia e curso do transtorno ciclotímico",
    "CID-11 (OMS)",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["hipo", "dep"],
    criterios: [
      { id: "hipo", pergunta: "Ao longo dos últimos 2 anos, você teve vários períodos com humor mais elevado, mais energia ou mais disposição do que o habitual, mesmo que por pouco tempo ou de forma leve?" },
      { id: "dep", pergunta: "Nesse mesmo período, você também teve vários períodos com humor mais baixo, tristeza ou desânimo, mesmo que por pouco tempo ou de forma leve?" },
    ],
    algoritmo: {
      contagemMinima: 2,
      itensContaveis: ["hipo", "dep"],
      duracaoMinima: "Pelo menos 2 anos em adultos (1 ano em crianças/adolescentes), com sintomas presentes pelo menos metade do tempo e sem intervalo livre de sintomas superior a 2 meses consecutivos",
      observacaoExclusao:
        "C: os critérios completos de episódio depressivo maior, maníaco ou hipomaníaco NUNCA podem ter sido satisfeitos — se algum já foi, reclassificar como Bipolar I/II ou Depressão Maior, não Ciclotimia (rastrear ativamente com os módulos correspondentes). D: não mais bem explicado por transtorno esquizoafetivo, esquizofrenia ou outro transtorno do espectro psicótico. E: não atribuível a efeito fisiológico de substância ou outra condição médica. F: os sintomas causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes.",
    },
  },
};
