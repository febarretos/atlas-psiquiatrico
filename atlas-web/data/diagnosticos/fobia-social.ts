import { Diagnostico } from "./types";

export const fobiaSocial: Diagnostico = {
  id: "fobia-social",

  nome: "Transtorno de Ansiedade Social (Fobia Social)",

  categoria: "Transtornos de Ansiedade",

  cid11: "6B04",

  cid10: "F40.1",

  descricao:
    "Medo ou ansiedade marcantes e persistentes acerca de uma ou mais situações sociais nas quais o indivíduo é exposto a possível avaliação por outras pessoas, com receio central de agir de forma que demonstre sintomas de ansiedade ou seja avaliado negativamente (humilhação, embaraço, rejeição ou ofensa a terceiros).",

  criteriosDiagnosticos: [
    "A. Medo ou ansiedade marcantes acerca de uma ou mais situações sociais em que o indivíduo é exposto a possível avaliação por outras pessoas (por exemplo, interações sociais, ser observado, desempenhar-se diante de outros).",
    "B. O indivíduo teme agir de forma a demonstrar sintomas de ansiedade que serão avaliados negativamente (será humilhante, embaraçoso, levará à rejeição ou ofenderá outros).",
    "C. As situações sociais quase sempre provocam medo ou ansiedade.",
    "D. As situações sociais são evitadas ou suportadas com intenso medo ou ansiedade.",
    "E. O medo ou ansiedade é desproporcional à ameaça real representada pela situação social e ao contexto sociocultural.",
    "F. O medo, ansiedade ou esquiva é persistente, geralmente durando 6 meses ou mais.",
    "G. O medo, ansiedade ou esquiva causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes.",
    "H. O medo, ansiedade ou esquiva não é atribuível aos efeitos fisiológicos de uma substância ou de outra condição médica.",
    "I. O medo, ansiedade ou esquiva não é mais bem explicado por outro transtorno mental (transtorno de pânico, dismorfia corporal, transtorno do espectro autista).",
    "J. Se outra condição médica está presente, o medo, ansiedade ou esquiva é claramente não relacionado a ela ou é excessivo.",
  ],

  especificadores: [
    "Somente desempenho: o medo está restrito a falar ou se apresentar em público, sem comprometer outras interações sociais",
  ],

  duracaoMinima: "Geralmente 6 meses ou mais (critério temporal utilizado para diferenciar de reações transitórias de timidez situacional)",

  prevalencia:
    "Prevalência anual em torno de 7% e prevalência ao longo da vida entre 12-13% na população geral, tornando-o um dos transtornos de ansiedade mais comuns; discreto predomínio no sexo feminino. Frequentemente subdiagnosticado por ser confundido com timidez.",

  cursoEPrognostico:
    "Início tipicamente na infância ou adolescência (mediana em torno dos 13 anos), sendo incomum o início após os 25 anos sem histórico prévio de traços de inibição social. Curso crônico se não tratado, com flutuações relacionadas a mudanças de contexto (nova escola, emprego). Sem tratamento, tende a persistir por décadas e associa-se a prejuízo educacional, ocupacional e de qualidade de vida significativos.",

  diagnosticoDiferencial: [
    "Timidez normativa/traço de personalidade (não atinge o limiar de sofrimento/prejuízo funcional clinicamente significativo)",
    "Transtorno de Pânico (ataques de pânico inesperados, não restritos a situações de avaliação social)",
    "Agorafobia (medo relacionado a dificuldade de fuga/ajuda em caso de sintomas incapacitantes, não a avaliação social)",
    "TAG (preocupação difusa com múltiplas áreas da vida, não centrada em avaliação/julgamento social)",
    "Transtorno Dismórfico Corporal (evitação social secundária à preocupação com defeito percebido na aparência)",
    "Transtorno do Espectro Autista (dificuldades sociais nucleares de reciprocidade, não medo de avaliação negativa apesar de habilidade social preservada)",
    "Transtorno da Personalidade Esquiva (padrão mais amplo, pervasivo e precoce de inibição social, sentimento de inadequação e hipersensibilidade à rejeição — pode coexistir e representar formas mais graves do mesmo espectro)",
    "Mutismo seletivo em crianças",
  ],

  comorbidadesComuns: [
    "Outros transtornos de ansiedade (TAG, fobias específicas, transtorno de pânico)",
    "Transtorno Depressivo Maior",
    "Transtorno por Uso de Álcool (uso frequente como automedicação para ansiedade social)",
    "Transtorno da Personalidade Esquiva",
    "TDAH em crianças e adolescentes",
  ],

  tratamentoPrimeiraLinha: [
    "ISRS (sertralina, escitalopram, paroxetina) ou ISRSN (venlafaxina) como primeira linha farmacológica para o transtorno generalizado (não restrito a desempenho)",
    "Terapia Cognitivo-Comportamental como psicoterapia de primeira linha, com ênfase em exposição gradual a situações sociais temidas e reestruturação cognitiva de crenças sobre avaliação social",
    "Combinação de ISRS/ISRSN com TCC recomendada em casos moderados a graves",
    "Beta-bloqueador (propranolol) em dose única antes do evento, ou benzodiazepínico pontual, reservados ao especificador somente desempenho (ansiedade situacional isolada, como falar em público), não indicados como tratamento de manutenção do transtorno generalizado",
    "Benzodiazepínicos evitados como tratamento de manutenção pelo risco de dependência, podendo ser usados pontualmente em situações específicas sob criteriosa avaliação",
  ],

  sintomasChave: [
    { id: "medo-social", peso: 3 },
    { id: "evitacao-fobica", peso: 2 },
    { id: "ansiedade-excessiva", peso: 1 },
    { id: "tensao-muscular", peso: 1 },
  ],

  medicamentosPrimeiraLinha: [
    "sertralina",
    "escitalopram",
    "paroxetina",
    "venlafaxina",
    "propranolol",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "NICE Guideline CG159 - Social anxiety disorder: recognition, assessment and treatment",
    "APA Practice Guideline for the Treatment of Patients with Panic Disorder and related anxiety disorders",
    "Canadian Clinical Practice Guidelines for Anxiety, Posttraumatic Stress and Obsessive-Compulsive Disorders",
    "CID-11 (OMS)",
    "Diretrizes da Associação Médica Brasileira (AMB/ABP) para o Tratamento do Transtorno de Ansiedade Social. Rev Bras Psiquiatr. 2011",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a"],
    criterios: [
      { id: "a", pergunta: "Você sente medo ou ansiedade marcante em uma ou mais situações sociais em que pode ser avaliado(a) por outras pessoas (conversar, ser observado, se apresentar)?" },
      { id: "b", pergunta: "Você teme que, ao demonstrar sinais de ansiedade, seja humilhado(a), constrangido(a), rejeitado(a) ou ofenda alguém?" },
      { id: "c", pergunta: "Essas situações sociais quase sempre provocam medo ou ansiedade em você?" },
      { id: "d", pergunta: "Você evita essas situações, ou as enfrenta com muito medo ou ansiedade?" },
      { id: "e", pergunta: "Esse medo parece desproporcional em relação ao risco real da situação, considerando também seu contexto sociocultural?" },
    ],
    algoritmo: {
      contagemMinima: 5,
      itensContaveis: ["a", "b", "c", "d", "e"],
      duracaoMinima: "O medo, ansiedade ou evitação (critério F) dura, tipicamente, 6 meses ou mais",
      observacaoExclusao:
        "G: sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes. H: não atribuível a efeito fisiológico de substância ou outra condição médica. I: não mais bem explicado por outro transtorno mental (pânico, transtorno dismórfico corporal, transtorno do espectro autista). J: se há outra condição médica presente, o medo é claramente não relacionado a ela ou é excessivo. Especificador: avaliar se restrito a desempenho (falar/apresentar-se em público).",
    },
  },
};
