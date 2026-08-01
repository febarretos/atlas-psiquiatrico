import PsicopatologiaPage from "../../components/PsicopatologiaPage";

import { dominiosPsicopatologicos } from "../../data/psicopatologia";

export default function Psicopatologia() {
  return <PsicopatologiaPage dominios={dominiosPsicopatologicos} />;
}
