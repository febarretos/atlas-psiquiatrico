import ExameEstadoMentalPanel from "../../../components/ExameEstadoMentalPanel";

import { dominiosPsicopatologicos } from "../../../data/psicopatologia";

export default function ExameEstadoMental() {
  return (
    <main className="text-ink">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-ink">
            Exame do Estado Mental
          </h1>

          <p className="mt-3 text-ink-2">
            Cada domínio de Psicopatologia entra com um padrão normal;
            marcar um achado como observado substitui esse padrão pela
            alteração encontrada. Cobre só os 11 domínios semiológicos do
            módulo — aparência e atitude, inteligência e juízo
            crítico/insight não são gerados aqui. Revise e complete
            antes de copiar para o prontuário.
          </p>
        </div>

        <ExameEstadoMentalPanel dominios={dominiosPsicopatologicos} />
      </div>
    </main>
  );
}
