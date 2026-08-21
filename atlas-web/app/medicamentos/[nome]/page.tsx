import Link from "next/link";
import { medicamentos } from "../../../data/medicamentos";
import { diagnosticos } from "../../../data/diagnosticos";
import { fluxogramas } from "../../../data/fluxogramas";
import { casosSimuladorEmergencia } from "../../../data/simulador-emergencia";
import { casosClinicos } from "../../../data/casos-clinicos";
import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import BotaoCopiarProntuario from "../../../components/BotaoCopiarProntuario";
import BotaoFavoritar from "../../../components/BotaoFavoritar";
import BotaoImprimir from "../../../components/BotaoImprimir";
import EvidenciaStars from "../../../components/EvidenciaStars";
import InfoCard from "../../../components/InfoCard";
import Lista from "../../../components/Lista";
import Rating from "../../../components/Rating";
import VisitaTracker from "../../../components/VisitaTracker";
import {
  corCargaAnticolinergica,
  corGravidez,
  corLactacao,
} from "../../../lib/populacoesEspeciais";
import { normalizeEffectKey } from "../../../lib/effectScale";
import { gerarTextoMedicamento } from "../../../lib/gerarTextoProntuario";

interface Props {
  params: Promise<{
    nome: string;
  }>;
}

const ROTULO_GESTACAO_CURTO: Record<string, string> = {
  preferencial: "Preferencial",
  cautela: "Cautela",
  evitar: "Evitar",
};

const ROTULO_LACTACAO_CURTO: Record<string, string> = {
  compativel: "Compatível",
  cautela: "Cautela",
  evitar: "Evitar",
};

const EIXOS_PERFIL: { chave: keyof CAMPOS_PERFIL; rotulo: string }[] = [
  { chave: "ganhoPeso", rotulo: "Ganho de peso" },
  { chave: "sedacao", rotulo: "Sedação" },
  { chave: "sexual", rotulo: "Disfunção sexual" },
  { chave: "qt", rotulo: "Prolongamento do QT" },
  { chave: "hipotensaoOrtostatica", rotulo: "Hipotensão ortostática" },
  { chave: "sintomasDescontinuacao", rotulo: "Sintomas de descontinuação" },
  { chave: "riscoMetabolico", rotulo: "Risco metabólico" },
  { chave: "sintomasExtrapiramidais", rotulo: "Sintomas extrapiramidais" },
  { chave: "hiperprolactinemia", rotulo: "Hiperprolactinemia" },
  { chave: "riscoConvulsivo", rotulo: "Risco convulsivo" },
];

// Apenas para tipar EIXOS_PERFIL a partir dos campos reais do Medicamento.
type CAMPOS_PERFIL = Pick<
  import("../../../data/types").Medicamento,
  | "ganhoPeso"
  | "sedacao"
  | "sexual"
  | "qt"
  | "hipotensaoOrtostatica"
  | "sintomasDescontinuacao"
  | "riscoMetabolico"
  | "sintomasExtrapiramidais"
  | "hiperprolactinemia"
  | "riscoConvulsivo"
>;

export default async function Medicamento({
  params,
}: Props) {
  const { nome } = await params;

  const medicamento = medicamentos.find(
    (m) => m.nome === decodeURIComponent(nome)
  );

  if (!medicamento) {
    notFound();
  }

  const qtKey = normalizeEffectKey(medicamento.qt);
  const qtAlto = qtKey === "alto" || qtKey === "muitoalto";

  // Busca reversa: onde este medicamento é referenciado em outros
  // módulos, que hoje só linkam nessa direção (módulo -> medicamento).
  const diagnosticosQueUsam = diagnosticos.filter((d) =>
    d.medicamentosPrimeiraLinha?.includes(medicamento.id)
  );

  const fluxogramasQueUsam = fluxogramas.filter((f) =>
    f.nodes.some((n) => n.medicamentosRelacionados?.includes(medicamento.id))
  );

  const casosEmergenciaQueUsam = casosSimuladorEmergencia.filter((c) =>
    c.acoesDisponiveis.some((a) => a.medicamentoId === medicamento.id)
  );

  const casosClinicosQueUsam = casosClinicos.filter((c) =>
    c.nos.some((n) => n.opcoes.some((o) => o.medicamentoId === medicamento.id))
  );

  const temReferenciaCruzada =
    diagnosticosQueUsam.length > 0 ||
    fluxogramasQueUsam.length > 0 ||
    casosEmergenciaQueUsam.length > 0 ||
    casosClinicosQueUsam.length > 0;

  const primeiraPosologia = medicamento.posologias[0];
  const perfilPresente = EIXOS_PERFIL.filter((eixo) => medicamento[eixo.chave]);

  return (
    <div className="mx-auto max-w-[980px] animate-atlas-rise pt-[38px]">
      <VisitaTracker
        tipo="medicamento"
        id={medicamento.id}
        nome={medicamento.nome}
        href={`/medicamentos/${encodeURIComponent(medicamento.nome)}`}
      />

      <Link
        href="/medicamentos"
        className="mb-4 inline-block font-mono text-[10.5px] tracking-[0.1em] uppercase text-ink-3 hover:text-accent"
      >
        ← Medicamentos
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-6 border-b border-rule pb-[22px]">
        <div>
          <h1 className="font-serif text-[40px] font-medium leading-none tracking-tight text-ink sm:text-[48px]">
            {medicamento.nome}
          </h1>

          <div className="mt-3.5 flex flex-wrap gap-2">
            <Badge color="blue">{medicamento.classe}</Badge>
            {medicamento.subclasse && <Badge color="gray">{medicamento.subclasse}</Badge>}
          </div>

          {medicamento.nomeComercial && (
            <div className="mt-3.5 text-[13px] text-ink-3">
              {medicamento.nomeComercial.join(" · ")}
            </div>
          )}
        </div>

        <div className="flex flex-none flex-col gap-2">
          <BotaoCopiarProntuario texto={gerarTextoMedicamento(medicamento)} />
          <BotaoImprimir />
          <BotaoFavoritar
            tipo="medicamento"
            id={medicamento.id}
            nome={medicamento.nome}
            href={`/medicamentos/${encodeURIComponent(medicamento.nome)}`}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-rule bg-rule lg:grid-cols-4">
        <div className="bg-panel px-4 py-3.5">
          <div className="font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
            Meia-vida
          </div>
          <div className="mt-1 font-mono text-[15px] text-ink">{medicamento.meiaVida ?? "—"}</div>
        </div>
        <div className="bg-panel px-4 py-3.5">
          <div className="font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
            Dose usual
          </div>
          <div className="mt-1 font-mono text-[15px] text-ink">
            {primeiraPosologia?.doseUsual ?? "—"}
          </div>
        </div>
        <div className="bg-panel px-4 py-3.5">
          <div className="font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
            Dose máxima
          </div>
          <div className="mt-1 font-mono text-[15px] text-ink">
            {primeiraPosologia?.doseMaxima ?? "—"}
          </div>
        </div>
        <div className="bg-panel px-4 py-3.5">
          <div className="font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
            Carga anticolinérgica
          </div>
          <div className="mt-1 font-mono text-[15px] text-ink">
            {medicamento.cargaAnticolinergica ?? "—"}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <InfoCard titulo="Mecanismo de ação" valor={medicamento.mecanismo} />
        <InfoCard titulo="Metabolização" valor={medicamento.metabolizacao ?? "—"} />
      </div>

      <div className="mt-9">
        <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">Posologia</h2>

        {/* Tabela densa — telas largas o bastante pra 5 colunas com conforto */}
        <div className="hidden overflow-hidden rounded-xl border border-rule bg-panel tab:block">
          <div className="grid grid-cols-[2.2fr_1fr_1.1fr_1fr_1.1fr] gap-3.5 border-b border-rule bg-paper px-[18px] py-2.5 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-3">
            <div>Indicação</div>
            <div>Inicial</div>
            <div>Usual</div>
            <div>Máxima</div>
            <div>Evidência</div>
          </div>

          {medicamento.posologias.map((p) => (
            <div
              key={p.indicacao}
              className="grid grid-cols-[2.2fr_1fr_1.1fr_1fr_1.1fr] items-center gap-3.5 border-b border-rule-soft px-[18px] py-3 last:border-b-0"
            >
              <div className="text-[13.5px] text-ink">{p.indicacao}</div>
              <div className="font-mono text-[12.5px] text-ink-2">{p.doseInicial}</div>
              <div className="font-mono text-[12.5px] text-ink">{p.doseUsual}</div>
              <div className="font-mono text-[12.5px] text-ink-2">{p.doseMaxima}</div>
              <div>
                {p.nivelEvidencia ? (
                  <EvidenciaStars nivel={p.nivelEvidencia} />
                ) : (
                  <span className="text-ink-4">—</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Cartões empilhados — telas estreitas, uma indicação por bloco */}
        <div className="flex flex-col gap-2.5 tab:hidden">
          {medicamento.posologias.map((p) => (
            <div
              key={p.indicacao}
              className="rounded-lg border border-rule bg-panel p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-[13.5px] font-medium text-ink">{p.indicacao}</div>
                {p.nivelEvidencia ? (
                  <EvidenciaStars nivel={p.nivelEvidencia} />
                ) : (
                  <span className="text-ink-4">—</span>
                )}
              </div>
              <div className="mt-2.5 grid grid-cols-3 gap-2 font-mono text-[12px]">
                <div>
                  <div className="text-[9.5px] uppercase tracking-wider text-ink-4">Inicial</div>
                  <div className="mt-0.5 text-ink-2">{p.doseInicial}</div>
                </div>
                <div>
                  <div className="text-[9.5px] uppercase tracking-wider text-ink-4">Usual</div>
                  <div className="mt-0.5 text-ink">{p.doseUsual}</div>
                </div>
                <div>
                  <div className="text-[9.5px] uppercase tracking-wider text-ink-4">Máxima</div>
                  <div className="mt-0.5 text-ink-2">{p.doseMaxima}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-2.5 text-[11.5px] text-ink-4">
          Evidência para a indicação específica: 5 = primeira linha com forte recomendação; 1 =
          off-label com evidência restrita.
        </p>
      </div>

      <div className="mt-9 grid gap-7 lg:grid-cols-2">
        <div>
          <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">Perfil de efeitos</h2>
          <div className="rounded-xl border border-rule bg-panel px-[18px]">
            {perfilPresente.map((eixo) => (
              <div
                key={eixo.chave}
                className="flex items-center justify-between gap-3.5 border-b border-rule-soft py-[11px] last:border-b-0"
              >
                <span className="text-[13.5px] text-ink-2">{eixo.rotulo}</span>
                <Rating value={medicamento[eixo.chave] as string} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">Populações especiais</h2>
          <div className="flex flex-col gap-2.5">
            <div className="rounded-xl border border-rule bg-panel px-[18px] py-3.5">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                  Gravidez
                </span>
                {medicamento.gravidezCategoria && (
                  <Badge color={corGravidez[medicamento.gravidezCategoria]}>
                    {ROTULO_GESTACAO_CURTO[medicamento.gravidezCategoria]}
                  </Badge>
                )}
              </div>
              <div className="mt-1.5 text-[13px] text-ink-2">{medicamento.gravidez}</div>
            </div>

            <div className="rounded-xl border border-rule bg-panel px-[18px] py-3.5">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                  Lactação
                </span>
                {medicamento.lactacaoCategoria && (
                  <Badge color={corLactacao[medicamento.lactacaoCategoria]}>
                    {ROTULO_LACTACAO_CURTO[medicamento.lactacaoCategoria]}
                  </Badge>
                )}
              </div>
              <div className="mt-1.5 text-[13px] text-ink-2">{medicamento.lactacao}</div>
            </div>

            <div className="rounded-xl border border-rule bg-panel px-[18px] py-3.5">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                  Insuficiência renal
                </span>
                {medicamento.ajusteRenalNecessario !== undefined && (
                  <Badge color={medicamento.ajusteRenalNecessario ? "yellow" : "green"}>
                    {medicamento.ajusteRenalNecessario ? "Requer ajuste" : "Sem ajuste"}
                  </Badge>
                )}
              </div>
              <div className="mt-1.5 text-[13px] text-ink-2">{medicamento.renal}</div>
            </div>

            <div className="rounded-xl border border-rule bg-panel px-[18px] py-3.5">
              <div className="font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                Insuficiência hepática
              </div>
              <div className="mt-1.5 text-[13px] text-ink-2">{medicamento.hepatica}</div>
            </div>
          </div>
        </div>
      </div>

      {medicamento.perolasClinicas && medicamento.perolasClinicas.length > 0 && (
        <div className="mt-10 border-t border-rule pt-6">
          <div className="flex items-baseline gap-3">
            <h2 className="font-serif text-[26px] font-medium text-ink">Pérolas clínicas</h2>
            <span className="font-mono text-[10.5px] text-ink-4">uso rotineiro</span>
          </div>
          <div className="mt-4.5 flex flex-col gap-4">
            {medicamento.perolasClinicas.map((texto, i) => (
              <div key={texto} className="flex gap-4">
                <span className="flex-none pt-[5px] font-mono text-[11px] text-ink-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="max-w-[74ch] font-serif text-[17px] leading-[1.55] text-[#2A2D31]">
                  {texto}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 border-t border-rule pt-6">
        <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">Uso clínico</h2>
        <div className="rounded-xl border border-rule bg-panel p-6">
          <div className="mb-1.5 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
            Indicações
          </div>
          <div className="flex flex-wrap gap-1.5">
            {medicamento.indicacoes.map((i) => (
              <Badge key={i} color="blue">{i}</Badge>
            ))}
          </div>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <div className="mb-2 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                Vantagens
              </div>
              <Lista itens={medicamento.vantagens} />
            </div>
            <div>
              <div className="mb-2 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                Desvantagens
              </div>
              <Lista itens={medicamento.desvantagens} />
            </div>
          </div>

          {medicamento.efeitosAdversos && (
            <div className="mt-5">
              <div className="mb-2 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                Efeitos adversos mais comuns
              </div>
              <Lista itens={medicamento.efeitosAdversos} />
            </div>
          )}
        </div>
      </div>

      {(medicamento.serotoninergico !== undefined || medicamento.cargaAnticolinergica) && (
        <div className="mt-10 border-t border-rule pt-6">
          <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">
            Atenção estrutural em combinações
          </h2>
          <div className="rounded-xl border border-rule bg-panel p-6">
            <div className="flex flex-wrap gap-2">
              {medicamento.serotoninergico !== undefined && (
                <Badge color={medicamento.serotoninergico ? "yellow" : "gray"}>
                  {medicamento.serotoninergico ? "Serotoninérgico" : "Não serotoninérgico"}
                </Badge>
              )}
              {medicamento.cargaAnticolinergica && (
                <Badge color={corCargaAnticolinergica[medicamento.cargaAnticolinergica]}>
                  Carga anticolinérgica: {medicamento.cargaAnticolinergica}
                </Badge>
              )}
            </div>

            <p className="mt-3.5 text-[12px] leading-[1.6] text-ink-4">
              Atributos factuais e estáticos do fármaco — não são uma checagem automática de
              interações. Ao associar a outros medicamentos, verificar interações em fonte
              especializada (bula, Micromedex, Stockley&apos;s, UpToDate).
            </p>

            {(medicamento.serotoninergico || qtAlto) && (
              <div className="mt-3.5 flex flex-wrap gap-4">
                {medicamento.serotoninergico && (
                  <Link
                    href="/emergencias/sindrome-serotoninergica"
                    className="text-[13px] font-medium text-accent hover:text-accent-hover"
                  >
                    Ver: Síndrome Serotoninérgica →
                  </Link>
                )}
                {qtAlto && (
                  <Link
                    href="/emergencias/torsades-de-pointes"
                    className="text-[13px] font-medium text-accent hover:text-accent-hover"
                  >
                    Ver: Torsades de Pointes / Prolongamento do QT →
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {(medicamento.interacoes || medicamento.referencias) && (
        <div className="mt-10 grid gap-8 border-t border-rule pt-6 lg:grid-cols-[1.3fr_1fr]">
          {medicamento.interacoes && (
            <div>
              <h2 className="mb-3 font-serif text-[22px] font-medium text-ink">
                Interações relevantes
              </h2>
              <div className="flex flex-col gap-2.5">
                {medicamento.interacoes.map((i) => (
                  <div key={i} className="border-l-2 border-rule-soft pl-3.5 text-[13.5px] text-ink-2">
                    {i}
                  </div>
                ))}
              </div>
              <p className="mt-4 max-w-[68ch] text-[12px] text-ink-4">
                Atributos factuais do fármaco — não constituem checagem automática de interações.
                Verificar em fonte especializada (bula, Micromedex, Stockley&apos;s, UpToDate).
              </p>
            </div>
          )}

          {medicamento.referencias && (
            <div>
              <h2 className="mb-3 font-serif text-[22px] font-medium text-ink">Referências</h2>
              <div className="flex flex-col">
                {medicamento.referencias.map((r) => (
                  <div key={r} className="border-b border-rule-soft py-2 text-[13px] text-ink-2">
                    {r}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {temReferenciaCruzada && (
        <div className="mt-10 border-t border-rule pt-6">
          <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">
            Onde este medicamento aparece
          </h2>
          <div className="grid gap-6 rounded-xl border border-rule bg-panel p-6 md:grid-cols-2">
            {diagnosticosQueUsam.length > 0 && (
              <div>
                <h3 className="mb-2.5 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                  Primeira linha para
                </h3>
                <div className="flex flex-wrap gap-2">
                  {diagnosticosQueUsam.map((d) => (
                    <Link key={d.id} href={`/diagnosticos/${d.id}`}>
                      <Badge color="blue">{d.nome}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {fluxogramasQueUsam.length > 0 && (
              <div>
                <h3 className="mb-2.5 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                  Usado nestes fluxogramas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {fluxogramasQueUsam.map((f) => (
                    <Link key={f.id} href={`/fluxogramas/${f.id}`}>
                      <Badge color="green">{f.titulo}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {casosEmergenciaQueUsam.length > 0 && (
              <div>
                <h3 className="mb-2.5 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                  Aparece no Simulador de Emergência
                </h3>
                <div className="flex flex-wrap gap-2">
                  {casosEmergenciaQueUsam.map((c) => (
                    <Link key={c.id} href={`/simulador-emergencia/${c.id}`}>
                      <Badge color="yellow">{c.nomeAnedotico}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {casosClinicosQueUsam.length > 0 && (
              <div>
                <h3 className="mb-2.5 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                  Aparece em Casos Clínicos
                </h3>
                <div className="flex flex-wrap gap-2">
                  {casosClinicosQueUsam.map((c) => (
                    <Link key={c.id} href={`/casos-clinicos/${c.id}`}>
                      <Badge color="gray">{c.titulo}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
