import { Medicamento } from "../../types";

export const atomoxetina: Medicamento = {
  id: "atomoxetina",

  nome: "Atomoxetina",

  nomeComercial: [
    "Atentah",
    "Strattera",
  ],

  classe: "Não-estimulante para TDAH",

  subclasse: "Inibidor seletivo da recaptação de noradrenalina",

  mecanismo:
    "Inibidor seletivo do transportador pré-sináptico de noradrenalina (NET), aumentando a disponibilidade de noradrenalina (e indiretamente dopamina no córtex pré-frontal, região com baixa densidade de transportadores de dopamina). Diferente dos estimulantes, não atua diretamente sobre a liberação de dopamina no estriado/circuito de recompensa.",

  posologias: [
    {
      indicacao: "TDAH em Adultos",
      doseInicial: "40 mg/dia",
      doseUsual: "80–100 mg/dia (dose única ou dividida em 2 tomadas)",
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "TDAH em Crianças e Adolescentes (peso ≥ 70 kg)",
      doseInicial: "40 mg/dia",
      doseUsual: "80 mg/dia",
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "TDAH em Crianças e Adolescentes (peso < 70 kg)",
      doseInicial: "0,5 mg/kg/dia",
      doseUsual: "1,2 mg/kg/dia",
      doseMaxima: "1,4 mg/kg/dia (não excedendo 100 mg/dia)",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "5 horas (até 24 horas em metabolizadores lentos de CYP2D6)",

  metabolizacao:
    "Metabolização hepática predominantemente pela CYP2D6; metabolizadores lentos apresentam concentrações plasmáticas significativamente mais altas.",

  indicacoes: [
    "Transtorno de Déficit de Atenção e Hiperatividade (TDAH) em crianças, adolescentes e adultos",
  ],

  contraIndicacoes: [
    "Uso concomitante ou recente (dentro de 2 semanas) de IMAO",
    "Glaucoma de ângulo fechado",
    "Feocromocitoma",
    "Doença cardiovascular grave (arritmias graves, hipertensão grave)",
    "Hipersensibilidade à atomoxetina",
  ],

  vantagens: [
    "Sem potencial de abuso ou dependência — não é substância controlada",
    "Opção quando estimulantes são contraindicados ou mal tolerados (histórico de transtorno por uso de substâncias, tiques significativos, ansiedade importante)",
    "Efeito contínuo ao longo de 24 horas, sem efeito rebote característico dos estimulantes",
    "Pode ser benéfica em TDAH com ansiedade comórbida importante",
  ],

  desvantagens: [
    "Início de efeito terapêutico lento (2 a 6 semanas), diferente do efeito imediato (horas) dos estimulantes",
    "Eficácia geralmente considerada inferior aos estimulantes nos ensaios comparativos diretos",
    "Alerta de bula (boxed warning) sobre risco aumentado de ideação suicida em crianças e adolescentes",
    "Hepatotoxicidade rara, porém grave, já relatada (lesão hepática idiossincrática)",
    "Efeitos gastrointestinais e sonolência podem limitar tolerabilidade inicial",
  ],

  efeitosAdversos: [
    "Náusea",
    "Boca seca",
    "Diminuição do apetite",
    "Sonolência ou fadiga",
    "Constipação",
    "Aumento da frequência cardíaca e da pressão arterial",
    "Disfunção sexual e problemas de ejaculação (em adultos)",
  ],

  serotoninergico: true,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "IMAO (contraindicado — risco de crise hipertensiva/síndrome serotoninérgica)",
    "Inibidores potentes da CYP2D6 (paroxetina, fluoxetina, bupropiona) aumentam significativamente os níveis séricos",
    "Agentes que aumentam a pressão arterial ou frequência cardíaca (efeito aditivo)",
    "Salbutamol e outros beta-agonistas (potencialização de efeitos cardiovasculares)",
    "Agentes serotoninérgicos (ISRS, ISRSN, triptanos) — risco de síndrome serotoninérgica, especialmente se associados a fármacos que também prolongam o QT",
    "Outros fármacos que prolongam o intervalo QT (risco aditivo de arritmia ventricular)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Baixa",

  sexual: "Moderada",

  qt: "Baixo",

  gravidez:
    "Dados limitados em humanos; usar apenas se o benefício justificar claramente o risco potencial.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados insuficientes sobre segurança durante a amamentação; usar com cautela.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose na insuficiência renal leve a moderada; dados limitados em insuficiência grave.",

  ajusteRenalNecessario: false,

  hepatica:
    "Requer redução de dose em insuficiência hepática moderada (50% da dose) e grave (25% da dose).",

  observacoes:
    "A atomoxetina é a principal alternativa não-estimulante de primeira linha para TDAH, particularmente valiosa em pacientes com histórico de transtorno por uso de substâncias, tiques (Tourette comórbido) ou ansiedade significativa, situações em que estimulantes podem ser contraindicados ou menos desejáveis. Diferente do metilfenidato e das anfetaminas, seu efeito terapêutico pleno só se estabelece após várias semanas de uso contínuo, o que exige orientação clara ao paciente e à família sobre expectativas de tempo de resposta. É essencial monitorar sinais de ideação suicida em crianças e adolescentes no início do tratamento, bem como sintomas sugestivos de hepatotoxicidade (icterícia, urina escura, dor abdominal), ainda que a lesão hepática grave seja rara.",

  perolasClinicas: [
    "Avisar o paciente/família explicitamente que a resposta plena pode levar até 6 semanas — é a causa mais comum de abandono precoce do tratamento por 'não estar funcionando' quando na verdade ainda não houve tempo suficiente.",
    "Metabolizadores lentos de CYP2D6 (aproximadamente 7% da população) atingem níveis séricos muito mais altos com a mesma dose — considerar titulação mais lenta e cautelosa se houver efeitos adversos desproporcionais em dose baixa.",
    "Associar com fluoxetina ou paroxetina (inibidores potentes de CYP2D6) exige redução de dose da atomoxetina — a combinação eleva níveis séricos de forma clinicamente relevante.",
    "É uma opção a considerar quando o TDAH coexiste com ansiedade significativa, já que estimulantes podem piorar sintomas ansiosos em alguns pacientes, enquanto a atomoxetina tende a ser neutra ou até favorável nesse aspecto.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "AACAP Practice Parameter for TDAH",
    "Bula de referência ANVISA (Atentah, Apsen Farmacêutica) / FDA (Strattera)",
  ],
};
