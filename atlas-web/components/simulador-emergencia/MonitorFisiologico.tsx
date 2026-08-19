"use client";

import { useEffect, useRef } from "react";

import type { SinaisVitais } from "../../data/simulador-emergencia/types";
import type { MonitorFisiologicoScene } from "./monitorFisiologicoScene";
import { ALTURA_MONITOR, LARGURA_MONITOR } from "./monitorConstantes";

export interface PulsoAcao {
  tipo: "boa" | "ruim" | "neutra";
  nonce: number;
}

interface Props {
  sinais: SinaisVitais;
  emAlarme: boolean;
  pulso: PulsoAcao | null;
  mudo: boolean;
}

// Wrapper client-only do "monitor de beira de leito" em Phaser — só monta
// o jogo depois de montado no navegador (Phaser toca APIs de canvas/áudio
// que não existem no servidor). Toda a lógica de jogo continua em
// lib/motorSimuladorEmergencia.ts; este componente só empurra os sinais
// vitais mais recentes pra dentro da cena a cada mudança de estado.
export default function MonitorFisiologico({ sinais, emAlarme, pulso, mudo }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<import("phaser").Game | null>(null);
  const cenaRef = useRef<MonitorFisiologicoScene | null>(null);
  const sinaisIniciaisRef = useRef(sinais);
  const emAlarmeInicialRef = useRef(emAlarme);

  useEffect(() => {
    let cancelado = false;

    async function montar() {
      const [{ default: Phaser }, { MonitorFisiologicoScene: Cena }] = await Promise.all([
        import("phaser"),
        import("./monitorFisiologicoScene"),
      ]);

      if (cancelado || !containerRef.current) return;

      const cena = new Cena(sinaisIniciaisRef.current, emAlarmeInicialRef.current);
      const game = new Phaser.Game({
        type: Phaser.AUTO,
        width: LARGURA_MONITOR,
        height: ALTURA_MONITOR,
        parent: containerRef.current,
        backgroundColor: "#0b1220",
        scene: cena,
        audio: { disableWebAudio: false },
      });

      gameRef.current = game;
      cenaRef.current = cena;
    }

    montar();

    return () => {
      cancelado = true;
      gameRef.current?.destroy(true);
      gameRef.current = null;
      cenaRef.current = null;
    };
    // Monta uma única vez; atualizações entram via cenaRef, não via recriação do jogo.
  }, []);

  useEffect(() => {
    cenaRef.current?.atualizarSinais(sinais, emAlarme);
  }, [sinais, emAlarme]);

  useEffect(() => {
    if (!pulso) return;
    // Disparado a partir de um clique real do jogador (ver jogar() em
    // SimuladorEmergenciaPlayer.tsx) — é o gesto de usuário que os
    // navegadores exigem antes de liberar áudio.
    cenaRef.current?.iniciarAudio();
    cenaRef.current?.pulso(pulso.tipo);
  }, [pulso]);

  useEffect(() => {
    cenaRef.current?.setMudo(mudo);
  }, [mudo]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl border border-rule"
      style={{ width: LARGURA_MONITOR, maxWidth: "100%" }}
    />
  );
}
