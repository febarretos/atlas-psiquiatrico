"use client";

import { useEffect, useRef, useState } from "react";

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
  // Chamado quando o Phaser não consegue carregar (ex.: offline, chunk
  // não está no cache do service worker — Phaser é import() dinâmico, não
  // precacheado). O caller deve mostrar os sinais vitais em texto como
  // alternativa: sem isso, o caso fica injogável em silêncio (FC/PA/
  // temperatura/SpO2/risco só existem dentro desta cena).
  onErro?: () => void;
}

// Wrapper client-only do "monitor de beira de leito" em Phaser — só monta
// o jogo depois de montado no navegador (Phaser toca APIs de canvas/áudio
// que não existem no servidor). Toda a lógica de jogo continua em
// lib/motorSimuladorEmergencia.ts; este componente só empurra os sinais
// vitais mais recentes pra dentro da cena a cada mudança de estado.
export default function MonitorFisiologico({ sinais, emAlarme, pulso, mudo, onErro }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<import("phaser").Game | null>(null);
  const cenaRef = useRef<MonitorFisiologicoScene | null>(null);
  const sinaisIniciaisRef = useRef(sinais);
  const emAlarmeInicialRef = useRef(emAlarme);
  const [falhouCarregar, setFalhouCarregar] = useState(false);

  useEffect(() => {
    let cancelado = false;

    async function montar() {
      try {
        const [{ default: Phaser }, { MonitorFisiologicoScene: Cena }] = await Promise.all([
          import("phaser"),
          import("./monitorFisiologicoScene"),
        ]);

        if (cancelado || !containerRef.current) return;

        const cena = new Cena(sinaisIniciaisRef.current, emAlarmeInicialRef.current);
        const game = new Phaser.Game({
          type: Phaser.AUTO,
          parent: containerRef.current,
          backgroundColor: "#0b1220",
          scene: cena,
          audio: { disableWebAudio: false },
          // FIT reescala o canvas via CSS pra caber na largura real do
          // container (que encolhe em telas pequenas via aspect-ratio no
          // wrapper abaixo) — sem isso o canvas ficava com os 640px fixos
          // do config e era cortado pelo overflow-hidden em telas de celular.
          scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: LARGURA_MONITOR,
            height: ALTURA_MONITOR,
          },
        });

        gameRef.current = game;
        cenaRef.current = cena;
      } catch {
        if (cancelado) return;
        setFalhouCarregar(true);
        onErro?.();
      }
    }

    montar();

    return () => {
      cancelado = true;
      gameRef.current?.destroy(true);
      gameRef.current = null;
      cenaRef.current = null;
    };
    // Monta uma única vez; atualizações entram via cenaRef, não via recriação do jogo.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  if (falhouCarregar) {
    return (
      <div
        className="flex items-center justify-center rounded-xl border border-dashed border-rule bg-panel p-4 text-center text-sm text-ink-3"
        style={{
          width: LARGURA_MONITOR,
          maxWidth: "100%",
          aspectRatio: `${LARGURA_MONITOR} / ${ALTURA_MONITOR}`,
        }}
      >
        Monitor visual indisponível agora (sem conexão ou falha ao carregar) — os sinais vitais
        completos estão listados ao lado.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl border border-rule"
      style={{
        width: LARGURA_MONITOR,
        maxWidth: "100%",
        aspectRatio: `${LARGURA_MONITOR} / ${ALTURA_MONITOR}`,
      }}
    />
  );
}
