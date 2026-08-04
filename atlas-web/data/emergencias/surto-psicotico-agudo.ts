import { Emergencia } from "./types";

export const surtoPsicoticoAgudo: Emergencia = {
  id: "surto-psicotico-agudo",

  nome: "Surto Psicótico Agudo / Primeiro Episódio Psicótico",

  categoria: "Emergência comportamental",

  gravidade: "muito alta",

  descricao:
    "Instalação aguda de sintomas psicóticos francos (delírios, alucinações, desorganização do pensamento ou do comportamento) sem episódio psicótico prévio conhecido. É tanto uma emergência psiquiátrica quanto, potencialmente, uma emergência médica: pacientes jovens com primeiro episódio psicótico têm uma probabilidade pré-teste maior de causa orgânica reversível do que pacientes com transtorno psicótico já estabelecido, o que torna a investigação de causas médicas parte obrigatória — não opcional — da avaliação inicial. A conduta deve ser individualizada conforme a gravidade, o risco de segurança e os achados da investigação; nenhuma lista padronizada substitui essa avaliação caso a caso. Ver o módulo Diagnósticos para os critérios diagnósticos completos dos transtornos psicóticos específicos.",

  quadroClinico: [
    "Delírios de início recente, mais comumente persecutórios, de referência ou de conteúdo bizarro",
    "Alucinações, mais frequentemente auditivas, mas também visuais, táteis ou olfativas",
    "Discurso desorganizado, com descarrilamento ou incoerência",
    "Comportamento grosseiramente desorganizado ou catatônico",
    "Retraimento social e deterioração relativamente recente do autocuidado e do desempenho escolar/ocupacional",
    "Afeto incongruente, embotado ou inadequado ao contexto",
    "Ansiedade, confusão e medo intensos associados à experiência psicótica, especialmente no início do quadro",
  ],

  criteriosDiagnosticos: [
    "Sintomas psicóticos francos (delírios e/ou alucinações) presentes por tempo significativo, com prejuízo funcional evidente",
    "Ausência de episódio psicótico prévio conhecido — é o que define 'primeiro episódio'",
    "Início mais frequente entre o final da adolescência e o início da idade adulta, mas possível em qualquer faixa etária",
    "Critérios diagnósticos completos para cada transtorno psicótico específico (esquizofrenia, transtorno esquizofreniforme, transtorno psicótico breve) estão detalhados no módulo Diagnósticos",
  ],

  causasComuns: [
    "Transtornos psicóticos primários: esquizofrenia, transtorno esquizofreniforme, transtorno psicótico breve, transtorno esquizoafetivo",
    "Transtorno do humor com características psicóticas (episódio maníaco ou depressivo grave)",
    "Psicose induzida por substância: estimulantes, cannabis de alta potência, alucinógenos, corticoides",
    "Causa orgânica: encefalites autoimunes (ex.: anti-NMDA), epilepsia do lobo temporal, tumores do sistema nervoso central, doenças autoimunes ou endócrinas, infecções do sistema nervoso central",
    "Abstinência de álcool ou sedativos",
  ],

  condutaImediata: [
    "Avaliação de segurança imediata: risco de suicídio, risco de heteroagressão e capacidade de autocuidado (ver também 'Risco de Suicídio Agudo' e 'Agitação Psicomotora Aguda' neste módulo)",
    "Investigação de causa orgânica em todo primeiro episódio — obrigatória, não opcional — especialmente diante de início muito rápido, sintomas neurológicos associados, alteração do nível de consciência, ou idade fora da faixa típica",
    "Iniciar antipsicótico assim que causas orgânicas agudas graves forem razoavelmente descartadas ou em paralelo à investigação, quando os sintomas exigirem controle imediato — usar a menor dose eficaz dentro da faixa recomendada para o antipsicótico escolhido (ver módulo Medicamentos), pois pacientes em primeiro episódio costumam ser mais sensíveis a efeitos extrapiramidais e responder a doses menores que pacientes com múltiplos episódios prévios",
    "Evitar polifarmácia antipsicótica (associação de dois ou mais antipsicóticos) como conduta inicial",
    "Ambiente calmo e de baixo estímulo, com abordagem que reduza a ansiedade e a desconfiança do paciente durante a avaliação",
    "Envolver a família ou rede de apoio na história clínica e no plano de cuidado, quando o paciente permitir",
    "Encaminhar prontamente a um serviço especializado em intervenção precoce em psicose, quando disponível — maior duração de psicose não tratada está associada a pior prognóstico funcional",
    "Definir a necessidade de internação com base no risco (agitação, risco de suicídio, incapacidade de autocuidado, ausência de rede de apoio) frente à possibilidade de manejo ambulatorial intensivo",
  ],

  examesComplementares: [
    "Exames laboratoriais gerais: hemograma, função renal e hepática, eletrólitos, glicemia, função tireoidiana, vitamina B12",
    "Triagem toxicológica",
    "Sorologias (HIV, sífilis) e avaliação infecciosa adicional conforme o quadro clínico",
    "Neuroimagem, preferencialmente ressonância magnética, especialmente diante de sinais atípicos, alteração do nível de consciência ou achados neurológicos focais",
    "Considerar painel de encefalite autoimune (ex.: anticorpos anti-NMDA) em quadros de início atípico, com sintomas neurológicos associados ou resposta inadequada ao tratamento inicial",
    "Eletroencefalograma quando houver suspeita de origem epiléptica",
  ],

  diagnosticoDiferencial: [
    "Transtorno psicótico breve (duração entre 1 dia e 1 mês) versus transtorno esquizofreniforme (1 a 6 meses) versus esquizofrenia (6 meses ou mais) — diferenciação primariamente pela duração e evolução do quadro, muitas vezes só possível retrospectivamente",
    "Transtorno do humor com características psicóticas (sintomas psicóticos restritos ao episódio de humor)",
    "Psicose induzida por substância (relação temporal com uso ou abstinência da substância)",
    "Causa orgânica (encefalite autoimune, epilepsia do lobo temporal, tumor do sistema nervoso central) — ver módulo Diagnósticos para os critérios completos de cada transtorno psicótico",
  ],

  referencias: [
    "American Psychiatric Association (APA). Practice Guideline for the Treatment of Patients with Schizophrenia.",
    "NICE Guideline — Psychosis and Schizophrenia in Adults: Prevention and Management.",
    "Kaplan & Sadock's Comprehensive Textbook of Psychiatry",
  ],
};
