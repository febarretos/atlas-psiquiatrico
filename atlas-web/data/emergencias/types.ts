export interface Emergencia {
  id: string;

  nome: string;

  categoria: string; // ex: "Induzida por medicamento", "Abstinência", "Síndrome psicomotora"

  gravidade: "alta" | "muito alta";

  descricao: string;

  quadroClinico: string[];

  criteriosDiagnosticos?: string[];

  causasComuns?: string[];

  condutaImediata: string[];

  // Ids de data/medicamentos citados nominalmente na condutaImediata como
  // tratamento farmacológico específico desta emergência (antídoto ou
  // primeira linha) — usado pra renderizar badges linkáveis pra ficha
  // completa do fármaco. Só populado quando o fármaco é citado pelo nome
  // no texto curado acima, nunca inferido.
  medicamentosResgate?: string[];

  examesComplementares?: string[];

  diagnosticoDiferencial?: string[];

  referencias?: string[];
}
