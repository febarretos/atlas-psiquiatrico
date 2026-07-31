import { Medicamento } from "../../types";

export const metilfenidato: Medicamento = {
  id: "metilfenidato",

  nome: "Metilfenidato",

  nomeComercial: [
    "Ritalina",
    "Ritalina LA",
    "Concerta",
  ],

  classe: "Estimulante",

  subclasse: "Metilfenidato",

  mecanismo:
    "Inibidor da recaptação de dopamina e noradrenalina, bloqueando os transportadores DAT e NET e aumentando a disponibilidade sináptica desses neurotransmissores em córtex pré-frontal e estriado. Não é um agente liberador significativo de monoaminas, diferentemente das anfetaminas.",

  posologias: [
    {
      indicacao: "TDAH (liberação imediata)",
      doseInicial: "5 mg, 1–2x/dia",
      doseUsual: "20–40 mg/dia (doses divididas)",
      doseMaxima: "60 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "TDAH (liberação prolongada – OROS/LA)",
      doseInicial: "18–20 mg/dia, dose única matinal",
      doseUsual: "18–54 mg/dia",
      doseMaxima: "72 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Narcolepsia",
      doseInicial: "5–10 mg, 2x/dia",
      doseUsual: "20–40 mg/dia (doses divididas)",
      doseMaxima: "60 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "2–4 horas (liberação imediata); efeito clínico prolongado de 6–12 horas com formulações de liberação prolongada",

  metabolizacao:
    "Metabolização hepática predominantemente por hidrólise via carboxilesterase 1 (CES1), com pouca participação do sistema CYP450, resultando em baixo potencial de interação medicamentosa por essa via.",

  indicacoes: [
    "Transtorno de Déficit de Atenção e Hiperatividade (TDAH) em crianças, adolescentes e adultos",
    "Narcolepsia",
  ],

  contraIndicacoes: [
    "Doença cardiovascular estrutural significativa ou arritmias graves",
    "Hipertensão grave não controlada",
    "Glaucoma",
    "Hipertireoidismo",
    "Uso concomitante ou recente (últimos 14 dias) com IMAO",
    "Agitação importante ou quadros ansiosos graves (podem ser exacerbados)",
    "Cautela em história de abuso de substâncias",
    "Cautela relativa em Tourette ou tiques (pode exacerbar tiques motores/vocais)",
  ],

  vantagens: [
    "Ampla variedade de formulações (liberação imediata, intermediária e prolongada/OROS), permitindo flexibilidade de horário e ajuste fino do perfil de ação",
    "Longa experiência clínica e vasta evidência de eficácia e segurança",
    "Início de ação rápido",
    "Possibilidade de combinar apresentações para cobertura personalizada ao longo do dia",
    "Baixo potencial de interação medicamentosa via CYP450",
  ],

  desvantagens: [
    "Efeito rebote ao final do dia, mais pronunciado com formulações de liberação imediata",
    "Necessidade frequente de múltiplas tomadas diárias nas formulações de curta duração",
    "Potencial de abuso e desvio (substância controlada)",
    "Redução de apetite e possível impacto no crescimento em crianças com uso prolongado",
  ],

  efeitosAdversos: [
    "Insônia",
    "Redução de apetite e perda de peso",
    "Cefaleia",
    "Taquicardia e aumento da pressão arterial",
    "Irritabilidade",
    "Boca seca",
    "Efeito rebote (irritabilidade/piora dos sintomas) ao término do efeito da dose",
  ],

  interacoes: [
    "IMAO (risco de crise hipertensiva)",
    "Anti-hipertensivos (pode reduzir eficácia)",
    "Anticoagulantes cumarínicos (pode potencializar efeito)",
    "Álcool",
    "Outros agentes simpaticomiméticos",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Muito baixa",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Dados limitados em humanos; geralmente evitado durante a gestação quando possível. Uso deve ser individualizado, avaliando risco-benefício, sobretudo em casos de TDAH grave com prejuízo funcional significativo.",

  gravidezCategoria: "evitar",

  lactacao:
    "Dados limitados sobre passagem para o leite materno; uso deve ser cauteloso, com monitorização do lactente caso mantido.",

  lactacaoCategoria: "cautela",

  renal:
    "Dados limitados; considerar cautela e monitorização em insuficiência renal significativa, sem ajuste posológico específico bem estabelecido.",

  ajusteRenalNecessario: false,

  hepatica:
    "Considerar cautela em insuficiência hepática, dado o metabolismo predominantemente por esterases plasmáticas/hepáticas.",

  observacoes:
    "É recomendada avaliação cardiovascular basal antes do início do tratamento, incluindo aferição de pressão arterial e frequência cardíaca, além de investigação de história pessoal e familiar de doença cardíaca, morte súbita ou arritmias. A monitorização de PA, FC, apetite e crescimento (em crianças) deve ser mantida ao longo do tratamento. Por ser substância controlada com potencial de abuso, recomenda-se cautela na prescrição a pacientes com história de transtorno por uso de substâncias. A escolha entre formulações de liberação imediata, intermediária ou prolongada deve considerar o perfil de resposta, a necessidade de cobertura ao longo do dia e o risco de efeito rebote.",

  perolasClinicas: [
    "Formulações de mesma dose nominal (ex: 18mg OROS vs. 20mg LA) NÃO são bioequivalentes entre fabricantes diferentes — o perfil de liberação varia por tecnologia (OROS, cápsula com beads), o que pode explicar resposta diferente ao trocar de marca mesmo mantendo 'a mesma dose'.",
    "O efeito rebote no fim do dia (irritabilidade, piora comportamental quando o efeito passa) é frequentemente confundido com 'o TDAH voltando' — muitas vezes resolve com uma dose pequena de resgate à tarde ou trocando para formulação de ação mais longa, em vez de aumentar a dose total.",
    "Redução de apetite costuma ser mais pronunciada no almoço (pico de ação) — orientar concentrar a maior refeição no café da manhã, antes da dose, e um lanche reforçado à noite quando o efeito já diminuiu.",
    "Em adultos, doses maiores por kg costumam ser necessárias comparado ao ajuste pediátrico tradicional — não subtratar adultos aplicando lógica de dose pediátrica.",
  ],

  referencias: [
    "CADDRA Guidelines",
    "AACAP Practice Parameter",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};
