import { Diagnostico } from "./types";

export const anorexiaNervosa: Diagnostico = {
  id: "anorexia-nervosa",

  nome: "Anorexia Nervosa",

  categoria: "Transtornos Alimentares",

  cid11: "6B80",

  cid10: "F50.0",

  descricao:
    "Transtorno alimentar caracterizado por restrição persistente da ingesta energética em relação às necessidades, levando a peso corporal significativamente baixo para idade, sexo, trajetória de desenvolvimento e saúde física, acompanhada de medo intenso de ganhar peso ou de se tornar gordo e de perturbação significativa na forma como o próprio peso ou forma corporal são vivenciados. Apresenta a maior taxa de mortalidade entre os transtornos psiquiátricos.",

  criteriosDiagnosticos: [
    "A. Restrição da ingesta energética em relação às necessidades, levando a um peso corporal significativamente baixo no contexto de idade, sexo, trajetória de desenvolvimento e saúde física. Peso significativamente baixo é definido como um peso inferior ao minimamente normal ou, em crianças e adolescentes, inferior ao minimamente esperado.",
    "B. Medo intenso de ganhar peso ou de engordar, ou comportamento persistente que interfere no ganho de peso, mesmo estando com peso significativamente baixo.",
    "C. Perturbação no modo como o próprio peso ou forma corporal são vivenciados, influência indevida do peso ou forma corporal na autoavaliação, ou ausência persistente de reconhecimento da gravidade do baixo peso corporal atual.",
  ],

  especificadores: [
    "Tipo restritivo: nos últimos 3 meses, o indivíduo não se envolveu em episódios recorrentes de compulsão alimentar ou comportamento purgativo; a perda de peso ocorre principalmente por dieta, jejum e/ou exercício excessivo",
    "Tipo compulsão alimentar purgativa: nos últimos 3 meses, o indivíduo se envolveu em episódios recorrentes de compulsão alimentar ou comportamento purgativo (vômito autoinduzido, uso indevido de laxantes, diuréticos ou enemas)",
    "Em remissão parcial: após satisfação plena dos critérios, o critério A (baixo peso) não é mais satisfeito, mas o critério B ou C ainda está presente",
    "Em remissão completa: após satisfação plena dos critérios, nenhum dos critérios foi satisfeito por período sustentado",
    "Gravidade em adultos baseada no IMC atual (adaptado da OMS): leve ≥17 kg/m²; moderada 16-16,99 kg/m²; grave 15-15,99 kg/m²; extrema <15 kg/m² (gravidade pode ser ajustada conforme sintomas clínicos, prejuízo funcional e necessidade de supervisão)",
  ],

  duracaoMinima: "Não há duração mínima formal, mas o especificador de subtipo (restritivo vs. compulsão/purgativo) considera os últimos 3 meses de comportamento",

  prevalencia:
    "Prevalência ao longo da vida em torno de 0,3-1% em mulheres e significativamente menor em homens (proporção aproximada de 10:1); início mais frequente na adolescência (pico entre 14-18 anos). Um dos transtornos psiquiátricos com maior taxa de mortalidade, estimada em cerca de 5-10% ao longo de seguimento de 10 anos, por complicações médicas e suicídio.",

  cursoEPrognostico:
    "Curso variável: cerca de metade dos pacientes apresenta recuperação completa, uma parcela evolui para curso crônico e flutuante, e outra parcela mantém curso persistente e grave com alta morbimortalidade. Fatores de mau prognóstico incluem duração prolongada de doença antes do tratamento, baixo peso extremo, comorbidade psiquiátrica significativa e padrão purgativo. Risco elevado de complicações médicas graves (arritmias cardíacas, osteoporose, infertilidade, atrofia cerebral) e de síndrome de realimentação durante a fase inicial de recuperação nutricional supervisionada.",

  diagnosticoDiferencial: [
    "Bulimia Nervosa (peso normal ou acima do normal, sem os critérios de baixo peso significativo da anorexia)",
    "Transtorno de Compulsão Alimentar Periódica",
    "Transtorno Alimentar Restritivo/Evitativo (ARFID) — restrição alimentar sem preocupação com peso/forma corporal",
    "Condições médicas gerais que causam perda de peso (doenças gastrointestinais, hipertireoidismo, neoplasias, doenças consumptivas) — devem ser investigadas e excluídas ou consideradas concomitantes",
    "Transtorno Depressivo Maior com perda de apetite (ausência de medo de ganhar peso e de distorção da imagem corporal)",
    "Transtorno Dismórfico Corporal (preocupação restrita a defeito percebido específico, não centrada em peso/forma corporal global)",
    "Transtorno de Ansiedade Social ou TOC com rituais alimentares secundários",
    "Esquizofrenia com crenças delirantes sobre alimentação",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior",
    "Transtornos de ansiedade (TAG, TOC, fobia social)",
    "Transtorno Obsessivo-Compulsivo (traços de perfeccionismo e rigidez frequentemente premórbidos)",
    "Transtornos da personalidade (obsessivo-compulsiva no tipo restritivo; borderline no tipo purgativo)",
    "Transtornos por uso de substâncias (mais comum no tipo purgativo)",
  ],

  tratamentoPrimeiraLinha: [
    "Reabilitação nutricional supervisionada com restauração gradual de peso é a prioridade inicial do tratamento, com monitorização médica rigorosa para prevenção da síndrome de realimentação (risco de hipofosfatemia, arritmias e insuficiência cardíaca)",
    "Psicoterapia baseada em evidência como tratamento central: Terapia Familiar tipo Maudsley (especialmente eficaz em adolescentes), TCC especializada em transtornos alimentares (CBT-E) para adultos",
    "Internação hospitalar ou em unidade especializada indicada em casos de instabilidade médica grave, baixo peso extremo, risco de síndrome de realimentação ou falha de tratamento ambulatorial",
    "Não há medicação com eficácia estabelecida para tratar os sintomas nucleares da anorexia nervosa; psicofármacos podem ser usados para tratar comorbidades associadas (depressão, ansiedade), com cautela quanto a efeitos cardiovasculares em pacientes desnutridos",
    "Equipe multidisciplinar (psiquiatra, nutricionista especializado, clínico geral/internista, psicoterapeuta) é essencial dado o risco médico elevado",
  ],

  sintomasChave: [
    { id: "restricao-alimentar", peso: 3 },
    { id: "perda-peso-significativa", peso: 2 },
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "APA Practice Guideline for the Treatment of Patients with Eating Disorders",
    "NICE Guideline NG69 - Eating disorders: recognition and treatment",
    "Royal College of Psychiatrists - MARSIPAN: Management of Really Sick Patients with Anorexia Nervosa",
    "CID-11 (OMS)",
  ],
};
