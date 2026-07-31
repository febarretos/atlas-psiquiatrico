// Persistência local (somente neste navegador, sem envio a servidor algum)
// do histórico de aplicações de escalas, para permitir acompanhamento da
// evolução de um paciente ao longo de consultas (measurement-based care).

const CHAVE_ARMAZENAMENTO = "atlas-psiquiatrico:historico-escalas";

export interface EntradaHistorico {
  id: string;
  escalaId: string;
  pacienteLabel: string;
  dataISO: string;
  pontuacao: number;
  faixaLabel: string;
  faixaCor: "blue" | "green" | "yellow" | "red" | "gray";
}

function carregarTudo(): EntradaHistorico[] {
  if (typeof window === "undefined") return [];

  try {
    const bruto = window.localStorage.getItem(CHAVE_ARMAZENAMENTO);
    if (!bruto) return [];

    const dados = JSON.parse(bruto);
    return Array.isArray(dados) ? dados : [];
  } catch {
    return [];
  }
}

function salvarTudo(entradas: EntradaHistorico[]) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(entradas));
}

export function obterHistoricoDaEscala(escalaId: string): EntradaHistorico[] {
  return carregarTudo()
    .filter((e) => e.escalaId === escalaId)
    .sort((a, b) => a.dataISO.localeCompare(b.dataISO));
}

export function obterPacientes(escalaId: string): string[] {
  const nomes = obterHistoricoDaEscala(escalaId).map((e) => e.pacienteLabel);
  return Array.from(new Set(nomes)).sort((a, b) => a.localeCompare(b));
}

export function salvarEntrada(
  entrada: Omit<EntradaHistorico, "id" | "dataISO"> & { dataISO?: string }
): EntradaHistorico {
  const nova: EntradaHistorico = {
    id: `${entrada.escalaId}-${entrada.pacienteLabel}-${window.crypto.randomUUID()}`,
    dataISO: entrada.dataISO ?? new Date().toISOString(),
    ...entrada,
  };

  const todas = carregarTudo();
  salvarTudo([...todas, nova]);

  return nova;
}

export function removerEntrada(id: string) {
  salvarTudo(carregarTudo().filter((e) => e.id !== id));
}

export function removerPaciente(escalaId: string, pacienteLabel: string) {
  salvarTudo(
    carregarTudo().filter(
      (e) => !(e.escalaId === escalaId && e.pacienteLabel === pacienteLabel)
    )
  );
}
