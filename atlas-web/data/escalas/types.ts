export interface EscalaOpcao {
  label: string;
  valor: number;
}

export interface EscalaItem {
  id: string;
  texto: string;
  opcoes: EscalaOpcao[];
}

export interface EscalaFaixa {
  min: number;
  max: number;
  label: string;
  cor: "blue" | "green" | "yellow" | "red" | "gray";
  descricao?: string;
}

// Faixas de escolaridade cujo `ajuste` (pontos, pode ser fracionário e
// negativo) é somado à pontuação bruta ANTES de comparar contra `faixas` —
// mecanismo genérico o bastante para representar tanto uma correção aditiva
// simples (MoCA: +1 ponto para <=12 anos) quanto um deslocamento do ponto de
// corte por faixa de escolaridade (MEEM: cada faixa de Brucki et al. 2003 vira
// o ajuste que reancora aquele corte no início da faixa "sem indicativo" já
// cadastrada em `faixas`, sem duplicar o conjunto inteiro de faixas por
// escolaridade).
export interface FaixaEscolaridade {
  anosMin: number;
  anosMax: number; // usar um valor alto (ex.: 99) para "sem limite superior"
  rotulo: string;
  ajuste: number;
}

export interface Escala {
  id: string;
  nome: string;
  sigla: string;
  categoria: string; // ex: "Depressão", "Ansiedade", "Mania", "Uso de Substâncias"
  descricao: string;
  instrucoes: string; // texto orientando como responder (ex: "nas últimas 2 semanas")
  itens: EscalaItem[];
  faixas: EscalaFaixa[];
  // "soma" (padrão): pontuação = soma dos valores de todos os itens.
  // "maiorItemPositivo": pontuação = maior valor entre os itens com resposta positiva
  // (valor > 0) — usado em escalas hierárquicas de gravidade crescente, como o C-SSRS,
  // onde somar os níveis distorceria o risco (ex: 3 itens leves não equivalem a 1 item grave).
  modoDePontuacao?: "soma" | "maiorItemPositivo";
  notaInterpretacao?: string; // observações adicionais sobre a interpretação (ex: critérios extras)
  // Se presente, EscalaForm pede os anos de escolaridade antes de calcular a
  // faixa (pontuação bruta continua exibida sem alteração) — necessário em
  // escalas cujo ponto de corte é documentadamente dependente de
  // escolaridade (MEEM, MoCA), para não exibir uma faixa de risco calculada
  // sobre um corte que não se aplica ao paciente.
  ajusteEscolaridade?: FaixaEscolaridade[];
  referencias?: string[];
}
