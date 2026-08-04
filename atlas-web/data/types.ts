export interface Posologia {
  indicacao: string;
  doseInicial: string;
  doseUsual: string;
  doseMaxima: string;

  // Força da evidência/recomendação para ESSA indicação específica (1-5
  // estrelas), não do fármaco em geral: 5 = primeira linha, aprovação
  // regulatória e forte recomendação em diretrizes (CANMAT/APA/NICE); 3 =
  // segunda linha, ou aprovado mas com evidência/recomendação mais modesta;
  // 1 = uso off-label com evidência limitada (séries de caso/opinião de
  // especialista). Omitir quando não houver informação suficiente para
  // classificar com confiança.
  nivelEvidencia?: 1 | 2 | 3 | 4 | 5;
}

export interface Medicamento {
  id: string;

  nome: string;

  nomeComercial?: string[];

  classe: string;

  subclasse?: string;

  mecanismo: string;

  posologias: Posologia[];

  meiaVida?: string;

  metabolizacao?: string;

  indicacoes: string[];

  contraIndicacoes?: string[];

  vantagens: string[];

  desvantagens: string[];

  efeitosAdversos?: string[];

  interacoes?: string[];

  // Atividade serotoninérgica clinicamente relevante (inibição de
  // recaptação ou liberação de serotonina) — risco de síndrome
  // serotoninérgica em combinações, independente de `classe` (ex.:
  // bupropiona é "Antidepressivo" mas não é serotoninérgica; agomelatina
  // idem). Omitir/false quando o fármaco não tem esse mecanismo.
  serotoninergico?: boolean;

  // Carga anticolinérgica clínica do fármaco, independente da classe —
  // risco cumulativo (confusão/delirium em idosos, retenção urinária,
  // constipação, boca seca) em combinações (ex.: tricíclicos e
  // antipsicóticos sedativos têm carga anticolinérgica relevante mesmo não
  // sendo da classe "Anticolinérgico").
  cargaAnticolinergica?: "Nenhuma" | "Baixa" | "Moderada" | "Alta";

  ganhoPeso: string;

  sedacao: string;

  sexual: string;

  qt: string;

  // Os 6 campos abaixo seguem a mesma escala categórica de ganhoPeso/
  // sedacao/sexual/qt ("Muito baixo" a "Muito alto"). Todos opcionais:
  // omitir quando o eixo não se aplica à classe do fármaco (ex.: EPS e
  // hiperprolactinemia não se aplicam a um ISRS) ou quando não há base
  // comparativa confiável na literatura para classificar com confiança —
  // mesma convenção de omissão já usada em Posologia.nivelEvidencia.

  // Sintomas extrapiramidais agudos (distonia, acatisia, parkinsonismo)
  // por bloqueio D2 — eixo central para diferenciar antipsicóticos entre
  // si (ex.: haloperidol alto vs. quetiapina/clozapina muito baixo).
  sintomasExtrapiramidais?: string;

  // Risco de hiperprolactinemia clinicamente relevante (galactorreia,
  // amenorreia, disfunção sexual mediada por prolactina, densidade óssea
  // a longo prazo) — desproporcional entre antipsicóticos com bloqueio D2
  // semelhante (ex.: risperidona/paliperidona alto vs. aripiprazol muito
  // baixo/nenhum, por agonismo parcial).
  hiperprolactinemia?: string;

  // Risco metabólico (dislipidemia, resistência insulínica/diabetes) —
  // distinto de ganho de peso simples: alguns fármacos (ex.: olanzapina,
  // clozapina) têm risco metabólico desproporcional ao peso ganho.
  riscoMetabolico?: string;

  // Hipotensão ortostática clinicamente relevante, sobretudo por bloqueio
  // alfa-1 adrenérgico — relevante para antipsicóticos, tricíclicos e
  // trazodona, com impacto direto em risco de queda em idosos.
  hipotensaoOrtostatica?: string;

  // Redução do limiar convulsivo / risco de convulsão em dose
  // terapêutica — relevante sobretudo para bupropiona, clozapina e
  // antidepressivos tricíclicos; não se aplica a anticonvulsivantes
  // usados como estabilizadores de humor (efeito oposto).
  riscoConvulsivo?: string;

  // Intensidade esperada da síndrome de descontinuação ao suspender
  // abruptamente após uso continuado — relevante sobretudo para
  // antidepressivos (ex.: paroxetina/venlafaxina alto vs. fluoxetina
  // muito baixo, pela meia-vida longa) e alguns outros fármacos de meia-
  // vida curta.
  sintomasDescontinuacao?: string;

  gravidez: string;

  // Classificação resumida do texto de `gravidez`, usada para permitir
  // filtro rápido na listagem de medicamentos:
  // "preferencial" = uma das opções mais estudadas/seguras na gestação;
  // "cautela" = uso possível quando benefício supera risco, com monitorização;
  // "evitar" = contraindicado ou risco teratogênico relevante, evitar quando possível.
  gravidezCategoria?: "preferencial" | "cautela" | "evitar";

  lactacao: string;

  // Idem acima, resumindo `lactacao`: "compativel" = geralmente compatível
  // com amamentação; "cautela" = compatível com monitorização do lactente;
  // "evitar" = geralmente não recomendado durante a amamentação.
  lactacaoCategoria?: "compativel" | "cautela" | "evitar";

  renal: string;

  // true = requer ajuste de dose ou cautela relevante na insuficiência
  // renal; false = não necessita ajuste específico.
  ajusteRenalNecessario?: boolean;

  hepatica: string;

  observacoes: string;

  // Dicas práticas e específicas para o uso clínico rotineiro (estilo "pearls"
  // de Stahl's Essential Psychopharmacology) — truques de titulação, manejo
  // de efeitos adversos, horário de administração, situações especiais.
  // Não deve repetir o que já está em mecanismo/posologias/observações.
  perolasClinicas?: string[];

  referencias?: string[];
}