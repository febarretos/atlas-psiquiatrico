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
  referencias?: string[];
}
