import { Medicamento } from "../../types";

export const vilazodona: Medicamento = {
  id: "vilazodona",

  nome: "Vilazodona",

  nomeComercial: [
    "Aymee",
    "Viibryd",
  ],

  classe: "Antidepressivo",

  subclasse: "SPARI (ISRS multimodal)",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS) associado ao agonismo parcial do receptor 5-HT1A. A combinação desses mecanismos aumenta a neurotransmissão serotoninérgica e modula diretamente os receptores 5-HT1A, promovendo efeito antidepressivo e ansiolítico. Possui afinidade mínima por receptores histamínicos, muscarínicos e adrenérgicos, resultando em baixo potencial de sedação, ganho ponderal e efeitos anticolinérgicos.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "10 mg/dia por 7 dias, depois 20 mg/dia por 7 dias",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada (off-label)",
      doseInicial: "10 mg/dia por 7 dias",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia",
      nivelEvidencia: 2,
    },
  ],

  meiaVida: "Aproximadamente 25 horas",

  metabolizacao:
    "Metabolização hepática predominantemente pela CYP3A4, com menor participação das enzimas CYP2C19 e CYP2D6. Também é substrato da glicoproteína-P (P-gp). Inibidores potentes da CYP3A4 podem exigir redução da dose máxima para 20 mg/dia.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada (off-label)",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Hipersensibilidade à vilazodona",
  ],

  vantagens: [
    "Baixa incidência de disfunção sexual",
    "Baixo potencial de ganho de peso",
    "Baixa sedação",
    "Pouco efeito anticolinérgico",
    "Boa tolerabilidade cardiovascular",
    "Pode beneficiar pacientes com sintomas ansiosos associados",
    "Possível menor risco de embotamento emocional em comparação com alguns ISRS (evidências ainda limitadas)",
  ],

  desvantagens: [
    "Necessita titulação gradual",
    "Deve ser administrada obrigatoriamente com alimentos",
    "Náusea e diarreia são frequentes nas primeiras semanas",
    "Experiência clínica menor que a dos ISRS clássicos",
    "Custo elevado",
  ],

  efeitosAdversos: [
    "Náusea",
    "Diarreia",
    "Insônia",
    "Tontura",
    "Cefaleia",
    "Vômitos",
    "Boca seca",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Azul de metileno",
    "Outros agentes serotoninérgicos (ISRS, IRSN, triptanos, tramadol, lítio, erva-de-são-joão)",
    "Inibidores potentes da CYP3A4 (cetoconazol, itraconazol, claritromicina, ritonavir)",
    "Indutores potentes da CYP3A4 (rifampicina, carbamazepina, fenitoína)",
    "Anticoagulantes e antiagregantes plaquetários",
    "AINEs (aumento do risco de sangramento gastrointestinal)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Muito baixa",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Dados ainda limitados em gestantes. Utilizar apenas quando os benefícios esperados superarem os riscos potenciais.",

  gravidezCategoria: "cautela",

  lactacao:
    "Não existem dados suficientes sobre sua excreção no leite materno. Avaliar individualmente riscos e benefícios.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose em pacientes com insuficiência renal.",

  ajusteRenalNecessario: false,

  hepatica:
    "Não necessita ajuste em insuficiência hepática leve ou moderada. Há poucos dados em insuficiência hepática grave, devendo ser utilizada com cautela.",

  observacoes:
    "A vilazodona é um antidepressivo multimodal que combina inibição da recaptação de serotonina com agonismo parcial do receptor 5-HT1A. Seu mecanismo lembra a associação entre um ISRS e buspirona, porém em uma única molécula. Deve ser administrada obrigatoriamente com alimentos, pois sua biodisponibilidade aumenta significativamente quando ingerida durante uma refeição. Apresenta eficácia semelhante à dos antidepressivos de primeira linha, com perfil favorável quanto ao ganho de peso, sedação e disfunção sexual. Os efeitos gastrointestinais, principalmente náusea e diarreia, costumam ocorrer no início do tratamento e tendem a diminuir com a titulação gradual da dose. No Brasil, a formulação comercial disponível é a **Aymee®**.",

  perolasClinicas: [
    "A exigência de administração com alimentos não é apenas uma recomendação genérica: a biodisponibilidade pode cair pela metade em jejum, o que na prática significa subdosagem terapêutica silenciosa se o paciente não for orientado explicitamente e de forma insistente sobre isso.",
    "Se o paciente relatar 'não fez efeito', antes de trocar de medicação vale confirmar ativamente se está tomando sempre junto com uma refeição substancial — erro de administração é uma causa subestimada de falha terapêutica aparente com este fármaco.",
    "Náusea/diarreia iniciais tendem a ser dose-relacionadas e transitórias; a titulação obrigatória (10 mg por 1 semana, depois 20 mg) já foi desenhada para mitigar isso — reforçar adesão nessa fase inicial é chave para não perder o paciente antes do benefício aparecer.",
    "Por não ter praticamente nenhuma afinidade por receptores histamínicos, muscarínicos ou adrenérgicos, é uma opção a considerar em pacientes muito sensíveis a sedação, ganho de peso ou efeitos anticolinérgicos que não toleraram ISRS/IRSN clássicos.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline for the Treatment of Depression",
    "NICE Guideline NG222",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines in Psychiatry",
    "FDA Prescribing Information – Viibryd (vilazodone)",
  ],
};