import { Medicamento } from "../../types";

export const quetiapina: Medicamento = {
  id: "quetiapina",

  nome: "Quetiapina",

  nomeComercial: [
    "Seroquel",
    "Seroquel XRO",
    "Ketipinor",
  ],

  classe: "Antipsicótico",

  subclasse: "Atípico (2ª geração)",

  mecanismo:
    "Antagonista dos receptores serotoninérgicos 5-HT2A e dopaminérgicos D2 (ligação transitória de baixa afinidade), com afinidade importante por receptores histaminérgicos H1 e alfa-1 adrenérgicos. O metabólito ativo norquetiapina inibe a recaptação de noradrenalina.",

  posologias: [
    {
      indicacao: "Esquizofrenia",
      doseInicial: "50 mg/dia",
      doseUsual: "300–750 mg/dia",
      doseMaxima: "800 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Mania Aguda (Transtorno Bipolar)",
      doseInicial: "100 mg/dia",
      doseUsual: "400–800 mg/dia",
      doseMaxima: "800 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Depressão Bipolar",
      doseInicial: "50 mg/dia",
      doseUsual: "300 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Potencialização em Depressão Resistente (TDM, off-label/XRO)",
      doseInicial: "50 mg/dia",
      doseUsual: "150–300 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Insônia/Ansiedade (off-label, doses baixas)",
      doseInicial: "12,5–25 mg à noite",
      doseUsual: "25–100 mg à noite",
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 1,
    },
  ],

  meiaVida: "7 horas (6–12 horas); formulação XRO permite dose única diária",

  metabolizacao:
    "Metabolização hepática extensa principalmente pela CYP3A4, com formação do metabólito ativo norquetiapina.",

  indicacoes: [
    "Esquizofrenia",
    "Episódios maníacos e depressivos do Transtorno Bipolar",
    "Manutenção do Transtorno Bipolar",
    "Potencializador em Transtorno Depressivo Maior resistente (adjuvante)",
    "Insônia e ansiedade em doses baixas (uso off-label)",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à quetiapina",
    "Uso concomitante com inibidores potentes da CYP3A4 (ex.: cetoconazol) em altas doses",
    "Catarata não avaliada (recomenda-se exame oftalmológico periódico)",
  ],

  vantagens: [
    "Perfil sedativo útil para pacientes com insônia e agitação associadas",
    "Ampla faixa de doses permite uso tanto como ansiolítico/hipnótico quanto como antipsicótico pleno",
    "Boa eficácia como adjuvante em depressão resistente e no tratamento da depressão bipolar",
    "Baixo risco de sintomas extrapiramidais e hiperprolactinemia em comparação a outros antipsicóticos",
  ],

  desvantagens: [
    "Sedação proeminente, principalmente no início do tratamento",
    "Risco metabólico moderado a alto (ganho de peso, dislipidemia)",
    "Hipotensão ortostática, especialmente em titulação rápida",
    "Necessidade de titulação em múltiplas tomadas na formulação de liberação imediata",
  ],

  efeitosAdversos: [
    "Sedação/sonolência",
    "Ganho de peso",
    "Hipotensão ortostática",
    "Boca seca",
    "Tontura",
    "Dislipidemia e hiperglicemia",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Moderada",

  interacoes: [
    "Inibidores potentes da CYP3A4 (cetoconazol, itraconazol, ritonavir) aumentam níveis séricos",
    "Indutores da CYP3A4 (carbamazepina, fenitoína, rifampicina) reduzem níveis séricos significativamente",
    "Depressores do SNC e álcool (potencialização de sedação)",
    "Anti-hipertensivos (risco de hipotensão aditiva)",
    "Tioridazina (aumenta o clearance oral da quetiapina em cerca de 65%, reduzindo seus níveis séricos)",
    "Lorazepam (quetiapina reduz o clearance do lorazepam em cerca de 20%, potencializando sua sedação)",
    "Divalproato/ácido valproico (interação farmacocinética leve e recíproca; monitorar em uso combinado)",
  ],

  ganhoPeso: "Moderado",

  sedacao: "Alta",

  sexual: "Baixa",

  qt: "Baixo",

  sintomasExtrapiramidais: "Muito baixo",

  hiperprolactinemia: "Muito baixo",

  riscoMetabolico: "Alto",

  hipotensaoOrtostatica: "Alto",

  riscoConvulsivo: "Baixo",

  gravidez:
    "Dados relativamente mais numerosos entre os atípicos; uso possível quando o benefício supera o risco, com monitorização metabólica materna.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno em pequena quantidade; considerada uma opção razoável quando o tratamento com antipsicótico é necessário durante a amamentação.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose na insuficiência renal.",

  ajusteRenalNecessario: false,

  hepatica:
    "Reduzir dose inicial e titular mais lentamente em insuficiência hepática.",

  observacoes:
    "A quetiapina destaca-se pela versatilidade posológica: em doses baixas (25–100 mg) é amplamente utilizada off-label para insônia e ansiedade devido ao seu efeito anti-histamínico sedativo, enquanto em doses plenas (300–800 mg) atua como antipsicótico completo. É uma das poucas opções com eficácia comprovada tanto na mania quanto na depressão bipolar. Apresenta risco metabólico intermediário entre risperidona e olanzapina. Requer monitorização oftalmológica periódica (risco de catarata) e atenção a risco de síndrome neuroléptica maligna em uso prolongado.",

  perolasClinicas: [
    "A resposta em dose baixa (25-100mg, uso off-label para insônia) é predominantemente anti-histamínica/sedativa — não confundir com efeito antipsicótico, que só surge em doses muito mais altas. A dose baixa 'funcionar' para sono não significa que a mesma dose trataria psicose.",
    "Tem alto potencial de abuso relatado em populações específicas (contexto prisional, uso de substâncias) pelo efeito sedativo/ansiolítico rápido em dose baixa — atenção redobrada ao prescrever nesses contextos.",
    "A formulação XRO (liberação prolongada) permite dose única noturna com menor pico de sedação diurna e menor hipotensão ortostática que a formulação de liberação imediata em múltiplas tomadas.",
    "Suspensão abrupta após uso prolongado pode causar insônia rebote e sintomas colinérgicos de retirada (náusea, sudorese) — reduzir gradualmente mesmo quando usada apenas em dose baixa para sono.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "CANMAT Guidelines for Bipolar Disorder",
    "Bula de referência ANVISA/FDA (Seroquel)",
  ],
};
