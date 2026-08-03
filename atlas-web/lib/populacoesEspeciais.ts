// Mapas compartilhados de cor/rótulo para os campos categóricos de
// populações especiais (gravidez/lactação) e de carga anticolinérgica —
// usados tanto na página individual do medicamento quanto na tabela
// comparativa, para manter a mesma leitura visual nos dois lugares.

export const corGravidez = {
  preferencial: "green" as const,
  cautela: "yellow" as const,
  evitar: "red" as const,
};

export const rotuloGravidez = {
  preferencial: "Opção preferencial",
  cautela: "Usar com cautela",
  evitar: "Evitar quando possível",
};

export const corLactacao = {
  compativel: "green" as const,
  cautela: "yellow" as const,
  evitar: "red" as const,
};

export const rotuloLactacao = {
  compativel: "Geralmente compatível",
  cautela: "Usar com cautela",
  evitar: "Geralmente evitar",
};

export const corCargaAnticolinergica = {
  Nenhuma: "gray" as const,
  Baixa: "green" as const,
  Moderada: "yellow" as const,
  Alta: "red" as const,
};
