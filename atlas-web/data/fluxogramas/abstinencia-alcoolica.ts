import { Fluxograma } from "./types";

export const abstinenciaAlcoolica: Fluxograma = {
  id: "abstinencia-alcoolica",

  titulo: "Manejo da Síndrome de Abstinência Alcoólica",

  categoria: "Transtornos Relacionados a Substâncias",

  descricao:
    "Algoritmo para identificação de risco, avaliação de gravidade e manejo da síndrome de abstinência alcoólica, incluindo reconhecimento de delirium tremens e encaminhamento para tratamento do transtorno por uso de álcool subjacente.",

  nodeInicialId: "identificacao-risco",

  nodes: [
    {
      id: "identificacao-risco",
      tipo: "pergunta",
      texto:
        "O paciente apresenta padrão de consumo pesado e regular de álcool com redução ou interrupção recente, e/ou história prévia de abstinência grave (convulsões ou delirium tremens em episódios anteriores)?",
      detalhe:
        "Considerar também fatores de risco adicionais: uso concomitante de outros sedativos, comorbidades clínicas graves, idade avançada e episódios prévios de internação por abstinência.",
      opcoes: [
        { label: "Sim, risco de síndrome de abstinência", proximoNodeId: "avaliacao-gravidade-atual" },
        { label: "Não, baixo risco", proximoNodeId: "conduta-baixo-risco" },
      ],
    },
    {
      id: "conduta-baixo-risco",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Baixo risco de síndrome de abstinência significativa no momento.",
      detalhe:
        "Orientar sobre os riscos do consumo de álcool, oferecer intervenção breve e considerar encaminhamento para avaliação e tratamento do padrão de uso, mesmo na ausência de sintomas de abstinência atuais.",
    },
    {
      id: "avaliacao-gravidade-atual",
      tipo: "pergunta",
      texto:
        "Avaliando os sintomas atuais com apoio do conceito da escala CIWA-Ar (tremor, sudorese, ansiedade, agitação, náuseas/vômitos, alterações sensoriais, cefaleia, orientação), qual a gravidade da abstinência?",
      detalhe:
        "CIWA-Ar até ~8-10 pontos costuma indicar abstinência leve; pontuações mais altas (geralmente >15) indicam abstinência grave, com maior risco de convulsões e delirium tremens.",
      opcoes: [
        { label: "Leve (sintomas mínimos, sem fatores de risco para complicação)", proximoNodeId: "conduta-leve-ambulatorial" },
        { label: "Moderada a grave, ou fatores de risco para complicação", proximoNodeId: "conduta-internacao" },
      ],
    },
    {
      id: "conduta-leve-ambulatorial",
      tipo: "pergunta",
      texto:
        "Abstinência leve, sem fatores de risco para complicação: manejo ambulatorial é possível, desde que haja suporte social adequado e possibilidade de reavaliação frequente.",
      detalhe:
        "Iniciar benzodiazepínico em esquema fixo decrescente (ex. diazepam ou clordiazepóxido) ou guiado por sintomas (protocolo orientado por CIWA-Ar), associado a tiamina oral em dose adequada antes ou junto da reposição calórica/glicose. Orientar sinais de alarme para buscar atendimento de urgência.",
      opcoes: [
        { label: "Monitorizar evolução clínica", proximoNodeId: "monitorizacao-delirium" },
      ],
    },
    {
      id: "conduta-internacao",
      tipo: "pergunta",
      texto:
        "Abstinência moderada a grave, ou presença de fatores de risco para complicação (convulsões prévias, delirium tremens prévio, comorbidade clínica instável, uso concomitante de outros sedativos): indicar internação para manejo mais intensivo.",
      detalhe:
        "Iniciar benzodiazepínico em dose mais alta, guiado por protocolo (ex. CIWA-Ar) com reavaliações frequentes. Administrar tiamina parenteral em dose adequada antes da administração de glicose, para reduzir o risco de precipitar encefalopatia de Wernicke. Monitorar sinais vitais e estado mental de forma seriada.",
      opcoes: [
        { label: "Monitorizar evolução clínica", proximoNodeId: "monitorizacao-delirium" },
      ],
    },
    {
      id: "monitorizacao-delirium",
      tipo: "pergunta",
      texto:
        "Durante a monitorização, surgem sinais sugestivos de delirium tremens (confusão mental flutuante, alucinações, agitação psicomotora intensa, hiperatividade autonômica grave — taquicardia, hipertensão, febre, sudorese profusa)?",
      detalhe:
        "Delirium tremens é uma emergência médica com mortalidade significativa se não tratado adequadamente, geralmente surgindo entre 48 e 96 horas após a última dose de álcool.",
      opcoes: [
        { label: "Sim, sinais de delirium tremens", proximoNodeId: "conduta-delirium-tremens" },
        { label: "Não, evolução estável sem sinais de delirium", proximoNodeId: "estabilizacao-concluida" },
      ],
    },
    {
      id: "conduta-delirium-tremens",
      tipo: "conduta",
      nivel: "alerta",
      texto:
        "Delirium tremens: emergência médica que requer manejo intensivo imediato.",
      detalhe:
        "Encaminhar para avaliação e manejo em caráter de emergência (consultar a página/fluxograma de Emergências do Atlas). Necessário suporte em ambiente com monitorização contínua, doses mais altas de benzodiazepínico conforme protocolo, correção de distúrbios hidroeletrolíticos, e avaliação de necessidade de suporte em unidade de terapia intensiva conforme gravidade e instabilidade autonômica.",
    },
    {
      id: "estabilizacao-concluida",
      tipo: "pergunta",
      texto:
        "Abstinência aguda estabilizada, sem evolução para delirium tremens ou outras complicações.",
      detalhe:
        "Concluir a redução gradual do benzodiazepínico conforme protocolo, manter reposição de tiamina e demais vitaminas do complexo B conforme necessário, e planejar transição para o encaminhamento ao tratamento do transtorno por uso de álcool subjacente antes da alta.",
      opcoes: [
        { label: "Planejar encaminhamento antes da alta", proximoNodeId: "encaminhamento-tratamento-subjacente" },
      ],
    },
    {
      id: "encaminhamento-tratamento-subjacente",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Após a estabilização da abstinência aguda, encaminhar para tratamento do transtorno por uso de álcool subjacente.",
      detalhe:
        "Considerar farmacoterapia para manutenção da abstinência (naltrexona ou acamprosato, conforme perfil clínico e preferência do paciente) associada a intervenções psicossociais (terapia motivacional, terapia cognitivo-comportamental, grupos de apoio como Alcoólicos Anônimos). O manejo da abstinência aguda é apenas a primeira etapa; sem tratamento continuado, o risco de recaída e de novos episódios de abstinência permanece elevado.",
    },
  ],

  referencias: [
    "American Psychiatric Association (APA). Practice Guideline for the Pharmacological Treatment of Patients with Alcohol Use Disorder.",
    "National Institute for Health and Care Excellence (NICE). Alcohol-use disorders: diagnosis and management of physical complications (CG100).",
    "Sullivan JT, et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar).",
  ],
};
