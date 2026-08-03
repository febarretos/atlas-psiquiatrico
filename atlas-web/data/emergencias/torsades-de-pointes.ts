import { Emergencia } from "./types";

export const torsadesDePointes: Emergencia = {
  id: "torsades-de-pointes",

  nome: "Torsades de Pointes / Prolongamento do Intervalo QT",

  categoria: "Induzida por medicamento",

  gravidade: "muito alta",

  descricao:
    "Arritmia ventricular polimórfica potencialmente fatal associada ao prolongamento do intervalo QT corrigido (QTc), que pode evoluir para fibrilação ventricular e morte súbita. Em psiquiatria, o risco surge sobretudo do uso de antipsicóticos, alguns antidepressivos e metadona, principalmente em associação entre si, com outros fármacos que prolongam o QT, ou na presença de distúrbios eletrolíticos.",

  quadroClinico: [
    "Palpitações, tontura ou síncope precedendo o evento",
    "Taquicardia ventricular polimórfica com aspecto característico de 'torção de pontas' no ECG",
    "Pode ser autolimitada (síncope) ou evoluir para fibrilação ventricular e parada cardiorrespiratória",
    "QTc prolongado ao ECG basal (geralmente >500 ms, ou aumento >60 ms sobre o basal do paciente)",
  ],

  causasComuns: [
    "Antipsicóticos com maior potencial de prolongamento do QT (ex.: ziprasidona, haloperidol IV em altas doses, pimozida)",
    "Associação de dois ou mais fármacos que prolongam o QT (ex.: antipsicótico + antiarrítmico, ou antipsicótico + antibiótico macrolídeo/quinolona)",
    "Distúrbios eletrolíticos: hipocalemia, hipomagnesemia, hipocalcemia",
    "Metadona em doses altas",
    "Bradicardia, insuficiência cardíaca estrutural, síndrome do QT longo congênito",
    "Sobredosagem de antidepressivos tricíclicos ou citalopram/escitalopram em doses altas",
  ],

  condutaImediata: [
    "Suspender o(s) fármaco(s) prolongador(es) do QT envolvido(s)",
    "Corrigir distúrbios eletrolíticos com urgência — reposição de potássio e magnésio (sulfato de magnésio IV é o tratamento de escolha na Torsades já instalada, mesmo com magnésio sérico normal)",
    "Monitorização cardíaca contínua e ECG seriado com medida do QTc",
    "Nos episódios sustentados/instáveis: cardioversão elétrica; considerar marca-passo transvenoso com overdrive pacing em casos recorrentes",
    "Evitar reintroduzir o agente causador; ao reiniciar tratamento psiquiátrico, preferir fármaco com menor risco cardíaco documentado",
  ],

  examesComplementares: [
    "ECG de 12 derivações com cálculo do QTc (fórmula de Bazett ou Fridericia)",
    "Eletrólitos: potássio, magnésio, cálcio",
    "Função renal e hepática (afetam a depuração de fármacos prolongadores do QT)",
  ],

  diagnosticoDiferencial: [
    "Outras taquiarritmias ventriculares polimórficas sem prolongamento do QT basal",
    "Síncope vasovagal ou de outra causa cardíaca estrutural",
    "Síndrome do QT longo congênito, quando não há causa medicamentosa identificável",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Beach SR, et al. QTc prolongation, torsades de pointes, and psychotropic medications. Psychosomatics. 2013.",
    "American Heart Association — Advanced Cardiovascular Life Support (ACLS) Guidelines.",
  ],
};
