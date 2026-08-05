import { z } from "zod";

const pressaoArterialSchema = z.object({
  sistolica: z.number(),
  diastolica: z.number(),
});

const nivelConscienciaSchema = z.enum(["alerta", "sonolento", "confuso", "torporoso", "coma"]);

const sinaisVitaisSchema = z.object({
  frequenciaCardiaca: z.number().min(0).max(300),
  pressaoArterial: pressaoArterialSchema,
  temperatura: z.number().min(25).max(45),
  saturacaoO2: z.number().min(0).max(100),
  nivelConsciencia: nivelConscienciaSchema,
  agitacaoPsicomotora: z.number().min(0).max(10),
  rigidezMuscular: z.number().min(0).max(10).optional(),
  riscoIminente: z.number().min(0).max(10),
});

// Delta aditivo (nunca valor absoluto) — usado em efeitoPorTurno/
// efeitoImediato/riscoSeIncorreta. NÃO tem nivelConsciencia: esse campo é
// sempre derivado pelo motor (calcularNivelConsciencia), nunca definido
// diretamente por uma ação — ver o comentário de topo em
// data/simulador-emergencia/types.ts.
const efeitoSinaisVitaisSchema = z.object({
  frequenciaCardiaca: z.number().optional(),
  pressaoArterial: z
    .object({
      sistolica: z.number().optional(),
      diastolica: z.number().optional(),
    })
    .optional(),
  temperatura: z.number().optional(),
  saturacaoO2: z.number().optional(),
  agitacaoPsicomotora: z.number().optional(),
  rigidezMuscular: z.number().optional(),
  riscoIminente: z.number().optional(),
});

// Mesma forma de efeitoSinaisVitaisSchema, MAS com nivelConsciencia —
// usado só em limiaresDesfecho, onde o campo é um valor-alvo comparado
// contra o nível já derivado (não um efeito sendo aplicado).
const limiarSinaisVitaisSchema = efeitoSinaisVitaisSchema.extend({
  nivelConsciencia: nivelConscienciaSchema.optional(),
});

const regraEvolucaoSchema = z.object({
  condicao: z.string().min(1),
  efeitoPorTurno: efeitoSinaisVitaisSchema,
});

const acaoDisponivelSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  categoria: z.enum(["medicacao", "exame", "suporte", "contencao", "comunicacao"]),
  medicamentoId: z.string().min(1).optional(),
  custoTempo: z.number().min(0),
  efeitoImediato: efeitoSinaisVitaisSchema,
  condicaoDeUso: z.string().min(1).optional(),
  riscoSeIncorreta: efeitoSinaisVitaisSchema.optional(),
  resultadoTexto: z.string().min(1).optional(),
  // Obrigatório (sem .optional()) — ver comentário em
  // data/simulador-emergencia/types.ts. Um caso que omite isso é
  // rejeitado na validação, não silenciosamente tratado como false.
  repetivel: z.boolean(),
});

// Campos numéricos "simples" de EfeitoSinaisVitais — pressaoArterial fica
// de fora por ser aninhado (tratado à parte na auditoria abaixo).
const CAMPOS_NUMERICOS_SIMPLES = [
  "frequenciaCardiaca",
  "temperatura",
  "saturacaoO2",
  "agitacaoPsicomotora",
  "rigidezMuscular",
  "riscoIminente",
] as const;

const CAMPO_LABEL: Record<(typeof CAMPOS_NUMERICOS_SIMPLES)[number] | "pressaoArterial.sistolica" | "pressaoArterial.diastolica", string> = {
  frequenciaCardiaca: "frequenciaCardiaca",
  temperatura: "temperatura",
  saturacaoO2: "saturacaoO2",
  agitacaoPsicomotora: "agitacaoPsicomotora",
  rigidezMuscular: "rigidezMuscular",
  riscoIminente: "riscoIminente",
  "pressaoArterial.sistolica": "pressaoArterial.sistolica",
  "pressaoArterial.diastolica": "pressaoArterial.diastolica",
};

// Além da forma (garantida também pelo responseSchema do Gemini, ver
// lib/simuladorEmergenciaGeradoJsonSchema.ts), valida invariantes do
// motor que tornariam o caso injogável: precisa existir pelo menos uma
// ação que reduza riscoIminente (senão é impossível vencer), pelo menos
// uma ação com riscoSeIncorreta (senão a mecânica de erro plausível não
// é usada), riscoIminente inicial não pode já estar nos extremos
// (óbito/vitória instantâneos, sem o jogador chegar a agir), e — a
// auditoria sistêmica descrita na Tarefa 2 — todo campo que a evolução
// natural piora sozinha precisa ter pelo menos uma ação que o melhore no
// sentido oposto, senão o campo fica preso numa mão única.
export const casoSimuladorEmergenciaGeradoSchema = z
  .object({
    id: z.string().min(1),
    emergenciaBaseId: z.string().min(1),
    nomeAnedotico: z.string().min(1),
    historiaClinica: z.string().min(1),
    sinaisVitaisIniciais: sinaisVitaisSchema,
    regrasDeEvolucaoNatural: z.array(regraEvolucaoSchema).min(1),
    acoesDisponiveis: z.array(acaoDisponivelSchema).min(3),
    turnosMaximos: z.number().int().min(1),
    limiaresDesfecho: z.object({
      estabilizacao: limiarSinaisVitaisSchema,
      obito: limiarSinaisVitaisSchema,
      piora: limiarSinaisVitaisSchema,
    }),
  })
  .superRefine((caso, ctx) => {
    const idsAcoes = caso.acoesDisponiveis.map((a) => a.id);
    const duplicados = idsAcoes.filter((id, i, arr) => arr.indexOf(id) !== i);
    if (duplicados.length > 0) {
      ctx.addIssue({
        code: "custom",
        message: `Ids de ação duplicados: ${[...new Set(duplicados)].join(", ")}`,
      });
    }

    const temAcaoQueReduzRisco = caso.acoesDisponiveis.some(
      (a) => (a.efeitoImediato.riscoIminente ?? 0) < 0
    );
    if (!temAcaoQueReduzRisco) {
      ctx.addIssue({
        code: "custom",
        message: "Nenhuma ação reduz riscoIminente — o caso seria impossível de vencer.",
      });
    }

    const temAcaoIncorreta = caso.acoesDisponiveis.some((a) => a.riscoSeIncorreta !== undefined);
    if (!temAcaoIncorreta) {
      ctx.addIssue({
        code: "custom",
        message: "Nenhuma ação tem riscoSeIncorreta definido — a mecânica de escolha errada fica sem uso.",
      });
    }

    if (caso.sinaisVitaisIniciais.riscoIminente >= 10) {
      ctx.addIssue({
        code: "custom",
        message: "riscoIminente inicial já é 10 — o jogo terminaria em óbito antes do jogador poder agir.",
      });
    }
    if (caso.sinaisVitaisIniciais.riscoIminente <= 0) {
      ctx.addIssue({
        code: "custom",
        message: "riscoIminente inicial já é 0 — o jogo terminaria em vitória antes do jogador poder agir.",
      });
    }

    caso.acoesDisponiveis.forEach((acao, index) => {
      const semEfeitoNosSinais = Object.keys(acao.efeitoImediato).length === 0;
      if (semEfeitoNosSinais && !acao.riscoSeIncorreta && !acao.resultadoTexto) {
        ctx.addIssue({
          code: "custom",
          message: `Ação "${acao.id}" não muda nenhum sinal vital e não tem resultadoTexto — o jogador não recebe nenhum feedback ao escolhê-la.`,
          path: ["acoesDisponiveis", index],
        });
      }

      // Bug real que já aconteceu: ação grátis (custoTempo 0, sem
      // evolução natural cobrando o tempo) marcada repetivel:true vira
      // clique infinito — sozinha resolve o caso. Nunca permitir a
      // combinação, pra essa classe de bug não voltar num caso futuro.
      if (acao.repetivel && acao.custoTempo === 0) {
        ctx.addIssue({
          code: "custom",
          message: `Ação "${acao.id}" é repetivel:true com custoTempo:0 — clique infinito sem custo de tempo nenhum. Ações grátis (custoTempo 0) precisam ser repetivel:false.`,
          path: ["acoesDisponiveis", index],
        });
      }
    });

    // Auditoria de magnitude (Tarefa 2): ações de suporte/comunicação
    // isoladas (não medicação, não investigação) não podem, somadas,
    // valer mais que ~40% do riscoIminente inicial — senão dá pra
    // "vencer" só com medidas de ambiente/conversa, sem nenhuma conduta
    // médica real. Cada ação de suporte/comunicação só entra nessa soma
    // uma vez (repetivel:false é exigido para essas categorias em
    // outro ponto da autoria, mas a soma aqui já assume uso único).
    const somaSuporteComunicacao = caso.acoesDisponiveis
      .filter((a) => a.categoria === "suporte" || a.categoria === "comunicacao")
      .reduce((soma, a) => soma + Math.min(0, a.efeitoImediato.riscoIminente ?? 0), 0);
    const limiteSuporte = -0.4 * caso.sinaisVitaisIniciais.riscoIminente;
    if (somaSuporteComunicacao < limiteSuporte) {
      ctx.addIssue({
        code: "custom",
        message: `Ações de suporte/comunicação somam ${somaSuporteComunicacao} de riscoIminente, mais que ~40% do risco inicial (${caso.sinaisVitaisIniciais.riscoIminente}) — dá pra estabilizar só com medidas de ambiente/conversa, sem nenhuma medicação ou investigação real. Reduza o efeito dessas ações ou mova parte do trabalho pra uma ação de medicacao.`,
      });
    }

    // Auditoria sistêmica (Tarefa 2): todo campo que a evolução natural
    // move sozinho precisa de pelo menos uma ação (efeitoImediato) que o
    // mova no sentido OPOSTO — senão o campo só piora (ou só melhora) e
    // fica preso numa mão única durante a partida inteira.
    for (const campo of CAMPOS_NUMERICOS_SIMPLES) {
      const direcaoNatural = caso.regrasDeEvolucaoNatural.reduce(
        (soma, regra) => soma + (regra.efeitoPorTurno[campo] ?? 0),
        0
      );
      if (direcaoNatural === 0) continue; // campo não é movido pela doença não tratada — não exigimos cobertura

      const temAcaoNoSentidoOposto = caso.acoesDisponiveis.some((acao) => {
        const valor = acao.efeitoImediato[campo];
        if (valor === undefined) return false;
        return direcaoNatural > 0 ? valor < 0 : valor > 0;
      });

      if (!temAcaoNoSentidoOposto) {
        ctx.addIssue({
          code: "custom",
          message: `Campo "${CAMPO_LABEL[campo]}" ${
            direcaoNatural > 0 ? "só piora" : "só melhora"
          } sozinho a cada turno (regrasDeEvolucaoNatural) e nenhuma ação o move no sentido oposto — fica preso numa mão única durante a partida.`,
        });
      }
    }

    (["sistolica", "diastolica"] as const).forEach((sub) => {
      const direcaoNatural = caso.regrasDeEvolucaoNatural.reduce(
        (soma, regra) => soma + (regra.efeitoPorTurno.pressaoArterial?.[sub] ?? 0),
        0
      );
      if (direcaoNatural === 0) return;

      const temAcaoNoSentidoOposto = caso.acoesDisponiveis.some((acao) => {
        const valor = acao.efeitoImediato.pressaoArterial?.[sub];
        if (valor === undefined) return false;
        return direcaoNatural > 0 ? valor < 0 : valor > 0;
      });

      if (!temAcaoNoSentidoOposto) {
        ctx.addIssue({
          code: "custom",
          message: `Campo "pressaoArterial.${sub}" ${
            direcaoNatural > 0 ? "só piora" : "só melhora"
          } sozinho a cada turno e nenhuma ação o move no sentido oposto — fica preso numa mão única durante a partida.`,
        });
      }
    });
  });

export type CasoSimuladorEmergenciaGerado = z.infer<typeof casoSimuladorEmergenciaGeradoSchema>;
