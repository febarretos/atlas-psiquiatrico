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
            Montado a partir dos achados marcados como observados nos
            domínios de Psicopatologia — revise e edite antes de copiar
            para o prontuário.
          </p>
        </div>

        <ExameEstadoMentalPanel dominios={dominiosPsicopatologicos} />
      </div>
    </main>
  );
}
