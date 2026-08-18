// Normaliza texto para busca insensivel a acentos e caixa - "panico",
// "litio", "sindrome" precisam encontrar termos acentuados equivalentes.
// Usado pela paleta de busca global e pelo filtro da tabela de Medicamentos.
//
// Remove as marcas diacriticas combinantes (intervalo Unicode 0x0300-0x036F)
// deixadas por normalize("NFD") comparando codePointAt em vez de embutir o
// intervalo como literal no codigo-fonte, para nao depender da preservacao
// exata de bytes nao-ASCII neste arquivo.
const INICIO_DIACRITICOS = 0x0300;
const FIM_DIACRITICOS = 0x036f;

export function normalizarBusca(texto: string): string {
  const decomposto = texto.normalize("NFD");
  let resultado = "";

  for (const caractere of decomposto) {
    const codigo = caractere.codePointAt(0) ?? 0;
    if (codigo >= INICIO_DIACRITICOS && codigo <= FIM_DIACRITICOS) continue;
    resultado += caractere;
  }

  return resultado.toLowerCase();
}
