import { Diagnostico } from "./types";

export const distimia: Diagnostico = {
  id: "distimia",

  nome: "Transtorno Depressivo Persistente (Distimia)",

  categoria: "Transtornos Depressivos",

  cid11: "6A72",

  cid10: "F34.1",

  descricao:
    "Forma crônica de depressão caracterizada por humor deprimido presente na maior parte do dia, na maioria dos dias, por um período mínimo de 2 anos em adultos, com sintomas geralmente de intensidade mais leve que o Transtorno Depressivo Maior, mas de curso persistente e cronicidade que geram prejuízo funcional cumulativo significativo. Consolida no DSM-5-TR as antigas categorias de transtorno distímico e transtorno depressivo maior crônico.",

  criteriosDiagnosticos: [
    "A. Humor deprimido na maior parte do dia, na maioria dos dias, indicado por relato subjetivo ou observação de terceiros, por pelo menos 2 anos (em crianças e adolescentes, o humor pode ser irritável, e a duração mínima é de 1 ano).",
    "B. Presença, enquanto deprimido, de duas ou mais das seguintes características:",
    "1. Apetite diminuído ou aumentado.",
    "2. Insônia ou hipersonia.",
    "3. Baixa energia ou fadiga.",
    "4. Baixa autoestima.",
    "5. Concentração pobre ou dificuldade em tomar decisões.",
    "6. Sentimentos de desesperança.",
    "C. Durante o período de 2 anos (1 ano em crianças/adolescentes) de perturbação, o indivíduo nunca esteve sem os sintomas dos critérios A e B por mais de 2 meses consecutivos.",
    "D. Os critérios para Transtorno Depressivo Maior podem estar continuamente presentes por 2 anos.",
    "E. Nunca houve episódio maníaco ou hipomaníaco, e os critérios para transtorno ciclotímico nunca foram satisfeitos.",
    "F. A perturbação não é mais bem explicada por transtorno esquizoafetivo persistente, esquizofrenia, transtorno delirante ou outro transtorno do espectro psicótico especificado ou não especificado.",
    "G. Os sintomas não são atribuíveis aos efeitos fisiológicos de uma substância ou de outra condição médica.",
    "H. Os sintomas causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes.",
  ],

  especificadores: [
    "Com ansiedade",
    "Com características mistas",
    "Com características melancólicas",
    "Com características atípicas",
    "Com características psicóticas congruentes ou incongruentes com o humor",
    "Com início no periparto",
    "Início precoce (antes dos 21 anos) ou início tardio (a partir dos 21 anos)",
    "Com síndrome distímica pura (critérios de episódio depressivo maior não preenchidos nos últimos 2 anos)",
    "Com episódio de depressão maior persistente (critérios completos de TDM preenchidos ao longo de todo o período de 2 anos)",
    "Com episódios intermitentes de depressão maior, com ou sem episódio atual",
    "Gravidade: leve, moderado, grave",
  ],

  duracaoMinima: "Pelo menos 2 anos em adultos (1 ano em crianças e adolescentes), sem período livre de sintomas superior a 2 meses consecutivos",

  prevalencia:
    "Prevalência ao longo da vida estimada em torno de 3-6% na população geral; mais comum em mulheres. Pela sua cronicidade, representa parcela desproporcional da carga de doença depressiva em contextos de atenção primária, muitas vezes sendo naturalizado como 'traço de personalidade' pelo próprio paciente.",

  cursoEPrognostico:
    "Curso tipicamente crônico e insidioso, com início frequentemente precoce (infância, adolescência ou início da vida adulta), dificultando a percepção do paciente de que os sintomas representam um quadro tratável e não parte de sua personalidade habitual. Cerca de 75% dos pacientes com distimia apresentam pelo menos um episódio depressivo maior sobreposto ao longo do curso (fenômeno conhecido como 'depressão dupla'), associado a pior prognóstico e maior taxa de recorrência do que TDM ou distimia isoladamente. Remissão completa é menos comum que em TDM episódico; resposta ao tratamento costuma ser mais lenta.",

  diagnosticoDiferencial: [
    "Transtorno Depressivo Maior episódico (episódios distintos com períodos de recuperação interepisódica, diferentemente da cronicidade contínua da distimia)",
    "'Depressão dupla' — episódio de TDM sobreposto a distimia preexistente (deve-se codificar e reconhecer ambos os diagnósticos)",
    "Transtorno Depressivo Maior crônico (critérios completos de episódio maior mantidos continuamente por 2 anos ou mais — atualmente também sob o guarda-chuva do Transtorno Depressivo Persistente com especificador apropriado)",
    "Transtorno de Personalidade Depressiva/traços de personalidade (diferenciação clínica sutil; história longitudinal detalhada é fundamental)",
    "Transtorno Depressivo devido a outra condição médica (hipotireoidismo, especialmente relevante pela cronicidade e sintomas sobrepostos)",
    "Transtorno Ciclotímico (presença de sintomas hipomaníacos intercalados, ausentes na distimia)",
    "Luto prolongado/complicado",
  ],

  comorbidadesComuns: [
    "Transtornos de ansiedade (TAG, pânico, fobia social) — comorbidade muito frequente",
    "Transtornos por uso de substâncias",
    "Transtornos da personalidade (especialmente borderline e esquiva)",
    "Transtorno Depressivo Maior sobreposto ('depressão dupla')",
    "Condições médicas crônicas e dor crônica",
  ],

  tratamentoPrimeiraLinha: [
    "Antidepressivos ISRS ou ISRSN como primeira linha farmacológica, com necessidade frequente de tratamento de manutenção prolongado dada a cronicidade do quadro",
    "Psicoterapia baseada em evidência: TCC, Terapia Interpessoal ou Sistema de Análise Cognitivo-Comportamental de Psicoterapia (CBASP), este último desenvolvido especificamente para depressão crônica",
    "Combinação de antidepressivo com psicoterapia mostra superioridade em relação à monoterapia, particularmente relevante nesta condição crônica",
    "Psicoeducação extensa é essencial, já que muitos pacientes não reconhecem os sintomas crônicos como uma condição tratável",
    "Monitorização ativa para desenvolvimento de episódios de depressão maior sobrepostos ('depressão dupla'), que exigem intensificação do tratamento",
  ],

  sintomasChave: [
    { id: "humor-deprimido", peso: 3 },
    { id: "curso-cronico-meses", peso: 3 },
    { id: "fadiga", peso: 2 },
    { id: "desesperanca", peso: 2 },
    { id: "dificuldade-concentracao", peso: 1 },
    { id: "insonia", peso: 1 },
    { id: "hipersonia", peso: 1 },
  ],

  medicamentosPrimeiraLinha: [
    "citalopram",
    "sertralina",
    "escitalopram",
    "venlafaxina",
    "duloxetina",
    "bupropiona",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CANMAT/ISBD 2023 Guidelines for Management of Major Depressive Disorder",
    "NICE Guideline NG222 - Depression in adults",
    "Keller MB et al. - Estudos sobre depressão dupla e depressão crônica",
    "CID-11 (OMS)",
  ],
};
