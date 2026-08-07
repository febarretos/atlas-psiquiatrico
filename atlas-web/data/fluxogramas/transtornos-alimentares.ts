import { Fluxograma } from "./types";

export const transtornosAlimentares: Fluxograma = {
  id: "transtornos-alimentares",

  titulo: "Rastreio e Manejo dos Transtornos Alimentares",

  categoria: "Transtornos Alimentares",

  descricao:
    "Algoritmo para rastreio, avaliação médica de risco, diagnóstico diferencial entre Anorexia Nervosa, Bulimia Nervosa e Transtorno de Compulsão Alimentar Periódica, e conduta inicial, baseado em NICE NG69, APA Practice Guideline e MARSIPAN.",

  nodeInicialId: "rastreio-scoff",

  nodes: [
    {
      id: "rastreio-scoff",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Suspeita de transtorno alimentar (preocupação com peso/forma corporal, padrão alimentar alterado): aplicar SCOFF.",
      escalasRelacionadas: ["scoff"],
      opcoes: [{ label: "Escala aplicada, avaliar resultado", proximoNodeId: "resultado-scoff" }],
    },
    {
      id: "resultado-scoff",
      tipo: "pergunta",
      texto: "Rastreio positivo no SCOFF (≥2 respostas afirmativas)?",
      opcoes: [
        { label: "Sim, rastreio positivo", proximoNodeId: "avaliacao-medica-inicial" },
        { label: "Não, rastreio negativo", proximoNodeId: "conduta-scoff-negativo" },
      ],
    },
    {
      id: "conduta-scoff-negativo",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Rastreio negativo. Reavaliar se a suspeita clínica permanecer alta apesar do rastreio — o SCOFF tem sensibilidade variável entre populações.",
    },
    {
      id: "avaliacao-medica-inicial",
      tipo: "pergunta",
      texto:
        "Avaliação médica obrigatória: peso, IMC, sinais vitais (bradicardia, hipotensão ortostática), eletrólitos e ECG (se houver purgação). Qual o padrão predominante?",
      detalhe:
        "Sempre excluir/considerar concomitantemente causas médicas gerais de perda de peso ou de alteração do apetite (doenças gastrointestinais, hipertireoidismo, neoplasias) antes de fechar o quadro como puramente psiquiátrico.",
      opcoes: [
        {
          label: "Peso significativamente baixo + medo de ganhar peso/distorção da imagem corporal",
          proximoNodeId: "dd-anorexia",
        },
        {
          label: "Peso normal/aumentado + compulsão alimentar recorrente com comportamento compensatório (purgação, laxantes, exercício excessivo)",
          proximoNodeId: "dd-bulimia",
        },
        {
          label: "Compulsão alimentar recorrente, SEM comportamento compensatório regular",
          proximoNodeId: "dd-compulsao-periodica",
        },
      ],
    },

    {
      id: "dd-anorexia",
      tipo: "conduta",
      nivel: "alerta",
      texto: "Padrão compatível com Anorexia Nervosa.",
      detalhe:
        "Apresenta a maior taxa de mortalidade entre os transtornos psiquiátricos (estimada em 5-10% em seguimento de 10 anos), por complicações médicas e suicídio. Gravidade em adultos classificada pelo IMC: leve ≥17; moderada 16-16,99; grave 15-15,99; extrema <15 kg/m².",
      diagnosticosRelacionados: ["anorexia-nervosa"],
      opcoes: [{ label: "Avaliar risco médico agudo", proximoNodeId: "triagem-risco-medico-anorexia" }],
    },
    {
      id: "triagem-risco-medico-anorexia",
      tipo: "pergunta",
      texto:
        "Critérios de alto risco médico presentes (IMC muito baixo, especialmente <15; bradicardia acentuada; hipotensão; alterações eletrolíticas; ECG anormal; perda de peso muito rápida; ingesta calórica negligenciável recente)?",
      opcoes: [
        { label: "Sim, alto risco médico", proximoNodeId: "conduta-internacao-anorexia" },
        { label: "Não, estável para manejo ambulatorial", proximoNodeId: "conduta-ambulatorial-anorexia" },
      ],
    },
    {
      id: "conduta-internacao-anorexia",
      tipo: "conduta",
      nivel: "alerta",
      texto: "Indicar internação hospitalar ou unidade especializada para reabilitação nutricional supervisionada.",
      detalhe:
        "🚨 Atenção à síndrome de realimentação (hipofosfatemia, arritmias, insuficiência cardíaca) ao reiniciar a alimentação — protocolo MARSIPAN recomenda taxas de reintrodução calórica cautelosas em casos graves (da ordem de 5-10 kcal/kg/dia em ambiente médico geral, podendo chegar a ~20 kcal/kg/dia em unidade especializada em transtorno alimentar, sempre com monitorização eletrolítica rigorosa — o regime exato deve ser individualizado pela equipe especializada). Não há medicação com eficácia estabelecida para os sintomas nucleares da anorexia; psicofármacos ficam reservados a comorbidades, com cautela cardiovascular redobrada em paciente desnutrido.",
    },
    {
      id: "conduta-ambulatorial-anorexia",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Reabilitação nutricional ambulatorial supervisionada + psicoterapia especializada.",
      detalhe:
        "Terapia Familiar tipo Maudsley é especialmente eficaz em adolescentes; TCC especializada em transtornos alimentares (CBT-E) em adultos. Equipe multidisciplinar (psiquiatra, nutricionista especializado, clínico geral, psicoterapeuta) é essencial. Não há medicação com eficácia estabelecida para os sintomas nucleares da anorexia nervosa.",
    },

    {
      id: "dd-bulimia",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Padrão compatível com Bulimia Nervosa.",
      diagnosticosRelacionados: ["bulimia-nervosa"],
      opcoes: [{ label: "Prosseguir para conduta", proximoNodeId: "conduta-bulimia" }],
    },
    {
      id: "conduta-bulimia",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Fluoxetina em dose alta (60 mg/dia) + TCC especializada em transtornos alimentares (CBT-E).",
      detalhe:
        "Fluoxetina 60 mg/dia é a única medicação formalmente aprovada para bulimia nervosa (dose mais alta que a dose usual antidepressiva). A combinação fluoxetina + CBT-E é recomendada nos casos moderados a graves; Terapia Interpessoal é alternativa eficaz com efeito mais lento. Monitorar eletrólitos (potássio, magnésio) e avaliar risco cardiológico quando há purgação frequente.",
      medicamentosRelacionados: ["fluoxetina"],
    },

    {
      id: "dd-compulsao-periodica",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Padrão compatível com Transtorno de Compulsão Alimentar Periódica (Binge Eating Disorder).",
      detalhe:
        "Critérios centrais do DSM-5-TR: episódios recorrentes de compulsão alimentar (ingestão de quantidade de comida definitivamente maior que a maioria das pessoas comeria, com sensação de perda de controle), associados a pelo menos 3 de: comer mais rápido que o normal, comer até se sentir desconfortavelmente cheio, comer grandes quantidades sem fome física, comer sozinho por vergonha, sentir-se enojado/deprimido/culpado depois — com sofrimento marcado, ocorrendo em média ao menos 1x/semana por 3 meses, SEM os comportamentos compensatórios regulares da bulimia.",
      opcoes: [{ label: "Prosseguir para conduta", proximoNodeId: "conduta-compulsao-periodica" }],
    },
    {
      id: "conduta-compulsao-periodica",
      tipo: "conduta",
      nivel: "rotina",
      texto: "TCC especializada (CBT-E) e/ou lisdexanfetamina.",
      detalhe:
        "Lisdexanfetamina é a única medicação com aprovação regulatória específica (FDA) para Transtorno de Compulsão Alimentar Periódica moderado a grave em adultos, na faixa de dose de 50-70 mg/dia (mesmo fármaco usado em TDAH, aqui numa indicação distinta). CBT-E é a psicoterapia de primeira linha, com eficácia bem estabelecida.",
      medicamentosRelacionados: ["lisdexanfetamina"],
    },
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "APA Practice Guideline for the Treatment of Patients with Eating Disorders",
    "National Institute for Health and Care Excellence (NICE). Eating disorders: recognition and treatment (NG69).",
    "Royal College of Psychiatrists. MARSIPAN: Management of Really Sick Patients with Anorexia Nervosa.",
    "Morgan JF, Reid F, Lacey JH. The SCOFF questionnaire: a new screening tool for eating disorders. BMJ. 1999.",
    "Fluoxetine Bulimia Nervosa Collaborative Study Group. Fluoxetine in the treatment of bulimia nervosa. Arch Gen Psychiatry. 1992.",
    "FDA approval — lisdexamfetamine for moderate to severe binge eating disorder in adults, 2015.",
  ],
};
