import { Medicamento } from "../data/types";

export interface FiltrosPerfil {
  evitarGanhoPeso: boolean;
  evitarSedacao: boolean;
  evitarDisfuncaoSexual: boolean;
  evitarQt: boolean;
  gestante: boolean;
  lactante: boolean;
  evitarAjusteRenal: boolean;
}

export const filtrosPerfilIniciais: FiltrosPerfil = {
  evitarGanhoPeso: false,
  evitarSedacao: false,
  evitarDisfuncaoSexual: false,
  evitarQt: false,
  gestante: false,
  lactante: false,
  evitarAjusteRenal: false,
};

export const filtrosPerfilDisponiveis: { chave: keyof FiltrosPerfil; rotulo: string }[] = [
  { chave: "evitarGanhoPeso", rotulo: "Evitar ganho de peso" },
  { chave: "evitarSedacao", rotulo: "Evitar sedação" },
  { chave: "evitarDisfuncaoSexual", rotulo: "Evitar disfunção sexual" },
  { chave: "evitarQt", rotulo: "Evitar prolongamento de QT" },
  { chave: "gestante", rotulo: "Paciente gestante" },
  { chave: "lactante", rotulo: "Paciente lactante" },
  { chave: "evitarAjusteRenal", rotulo: "Insuficiência renal" },
];

export interface MedicamentoAvaliado {
  medicamento: Medicamento;
  pontos: number;
  positivos: string[];
  alertas: string[];
}

// Pontua um medicamento contra o perfil do paciente (filtros ativos) — usado
// para reordenar (não filtrar/remover) candidatos vindos de qualquer um dos
// modos de entrada do Assistente de Medicação (sintomas, condições-alvo ou
// escolha manual), já que o perfil do paciente é ortogonal a como o médico
// chegou à lista de candidatos.
export function avaliarMedicamento(m: Medicamento, f: FiltrosPerfil): MedicamentoAvaliado {
  const positivos: string[] = [];
  const alertas: string[] = [];
  let pontos = 0;

  const baixo = (v: string) => v === "Baixo" || v === "Baixa" || v === "Muito baixo" || v === "Muito baixa";
  const alto = (v: string) => v === "Alto" || v === "Alta" || v === "Muito alto" || v === "Muito alta";

  if (f.evitarGanhoPeso) {
    if (baixo(m.ganhoPeso)) { pontos++; positivos.push("Baixo ganho de peso"); }
    else if (alto(m.ganhoPeso)) { pontos--; alertas.push(`Ganho de peso: ${m.ganhoPeso.toLowerCase()}`); }
  }

  if (f.evitarSedacao) {
    if (baixo(m.sedacao)) { pontos++; positivos.push("Baixa sedação"); }
    else if (alto(m.sedacao)) { pontos--; alertas.push(`Sedação: ${m.sedacao.toLowerCase()}`); }
  }

  if (f.evitarDisfuncaoSexual) {
    if (baixo(m.sexual)) { pontos++; positivos.push("Baixo risco de disfunção sexual"); }
    else if (alto(m.sexual)) { pontos--; alertas.push(`Disfunção sexual: ${m.sexual.toLowerCase()}`); }
  }

  if (f.evitarQt) {
    if (baixo(m.qt)) { pontos++; positivos.push("Baixo risco de prolongamento de QT"); }
    else if (alto(m.qt)) { pontos--; alertas.push(`Prolongamento de QT: ${m.qt.toLowerCase()}`); }
  }

  if (f.gestante) {
    if (m.gravidezCategoria === "preferencial") { pontos++; positivos.push("Opção preferencial na gravidez"); }
    else if (m.gravidezCategoria === "evitar") { pontos -= 2; alertas.push("Evitar na gravidez quando possível"); }
    else if (m.gravidezCategoria === "cautela") { alertas.push("Usar com cautela na gravidez"); }
  }

  if (f.lactante) {
    if (m.lactacaoCategoria === "compativel") { pontos++; positivos.push("Geralmente compatível com lactação"); }
    else if (m.lactacaoCategoria === "evitar") { pontos -= 2; alertas.push("Geralmente evitar na lactação"); }
    else if (m.lactacaoCategoria === "cautela") { alertas.push("Usar com cautela na lactação"); }
  }

  if (f.evitarAjusteRenal) {
    if (m.ajusteRenalNecessario === false) { pontos++; positivos.push("Sem ajuste renal necessário"); }
    else if (m.ajusteRenalNecessario === true) { pontos--; alertas.push("Requer ajuste/cautela na insuficiência renal"); }
  }

  return { medicamento: m, pontos, positivos, alertas };
}
