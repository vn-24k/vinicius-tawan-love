// Motor de Trilha Sonora Romântica & Atmosférica
// Execução de alta fidelidade com 'Gymnopédie No. 1' (Erik Satie - Piano Solo)
// Desvanecimento suave de volume (fade-in / fade-out) e silenciamento estrito de toques

class RomanticAudioEngine {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private fadeInterval: number | null = null;
  private ctx: AudioContext | null = null;

  constructor() {
    // Inicialização atrasada no primeiro clique para respeitar as políticas de autoplay do navegador
  }

  private initAudio() {
    if (this.audio) return;
    this.audio = new Audio('/audio/enchanted-love.mp3');
    this.audio.loop = true;
    this.audio.volume = 0;
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      await this.start();
      return true;
    }
  }

  public async start(): Promise<void> {
    this.initAudio();
    if (!this.audio) return;

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    try {
      this.isPlaying = true;
      this.audio.volume = 0.02;
      await this.audio.play();

      // Fade in suave de volume até 0.45 em ~2 segundos
      const targetVolume = 0.45;
      const step = 0.03;
      this.fadeInterval = window.setInterval(() => {
        if (!this.audio) return;
        if (this.audio.volume < targetVolume) {
          this.audio.volume = Math.min(targetVolume, this.audio.volume + step);
        } else {
          if (this.fadeInterval) {
            clearInterval(this.fadeInterval);
            this.fadeInterval = null;
          }
        }
      }, 100);
    } catch {
      this.isPlaying = false;
    }
  }

  public stop(): void {
    if (!this.audio || !this.isPlaying) return;

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    this.isPlaying = false;
    const step = 0.05;

    // Fade out suave em 800ms antes de pausar
    this.fadeInterval = window.setInterval(() => {
      if (!this.audio) return;
      if (this.audio.volume > step) {
        this.audio.volume = Math.max(0, this.audio.volume - step);
      } else {
        this.audio.volume = 0;
        this.audio.pause();
        if (this.fadeInterval) {
          clearInterval(this.fadeInterval);
          this.fadeInterval = null;
        }
      }
    }, 80);
  }

  // Barulho de toque intencionalmente SILENCIADO e desativado a pedido do usuário
  public playHaptic(): void {
    // Nenhuma ação sonora - zero ruídos de clique
  }

  // Batimento cardíaco acústico duplo (Lub-Dub) para o Sincronizador de Batimentos na seção da história
  public playHeartbeat(): void {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!this.ctx) {
      this.ctx = new AudioContextClass();
    }

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const now = this.ctx.currentTime;

      // Primeiro som (Lub)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(80, now);
      osc1.frequency.exponentialRampToValueAtTime(45, now + 0.12);
      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.16);

      // Segundo som (Dub) - 180ms depois
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(95, now + 0.18);
      osc2.frequency.exponentialRampToValueAtTime(50, now + 0.32);
      gain2.gain.setValueAtTime(0.22, now + 0.18);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.18);
      osc2.stop(now + 0.36);
    } catch {
      // Ignora falhas de áudio
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const soundEngine = new RomanticAudioEngine();
