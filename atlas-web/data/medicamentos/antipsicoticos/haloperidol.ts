import { Medicamento } from "../../types";

export const haloperidol: Medicamento = {
  id: "haloperidol",

  nome: "Haloperidol",

  nomeComercial: [
    "Haldol",
    "Haldol Decanoato",
  ],

  classe: "Antipsicótico",

  subclasse: "Típico (1ª geração)",

  mecanismo:
    "Antagonista potente e seletivo dos receptores dopaminérgicos D2, com afinidade mínima por receptores serotoninérgicos, histaminérgicos e muscarínicos (antipsicótico típico de alta potência).",

  posologias: [
    {
      indicacao: "Esquizofrenia",
      doseInicial: "1–5 mg/dia",
      doseUsual: "5–15 mg/dia",
      doseMaxima: "20 mg/dia (via oral)",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Agitação Psicomotora Aguda / Delirium",
      doseInicial: "2,5–5 mg (IM)",
      doseUsual: "5–10 mg/dia (IM)",
      doseMaxima: "20 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Manutenção da Esquizofrenia (formulação depot)",
      doseInicial: "50 mg (IM) a cada 4 semanas",
      doseUsual: "50–200 mg (IM) a cada 4 semanas",
      doseMaxima: "300 mg a cada 4 semanas",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Síndrome de Tourette (tiques graves)",
      doseInicial: "0,5–1 mg/dia",
      doseUsual: "1–5 mg/dia",
      doseMaxima: "10 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "18–24 horas (via oral); decanoato: aproximadamente 3 semanas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP3A4 e CYP2D6.",

  indicacoes: [
    "Esquizofrenia e outros transtornos psicóticos",
    "Agitação psicomotora aguda e delirium (uso hospitalar/emergencial)",
    "Síndrome de Tourette e tiques graves",
    "Náusea e vômitos refratários (off-label, doses baixas)",
    "Manutenção de longo prazo via formulação depot (decanoato)",
  ],

  contraIndicacoes: [
    "Parkinsonismo e Doença de Parkinson",
    "Depressão grave do SNC ou estados comatosos",
    "Prolongamento de intervalo QT conhecido ou uso concomitante de outros agentes que prolongam QT",
    "Hipersensibilidade ao haloperidol",
  ],

  vantagens: [
    "Alta potência antipsicótica, muito eficaz no controle de sintomas positivos e agitação aguda",
    "Amplamente disponível, baixo custo",
    "Formulação depot (decanoato) útil para adesão em manutenção de longo prazo",
    "Extensa experiência clínica em situações de emergência psiquiátrica e delirium",
  ],

  desvantagens: [
    "Alto risco de sintomas extrapiramidais agudos (distonia, parkinsonismo, acatisia)",
    "Alto risco de discinesia tardia com uso prolongado",
    "Baixa eficácia relativa em sintomas negativos e cognitivos",
    "Risco de prolongamento de QT, particularmente por via intravenosa",
  ],

  efeitosAdversos: [
    "Sintomas extrapiramidais (distonia aguda, parkinsonismo, acatisia)",
    "Discinesia tardia (uso prolongado)",
    "Hiperprolactinemia",
    "Sedação leve a moderada",
    "Prolongamento do intervalo QT",
    "Síndrome neuroléptica maligna (rara, porém grave)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Baixa",

  interacoes: [
    "Outros agentes que prolongam QT (risco de arritmias graves, incluindo torsades de pointes)",
    "Depressores do SNC e álcool (potencialização de sedação)",
    "Carbamazepina e outros indutores enzimáticos (reduzem níveis séricos)",
    "Anticolinérgicos (uso combinado para tratar sintomas extrapiramidais, mas risco de efeitos aditivos)",
    "Lítio (raro relato de neurotoxicidade com uso combinado)",
    "Inibidores da CYP3A4/CYP2D6 (cetoconazol, quinidina, fluoxetina, paroxetina) — aumentam a concentração plasmática e o risco de efeitos adversos, incluindo prolongamento de QT",
    "Rifampicina (indutor enzimático potente, reduz significativamente os níveis séricos)",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Moderada",

  sexual: "Alta",

  qt: "Alto",

  sintomasExtrapiramidais: "Muito alto",

  hiperprolactinemia: "Alto",

  riscoMetabolico: "Baixo",

  hipotensaoOrtostatica: "Baixo",

  riscoConvulsivo: "Baixo",

  gravidez:
    "Uso possível quando o benefício supera o risco, especialmente em quadros agudos; monitorar sintomas extrapiramidais e de abstinência no recém-nascido.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno; usar com cautela, com monitorização de sedação e sintomas extrapiramidais no lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose específico na insuficiência renal, mas usar com cautela em quadros graves.",

  ajusteRenalNecessario: false,

  hepatica:
    "Reduzir dose e monitorizar em insuficiência hepática, devido à redução do clearance.",

  observacoes:
    "O haloperidol é o protótipo dos antipsicóticos típicos de alta potência, amplamente utilizado em situações de agitação psicomotora aguda e delirium por sua rápida ação e eficácia. Seu principal fator limitante é o alto risco de sintomas extrapiramidais agudos e discinesia tardia com uso prolongado, sendo hoje preterido como primeira linha para tratamento de manutenção em favor dos antipsicóticos atípicos. A formulação decanoato (depot) é uma opção valiosa para manutenção em pacientes com baixa adesão ao tratamento oral. Requer monitorização eletrocardiográfica quando usado por via intravenosa ou em doses altas, pelo risco de prolongamento de QT e torsades de pointes, além de vigilância quanto a síndrome neuroléptica maligna.",

  perolasClinicas: [
    "A via intravenosa (uso hospitalar, off-label no Brasil) carrega risco de prolongamento de QT e torsades de pointes desproporcionalmente maior que a via IM ou oral — exigir monitorização eletrocardiográfica contínua quando usada.",
    "Associar biperideno profilático de rotina não é recomendado — reserve o anticolinérgico para quando sintomas extrapiramidais realmente aparecerem, já que o uso profilático rotineiro expõe a efeitos anticolinérgicos desnecessários na maioria dos pacientes.",
    "É a droga de referência para comparação em quase todos os ensaios clínicos de novos antipsicóticos — útil lembrar que grande parte do 'perfil desfavorável' de EPS atribuído à classe dos típicos vem de estudos com haloperidol especificamente, o mais potente e com maior afinidade D2 do grupo.",
    "Na formulação decanoato, a dose de manutenção equivale a aproximadamente 10-15 vezes a dose diária oral prévia, administrada mensalmente — não convertido 1:1 pela dose oral diária.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia",
    "Bula de referência ANVISA/FDA (Haldol)",
  ],
};
