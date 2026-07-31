export interface Diagnostico {
  id: string;

  nome: string;

  categoria: string;

  cid11?: string;

  cid10?: string;

  descricao: string;

  criteriosDiagnosticos: string[];

  especificadores?: string[];

  duracaoMinima?: string;

  prevalencia?: string;

  cursoEPrognostico?: string;

  diagnosticoDiferencial: string[];

  comorbidadesComuns?: string[];

  tratamentoPrimeiraLinha: string[];

  // Vínculos curados manualmente (não derivados por busca textual) usados
  // pelo Assistente de Avaliação (sintomas -> diagnósticos -> medicamentos).
  //
  // sintomasChave: subconjunto de ids de data/sintomas/index.ts associados a
  // este diagnóstico, cada um com um peso 1-3 conforme quão central/
  // específico o sintoma é para ele (3 = critério nuclear/quase patognomônico,
  // 1 = sintoma associado, mas pouco discriminativo, presente em vários
  // diagnósticos).
  sintomasChave?: { id: string; peso: 1 | 2 | 3 }[];

  // medicamentosPrimeiraLinha: ids de data/medicamentos/index.ts (Medicamento.id)
  // com evidência/indicação de primeira ou segunda linha para este
  // diagnóstico. Omitir quando o tratamento de primeira linha for
  // predominantemente não farmacológico (ex: Transtorno de Personalidade
  // Borderline) — nesse caso o Assistente deve exibir apenas o texto de
  // `tratamentoPrimeiraLinha`, sem sugerir medicamentos.
  medicamentosPrimeiraLinha?: string[];

  referencias?: string[];
}
