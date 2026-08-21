import { Medicamento } from "../../types";

export const lamotrigina: Medicamento = {
  id: "lamotrigina",

  nome: "Lamotrigina",

  nomeComercial: [
    "Lamictal",
    "Neural",
    "Lamitor",
  ],

  classe: "Estabilizador de Humor",

  subclasse: "Anticonvulsivante",

  mecanismo:
    "Bloqueio de canais de sódio dependentes de voltagem, com redução da liberação pré-sináptica de glutamato e estabilização das membranas neuronais.",

  posologias: [
    {
      indicacao: "Profilaxia de Episódios Depressivos no Transtorno Bipolar (monoterapia)",
      doseInicial: "25 mg/dia por 2 semanas",
      doseUsual: "100–200 mg/dia (titulação gradual: 50 mg/dia nas semanas 3–4, com incrementos de até 50 mg/semana)",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Em associação com Valproato",
      doseInicial: "12,5 mg/dia (25 mg em dias alternados) por 2 semanas",
      doseUsual: "100 mg/dia (dose-alvo), com titulação ainda mais lenta e doses reduzidas pela metade em relação à monoterapia",
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Em associação com indutores enzimáticos (ex: carbamazepina), sem valproato",
      doseInicial: "50 mg/dia por 2 semanas",
      doseUsual: "200–400 mg/dia",
      doseMaxima: "400 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "25–33 horas (variável conforme uso concomitante de indutores ou inibidores enzimáticos)",

  metabolizacao:
    "Metabolização hepática predominantemente por glicuronidação (UGT1A4); não é substrato relevante do sistema enzimático CYP450.",

  indicacoes: [
    "Profilaxia de Episódios Depressivos no Transtorno Bipolar",
    "Manutenção do Transtorno Bipolar (com eficácia limitada na prevenção de mania)",
    "Epilepsia",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à lamotrigina",
    "Histórico de reação cutânea grave prévia ao fármaco",
  ],

  vantagens: [
    "Boa tolerabilidade geral",
    "Baixo risco de ganho de peso, sedação e disfunção sexual",
    "Eficácia consistente na prevenção de episódios depressivos bipolares",
    "Não requer monitorização laboratorial obrigatória",
    "Sem efeitos metabólicos relevantes",
  ],

  desvantagens: [
    "Eficácia limitada na mania aguda e na profilaxia de episódios maníacos",
    "Necessidade de titulação lenta, retardando o início pleno do efeito terapêutico",
    "Risco de rash cutâneo grave, especialmente em caso de titulação rápida",
    "Interação significativa com valproato, exigindo ajuste cuidadoso de dose",
  ],

  efeitosAdversos: [
    "Cefaleia",
    "Tontura",
    "Erupção cutânea (rash)",
    "Náusea",
    "Insônia ou sonolência",
    "Diplopia",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Valproato (aumenta significativamente os níveis de lamotrigina, exigindo redução de dose)",
    "Carbamazepina e outros indutores enzimáticos (reduzem os níveis de lamotrigina)",
    "Contraceptivos orais estrogênicos (podem reduzir os níveis de lamotrigina)",
    "Outros anticonvulsivantes",
    "Rifampicina e inibidores da protease do HIV (ex: lopinavir/ritonavir — induzem a glicuronidação, podendo reduzir os níveis de lamotrigina em até 50%)",
    "Paracetamol/acetaminofeno (uso regular/crônico pode induzir a glicuronidação e reduzir os níveis séricos de lamotrigina)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Muito baixa",

  sexual: "Muito baixa",

  qt: "Baixo",

  gravidez:
    "Considerada uma das opções mais seguras entre os estabilizadores de humor durante a gestação, sem aumento significativo do risco teratogênico global demonstrado, embora alguns estudos sugiram possível associação com fenda labial/palatina. Pode ser necessário ajuste de dose devido ao aumento do clearance do fármaco durante a gravidez.",

  gravidezCategoria: "preferencial",

  lactacao:
    "Apresenta passagem significativa para o leite materno, exigindo monitorização clínica do lactente quanto a sinais de sedação ou erupção cutânea, embora geralmente seja considerada compatível com a amamentação quando há acompanhamento adequado.",

  lactacaoCategoria: "compativel",

  renal:
    "Pode requerer ajuste de dose e titulação mais cautelosa na insuficiência renal significativa, pelo risco de acúmulo do fármaco e de seus metabólitos.",

  ajusteRenalNecessario: true,

  hepatica:
    "Requer redução de dose em insuficiência hepática moderada a grave, especialmente na presença de disfunção hepática significativa.",

  observacoes:
    "A titulação deve ser sempre lenta e gradual, seguindo esquemas específicos conforme o uso concomitante de outros fármacos, pelo risco de rash cutâneo grave, incluindo Síndrome de Stevens-Johnson e necrólise epidérmica tóxica, especialmente nas primeiras 8 semanas de tratamento. O uso concomitante com valproato exige titulação ainda mais lenta e doses reduzidas pela metade, devido à inibição do metabolismo da lamotrigina. Diferentemente do lítio, valproato e carbamazepina, não há necessidade de monitorização obrigatória de níveis séricos, embora possa ser realizada em situações clínicas específicas.",

  perolasClinicas: [
    "É ineficaz para mania aguda — não usar como monoterapia em episódio maníaco em curso; sua força está na prevenção de recaídas depressivas, não no tratamento agudo de nenhuma polaridade.",
    "Se o paciente interromper o uso por mais de alguns dias (5 dias ou mais), a titulação deve ser reiniciada do zero, não retomada na dose anterior — reintroduzir em dose plena após uma pausa é a causa mais comum de rash grave evitável.",
    "Explicar ao paciente, antes de iniciar, que QUALQUER rash cutâneo nas primeiras 8 semanas deve motivar suspensão imediata e contato médico — não 'esperar para ver se piora', dado que Stevens-Johnson pode evoluir rapidamente.",
    "Contraceptivos orais combinados (estrogênicos) podem reduzir os níveis de lamotrigina em até 50% — pacientes que iniciam ou suspendem anticoncepcional hormonal durante o tratamento podem precisar de reajuste de dose.",
  ],

  referencias: [
    "CANMAT 2018 Bipolar Guidelines",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};
