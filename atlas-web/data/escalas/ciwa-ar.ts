import { Escala } from "./types";

export const ciwaAr: Escala = {
  id: "ciwa-ar",

  nome: "Clinical Institute Withdrawal Assessment for Alcohol, Revised",

  sigla: "CIWA-Ar",

  categoria: "Uso de Substâncias",

  descricao:
    "Escala heteroaplicada de 10 itens para quantificar a gravidade da síndrome de abstinência alcoólica e guiar o tratamento farmacológico com benzodiazepínicos administrado de forma seriada (symptom-triggered therapy). É o instrumento referenciado no fluxograma de emergência de Delirium Tremens deste app.",

  instrucoes:
    "Aplicada por profissional de saúde treinado, com reavaliação seriada (tipicamente a cada 1 a 4 horas, conforme protocolo institucional e gravidade). Os itens de náusea/vômitos, tremor, sudorese, ansiedade, agitação e cefaleia são pontuados de 0 a 7; o item orientação/turvação do sensório é pontuado de 0 a 4. A pontuação total máxima é 67.",

  itens: [
    {
      id: "ciwaar-nausea",
      texto: "Náusea e vômitos — Pergunte: 'Você sente enjoo no estômago? Vomitou?'",
      opcoes: [
        { label: "Sem náusea nem vômitos", valor: 0 },
        { label: "Náusea leve, sem vômitos", valor: 1 },
        { label: "(intermediário)", valor: 2 },
        { label: "(intermediário)", valor: 3 },
        { label: "Náusea intermitente, com ânsias secas", valor: 4 },
        { label: "(intermediário)", valor: 5 },
        { label: "(intermediário)", valor: 6 },
        { label: "Náusea constante, ânsias secas frequentes e vômitos", valor: 7 },
      ],
    },
    {
      id: "ciwaar-tremor",
      texto:
        "Tremor — Observado com os braços estendidos e dedos separados (não relatado pelo paciente)",
      opcoes: [
        { label: "Sem tremor", valor: 0 },
        { label: "Não visível, mas palpável na ponta dos dedos", valor: 1 },
        { label: "(intermediário)", valor: 2 },
        { label: "(intermediário)", valor: 3 },
        { label: "Moderado, com os braços estendidos", valor: 4 },
        { label: "(intermediário)", valor: 5 },
        { label: "(intermediário)", valor: 6 },
        { label: "Grave, mesmo com os braços não estendidos", valor: 7 },
      ],
    },
    {
      id: "ciwaar-sudorese",
      texto: "Sudorese paroxística — Observada (não relatada pelo paciente)",
      opcoes: [
        { label: "Sem sudorese visível", valor: 0 },
        { label: "Sudorese apenas palpável, mãos úmidas", valor: 1 },
        { label: "(intermediário)", valor: 2 },
        { label: "(intermediário)", valor: 3 },
        { label: "Gotas de suor visíveis na testa", valor: 4 },
        { label: "(intermediário)", valor: 5 },
        { label: "(intermediário)", valor: 6 },
        { label: "Sudorese profusa, encharcando o corpo", valor: 7 },
      ],
    },
    {
      id: "ciwaar-ansiedade",
      texto: "Ansiedade — Pergunte: 'Você se sente nervoso(a)?'",
      opcoes: [
        { label: "Sem ansiedade; à vontade", valor: 0 },
        { label: "Ansiedade leve", valor: 1 },
        { label: "(intermediário)", valor: 2 },
        { label: "(intermediário)", valor: 3 },
        { label: "Moderadamente ansioso(a), ou reservado(a), de modo que a ansiedade é inferida", valor: 4 },
        { label: "(intermediário)", valor: 5 },
        { label: "(intermediário)", valor: 6 },
        {
          label: "Equivalente a estados de pânico agudo, como em quadros psicóticos graves",
          valor: 7,
        },
      ],
    },
    {
      id: "ciwaar-agitacao",
      texto: "Agitação — Observada (não relatada pelo paciente)",
      opcoes: [
        { label: "Atividade normal", valor: 0 },
        { label: "Um pouco mais de atividade do que a normal", valor: 1 },
        { label: "(intermediário)", valor: 2 },
        { label: "(intermediário)", valor: 3 },
        { label: "Moderadamente inquieto(a) e agitado(a)", valor: 4 },
        { label: "(intermediário)", valor: 5 },
        { label: "(intermediário)", valor: 6 },
        {
          label: "Anda de um lado para o outro durante a maior parte da entrevista, ou se debate constantemente",
          valor: 7,
        },
      ],
    },
    {
      id: "ciwaar-tateis",
      texto:
        "Distúrbios táteis — Pergunte: 'Você sente coceira, sensação de picada de agulha, queimação, dormência, ou sente insetos andando sobre ou embaixo da sua pele?'",
      opcoes: [
        { label: "Nenhum", valor: 0 },
        { label: "Coceira, picada, queimação ou dormência muito leves", valor: 1 },
        { label: "Coceira, picada, queimação ou dormência leves", valor: 2 },
        { label: "Coceira, picada, queimação ou dormência moderadas", valor: 3 },
        { label: "Alucinações moderadamente graves", valor: 4 },
        { label: "Alucinações graves", valor: 5 },
        { label: "Alucinações extremamente graves", valor: 6 },
        { label: "Alucinações contínuas", valor: 7 },
      ],
    },
    {
      id: "ciwaar-auditivos",
      texto:
        "Distúrbios auditivos — Pergunte: 'Você está mais sensível a sons ao seu redor? Eles são agressivos? Assustam você? Você está ouvindo algo que o(a) perturba ou sons que você sabe que não estão presentes?'",
      opcoes: [
        { label: "Ausentes", valor: 0 },
        { label: "Aspereza ou capacidade de assustar muito leves", valor: 1 },
        { label: "Aspereza ou capacidade de assustar leves", valor: 2 },
        { label: "Aspereza ou capacidade de assustar moderadas", valor: 3 },
        { label: "Alucinações moderadamente graves", valor: 4 },
        { label: "Alucinações graves", valor: 5 },
        { label: "Alucinações extremamente graves", valor: 6 },
        { label: "Alucinações contínuas", valor: 7 },
      ],
    },
    {
      id: "ciwaar-visuais",
      texto:
        "Distúrbios visuais — Pergunte: 'A luz parece muito brilhante? A cor é diferente? Ela machuca seus olhos? Você está vendo algo que o(a) perturba ou que você sabe que não está presente?'",
      opcoes: [
        { label: "Ausentes", valor: 0 },
        { label: "Sensibilidade muito leve", valor: 1 },
        { label: "Sensibilidade leve", valor: 2 },
        { label: "Sensibilidade moderada", valor: 3 },
        { label: "Alucinações moderadamente graves", valor: 4 },
        { label: "Alucinações graves", valor: 5 },
        { label: "Alucinações extremamente graves", valor: 6 },
        { label: "Alucinações contínuas", valor: 7 },
      ],
    },
    {
      id: "ciwaar-cefaleia",
      texto:
        "Cefaleia / sensação de peso na cabeça — Pergunte: 'Sua cabeça está diferente? Você sente como se houvesse uma faixa apertando sua cabeça?' (não avaliar tontura ou vertigem)",
      opcoes: [
        { label: "Ausente", valor: 0 },
        { label: "Muito leve", valor: 1 },
        { label: "Leve", valor: 2 },
        { label: "Moderada", valor: 3 },
        { label: "Moderadamente grave", valor: 4 },
        { label: "Grave", valor: 5 },
        { label: "Muito grave", valor: 6 },
        { label: "Extremamente grave", valor: 7 },
      ],
    },
    {
      id: "ciwaar-orientacao",
      texto:
        "Orientação e turvação do sensório — Pergunte: 'Que dia é hoje? Onde você está? Quem sou eu?'",
      opcoes: [
        { label: "Orientado(a) e capaz de fazer somas seriadas", valor: 0 },
        {
          label: "Não consegue fazer somas seriadas ou está incerto(a) sobre a data",
          valor: 1,
        },
        { label: "Desorientado(a) para a data, com erro não superior a 2 dias", valor: 2 },
        { label: "Desorientado(a) para a data, com erro superior a 2 dias", valor: 3 },
        { label: "Desorientado(a) para lugar e/ou pessoa", valor: 4 },
      ],
    },
  ],

  faixas: [
    {
      min: 0,
      max: 9,
      label: "Abstinência mínima/ausente",
      cor: "green",
      descricao:
        "Sintomas mínimos ou ausentes. Muitos protocolos institucionais não iniciam tratamento farmacológico guiado pela escala nessa faixa, mas o limiar exato varia (alguns protocolos tratam já a partir de ≥8) — seguir o limiar local, não um valor fixo. Manter reavaliação seriada e suporte de enfermagem.",
    },
    {
      min: 10,
      max: 15,
      label: "Abstinência leve a moderada",
      cor: "yellow",
      descricao:
        "Sintomas leves a moderados. Considerar início ou ajuste de benzodiazepínico conforme protocolo institucional de terapia guiada por sintomas (symptom-triggered therapy), com reavaliação frequente.",
    },
    {
      min: 16,
      max: 20,
      label: "Abstinência moderada a grave",
      cor: "yellow",
      descricao:
        "Sintomas mais intensos, incluindo possíveis distúrbios sensoperceptivos. Indicado tratamento farmacológico ativo com benzodiazepínico e reavaliação a cada 1 hora ou conforme protocolo.",
    },
    {
      min: 21,
      max: 67,
      label: "Abstinência grave",
      cor: "red",
      descricao:
        "Alto risco de complicações graves (convulsões, delirium tremens). Indica tratamento farmacológico intensivo, monitorização rigorosa e considerar internação em ambiente de maior suporte (ex.: unidade de cuidados intermediários/intensivos).",
    },
  ],

  modoDePontuacao: "soma",

  notaInterpretacao:
    "ATENÇÃO — validade do instrumento: o CIWA-Ar só é válido em paciente comunicativo e cooperativo, capaz de relatar sintomas subjetivos (cefaleia, distúrbios sensoperceptivos, ansiedade) — vários dos 10 itens dependem desse relato. NÃO é válido em delirium tremens já estabelecido, paciente confuso/desorientado, ou história de convulsão/DT prévios (abstinência complicada): nesses casos o protocolo correto é esquema fixo/front-loading de benzodiazepínico guiado por sinais objetivos, não terapia guiada por sintomas via esta escala (ver a página de emergência 'Delirium Tremens' neste app). O CIWA-Ar deve ser aplicado de forma SERIADA (reavaliações repetidas ao longo do tempo, não uma medida única) para guiar a dose de benzodiazepínico no protocolo de tratamento guiado por sintomas (symptom-triggered therapy), reservado à abstinência NÃO complicada em paciente comunicativo: administra-se benzodiazepínico quando a pontuação ultrapassa o limiar definido pelo protocolo local (o limiar exato varia — a faixa 0-9 aqui descrita como 'mínima/ausente' já pode indicar tratamento em alguns protocolos), reavaliando a resposta a intervalos curtos (1 a 4 horas) até estabilização. Pontuações persistentemente ≥15 a 20 sinalizam risco aumentado de convulsões e evolução para delirium tremens, exigindo tratamento farmacológico intensivo e monitorização próxima. A escala pressupõe abstinência alcoólica como causa dos sintomas: quadros com rebaixamento do nível de consciência, febre alta ou sinais neurológicos focais exigem investigação de diagnósticos diferenciais (infecção, distúrbio metabólico, trauma) antes de atribuir os achados exclusivamente à abstinência. Itens de distúrbios sensoperceptivos (tátil, auditivo, visual) devem ser cuidadosamente diferenciados de delirium tremens estabelecido, que é uma emergência médica com indicação de tratamento mais agressivo. Instrumento de apoio à decisão clínica; não substitui o julgamento médico.",

  referencias: [
    "Sullivan JT, Sykora K, Schneiderman J, Naranjo CA, Sellers EM. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict. 1989;84(11):1353-7.",
  ],
};
