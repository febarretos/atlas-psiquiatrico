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

// Delta aditivo (nunca valor absoluto) exceto nivelConsciencia, que é
// override — ver o comentário de topo em data/simulador-emergencia/types.ts.
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
  nivelConsciencia: nivelConscienciaSchema.optional(),
  agitacaoPsicomotora: z.number().optional(),
  rigidezMuscular: z.number().optional(),
  riscoIminente: z.number().optional(),
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
});

// Além da forma (garantida também pelo responseSchema do Gemini, ver
// lib/simuladorEmergenciaGeradoJsonSchema.ts), valida invariantes do
// motor que tornariam o caso injogável: precisa existir pelo menos uma
// ação que reduza riscoIminente (senão é impossível vencer), pelo menos
// uma ação com riscoSeIncorreta (senão a mecânica de erro plausível não
// é usada), e riscoIminente inicial não pode já estar nos extremos
// (óbito/vitória instantâneos, sem o jogador chegar a agir).
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
      estabilizacao: efeitoSinaisVitaisSchema,
      obito: efeitoSinaisVitaisSchema,
      piora: efeitoSinaisVitaisSchema,
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
    });
  });

export type CasoSimuladorEmergenciaGerado = z.infer<typeof casoSimuladorEmergenciaGeradoSchema>;
