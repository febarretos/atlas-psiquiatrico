import { Medicamento } from "../../types";

export const brexpiprazol: Medicamento = {
  id: "brexpiprazol",

  nome: "Brexpiprazol",

  nomeComercial: [
    "Rexulti",
  ],

  classe: "Antipsicótico",

  subclasse: "Atípico (2ª geração)",

  mecanismo:
    "Agonista parcial dos receptores dopaminérgicos D2 e serotoninérgicos 5-HT1A, e antagonista dos receptores 5-HT2A, com afinidade adicional relevante por receptores alfa-1B e alfa-2C adrenérgicos. Estruturalmente relacionado ao aripiprazol, porém com menor atividade intrínseca em D2, o que reduz a incidência de acatisia e inquietação.",

  posologias: [
    {
      indicacao: "Esquizofrenia",
      doseInicial: "1 mg/dia",
      doseUsual: "2–4 mg/dia",
      doseMaxima: "4 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Potencialização em Depressão Resistente (TDM)",
      doseInicial: "0,5–1 mg/dia",
      doseUsual: "2 mg/dia",
      doseMaxima: "3 mg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "91 horas (metabólito ativo DM-3411: 86 horas)",

  metabolizacao:
    "Metabolização hepática pela CYP3A4 e CYP2D6; requer ajuste de dose em metabolizadores lentos de CYP2D6 ou em uso concomitante de inibidores/indutores dessas enzimas.",

  indicacoes: [
    "Esquizofrenia",
    "Potencializador em Transtorno Depressivo Maior resistente (adjuvante)",
  ],

  contraIndicacoes: [
    "Hipersensibilidade ao brexpiprazol",
  ],

  vantagens: [
    "Menor incidência de acatisia e inquietação em comparação com o aripiprazol",
    "Baixa sedação na maioria dos pacientes",
    "Baixo risco de hiperprolactinemia",
    "Boa opção como potencializador em depressão resistente em doses baixas",
    "Titulação simples com poucos ajustes de dose",
  ],

  desvantagens: [
    "Ganho de peso mais pronunciado que o aripiprazol, embora ainda moderado entre os atípicos",
    "Custo elevado em relação a antipsicóticos mais antigos",
    "Meia-vida longa dificulta ajustes rápidos de dose",
    "Menor experiência clínica acumulada em comparação com antipsicóticos mais antigos",
  ],

  efeitosAdversos: [
    "Ganho de peso",
    "Acatisia (menos frequente que com aripiprazol)",
    "Cefaleia",
    "Sonolência leve",
    "Tontura",
    "Aumento do apetite",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Baixa",

  interacoes: [
    "Inibidores da CYP2D6 (fluoxetina, paroxetina) aumentam níveis séricos — requer redução de dose",
    "Inibidores da CYP3A4 (cetoconazol) aumentam níveis séricos — requer redução de dose",
    "Indutores da CYP3A4 (carbamazepina, rifampicina) reduzem níveis séricos significativamente",
    "Anti-hipertensivos (risco de hipotensão, incomum)",
    "Quinidina (inibidor potente da CYP2D6 — reduzir a dose em 50%, conforme bula)",
    "Benzodiazepínicos e álcool (potencialização de sedação, hipotensão e tontura)",
    "Antiparkinsonianos/agonistas dopaminérgicos — levodopa (pode reduzir a eficácia do levodopa por antagonismo parcial da via dopaminérgica)",
  ],

  ganhoPeso: "Moderado",

  sedacao: "Baixa",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Dados limitados; uso possível quando o benefício justifica o risco, com monitorização de sintomas extrapiramidais e de abstinência no recém-nascido, como para os demais antipsicóticos atípicos.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados limitados sobre passagem para o leite materno; usar com cautela e monitorização do lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose na insuficiência renal leve a moderada; considerar redução em insuficiência grave.",

  ajusteRenalNecessario: true,

  hepatica:
    "Ajuste de dose recomendado na insuficiência hepática moderada a grave.",

  observacoes:
    "O brexpiprazol é um modulador do sistema dopamina-serotonina da mesma classe farmacológica do aripiprazol, desenvolvido para manter a eficácia antipsicótica com menor ativação/inquietação e menor incidência de acatisia, à custa de um perfil metabólico levemente menos favorável (maior ganho de peso que o aripiprazol). É utilizado tanto no tratamento da esquizofrenia quanto como potencializador em depressão resistente. Como os demais antipsicóticos, requer atenção a risco de síndrome neuroléptica maligna e discinesia tardia em uso prolongado.",

  perolasClinicas: [
    "É uma opção a considerar quando um paciente já respondeu bem ao aripiprazol mas não tolerou a acatisia/inquietação — o mecanismo é análogo, mas a menor atividade intrínseca em D2 costuma reduzir esse efeito adverso específico.",
    "Como potencializador em depressão resistente, a dose eficaz (2 mg/dia) é bem menor que a dose antipsicótica plena — não titular para além disso apenas por falta de resposta inicial sem antes reavaliar o diagnóstico e a adequação do antidepressivo de base.",
    "A meia-vida muito longa (91h) significa que o estado de equilíbrio só é atingido após 10-12 dias — não julgar falha terapêutica antes desse prazo mesmo em dose estável.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia",
    "Bula de referência ANVISA/FDA (Rexulti)",
  ],
};
