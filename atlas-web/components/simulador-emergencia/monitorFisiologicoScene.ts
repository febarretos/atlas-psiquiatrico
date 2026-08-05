import Phaser from "phaser";

import type { SinaisVitais } from "../../data/simulador-emergencia/types";
import { ALTURA_MONITOR, LARGURA_MONITOR } from "./monitorConstantes";

// Cena Phaser do "monitor de beira de leito" do Simulador de Emergência —
// substitui os cards estáticos de FC/PA/temperatura/SpO2/risco por um
// visual que reage em tempo real (ver TAREFA 3). A lógica de jogo
// continua inteiramente em lib/motorSimuladorEmergencia.ts; esta cena só
// LÊ o SinaisVitais mais recente (via atualizarSinais, chamado pelo
// wrapper React em components/simulador-emergencia/MonitorFisiologico.tsx)
// e desenha/soa em cima disso — nunca decide desfecho nem altera estado
// de jogo. Este arquivo importa "phaser" — só pode ser carregado via
// import() dinâmico (ver monitorConstantes.ts para o porquê).

const COR_NORMAL = 0x22c55e;
const COR_ALERTA = 0xeab308;
const COR_CRITICO = 0xef4444;
const COR_FUNDO = 0x0b1220;
const COR_GRADE = 0x1e293b;

type TipoPulso = "boa" | "ruim" | "neutra";

interface DadosMonitor {
  sinais: SinaisVitais;
  emAlarme: boolean;
}

function severidade(valor: number, alertaEm: number, criticoEm: number, invertido = false): number {
  if (!invertido) {
    if (valor >= criticoEm) return COR_CRITICO;
    if (valor >= alertaEm) return COR_ALERTA;
    return COR_NORMAL;
  }
  if (valor <= criticoEm) return COR_CRITICO;
  if (valor <= alertaEm) return COR_ALERTA;
  return COR_NORMAL;
}

// Forma estilizada de um complexo P-QRS-T, fase em [0,1). Não é uma
// morfologia de ECG clinicamente exata — é uma aproximação visual
// reconhecível como "traçado de monitor cardíaco".
function formaOnda(fase: number): number {
  if (fase < 0.05) return 0;
  if (fase < 0.12) return Math.sin(((fase - 0.05) / 0.07) * Math.PI) * 0.15;
  if (fase < 0.17) return 0;
  if (fase < 0.19) return -((fase - 0.17) / 0.02) * 0.2;
  if (fase < 0.22) return -0.2 + ((fase - 0.19) / 0.03) * 1.5;
  if (fase < 0.26) return 1.3 - ((fase - 0.22) / 0.04) * 1.7;
  if (fase < 0.3) return -0.4 + ((fase - 0.26) / 0.04) * 0.4;
  if (fase < 0.45) return 0;
  if (fase < 0.6) return Math.sin(((fase - 0.45) / 0.15) * Math.PI) * 0.3;
  return 0;
}

const SINAIS_PADRAO: SinaisVitais = {
  frequenciaCardiaca: 80,
  pressaoArterial: { sistolica: 120, diastolica: 80 },
  temperatura: 37,
  saturacaoO2: 98,
  nivelConsciencia: "alerta",
  agitacaoPsicomotora: 0,
  riscoIminente: 0,
};

export class MonitorFisiologicoScene extends Phaser.Scene {
  private dados: DadosMonitor;

  private tracoGrafico!: Phaser.GameObjects.Graphics;
  private grade!: Phaser.GameObjects.Graphics;
  private barraSpo2!: Phaser.GameObjects.Graphics;
  private brilhoCalor!: Phaser.GameObjects.Arc;
  private faixaAlarme!: Phaser.GameObjects.Rectangle;
  private overlayPulso!: Phaser.GameObjects.Rectangle;

  private textoFC!: Phaser.GameObjects.Text;
  private textoPA!: Phaser.GameObjects.Text;
  private textoTemp!: Phaser.GameObjects.Text;
  private textoSpo2!: Phaser.GameObjects.Text;
  private textoRisco!: Phaser.GameObjects.Text;

  private cicloBatimentoAnterior = -1;
  private audioCtx: AudioContext | null = null;
  private mudo = false;
  private ultimoBeepAlarmeMs = 0;

  constructor(sinaisIniciais: SinaisVitais = SINAIS_PADRAO, emAlarmeInicial = false) {
    super("monitor-fisiologico");
    this.dados = { sinais: sinaisIniciais, emAlarme: emAlarmeInicial };
  }

  create() {
    this.cameras.main.setBackgroundColor(COR_FUNDO);

    this.faixaAlarme = this.add
      .rectangle(LARGURA_MONITOR / 2, ALTURA_MONITOR / 2, LARGURA_MONITOR - 4, ALTURA_MONITOR - 4)
      .setStrokeStyle(4, COR_CRITICO, 0)
      .setFillStyle(0x000000, 0);

    this.grade = this.add.graphics();
    this.desenharGrade();

    this.tracoGrafico = this.add.graphics();

    // Painel numérico (canto superior esquerdo, estilo monitor real).
    this.textoFC = this.add.text(12, 8, "", { fontFamily: "monospace", fontSize: "22px", color: "#22c55e" });
    this.textoPA = this.add.text(12, 36, "", { fontFamily: "monospace", fontSize: "13px", color: "#94a3b8" });
    this.textoRisco = this.add.text(12, 54, "", { fontFamily: "monospace", fontSize: "13px", color: "#94a3b8" });

    // SpO2: barra vertical + número, canto superior direito.
    this.barraSpo2 = this.add.graphics();
    this.textoSpo2 = this.add.text(LARGURA_MONITOR - 118, 8, "", {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#38bdf8",
    });

    // Temperatura: número + brilho de calor pulsante.
    this.brilhoCalor = this.add.circle(LARGURA_MONITOR - 40, 60, 22, COR_NORMAL, 0);
    this.textoTemp = this.add.text(LARGURA_MONITOR - 70, 48, "", {
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#e2e8f0",
    });

    this.overlayPulso = this.add
      .rectangle(LARGURA_MONITOR / 2, ALTURA_MONITOR / 2, LARGURA_MONITOR, ALTURA_MONITOR, 0xffffff, 0)
      .setDepth(50);

    this.atualizarTextos();
  }

  private desenharGrade() {
    this.grade.clear();
    this.grade.lineStyle(1, COR_GRADE, 0.6);
    for (let x = 0; x < LARGURA_MONITOR; x += 32) {
      this.grade.lineBetween(x, 70, x, ALTURA_MONITOR - 8);
    }
    for (let y = 70; y < ALTURA_MONITOR; y += 24) {
      this.grade.lineBetween(0, y, LARGURA_MONITOR, y);
    }
  }

  update(time: number) {
    this.desenharTraco(time);
    this.desenharSpo2();
    this.desenharCalor(time);
    this.desenharAlarme(time);
  }

  private desenharTraco(tempoMs: number) {
    const { sinais } = this.dados;
    const fc = Math.max(20, sinais.frequenciaCardiaca);
    const periodoMs = 60000 / fc;
    const velocidadePxPorMs = LARGURA_MONITOR / 4000; // ~4s visíveis na largura do monitor
    const centroY = 120;
    const amplitudePx = 32 + Math.min(20, Math.abs(fc - 80) * 0.25);

    const corTraco = severidade(sinais.riscoIminente, 4, 7);

    this.tracoGrafico.clear();
    this.tracoGrafico.lineStyle(2, corTraco, 1);
    this.tracoGrafico.beginPath();

    for (let x = 0; x <= LARGURA_MONITOR; x += 2) {
      const t = tempoMs - (LARGURA_MONITOR - x) / velocidadePxPorMs;
      const fase = (((t % periodoMs) + periodoMs) % periodoMs) / periodoMs;
      const y = centroY - formaOnda(fase) * amplitudePx;
      if (x === 0) this.tracoGrafico.moveTo(x, y);
      else this.tracoGrafico.lineTo(x, y);
    }
    this.tracoGrafico.strokePath();

    // Beep uma vez por batimento — dispara na virada de ciclo, não em
    // toda chamada de update (senão tocaria a ~60fps).
    const cicloAtual = Math.floor(tempoMs / periodoMs);
    if (cicloAtual !== this.cicloBatimentoAnterior) {
      this.cicloBatimentoAnterior = cicloAtual;
      this.beepMonitor(sinais.saturacaoO2);
    }
  }

  private desenharSpo2() {
    const { sinais } = this.dados;
    const cor = severidade(sinais.saturacaoO2, 95, 90, true);
    const alturaMax = 50;
    const alturaAtual = Math.max(2, (sinais.saturacaoO2 / 100) * alturaMax);

    this.barraSpo2.clear();
    this.barraSpo2.fillStyle(0x1e293b, 1);
    this.barraSpo2.fillRect(LARGURA_MONITOR - 30, 10, 12, alturaMax);
    this.barraSpo2.fillStyle(cor, 1);
    this.barraSpo2.fillRect(LARGURA_MONITOR - 30, 10 + (alturaMax - alturaAtual), 12, alturaAtual);
  }

  private desenharCalor(tempoMs: number) {
    const { sinais } = this.dados;
    const cor = severidade(sinais.temperatura, 38, 39.5);
    const intensidade = Phaser.Math.Clamp((sinais.temperatura - 37) / 4, 0, 1);
    const pulso = intensidade > 0 ? 0.35 + Math.sin(tempoMs / 250) * 0.25 * intensidade : 0.12;

    this.brilhoCalor.setFillStyle(cor, Phaser.Math.Clamp(pulso, 0, 0.9));
    this.brilhoCalor.setScale(1 + intensidade * 0.6);
  }

  private desenharAlarme(tempoMs: number) {
    if (!this.dados.emAlarme) {
      this.faixaAlarme.setStrokeStyle(4, COR_CRITICO, 0);
      return;
    }
    const alpha = 0.4 + Math.sin(tempoMs / 200) * 0.4;
    this.faixaAlarme.setStrokeStyle(4, COR_CRITICO, Math.max(0, alpha));

    if (tempoMs - this.ultimoBeepAlarmeMs > 450) {
      this.ultimoBeepAlarmeMs = tempoMs;
      this.beepAlarme();
    }
  }

  private atualizarTextos() {
    const { sinais } = this.dados;
    this.textoFC.setText(`${Math.round(sinais.frequenciaCardiaca)} bpm`);
    this.textoFC.setColor(`#${severidade(sinais.frequenciaCardiaca, 110, 130).toString(16).padStart(6, "0")}`);
    this.textoPA.setText(`PA ${Math.round(sinais.pressaoArterial.sistolica)}/${Math.round(sinais.pressaoArterial.diastolica)}`);
    this.textoRisco.setText(`risco ${sinais.riscoIminente.toFixed(0)}/10`);
    this.textoSpo2.setText(`${Math.round(sinais.saturacaoO2)}%`);
    this.textoTemp.setText(`${sinais.temperatura.toFixed(1)}°C`);
  }

  // ---- API pública chamada pelo wrapper React ----

  atualizarSinais(sinais: SinaisVitais, emAlarme: boolean) {
    this.dados = { sinais, emAlarme };
    this.atualizarTextos();
  }

  pulso(tipo: TipoPulso) {
    const cor = tipo === "boa" ? 0x22c55e : tipo === "ruim" ? 0xef4444 : 0x38bdf8;
    this.overlayPulso.setFillStyle(cor, 0.35);
    this.tweens.add({
      targets: this.overlayPulso,
      alpha: { from: 0.35, to: 0 },
      duration: 500,
      ease: "Cubic.Out",
    });
  }

  setMudo(mudo: boolean) {
    this.mudo = mudo;
  }

  iniciarAudio() {
    if (!this.audioCtx) {
      const AudioContextCtor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextCtor();
    }
    if (this.audioCtx.state === "suspended") {
      void this.audioCtx.resume();
    }
  }

  private tocarTom(frequenciaHz: number, duracaoMs: number, tipo: OscillatorType, volume: number) {
    if (this.mudo || !this.audioCtx || this.audioCtx.state !== "running") return;

    const osc = this.audioCtx.createOscillator();
    const ganho = this.audioCtx.createGain();
    osc.type = tipo;
    osc.frequency.value = frequenciaHz;
    ganho.gain.value = volume;
    ganho.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duracaoMs / 1000);
    osc.connect(ganho);
    ganho.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + duracaoMs / 1000);
  }

  // Pitch acompanha a saturação de O2, como um oxímetro de pulso real:
  // quanto menor a saturação, mais grave soa o beep.
  private beepMonitor(saturacaoO2: number) {
    const frequenciaHz = 400 + Phaser.Math.Clamp(saturacaoO2, 0, 100) * 5;
    this.tocarTom(frequenciaHz, 90, "sine", 0.05);
  }

  private beepAlarme() {
    this.tocarTom(1200, 120, "square", 0.05);
  }

  shutdown() {
    this.audioCtx?.close();
    this.audioCtx = null;
  }
}
