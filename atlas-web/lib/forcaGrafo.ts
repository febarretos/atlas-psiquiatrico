// Simulação de layout força-dirigida bem simples (repulsão entre todos os
// pares + atração ao longo das arestas + centralização fraca), rodada de
// forma síncrona por N iterações — sem lib externa, mesma filosofia do
// EffectRadarChart (SVG feito à mão). Suficiente pra ~150 nós: não precisa
// de quadtree/Barnes-Hut pra rodar em tempo aceitável numa única passada.

export interface PosicaoNo {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface ArestaSimples {
  origem: string;
  destino: string;
}

export function calcularLayout(
  idsNos: string[],
  arestas: ArestaSimples[],
  largura: number,
  altura: number,
  iteracoes = 400
): Map<string, { x: number; y: number }> {
  const cx = largura / 2;
  const cy = altura / 2;
  const raioInicial = Math.min(largura, altura) / 2.5;

  const posicoes = new Map<string, PosicaoNo>();
  idsNos.forEach((id, i) => {
    const angulo = (i / idsNos.length) * Math.PI * 2;
    posicoes.set(id, {
      id,
      x: cx + raioInicial * Math.cos(angulo) + (Math.random() - 0.5) * 20,
      y: cy + raioInicial * Math.sin(angulo) + (Math.random() - 0.5) * 20,
      vx: 0,
      vy: 0,
    });
  });

  const grauPorNo = new Map<string, number>();
  for (const a of arestas) {
    grauPorNo.set(a.origem, (grauPorNo.get(a.origem) ?? 0) + 1);
    grauPorNo.set(a.destino, (grauPorNo.get(a.destino) ?? 0) + 1);
  }

  const REPULSAO = 2200;
  const RIGIDEZ_ARESTA = 0.02;
  const DISTANCIA_IDEAL = 90;
  const CENTRALIZACAO = 0.006;
  const AMORTECIMENTO = 0.85;

  for (let iter = 0; iter < iteracoes; iter++) {
    // Repulsão entre todos os pares (O(n²), aceitável até ~150-200 nós)
    for (const a of posicoes.values()) {
      for (const b of posicoes.values()) {
        if (a.id === b.id) continue;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distSq = Math.max(dx * dx + dy * dy, 1);
        const forca = REPULSAO / distSq;
        const dist = Math.sqrt(distSq);
        a.vx += (dx / dist) * forca;
        a.vy += (dy / dist) * forca;
      }
    }

    // Atração ao longo das arestas (mola)
    for (const aresta of arestas) {
      const a = posicoes.get(aresta.origem);
      const b = posicoes.get(aresta.destino);
      if (!a || !b) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
      const forca = (dist - DISTANCIA_IDEAL) * RIGIDEZ_ARESTA;
      const fx = (dx / dist) * forca;
      const fy = (dy / dist) * forca;
      a.vx += fx;
      a.vy += fy;
      b.vx -= fx;
      b.vy -= fy;
    }

    // Centralização fraca (evita que o grafo derive pra fora da tela)
    for (const a of posicoes.values()) {
      a.vx += (cx - a.x) * CENTRALIZACAO;
      a.vy += (cy - a.y) * CENTRALIZACAO;
    }

    // Integração + amortecimento
    for (const a of posicoes.values()) {
      a.vx *= AMORTECIMENTO;
      a.vy *= AMORTECIMENTO;
      a.x += a.vx;
      a.y += a.vy;
    }
  }

  const resultado = new Map<string, { x: number; y: number }>();
  for (const p of posicoes.values()) {
    resultado.set(p.id, { x: p.x, y: p.y });
  }
  return resultado;
}
