import { diagnosticos } from "../data/diagnosticos";
import { medicamentos } from "../data/medicamentos";
import { dominiosPsicopatologicos } from "../data/psicopatologia";

// Remove silenciosamente referências que não resolvem a conteúdo real —
// são todos campos opcionais, então é mais seguro descartar uma
// referência quebrada do que rejeitar o caso inteiro por causa dela.
// Mesma lógica de checagem de lib/auditoria.ts, aplicada a um único caso
// em vez de todo o conteúdo estático. Genérico porque os formatos de caso
// gerados por IA (múltipla-escolha, resposta-livre) compartilham esses
// três campos. Extraído pra lib/ porque é usado tanto por
// app/api/gerar-caso (resposta-livre e a validação da chamada 1) quanto
// por app/api/gerar-caso-distratores (resultado final da chamada 2).
export function limparReferenciasInvalidas<
  T extends {
    diagnosticoId?: string;
    medicamentosRelacionados?: string[];
    achadosPsicopatologicos?: { dominioId: string; achadoId: string }[];
  },
>(caso: T): T {
  const diagIds = new Set(diagnosticos.map((d) => d.id));
  const medIds = new Set(medicamentos.map((m) => m.id));

  const diagnosticoId =
    caso.diagnosticoId && diagIds.has(caso.diagnosticoId) ? caso.diagnosticoId : undefined;

  const medicamentosRelacionados = caso.medicamentosRelacionados?.filter((id) =>
    medIds.has(id)
  );

  const achadosPsicopatologicos = caso.achadosPsicopatologicos?.filter((ref) => {
    const dominio = dominiosPsicopatologicos.find((d) => d.id === ref.dominioId);
    return Boolean(dominio?.achados.some((a) => a.id === ref.achadoId));
  });

  return {
    ...caso,
    diagnosticoId,
    medicamentosRelacionados,
    achadosPsicopatologicos,
  } as T;
}
