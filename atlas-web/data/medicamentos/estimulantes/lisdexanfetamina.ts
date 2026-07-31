import { Medicamento } from "../../types";

export const lisdexanfetamina: Medicamento = {
  id: "lisdexanfetamina",

  nome: "Lisdexanfetamina",

  nomeComercial: [
    "Venvanse",
    "Juneve",
    "Lisdev",
  ],

  classe: "Estimulante",

  subclasse: "Anfetamínico",

  mecanismo:
    "Pró-fármaco inativo da dextroanfetamina, ligada covalentemente ao aminoácido L-lisina. É hidrolisada por peptidases presentes principalmente nas hemácias, liberando gradualmente dextroanfetamina ativa, que promove liberação de dopamina e noradrenalina das vesículas pré-sinápticas e inibe sua recaptação. Por depender da conversão enzimática saturável para gerar o composto ativo, apresenta perfil de liberação mais gradual e uniforme, com menor potencial de abuso por vias alternativas (esmagamento, injeção ou uso intranasal), já que a molécula intacta tem pouca ou nenhuma atividade farmacológica.",

  posologias: [
    {
      indicacao: "TDAH em crianças (6–12 anos)",
      doseInicial: "30 mg/dia, dose única matinal",
      doseUsual: "30–70 mg/dia",
      doseMaxima: "70 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "TDAH em adolescentes e adultos",
      doseInicial: "30 mg/dia, dose única matinal",
      doseUsual: "30–70 mg/dia",
      doseMaxima: "70 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno de Compulsão Alimentar Periódica",
      doseInicial: "30 mg/dia, dose única matinal",
      doseUsual: "50–70 mg/dia",
      doseMaxima: "70 mg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "Meia-vida da dextroanfetamina ativa de aproximadamente 10–13 horas; a molécula-mãe (lisdexanfetamina) tem meia-vida muito curta devido à rápida conversão",

  metabolizacao:
    "Ativação por hidrólise enzimática (peptidases) predominantemente nas hemácias, gerando dextroanfetamina, que é posteriormente metabolizada por vias hepáticas com participação limitada do sistema CYP450.",

  indicacoes: [
    "Transtorno de Déficit de Atenção e Hiperatividade (TDAH) em crianças, adolescentes e adultos",
    "Transtorno de Compulsão Alimentar Periódica (Binge Eating Disorder) em adultos",
  ],

  contraIndicacoes: [
    "Doença cardiovascular estrutural significativa ou arritmias graves",
    "Hipertensão grave não controlada",
    "Glaucoma",
    "Hipertireoidismo",
    "Uso concomitante ou recente (últimos 14 dias) com IMAO",
    "Agitação importante ou quadros ansiosos graves (podem ser exacerbados)",
    "Cautela em história de abuso de substâncias",
    "Cautela relativa em Tourette ou tiques (pode exacerbar tiques motores/vocais)",
  ],

  vantagens: [
    "Duração de ação longa e uniforme (aproximadamente 13 horas), com curva de liberação mais suave",
    "Dose única diária, favorecendo adesão ao tratamento",
    "Menor potencial de abuso e desvio por depender de conversão enzimática para ativação, mesmo se esmagada, injetada ou inalada",
    "Efeito rebote menos pronunciado ao final do dia em comparação a estimulantes de liberação imediata",
    "Indicação adicional aprovada para transtorno de compulsão alimentar periódica",
  ],

  desvantagens: [
    "Menor flexibilidade posológica em comparação às múltiplas formulações do metilfenidato",
    "Início de ação mais lento devido à necessidade de conversão enzimática",
    "Potencial de abuso e dependência (substância controlada), ainda que reduzido",
    "Redução de apetite e perda de peso, por vezes mais pronunciada que com metilfenidato",
  ],

  efeitosAdversos: [
    "Insônia",
    "Redução de apetite e perda de peso",
    "Cefaleia",
    "Taquicardia e aumento da pressão arterial",
    "Irritabilidade",
    "Boca seca",
    "Ansiedade",
  ],

  interacoes: [
    "IMAO (risco de crise hipertensiva)",
    "Anti-hipertensivos (pode reduzir eficácia)",
    "Alcalinizantes urinários (podem aumentar níveis de anfetamina)",
    "Álcool",
    "Outros agentes simpaticomiméticos",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Muito baixa",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Dados limitados em humanos; geralmente evitada durante a gestação quando possível. Uso deve ser individualizado, avaliando risco-benefício, sobretudo em casos de TDAH grave com prejuízo funcional significativo.",

  gravidezCategoria: "evitar",

  lactacao:
    "Dados limitados sobre passagem para o leite materno; uso deve ser cauteloso, com monitorização do lactente caso mantida.",

  lactacaoCategoria: "cautela",

  renal:
    "Considerar redução de dose em insuficiência renal grave, dado potencial acúmulo de dextroanfetamina; ajuste conforme resposta clínica.",

  ajusteRenalNecessario: true,

  hepatica:
    "Dados limitados; não há recomendação específica de ajuste, mas cautela é sugerida em insuficiência hepática significativa.",

  observacoes:
    "É recomendada avaliação cardiovascular basal antes do início do tratamento, incluindo aferição de pressão arterial e frequência cardíaca, além de investigação de história pessoal e familiar de doença cardíaca, morte súbita ou arritmias. A monitorização de PA, FC, apetite e crescimento (em crianças) deve ser mantida ao longo do tratamento. Por ser um pró-fármaco convertido gradualmente em dextroanfetamina, apresenta perfil farmacocinético mais estável ao longo do dia, o que a torna atrativa como primeira opção em pacientes com risco de desvio ou abuso de substâncias, embora, como toda anfetamina, ainda seja classificada como substância controlada e exija monitorização do uso.",

  perolasClinicas: [
    "Ao contrário do que muitos pacientes assumem, dissolver a cápsula em água (opção de bula para quem tem dificuldade de deglutir) não altera a farmacocinética nem 'acelera' o efeito — a ativação continua dependendo da hidrólise enzimática gradual, não da forma de administração.",
    "É uma boa opção de troca quando o metilfenidato causa irritabilidade de rebote acentuada no fim do dia, pela curva de liberação mais suave e gradual da dextroanfetamina liberada.",
    "A indicação para Transtorno de Compulsão Alimentar Periódica costuma exigir doses na faixa mais alta (50-70mg) comparado ao TDAH — não assumir que a dose eficaz para uma indicação será a mesma para a outra no mesmo paciente.",
  ],

  referencias: [
    "CADDRA Guidelines",
    "AACAP Practice Parameter",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};
