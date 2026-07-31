import Section from "../../components/Section";

import ClearanceCreatinina from "../../components/calculadoras/ClearanceCreatinina";
import CalculadoraQTc from "../../components/calculadoras/CalculadoraQTc";
import EquivalenciaBenzodiazepinicos from "../../components/calculadoras/EquivalenciaBenzodiazepinicos";
import CalculadoraIMC from "../../components/calculadoras/CalculadoraIMC";
import VerificadorInteracoes from "../../components/calculadoras/VerificadorInteracoes";
import EquivalenciaAntidepressivos from "../../components/calculadoras/EquivalenciaAntidepressivos";
import DesmameBenzodiazepinicos from "../../components/calculadoras/DesmameBenzodiazepinicos";
import EquivalenciaClorpromazina from "../../components/calculadoras/EquivalenciaClorpromazina";

export default function Calculadoras() {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          🧮 Calculadoras
        </h1>

        <p className="mt-3 text-slate-400">
          Ferramentas clínicas interativas — os resultados são atualizados
          automaticamente conforme os campos são preenchidos.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <Section titulo="🩸 Clearance de Creatinina (Cockcroft-Gault)">
          <ClearanceCreatinina />
        </Section>

        <Section titulo="❤️ Intervalo QT Corrigido">
          <CalculadoraQTc />
        </Section>

        <Section titulo="💊 Equivalência de Benzodiazepínicos">
          <EquivalenciaBenzodiazepinicos />
        </Section>

        <Section titulo="⚖️ Índice de Massa Corporal">
          <CalculadoraIMC />
        </Section>

        <Section titulo="🔄 Verificador de Interações">
          <VerificadorInteracoes />
        </Section>

        <Section titulo="💊 Equivalência de Antidepressivos">
          <EquivalenciaAntidepressivos />
        </Section>

        <Section titulo="📉 Desmame de Benzodiazepínicos">
          <DesmameBenzodiazepinicos />
        </Section>

        <Section titulo="⚗️ Equivalência de Clorpromazina (CPZ)">
          <EquivalenciaClorpromazina />
        </Section>
      </div>
    </main>
  );
}
