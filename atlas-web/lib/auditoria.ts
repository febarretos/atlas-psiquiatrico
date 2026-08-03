import { casosClinicos } from "../data/casos-clinicos";
import { diagnosticos } from "../data/diagnosticos";
import { medicamentos } from "../data/medicamentos";
import { escalas } from "../data/escalas";
import { sintomas } from "../data/sintomas";
import { dominiosPsicopatologicos } from "../data/psicopatologia";
import { condicoesAlvo } from "./condicoesAlvo";
import { paresAntagonicos } from "./paresAntagonicos";

export interface ProblemaIntegridade {
  categoria: string;
  descricao: string;
}

// Checagem de referências cruzadas entre módulos de conteúdo — os ids
// citados por um módulo (ex.: medicamentosRelacionados de um caso
// clínico) realmente existem no módulo referenciado. Roda como parte do
// app (server component em app/auditoria), não como `node --test`: o
// grafo de imports transitivos de data/ é grande demais para resolver
// sem extensão explícita fora do bundler do Next.js (ver
// lib/assistenteScoring.ts para o caso mais simples onde isso valeu a
// pena).
export function auditarIntegridade(): ProblemaIntegridade[] {
  const problemas: ProblemaIntegridade[] = [];

  const medIds = new Set(medicamentos.map((m) => m.id));
  const diagIds = new Set(diagnosticos.map((d) => d.id));
  const sintomaIds = new Set(sintomas.map((s) => s.id));
  const alvoIds = new Set(condicoesAlvo.map((c) => c.id));

  for (const caso of casosClinicos) {
    if (caso.diagnosticoId && !diagIds.has(caso.diagnosticoId)) {
      problemas.push({
        categoria: "Casos Clínicos",
        descricao: `"${caso.titulo}" (${caso.id}) referencia diagnosticoId "${caso.diagnosticoId}", que não existe em data/diagnosticos.`,
      });
    }

    for (const medId of caso.medicamentosRelacionados ?? []) {
      if (!medIds.has(medId)) {
        problemas.push({
          categoria: "Casos Clínicos",
          descricao: `"${caso.titulo}" (${caso.id}) referencia medicamento "${medId}", que não existe em data/medicamentos.`,
        });
      }
    }

    for (const achado of caso.achadosPsicopatologicos ?? []) {
      const dominio = dominiosPsicopatologicos.find((d) => d.id === achado.dominioId);

      if (!dominio) {
        problemas.push({
          categoria: "Casos Clínicos",
          descricao: `"${caso.titulo}" (${caso.id}) referencia o domínio de psicopatologia "${achado.dominioId}", que não existe.`,
        });
      } else if (!dominio.achados.some((a) => a.id === achado.achadoId)) {
        problemas.push({
          categoria: "Casos Clínicos",
          descricao: `"${caso.titulo}" (${caso.id}) referencia o achado "${achado.achadoId}" dentro do domínio "${achado.dominioId}", que não existe nesse domínio.`,
        });
      }
    }
  }

  for (const d of diagnosticos) {
    for (const chave of d.sintomasChave ?? []) {
      if (!sintomaIds.has(chave.id)) {
        problemas.push({
          categoria: "Diagnósticos",
          descricao: `"${d.nome}" (${d.id}) referencia o sintoma-chave "${chave.id}", que não existe em data/sintomas.`,
        });
      }
    }

    for (const medId of d.medicamentosPrimeiraLinha ?? []) {
      if (!medIds.has(medId)) {
        problemas.push({
          categoria: "Diagnósticos",
          descricao: `"${d.nome}" (${d.id}) referencia o medicamento de primeira linha "${medId}", que não existe em data/medicamentos.`,
        });
      }
    }
  }

  for (const e of escalas) {
    const faixas = [...e.faixas].sort((a, b) => a.min - b.min);
    if (faixas.length === 0) continue;

    if (faixas[0].min !== 0) {
      problemas.push({
        categoria: "Escalas",
        descricao: `"${e.nome}" (${e.id}): a primeira faixa começa em ${faixas[0].min}, não em 0.`,
      });
    }

    for (let i = 1; i < faixas.length; i++) {
      const anterior = faixas[i - 1];
      const atual = faixas[i];

      if (atual.min !== anterior.max + 1) {
        problemas.push({
          categoria: "Escalas",
          descricao: `"${e.nome}" (${e.id}): lacuna ou sobreposição entre as faixas "${anterior.label}" (até ${anterior.max}) e "${atual.label}" (a partir de ${atual.min}).`,
        });
      }
    }
  }

  for (const p of paresAntagonicos) {
    if (!alvoIds.has(p.idA)) {
      problemas.push({
        categoria: "Assistente — Pares Antagônicos",
        descricao: `Par antagônico referencia a condição-alvo "${p.idA}", que não existe em lib/condicoesAlvo.`,
      });
    }

    if (!alvoIds.has(p.idB)) {
      problemas.push({
        categoria: "Assistente — Pares Antagônicos",
        descricao: `Par antagônico referencia a condição-alvo "${p.idB}", que não existe em lib/condicoesAlvo.`,
      });
    }
  }

  return problemas;
}
