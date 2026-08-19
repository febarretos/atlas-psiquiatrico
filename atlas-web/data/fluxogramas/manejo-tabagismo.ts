import { Fluxograma } from "./types";

export const manejoTabagismo: Fluxograma = {
  id: "manejo-tabagismo",

  titulo: "Manejo do Tabagismo",

  categoria: "Transtornos Relacionados a Substâncias",

  descricao:
    "Algoritmo de rastreio e cessação do tabagismo baseado na abordagem dos '5 A's' (Ask, Advise, Assess, Assist, Arrange), na diretriz Treating Tobacco Use and Dependence (Public Health Service) e na recomendação da USPSTF de 2021.",

  nodeInicialId: "identificar-tabagismo",

  nodes: [
    {
      id: "identificar-tabagismo",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Perguntar ativamente sobre uso de tabaco em toda consulta (\"Ask\") e aconselhar a cessação de forma clara, personalizada e não julgadora (\"Advise\"), independentemente da disposição momentânea do paciente para parar.",
      opcoes: [{ label: "Avaliar critérios de dependência", proximoNodeId: "avaliar-diagnostico-tabaco" }],
    },
    {
      id: "avaliar-diagnostico-tabaco",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Considerar os critérios do Transtorno por Uso de Tabaco (DSM-5-TR) e rastrear sintomas de abstinência à nicotina (irritabilidade, ansiedade, dificuldade de concentração, aumento de apetite, inquietação, humor deprimido, insônia).",
      detalhe:
        "O Teste de Fagerström para Dependência à Nicotina é um instrumento breve e amplamente usado para graduar a intensidade da dependência física, mas não substitui os critérios diagnósticos formais. A maioria dos fumantes diários regulares preenche critérios de dependência — ainda assim, o suporte à cessação deve ser oferecido a todo fumante, independentemente do preenchimento formal de critérios.",
      diagnosticosRelacionados: ["transtorno-uso-tabaco"],
      opcoes: [{ label: "Avaliar disposição para parar", proximoNodeId: "avaliar-disposicao" }],
    },
    {
      id: "avaliar-disposicao",
      tipo: "pergunta",
      texto: "Paciente está disposto a tentar parar de fumar nos próximos 30 dias (\"Assess\")?",
      opcoes: [
        { label: "Sim, disposto a tentar", proximoNodeId: "conduta-farmacologica-tabagismo" },
        { label: "Não, ainda não está pronto", proximoNodeId: "conduta-motivacional-tabagismo" },
      ],
    },
    {
      id: "conduta-motivacional-tabagismo",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Intervenção motivacional breve pela estratégia dos '5 R's' (Relevância, Riscos, Recompensas, Resistências/obstáculos, Repetição a cada consulta) — evitar confronto direto; reavaliar a disposição em consultas futuras, sem deixar de oferecer apoio.",
    },
    {
      id: "conduta-farmacologica-tabagismo",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Iniciar tratamento combinado (\"Assist\"): farmacoterapia associada a aconselhamento comportamental estruturado — combinação com maior taxa de sucesso do que qualquer modalidade isolada. Definir uma data de início (\"quit date\") dentro de 2 semanas.",
      detalhe:
        "Opções de primeira linha, com eficácia individual comparável entre si — a escolha considera preferência do paciente, comorbidades, contraindicações e disponibilidade. Vareniclina (agonista parcial do receptor nicotínico α4β2): entre as opções com maior eficácia isolada em metanálises em rede; iniciar 1-2 semanas antes da data de parada; efeito adverso mais comum é náusea; não consta na base de medicamentos deste Atlas, por isso sem link direto. Terapia de reposição de nicotina (TRN): adesivo transdérmico combinado a uma formulação de ação rápida (goma, pastilha, spray nasal ou inalador) tem eficácia comparável à vareniclina. Bupropiona: eficácia estabelecida para cessação (ver ficha do medicamento), alternativa útil em depressão comórbida ou quando a vareniclina é indisponível/contraindicada. Atenção em pacientes usando clozapina ou olanzapina: a fumaça — não a nicotina — induz a CYP1A2, então a cessação pode elevar os níveis séricos desses fármacos e exigir ajuste de dose.",
      medicamentosRelacionados: ["bupropiona"],
      opcoes: [{ label: "Reavaliar após a data de parada", proximoNodeId: "reavaliar-resposta-tabagismo" }],
    },
    {
      id: "reavaliar-resposta-tabagismo",
      tipo: "pergunta",
      texto: "Reavaliar em 1-2 semanas após a data de parada: o paciente conseguiu manter a abstinência?",
      opcoes: [
        { label: "Sim, mantendo abstinência", proximoNodeId: "conduta-manter-tabagismo" },
        { label: "Não, recaída ou dificuldade em manter", proximoNodeId: "conduta-recaida-tabagismo" },
      ],
    },
    {
      id: "conduta-manter-tabagismo",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Manter a farmacoterapia pelo período recomendado (mínimo de 8-12 semanas, podendo se estender por até 6 meses em casos de alto risco de recaída) e o suporte comportamental (\"Arrange\": agendar seguimento estruturado); reforçar prevenção de recaída mesmo após a cessação bem-sucedida, já que o risco permanece elevado no primeiro ano.",
    },
    {
      id: "conduta-recaida-tabagismo",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Recaída não é fracasso terapêutico — é parte esperada do curso de um transtorno crônico e recorrente. Reavaliar adesão à farmacoterapia (dose, momento de início), intensificar o suporte comportamental e reagendar uma nova tentativa.",
      detalhe:
        "Em recaídas repetidas, considerar troca de agente ou combinação de farmacoterapia (ex.: TRN de adesivo associada a bupropiona ou a vareniclina), reservada a casos refratários pela menor quantidade de evidência de segurança em combinação do que cada agente isolado.",
    },
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "U.S. Preventive Services Task Force. Interventions for Tobacco Smoking Cessation in Adults, Including Pregnant Persons: Recommendation Statement. JAMA. 2021.",
    "Public Health Service. Treating Tobacco Use and Dependence: 2008 Update Clinical Practice Guideline.",
    "Rigotti NA, Kruse GR, Livingstone-Banks J, Hartmann-Boyce J. Treatment of Tobacco Smoking: A Review. JAMA. 2022.",
    "Cahill K, Lindson-Hawley N, Thomas KH, et al. Nicotine receptor partial agonists for smoking cessation. Cochrane Database Syst Rev. 2016.",
    "Hartmann-Boyce J, Chepkin SC, Ye W, et al. Nicotine replacement therapy versus control for smoking cessation. Cochrane Database Syst Rev. 2018.",
  ],
};
