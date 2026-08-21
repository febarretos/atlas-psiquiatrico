// Ordem aproximada de frequência de uso em consultório psiquiátrico
// ambulatorial geral — instrumentos usados quase em toda consulta primeiro
// (risco de suicídio, depressão, ansiedade), seguidos dos usados para
// quadros/monitorizações mais específicas. Extraído de app/escalas/page.tsx
// pra lib/ só pra poder ser importado tanto pela página (client component)
// quanto por lib/auditoria.ts (checagem de integridade em teste) sem
// carregar JSX no runtime de teste.
export const ORDEM_USO = [
  "cssrs",
  "phq9",
  "gad7",
  "asrs6",
  "madrs",
  "ybocs",
  "mdq",
  "ymrs",
  "audit",
  "ciwa-ar",
  "meem",
  "moca",
  "pcl5",
  "epds",
  "isi",
  "msi-bpd",
  "barnes",
  "aims",
  "scoff",
  "aq10",
  "asrs18",
];
