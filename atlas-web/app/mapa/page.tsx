import MapaConhecimento from "../../components/MapaConhecimento";
import { construirGrafoConhecimento } from "../../lib/mapaConhecimento";

export default function Mapa() {
  const grafo = construirGrafoConhecimento();
  return <MapaConhecimento grafo={grafo} />;
}
