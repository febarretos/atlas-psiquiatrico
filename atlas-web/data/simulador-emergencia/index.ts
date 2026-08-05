import { CasoSimuladorEmergencia } from "./types";
import { nmsPlantaoSexta } from "./nms-plantao-sexta";
import { serotoninaTramadolLombalgia } from "./serotonina-tramadol-lombalgia";
import { surtoPsicoticoCameraDeRua } from "./surto-psicotico-camera-de-rua";
import { deliriumTremensFraturaFemur } from "./delirium-tremens-fratura-femur";

// Arquivo mantido por scripts/gerar-caso-emergencia.ts — cada execução
// acrescenta um import aqui e o nome correspondente no array abaixo.
// Formato do array deliberadamente sempre multilinha (mesmo com um só
// item) pra a inserção automática do script ser um regex simples e
// confiável.
export const casosSimuladorEmergencia: CasoSimuladorEmergencia[] = [
  nmsPlantaoSexta,
  serotoninaTramadolLombalgia,
  surtoPsicoticoCameraDeRua,
  deliriumTremensFraturaFemur,
];

export * from "./types";
