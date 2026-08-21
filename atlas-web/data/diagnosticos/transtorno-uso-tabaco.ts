import { Diagnostico } from "./types";

export const transtornoUsoTabaco: Diagnostico = {
  id: "transtorno-uso-tabaco",

  nome: "Transtorno por Uso de Tabaco",

  categoria: "Transtornos Relacionados a Substâncias e Transtornos Aditivos",

  cid11: "6C4A.2",

  cid10: "F17.2",

  descricao:
    "Padrão problemático de uso de tabaco (predominantemente cigarros) que leva a prejuízo ou sofrimento clinicamente significativo, manifestado por um agrupamento de sintomas cognitivos, comportamentais e fisiológicos que refletem perda de controle sobre o consumo, uso continuado apesar de consequências adversas conhecidas, e alterações neuroadaptativas como tolerância e abstinência à nicotina.",

  criteriosDiagnosticos: [
    "Padrão problemático de uso de tabaco (ou outro produto contendo nicotina) levando a prejuízo ou sofrimento clinicamente significativos, manifestado por pelo menos 2 dos seguintes critérios, ocorrendo dentro de um período de 12 meses:",
    "1. Tabaco é frequentemente consumido em maiores quantidades ou por período mais longo do que o pretendido.",
    "2. Desejo persistente ou esforços malsucedidos no sentido de reduzir ou controlar o uso de tabaco.",
    "3. Muito tempo é gasto em atividades necessárias para a obtenção do tabaco, uso do tabaco ou recuperação dos seus efeitos.",
    "4. Fissura (craving) ou forte desejo ou necessidade de usar tabaco.",
    "5. Uso recorrente de tabaco resultando em fracasso em cumprir obrigações importantes relativas ao trabalho, escola ou lar.",
    "6. Uso continuado de tabaco apesar de problemas sociais ou interpessoais persistentes ou recorrentes, causados ou exacerbados pelos efeitos do tabaco.",
    "7. Importantes atividades sociais, ocupacionais ou recreativas são abandonadas ou reduzidas em virtude do uso de tabaco.",
    "8. Uso recorrente de tabaco em situações nas quais isso representa perigo para a integridade física — critério raramente endossado isoladamente no contexto do tabagismo, mas tecnicamente aplicável (ex.: fumar próximo a fontes de oxigênio suplementar ou durante a condução de veículos).",
    "9. O uso de tabaco é mantido apesar da consciência de ter um problema físico ou psicológico persistente ou recorrente que tende a ser causado ou exacerbado pelo tabaco (ex.: tosse crônica, doença pulmonar).",
    "10. Tolerância, definida por qualquer um dos seguintes: (a) necessidade de quantidades progressivamente maiores de tabaco para atingir o efeito desejado; (b) efeito acentuadamente menor com o uso continuado da mesma quantidade de tabaco.",
    "11. Abstinência, manifestada por qualquer um dos seguintes: (a) síndrome de abstinência à nicotina característica — irritabilidade/frustração/raiva, ansiedade, dificuldade de concentração, aumento do apetite, inquietação, humor deprimido e insônia, geralmente com início dentro de 24 horas após a redução abrupta ou cessação do uso; (b) uso de tabaco (ou outro produto contendo nicotina) para aliviar ou evitar sintomas de abstinência.",
  ],

  especificadores: [
    "Gravidade leve: presença de 2-3 critérios",
    "Gravidade moderada: presença de 4-5 critérios",
    "Gravidade grave: presença de 6 ou mais critérios",
    "Em remissão inicial: nenhum critério satisfeito por pelo menos 3 meses, mas menos de 12 meses (exceto craving)",
    "Em remissão sustentada: nenhum critério satisfeito durante 12 meses ou mais (exceto craving)",
    "Em terapia de manutenção (ex.: uso regular de terapia de reposição de nicotina como único produto contendo nicotina, sem uso de tabaco)",
    "Em ambiente controlado (acesso a produtos de tabaco restrito)",
  ],

  duracaoMinima: "Padrão de uso problemático com pelo menos 2 critérios presentes dentro do mesmo período de 12 meses",

  prevalencia:
    "Um dos transtornos por uso de substância mais prevalentes globalmente: estimativas da OMS apontam cerca de 1,1 a 1,3 bilhão de usuários de tabaco no mundo (em torno de 20-22% da população adulta mundial, com tendência de queda gradual nas últimas décadas). No Brasil, inquéritos populacionais (Vigitel, PNS) estimam prevalência de tabagismo atual em torno de 9-12% dos adultos, também em tendência de declínio. A maioria dos fumantes diários regulares preenche critérios de dependência à nicotina; a prevalência é acentuadamente maior em pessoas com transtornos psiquiátricos — especialmente esquizofrenia e outros transtornos psicóticos, nos quais estudos descrevem taxas de tabagismo 2 a 4 vezes maiores que na população geral.",

  cursoEPrognostico:
    "Nicotina é uma das substâncias com maior potencial de dependência, em parte pela rapidez da entrega ao sistema nervoso central pela via pulmonar (segundos). Início do uso predominantemente na adolescência; a maioria dos fumantes deseja parar e já fez pelo menos uma tentativa de cessação, mas a recaída é comum, sobretudo nas primeiras semanas após a parada — múltiplas tentativas ao longo de anos são a regra, não a exceção, e devem ser normalizadas na condução clínica, não interpretadas como fracasso terapêutico. O tabagismo é a principal causa evitável de morte prematura no mundo (a OMS estima cerca de 8 milhões de mortes anuais atribuíveis ao tabaco, incluindo aproximadamente 1,2 milhão por exposição à fumaça de segunda mão), por doença cardiovascular, doença pulmonar obstrutiva crônica e diversos tipos de câncer. Cessar o tabagismo traz benefício mensurável em qualquer idade e estágio da doença. Relevante para a prática psiquiátrica: a fumaça do tabaco (pelos hidrocarbonetos policíclicos aromáticos, não pela nicotina) induz a CYP1A2, reduzindo os níveis séricos de fármacos como clozapina e olanzapina — a cessação abrupta do tabagismo (ex.: durante internação) pode elevar esses níveis de forma clinicamente significativa e exigir ajuste de dose (ver fichas de Clozapina e Olanzapina).",

  diagnosticoDiferencial: [
    "Uso recreativo/social de tabaco sem preencher critérios plenos de transtorno por uso",
    "Outros transtornos por uso de substâncias concomitantes, especialmente álcool e cannabis (poliuso é comum e deve ser rastreado ativamente)",
    "Transtornos de ansiedade ou Transtorno Depressivo Maior primários, com uso de nicotina como automedicação (efeito ansiolítico/antidepressivo percebido pelo paciente, apesar de o tabagismo estar associado a piores desfechos de humor e ansiedade a longo prazo)",
    "TDAH (impulsividade sobreposta; prevalência de tabagismo consistentemente maior nessa população)",
    "Abstinência de nicotina isolada sem os demais critérios comportamentais de transtorno por uso (irritabilidade/ansiedade situacional ao reduzir o consumo, sem perda de controle ou uso apesar de danos)",
  ],

  comorbidadesComuns: [
    "Esquizofrenia e outros transtornos psicóticos (prevalência de tabagismo marcadamente elevada em relação à população geral)",
    "Transtorno Depressivo Maior",
    "Transtornos de ansiedade",
    "TDAH",
    "Transtorno Bipolar",
    "Outros transtornos por uso de substâncias (álcool, cannabis)",
  ],

  tratamentoPrimeiraLinha: [
    "Combinação de farmacoterapia com aconselhamento comportamental estruturado — a associação das duas modalidades é superior a qualquer uma isoladamente e é a recomendação com maior força de evidência (USPSTF grau A)",
    "Vareniclina (agonista parcial do receptor nicotínico α4β2): entre as opções com maior eficácia isolada em metanálises em rede da Cochrane, superior à bupropiona e à terapia de reposição de nicotina (TRN) de agente único",
    "Terapia de reposição de nicotina (TRN), idealmente combinando adesivo transdérmico (ação prolongada) com uma formulação de ação rápida (goma, pastilha, spray nasal ou inalador) — a combinação tem eficácia comparável à vareniclina e superior à TRN de agente único",
    "Bupropiona: antidepressivo com eficácia estabelecida para cessação do tabagismo (ver ficha do medicamento) — alternativa especialmente útil quando há depressão comórbida; história de convulsão é motivo para EVITAR a bupropiona (contraindicação, não indicação) — preferir TRN nesse cenário, com vareniclina como opção de cautela",
    "Aconselhamento comportamental estruturado (abordagem \"5 A's\": perguntar, aconselhar, avaliar disposição, assistir, organizar seguimento) e intervenções mais intensivas (terapia cognitivo-comportamental, entrevista motivacional, linhas de apoio/quitlines) aumentam significativamente as taxas de sucesso quando associadas à farmacoterapia",
    "Atenção a interações farmacocinéticas na cessação: a fumaça do tabaco (não a nicotina) induz a CYP1A2, então parar de fumar pode elevar os níveis séricos de clozapina e olanzapina, exigindo monitorização e possível ajuste de dose",
  ],

  sintomasChave: [
    { id: "perda-controle-uso", peso: 3 },
    { id: "tolerancia-abstinencia", peso: 2 },
    { id: "uso-apesar-problemas", peso: 2 },
  ],

  // Vareniclina e TRN (opções de primeira linha farmacológica com maior
  // eficácia segundo o texto acima) não constam em data/medicamentos/index.ts;
  // só bupropiona é referenciada aqui para não linkar ids inexistentes.
  medicamentosPrimeiraLinha: ["bupropiona"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-11 (OMS)",
    "U.S. Preventive Services Task Force. Interventions for Tobacco Smoking Cessation in Adults, Including Pregnant Persons: Recommendation Statement. JAMA. 2021.",
    "Public Health Service. Treating Tobacco Use and Dependence: 2008 Update Clinical Practice Guideline.",
    "Rigotti NA, Kruse GR, Livingstone-Banks J, Hartmann-Boyce J. Treatment of Tobacco Smoking: A Review. JAMA. 2022.",
    "Cahill K, Lindson-Hawley N, Thomas KH, et al. Nicotine receptor partial agonists for smoking cessation. Cochrane Database Syst Rev. 2016.",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11"],
    criterios: [
      { id: "c1", pergunta: "Você percebeu que consome tabaco em quantidades maiores ou por mais tempo do que pretendia?" },
      { id: "c2", pergunta: "Você tem desejo persistente ou já tentou sem sucesso reduzir ou controlar o uso de tabaco?" },
      { id: "c3", pergunta: "Você gasta muito tempo obtendo tabaco, fumando, ou se recuperando dos efeitos?" },
      { id: "c4", pergunta: "Você sente fissura — um desejo forte ou necessidade de usar tabaco?" },
      { id: "c5", pergunta: "O uso de tabaco já fez você falhar em cumprir obrigações importantes no trabalho, na escola ou em casa?" },
      { id: "c6", pergunta: "Você continua usando tabaco apesar de problemas sociais ou interpessoais causados ou piorados por ele?" },
      { id: "c7", pergunta: "Você abandonou ou reduziu atividades sociais, profissionais ou de lazer importantes por causa do tabaco?" },
      { id: "c8", pergunta: "Você já usou tabaco em situações que representam perigo físico (ex.: perto de fontes de oxigênio, dirigindo)?" },
      { id: "c9", pergunta: "Você continua fumando mesmo sabendo que tem um problema físico ou psicológico causado ou piorado pelo tabaco (ex.: tosse crônica)?" },
      { id: "c10", pergunta: "Você precisa de quantidades cada vez maiores de tabaco pra sentir o efeito, ou sente menos efeito com a mesma quantidade (tolerância)?" },
      { id: "c11", pergunta: "Você já teve sintomas de abstinência ao parar ou reduzir o tabaco (irritabilidade, ansiedade, dificuldade de concentração, aumento do apetite, inquietação, humor deprimido, insônia), ou usou tabaco/nicotina para aliviar ou evitar esses sintomas?" },
    ],
    algoritmo: {
      contagemMinima: 2,
      itensContaveis: ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11"],
      duracaoMinima: "Pelo menos 2 dos 11 critérios presentes dentro do mesmo período de 12 meses",
      observacaoExclusao:
        "Diferenciar de uso recreativo/social sem critérios plenos. Rastrear outros transtornos por uso de substâncias concomitantes (poliuso é comum), TDAH e transtornos de ansiedade/humor com automedicação por nicotina. Atenção clínica: a fumaça do tabaco (não a nicotina) induz CYP1A2 — cessação abrupta pode elevar níveis séricos de clozapina/olanzapina. Avaliar especificador de remissão (inicial: 3-12 meses sem critérios exceto craving; sustentada: 12+ meses), terapia de manutenção com nicotina, e ambiente controlado.",
    },
  },
};
