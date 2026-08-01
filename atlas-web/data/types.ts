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
  // recaptação ou liberação de serotonina) — usado para alertar risco de
  // síndrome serotoninérgica em combinações no Verificador de Interações,
  // SEM depender de `classe` como proxy (ex.: bupropiona é "Antidepressivo"
  // mas não é serotoninérgica; agomelatina idem). Omitir/false quando o
  // fármaco não tem esse mecanismo.
  serotoninergico?: boolean;

  // Carga anticolinérgica clínica do fármaco (independente da classe) —
  // usado para alertar risco cumulativo (confusão/delirium em idosos,
  // retenção urinária, constipação, boca seca) em combinações no
  // Verificador de Interações, SEM depender de `classe === "Anticolinérgico"`
  // como proxy (ex.: tricíclicos e antipsicóticos sedativos têm carga
  // anticolinérgica relevante mesmo não sendo dessa classe).
  cargaAnticolinergica?: "Nenhuma" | "Baixa" | "Moderada" | "Alta";

  ganhoPeso: string;

  sedacao: string;

  sexual: string;

  qt: string;

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