import { z } from "zod";

// Espelha data/simulador/types.ts. `inspiracaoExterna` é deliberadamente
// omitido do que o Gemini gera — o script já sabe qual artigo usou pra
// inspirar a narrativa (foi ele quem buscou) e anexa isso depois de
// validar, em vez de pedir pro modelo repetir um dado que já temos.
export const opcaoSimuladorSchema = z.object({
  texto: z.string().min(1),
  consequencia: z.string().min(1),
  medicamentoId: z.string().min(1).optional(),
  proximoNoId: z.string().min(1),
  qualidadeDecisao: z.enum(["ideal", "aceitavel", "problematica"]),
});

export const noSimuladorSchema = z.object({
  id: z.string().min(1),
  turno: z.enum(["entrevista", "exames", "conduta", "evolucao", "desfecho"]),
  narrativa: z.string().min(1),
  opcoes: z.array(opcaoSimuladorSchema),
});

// A árvore inteira vem de uma chamada só — validações que não dá pra
// expressar em JSON Schema (responseSchema do Gemini, ver
// lib/simuladorGeradoJsonSchema.ts) ficam aqui: todo proximoNoId precisa
// apontar pra um nó que existe, todo nó precisa ser alcançável a partir
// do nó inicial, nó "desfecho" é terminal (sem opções), e todo nó que
// não é desfecho tem pelo menos uma opção (senão o jogo trava).
export const casoSimuladorGeradoSchema = z
  .object({
    id: z.string().min(1),
    tituloAnedotico: z.string().min(1),
    diagnosticoRealId: z.string().min(1),
    nos: z.array(noSimuladorSchema).min(3),
    noInicialId: z.string().min(1),
  })
  .superRefine((caso, ctx) => {
    const idsExistentes = new Set(caso.nos.map((n) => n.id));

    const idsDuplicados = caso.nos
      .map((n) => n.id)
      .filter((id, i, arr) => arr.indexOf(id) !== i);
    if (idsDuplicados.length > 0) {
      ctx.addIssue({
        code: "custom",
        message: `Ids de nó duplicados: ${[...new Set(idsDuplicados)].join(", ")}`,
      });
    }

    if (!idsExistentes.has(caso.noInicialId)) {
      ctx.addIssue({
        code: "custom",
        message: `noInicialId "${caso.noInicialId}" não corresponde a nenhum nó`,
      });
    }

    for (const no of caso.nos) {
      if (no.turno === "desfecho" && no.opcoes.length > 0) {
        ctx.addIssue({
          code: "custom",
          message: `Nó "${no.id}" é turno "desfecho" mas tem opções — desfecho deve ser terminal`,
        });
      }

      if (no.turno !== "desfecho" && no.opcoes.length === 0) {
        ctx.addIssue({
          code: "custom",
          message: `Nó "${no.id}" (turno "${no.turno}") não tem nenhuma opção — o jogo travaria aqui`,
        });
      }

      for (const opcao of no.opcoes) {
        if (!idsExistentes.has(opcao.proximoNoId)) {
          ctx.addIssue({
            code: "custom",
            message: `Nó "${no.id}" tem opção apontando pra proximoNoId inexistente: "${opcao.proximoNoId}"`,
          });
        }
      }
    }

    // Alcançabilidade a partir do nó inicial (busca em profundidade).
    const porId = new Map(caso.nos.map((n) => [n.id, n]));
    const visitados = new Set<string>();
    const pilha = idsExistentes.has(caso.noInicialId) ? [caso.noInicialId] : [];

    while (pilha.length > 0) {
      const atualId = pilha.pop()!;
      if (visitados.has(atualId)) continue;
      visitados.add(atualId);

      const atual = porId.get(atualId);
      for (const opcao of atual?.opcoes ?? []) {
        if (!visitados.has(opcao.proximoNoId)) {
          pilha.push(opcao.proximoNoId);
        }
      }
    }

    const inalcancaveis = caso.nos.filter((n) => !visitados.has(n.id));
    if (inalcancaveis.length > 0) {
      ctx.addIssue({
        code: "custom",
        message: `Nós inalcançáveis a partir de "${caso.noInicialId}": ${inalcancaveis.map((n) => n.id).join(", ")}`,
      });
    }

    const temDesfechoAlcancavel = caso.nos.some(
      (n) => n.turno === "desfecho" && visitados.has(n.id)
    );
    if (!temDesfechoAlcancavel) {
      ctx.addIssue({
        code: "custom",
        message: "Nenhum nó turno \"desfecho\" é alcançável a partir do nó inicial",
      });
    }
  });

export type CasoSimuladorGerado = z.infer<typeof casoSimuladorGeradoSchema>;
