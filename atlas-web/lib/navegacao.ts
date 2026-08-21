// Estrutura de navegação compartilhada entre a Sidebar e a lista de módulos
// da Início — fonte única de verdade para os 3 grupos e seus itens, para
// que as duas telas nunca fiquem fora de sincronia.
import { medicamentos } from "../data/medicamentos";
import { diagnosticos } from "../data/diagnosticos";
import { emergencias } from "../data/emergencias";

export interface ItemMenu {
  nome: string;
  href: string;
  meta?: string;
}

export interface GrupoMenu {
  titulo: string;
  itens: ItemMenu[];
}

export const grupos: GrupoMenu[] = [
  {
    titulo: "Referência",
    itens: [
      { nome: "Emergências", href: "/emergencias", meta: String(emergencias.length) },
      { nome: "Medicamentos", href: "/medicamentos", meta: String(medicamentos.length) },
      { nome: "Diagnósticos", href: "/diagnosticos", meta: String(diagnosticos.length) },
      { nome: "Psicopatologia", href: "/psicopatologia" },
      { nome: "Escalas", href: "/escalas" },
      { nome: "Fluxogramas", href: "/fluxogramas" },
    ],
  },
  {
    titulo: "Ferramentas",
    itens: [
      { nome: "Assistente de Medicação", href: "/assistente" },
      { nome: "Entrevista Estruturada", href: "/entrevista-estruturada" },
    ],
  },
  {
    titulo: "Casos & prática",
    itens: [
      { nome: "Casos Clínicos", href: "/casos-clinicos" },
      { nome: "Simulador de Emergência", href: "/simulador-emergencia" },
    ],
  },
];
