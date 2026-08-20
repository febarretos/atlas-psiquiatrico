import { Diagnostico } from "./types";

export const personalidadeNarcisista: Diagnostico = {
  id: "personalidade-narcisista",

  nome: "Transtorno de Personalidade Narcisista",

  categoria: "Transtornos de Personalidade",

  cid10: "F60.8",

  descricao:
    "Padrão persistente de grandiosidade (em fantasia ou comportamento), necessidade de admiração e falta de empatia, com início no início da vida adulta e presente em diversos contextos. Não possui código específico no CID-10, sendo classificado em 'Outros transtornos específicos da personalidade' (F60.8).",

  criteriosDiagnosticos: [
    "Padrão persistente de grandiosidade (em fantasia ou comportamento), necessidade de admiração e falta de empatia, começando no início da idade adulta e presente em vários contextos, indicado por 5 (ou mais) dos seguintes critérios:",
    "1. Sentimento grandioso da própria importância (ex.: exagera realizações e talentos, espera ser reconhecido como superior sem grandes realizações correspondentes).",
    "2. Preocupação com fantasias de sucesso ilimitado, poder, brilho, beleza ou amor ideal.",
    "3. Crença de ser especial e único, e de que só pode ser compreendido por, ou associar-se a, outras pessoas ou instituições especiais/de alto status.",
    "4. Necessidade excessiva de admiração.",
    "5. Sentimento de possuir direitos, ou seja, expectativas irracionais de tratamento especialmente favorável ou de que suas expectativas sejam automaticamente atendidas.",
    "6. Comportamento interpessoal exploratório, tirando vantagem de outros para atingir os próprios fins.",
    "7. Falta de empatia: reluta em reconhecer ou identificar-se com os sentimentos e necessidades alheias.",
    "8. Inveja de outras pessoas ou crença de que os outros o(a) invejam.",
    "9. Comportamentos ou atitudes arrogantes e insolentes.",
  ],

  especificadores: [
    "Reconhece-se clinicamente uma apresentação 'grandiosa' (mais próxima dos critérios formais, com abertura e agressividade evidentes) e uma apresentação 'vulnerável/hipersensível' (hipersensibilidade a críticas, retraimento envergonhado, baixa autoestima subjacente à grandiosidade) — esta última não constitui especificador formal do DSM-5-TR, mas é amplamente reconhecida na literatura clínica.",
  ],

  duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta",

  prevalencia:
    "Prevalência estimada entre 0% e 6,2% na população geral, com médias em torno de 1%; mais comum em homens (50-75% dos diagnosticados).",

  cursoEPrognostico:
    "Curso geralmente crônico. Vulnerabilidade acentuada a crises depressivas e ideação suicida diante de fracassos, envelhecimento ou perdas que ameacem a autoimagem grandiosa ('ferida narcísica'). Prognóstico limitado pela baixa procura espontânea de tratamento e pela dificuldade em manter aliança terapêutica.",

  diagnosticoDiferencial: [
    "Transtorno de Personalidade Antissocial — desconsideração instrumental pelos direitos alheios associada a violação de normas/leis, impulsividade e agressividade, menos centrada em grandiosidade e necessidade de admiração",
    "Transtorno de Personalidade Histriônica — busca de atenção com emotividade exagerada, sem a grandiosidade e o sentimento de superioridade centrais no narcisismo",
    "Transtorno de Personalidade Borderline — instabilidade afetiva e da autoimagem mais acentuada, com medo de abandono proeminente, distinto da autoimagem grandiosa mais estável (ainda que frágil) do narcisismo",
    "Episódio maníaco/hipomaníaco — grandiosidade episódica associada a outros sintomas de humor elevado/expansivo, não um padrão estável de longa data",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior (especialmente diante de fracassos ou perdas narcísicas)",
    "Transtorno por Uso de Substâncias",
    "Transtorno do Jogo",
    "Outros Transtornos de Personalidade (antissocial, histriônica, borderline, esquiva)",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapia individual de longo prazo (abordagens psicodinâmicas, terapia focada em esquemas ou terapia baseada em mentalização), com foco no manejo de vulnerabilidade narcísica e no desenvolvimento de empatia",
    "Farmacoterapia não possui indicação como tratamento central; reservada ao manejo de comorbidades associadas (ex.: episódios depressivos)",
    "Atenção especial ao risco de suicídio em momentos de fracasso, humilhação ou perda que ameacem a autoimagem",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-10 (OMS)",
    "APA Practice Guideline for the Treatment of Patients with Personality Disorders",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9"],
    criterios: [
      { id: "n1", pergunta: "Você tem um sentimento grandioso da própria importância (ex.: exagera conquistas e talentos, espera ser visto como superior sem realizações que justifiquem isso)?" },
      { id: "n2", pergunta: "Você fica preocupado(a) com fantasias de sucesso ilimitado, poder, brilho, beleza ou amor ideal?" },
      { id: "n3", pergunta: "Você se sente uma pessoa especial e única, que só pode ser compreendida por (ou deveria se associar a) pessoas ou instituições especiais/de alto status?" },
      { id: "n4", pergunta: "Você sente uma necessidade excessiva de ser admirado(a)?" },
      { id: "n5", pergunta: "Você sente que merece um tratamento especial, ou espera que seus desejos sejam automaticamente atendidos?" },
      { id: "n6", pergunta: "Você se aproveita dos outros para conseguir o que quer?" },
      { id: "n7", pergunta: "Você tem dificuldade para reconhecer ou se importar com os sentimentos e necessidades dos outros?" },
      { id: "n8", pergunta: "Você sente inveja dos outros, ou acha que os outros têm inveja de você?" },
      { id: "n9", pergunta: "Você é visto(a) como arrogante ou com atitudes de superioridade?" },
    ],
    algoritmo: {
      contagemMinima: 5,
      itensContaveis: ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9"],
      duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta",
      observacaoExclusao:
        "ATENÇÃO — risco de segurança: vulnerabilidade acentuada a crises depressivas e ideação suicida diante de fracassos, envelhecimento ou perdas que ameacem a autoimagem grandiosa ('ferida narcísica') — rastrear ativamente nesses contextos. Diferenciar de Personalidade Antissocial (desconsideração instrumental com violação de normas/leis, impulsividade e agressividade, menos centrada em grandiosidade/admiração), de Personalidade Histriônica (busca de atenção com emotividade exagerada, sem grandiosidade/superioridade centrais), de Personalidade Borderline (instabilidade afetiva/da autoimagem mais acentuada, medo de abandono proeminente, distinto da autoimagem grandiosa mais estável ainda que frágil), e de episódio maníaco/hipomaníaco (grandiosidade episódica associada a outros sintomas de humor elevado, não um padrão estável de longa data).",
    },
  },
};
