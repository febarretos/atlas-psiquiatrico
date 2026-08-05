// Constantes do monitor Phaser separadas em arquivo próprio, SEM import de
// "phaser" — MonitorFisiologico.tsx precisa delas num import estático
// (dimensões do container antes do jogo montar), e qualquer import
// estático de um arquivo que puxe "phaser" quebra a renderização no
// servidor ("window is not defined"), já que o pacote toca APIs de
// navegador na avaliação do módulo. monitorFisiologicoScene.ts (que
// IMPORTA phaser) só pode ser carregado via import() dinâmico, dentro de
// useEffect, nunca de forma estática.
export const LARGURA_MONITOR = 640;
export const ALTURA_MONITOR = 220;
