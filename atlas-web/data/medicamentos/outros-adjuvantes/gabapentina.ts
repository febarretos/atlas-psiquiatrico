import { Medicamento } from "../../types";

export const gabapentina: Medicamento = {
  id: "gabapentina",

  nome: "Gabapentina",

  nomeComercial: [
    "Neurontin",
    "Progresse",
  ],

  classe: "Adjuvante/Anticonvulsivante",

  subclasse: "Gabapentinoide",

  mecanismo:
    "Modula a subunidade alfa-2-delta dos canais de cálcio dependentes de voltagem, reduzindo a liberação de neurotransmissores excitatórios (glutamato, noradrenalina, substância P). Apesar do nome, não atua diretamente nos receptores GABA.",

  posologias: [
    {
      indicacao: "Ansiedade (off-label, incl. Transtorno de Ansiedade Social)",
      doseInicial: "300 mg/dia (à noite)",
      doseUsual: "900–1.800 mg/dia (2–3 tomadas)",
      doseMaxima: "3.600 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Dor Neuropática Comórbida",
      doseInicial: "300 mg/dia",
      doseUsual: "900–1.800 mg/dia",
      doseMaxima: "3.600 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Abstinência Alcoólica Leve a Moderada (adjuvante)",
      doseInicial: "300–400 mg 3x/dia",
      doseUsual: "900–1.800 mg/dia",
      doseMaxima: "2.400 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Insônia Comórbida a Ansiedade/Dor (off-label)",
      doseInicial: "100–300 mg à noite",
      doseUsual: "300–600 mg à noite",
      doseMaxima: "900 mg/dia",
      nivelEvidencia: 2,
    },
  ],

  meiaVida: "5–7 horas",

  metabolizacao:
    "Não é metabolizada pelo fígado; eliminação inalterada por via renal.",

  indicacoes: [
    "Dor neuropática (indicação aprovada)",
    "Epilepsia focal (indicação aprovada, uso neurológico)",
    "Ansiedade, especialmente Transtorno de Ansiedade Social (off-label)",
    "Ansiedade perioperatória (off-label)",
    "Adjuvante em síndrome de abstinência alcoólica leve a moderada (off-label)",
    "Insônia comórbida a dor crônica ou ansiedade (off-label)",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à gabapentina",
  ],

  vantagens: [
    "Baixo potencial de interação medicamentosa, pois não é metabolizada pelo fígado (não interage com o sistema citocromo P450)",
    "Início de efeito relativamente rápido comparado a outros ansiolíticos não benzodiazepínicos",
    "Útil como adjuvante quando há dor neuropática ou sintomas de abstinência alcoólica comórbidos",
    "Não apresenta risco relevante de prolongamento do QT",
  ],

  desvantagens: [
    "Evidência científica menos robusta que ISRS/ISRSN para transtorno de ansiedade generalizada, sendo considerada de segunda ou terceira linha",
    "Potencial de abuso reconhecido, especialmente em pacientes com histórico de uso de substâncias (frequentemente combinada com opioides)",
    "Sedação e ataxia dose-dependentes, que podem limitar a titulação",
    "Farmacocinética não linear (absorção saturável), tornando o aumento de dose menos previsível em doses altas",
    "Risco de sintomas de abstinência com a descontinuação abrupta após uso prolongado",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Tontura",
    "Ataxia",
    "Edema periférico",
    "Fadiga",
    "Ganho de peso leve",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Opioides (potencialização de sedação e depressão respiratória — combinação de risco reconhecido)",
    "Álcool e outros depressores do sistema nervoso central (efeito aditivo)",
    "Antiácidos contendo alumínio/magnésio (reduzem a absorção da gabapentina)",
    "Morfina (aumenta os níveis plasmáticos de gabapentina em cerca de 44%, além do efeito sedativo aditivo)",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Moderada",

  sexual: "Baixa",

  qt: "Muito baixo",

  gravidez:
    "Dados limitados em humanos; usar apenas quando o benefício justificar claramente o risco.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno em quantidade pequena; geralmente considerada compatível com monitorização do lactente.",

  lactacaoCategoria: "compativel",

  renal:
    "Requer ajuste significativo de dose conforme o clearance de creatinina, dado que a eliminação é exclusivamente renal.",

  ajusteRenalNecessario: true,

  hepatica:
    "Não necessita ajuste de dose na insuficiência hepática, pois não é metabolizada pelo fígado.",

  observacoes:
    "A gabapentina é amplamente utilizada off-label na psiquiatria, sobretudo para ansiedade (especialmente transtorno de ansiedade social e ansiedade perioperatória) e como adjuvante em sintomas de abstinência alcoólica leve a moderada, além de seu uso consagrado em dor neuropática comórbida. Sua principal vantagem é o baixíssimo potencial de interação medicamentosa, por não depender do metabolismo hepático. No entanto, a evidência para ansiedade generalizada é menos robusta que a dos ISRS/ISRSN, e há reconhecimento crescente de seu potencial de abuso, particularmente em associação com opioides — o que exige avaliação cuidadosa do histórico de uso de substâncias antes da prescrição e atenção à descontinuação gradual após uso prolongado.",

  perolasClinicas: [
    "A absorção é saturável e não linear — dobrar a dose não dobra proporcionalmente a concentração plasmática; doses fracionadas em 3 tomadas absorvem melhor no total que a mesma dose diária concentrada em 1-2 tomadas.",
    "É uma opção útil especificamente quando o paciente já tem dor neuropática comórbida (ex: neuropatia diabética, fibromialgia) associada a ansiedade, tratando ambas as condições com um único fármaco.",
    "Verificar histórico de uso de opioides antes de prescrever — a combinação gabapentina+opioide é um padrão de abuso reconhecido e associado a maior risco de depressão respiratória fatal do que qualquer um dos dois isoladamente.",
    "Ajustar a dose pelo clearance de creatinina é obrigatório, não opcional — ao contrário de muitos psicofármacos, aqui a função renal determina diretamente a dose máxima segura.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "NICE Guideline (Uso de Gabapentinoides)",
    "Bula de referência ANVISA/FDA (Neurontin)",
  ],
};
