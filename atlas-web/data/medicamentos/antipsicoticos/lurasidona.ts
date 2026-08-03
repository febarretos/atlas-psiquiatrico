import { Medicamento } from "../../types";

export const lurasidona: Medicamento = {
  id: "lurasidona",

  nome: "Lurasidona",

  nomeComercial: [
    "Latuda",
    "Lubip",
    "Lutab",
  ],

  classe: "Antipsicótico",

  subclasse: "Atípico (2ª geração)",

  mecanismo:
    "Antagonista dos receptores dopaminérgicos D2 e serotoninérgicos 5-HT2A, com alta afinidade antagonista pelo receptor 5-HT7 (implicado em efeitos pró-cognitivos e antidepressivos) e agonismo parcial em 5-HT1A. Afinidade mínima por receptores histamínicos H1 e muscarínicos M1, o que explica seu baixo potencial de sedação e ganho de peso.",

  posologias: [
    {
      indicacao: "Esquizofrenia",
      doseInicial: "40 mg/dia",
      doseUsual: "40–80 mg/dia",
      doseMaxima: "160 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Depressão Bipolar (monoterapia ou adjuvante a lítio/valproato)",
      doseInicial: "20 mg/dia",
      doseUsual: "20–60 mg/dia",
      doseMaxima: "120 mg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "18 horas",

  metabolizacao:
    "Metabolização hepática quase exclusivamente pela CYP3A4; contraindicada com inibidores fortes (cetoconazol, ritonavir) e indutores fortes (rifampicina, carbamazepina, fenitoína) dessa enzima.",

  indicacoes: [
    "Esquizofrenia",
    "Episódios depressivos do Transtorno Bipolar tipo I (monoterapia ou adjuvante)",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à lurasidona",
    "Uso concomitante com inibidores ou indutores fortes da CYP3A4",
  ],

  vantagens: [
    "Perfil metabólico muito favorável: baixo ganho de peso e baixo impacto em glicemia e lipídios",
    "Baixa sedação",
    "Aprovada para depressão bipolar, com boa evidência nessa indicação",
    "Baixo risco de prolongamento do intervalo QT",
  ],

  desvantagens: [
    "Necessidade de administração com alimento (mínimo de 350 kcal) para absorção adequada, o que pode prejudicar a adesão",
    "Acatisia e sintomas extrapiramidais dose-dependentes",
    "Múltiplas interações relevantes por depender quase exclusivamente da CYP3A4",
    "Menor experiência clínica acumulada em comparação com antipsicóticos mais antigos",
  ],

  efeitosAdversos: [
    "Acatisia",
    "Sonolência",
    "Náusea",
    "Sintomas extrapiramidais (dose-dependentes)",
    "Cefaleia",
    "Aumento leve de prolactina (menos que risperidona)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Inibidores fortes da CYP3A4 (cetoconazol, ritonavir, claritromicina) — contraindicados",
    "Indutores fortes da CYP3A4 (rifampicina, carbamazepina, fenitoína, erva-de-são-joão) — contraindicados",
    "Inibidores/indutores moderados da CYP3A4 requerem ajuste de dose",
    "Anti-hipertensivos (risco de hipotensão ortostática, incomum)",
    "Suco de toranja/grapefruit (inibe a CYP3A4 e pode aumentar níveis séricos; efeito persiste por até 72h após o consumo)",
    "Diltiazem e outros inibidores moderados da CYP3A4 (verapamil, eritromicina, fluconazol, atazanavir) — requer redução da dose pela metade",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Baixa",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Dados limitados; uso possível quando o benefício justifica o risco, com monitorização de sintomas extrapiramidais e de abstinência no recém-nascido.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados limitados sobre passagem para o leite materno; usar com cautela e monitorização do lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Ajuste de dose recomendado na insuficiência renal moderada a grave (dose máxima reduzida).",

  ajusteRenalNecessario: true,

  hepatica:
    "Ajuste de dose recomendado na insuficiência hepática moderada a grave.",

  observacoes:
    "A lurasidona destaca-se pelo perfil metabólico favorável entre os antipsicóticos atípicos, sendo frequentemente escolhida quando ganho de peso e alterações metabólicas são preocupação clínica relevante. É uma das poucas opções com boa evidência específica para depressão bipolar. A necessidade de ser tomada junto com uma refeição de pelo menos 350 kcal é um ponto crítico de orientação ao paciente, pois a absorção pode cair substancialmente em jejum. Como os demais antipsicóticos, requer atenção a risco de síndrome neuroléptica maligna e discinesia tardia em uso prolongado.",

  perolasClinicas: [
    "Orientar explicitamente o paciente a tomar SEMPRE com alimento (mínimo 350 kcal, não precisa ser refeição completa — um lanche já basta) — tomar em jejum pode reduzir a exposição sistêmica em até 2 vezes, levando a 'falha terapêutica' que na verdade é falha de absorção.",
    "É uma das melhores opções entre os antipsicóticos para pacientes com Transtorno Bipolar tipo II ou depressão bipolar recorrente que já têm sobrepeso/resistência insulínica, pelo perfil metabólico praticamente neutro.",
    "Evitar associação com sumo/suco de toranja (grapefruit) — inibidor de CYP3A4 que pode elevar níveis séricos de forma relevante, mesmo sendo um alimento e não um medicamento.",
    "Se o paciente precisar de um inibidor forte da CYP3A4 por tempo limitado (ex.: antifúngico azólico sistêmico, claritromicina), a conduta correta é suspender temporariamente a lurasidona e fazer ponte com outro antipsicótico — a interação com inibidores fortes é contraindicação absoluta, não um ajuste de dose.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "CANMAT/ISBD Guidelines for Bipolar Disorder",
    "Bula de referência ANVISA/FDA (Latuda)",
  ],
};
