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

  examesComplementares?: string[];

  diagnosticoDiferencial?: string[];

  referencias?: string[];
}
