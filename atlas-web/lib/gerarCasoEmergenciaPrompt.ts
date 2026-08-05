import type { Emergencia } from "../data/emergencias/types";
import type { Medicamento } from "../data/types";

// Monta o prompt único que pede o CasoSimuladorEmergencia inteiro numa
// chamada só (sinais vitais iniciais, regras de evolução, ações,
// limiares de desfecho) — não há segunda chamada, tudo precisa sair
// coerente já na primeira resposta, validado por
// lib/simuladorEmergenciaGeradoSchema.ts.
export function montarPromptEmergencia(
  emergencia: Emergencia,
  medicamentosRelevantes: Medicamento[]
): string {
  const emergenciaJson = JSON.stringify(emergencia, null, 2);
  const medicamentosJson = JSON.stringify(medicamentosRelevantes, null, 2);
  const idsMedicamentosValidos = medicamentosRelevantes.map((m) => `"${m.id}"`).join(", ");

  return `Você é um psiquiatra experiente configurando um caso do "Simulador de Emergência Psiquiátrica" do Atlas Psiquiátrico — um jogo de tensão em tempo real onde sinais vitais evoluem por regras determinísticas, sem nenhuma IA em tempo real durante a partida. Você está configurando o cenário UMA VEZ, offline; o motor do jogo (código, não IA) é quem aplica suas regras durante a partida de verdade.

Sua resposta será validada automaticamente contra um schema JSON e contra invariantes do motor (precisa existir pelo menos uma ação que reduza o risco, riscoIminente inicial não pode já estar em 0 ou 10). Respeite os tipos e a estrutura, mas o que este texto pede é o que o schema sozinho não consegue garantir: fisiologia exata e pressão de tempo genuína.

## Emergência-base deste caso (objeto completo — fisiopatologia real)

${emergenciaJson}

## Medicamentos relevantes (objetos completos — ids válidos pra medicamentoId: ${idsMedicamentosValidos || "nenhum — omita medicamentoId em todas as ações"})

${medicamentosJson}

Se o tratamento farmacológico correto desta emergência (ex.: dantroleno e bromocriptina na síndrome neuroléptica maligna) NÃO estiver na lista acima, isso significa que esse fármaco não está modelado no app — descreva a ação normalmente pelo label (ex.: "Administrar bromocriptina"), mas OMITA o campo medicamentoId nela. Nunca invente um id que não esteja na lista.

## Regras de design — as mais importantes deste prompt

1. **Sinais vitais iniciais representam o quadro JÁ INSTALADO**, não o início dos sintomas — o jogador entra em cena com urgência real, não com um paciente levemente alterado. riscoIminente inicial deve estar numa faixa de gravidade real (tipicamente 4-7), nunca em 0 ou 10.
2. **Regras de evolução sem tratamento devem ser fisiologicamente agressivas o suficiente pra criar pressão de tempo genuína** — o paciente precisa piorar visivelmente em poucos turnos se o jogador não agir corretamente. Regras tímidas tornam o jogo sem tensão.
3. **Ações incorretas plausíveis precisam ter riscoSeIncorreta severo e realista, não decorativo.** O exemplo clássico: manter ou aumentar a dose do antipsicótico numa síndrome neuroléptica maligna deve piorar significativamente temperatura, rigidezMuscular e riscoIminente — é exatamente o tipo de erro que um residente sob pressão poderia cometer, e o jogo precisa puni-lo de forma realista.
4. **Pelo menos uma ação precisa ser capaz de vencer o jogo** (reduzir riscoIminente de forma consistente) — normalmente a conduta imediata correta descrita no objeto Emergencia acima.
5. **Cada delta numérico é aditivo** (soma ao valor atual). Isso vale pra regrasDeEvolucaoNatural.efeitoPorTurno e pra efeitoImediato/riscoSeIncorreta de cada ação. **NÃO inclua nivelConsciencia em nenhum desses três lugares** — esse campo é sempre CALCULADO pelo motor a partir de riscoIminente, temperatura, saturacaoO2 e rigidezMuscular (paciente hipóxico ou muito hipertérmico rebaixa consciência automaticamente); se você definir nivelConsciencia numa ação, o motor simplesmente ignora. O único lugar onde nivelConsciencia é um campo válido é limiaresDesfecho (item 6), como valor-alvo a comparar contra o nível já calculado.
6. **limiaresDesfecho** funciona como valor-alvo, não delta: em "obito" e "piora", coloque valores que representem descompensação grave (ex.: temperatura: 42, riscoIminente não precisa repetir aqui, já é tratado automaticamente pelo motor); em "estabilizacao", valores próximos do normal fisiológico. Pode deixar campos de fora do limiar quando não forem relevantes pra esta emergência específica.
7. **6 a 8 ações no mínimo**, cobrindo as 5 categorias quando fizer sentido clinicamente (não force uma categoria que não se aplique). Pelo menos uma ação de comunicação/suporte que não seja farmacológica.
8. **turnosMaximos** deve refletir uma janela de tempo clinicamente plausível pra esta emergência específica — não um número arbitrário.
9. **Toda ação cujo efeitoImediato não muda nenhum sinal vital (típico de exame/comunicação, ex.: "pedir CK sérica", "chamar a UTI") precisa ter resultadoTexto preenchido** — um resultado narrativo curto e concreto (ex.: valor do exame pedido, resposta da UTI, reação da família). Sem isso, escolher essa ação não dá nenhum feedback ao jogador.
10. **historiaClinica é obrigatória e precisa ser concreta**, não um placeholder genérico: quem é o paciente (idade, contexto — pode ser fictício, mas plausível), o que aconteceu até aqui, e por que o quadro já está instalado quando o jogador assume o plantão. É a única coisa que dá contexto clínico ao jogador antes de ele ver o monitor de sinais vitais — sem isso o jogo começa sem nenhuma cena.
11. **repetivel é OBRIGATÓRIO em toda ação — não existe valor padrão, decida explicitamente true ou false pra cada uma.** Isso já causou um bug real de jogo: uma ação de categoria suporte ("levar pra ambiente calmo"), com custoTempo:0, marcada repetivel:true, foi clicada repetidamente e sozinha resolveu o caso, sem nenhuma medicação ou investigação real. Regra: ações de categoria suporte/comunicacao/contencao são QUASE SEMPRE repetivel:false — são decisões pontuais ("ambiente calmo", "chamar a UTI", "contenção mecânica"), não doses tituláveis. Só marque repetivel:true em ações de categoria medicacao que representem uma dose titulável de verdade (ex.: redose de benzodiazepínico) — e NUNCA combine repetivel:true com custoTempo:0, isso é rejeitado automaticamente (ação grátis e repetível vira clique infinito). Ações-armadilha (com riscoSeIncorreta) são sempre repetivel:false.
12. **Nenhuma ação de suporte/comunicação isolada pode ser forte o bastante pra vencer o caso sozinha.** Regra prática, também validada automaticamente: a soma do efeitoImediato.riscoIminente de todas as ações suporte/comunicacao não pode passar de ~40% do riscoIminente inicial. O grosso da redução de risco tem que vir de medicacao (a conduta farmacológica/procedimento correto) ou de uma decisão de investigação real — suporte/comunicação ajudam, não resolvem.
13. **Todo campo que regrasDeEvolucaoNatural piora sozinho precisa de pelo menos uma ação que o melhore no sentido oposto** — isso é validado automaticamente e a geração é REJEITADA se faltar. Por exemplo: se a evolução natural sobe frequenciaCardiaca a cada turno, alguma ação (tipicamente suporte/hidratação) precisa reduzir frequenciaCardiaca; se desce saturacaoO2, alguma ação precisa subir saturacaoO2; se sobe pressaoArterial, alguma ação precisa baixá-la. Não deixe nenhum campo numérico numa mão única — revise cada campo presente em efeitoPorTurno e garanta o caminho de melhora correspondente em pelo menos uma ação real (não na ação-armadilha).

## Instruções finais
- emergenciaBaseId deve ser exatamente "${emergencia.id}".
- nomeAnedotico: nome curto e evocativo do plantão/cenário — não o nome técnico da emergência.
- Não preencha nenhum campo de referência bibliográfica — não faz parte deste schema.
- Verifique você mesmo, antes de responder: existe pelo menos uma ação com efeitoImediato.riscoIminente negativo? riscoIminente inicial está estritamente entre 0 e 10?`;
}
