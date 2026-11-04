// Motor de Áudio Cinematográfico Transcontinental
// Síntese procedural via Web Audio API nativa com acordes quentes, ressonância harmônica e micro-sons táteis

class TranscontinentalAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private chordInterval: number | null = null;

  private init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    this.ctx = new AudioContextClass();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  public async toggle(): Promise<boolean> {
    if (!this.ctx) this.init();
    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (!this.ctx || !this.masterGain) this.init();
    if (!this.ctx || !this.masterGain) return;

    this.isPlaying = true;
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 3);

    // Progression: São Paulo Warmth (D minor 9) -> Bangkok Golden Light (F maj 7 / A) -> G sus -> C maj 9
    const chordProgressions = [
      [146.83, 220.00, 261.63, 329.63, 440.00], // Dm9
      [174.61, 261.63, 329.63, 392.00, 523.25], // Fmaj7
      [196.00, 293.66, 392.00, 440.00, 587.33], // Gsus4
      [130.81, 196.00, 246.94, 329.63, 392.00], // Cmaj9
    ];

    let currentChordIdx = 0;

    const playChord = (chord: number[]) => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;
      const now = this.ctx.currentTime;

      chord.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        const filter = this.ctx!.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Gentle vibrato
        osc.detune.setValueAtTime((Math.random() - 0.5) * 8, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, now);
        filter.frequency.exponentialRampToValueAtTime(280, now + 5.5);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.045 / (idx + 1), now + 1.8);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 6.0);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(now);
        osc.stop(now + 6.2);
      });
    };

    playChord(chordProgressions[0]);
    this.chordInterval = window.setInterval(() => {
      currentChordIdx = (currentChordIdx + 1) % chordProgressions.length;
      playChord(chordProgressions[currentChordIdx]);
    }, 5500);
  }

  public stop() {
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = false;
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
    if (this.chordInterval) {
      clearInterval(this.chordInterval);
      this.chordInterval = null;
    }
  }

  public playHeartbeat() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const now = this.ctx.currentTime;
      // First beat (Lub)
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

      // Second beat (Dub) - 180ms later
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
      // Audio fallback
    }
  }

  public playHaptic() {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch {
      // Audio not yet unlocked
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const soundEngine = new TranscontinentalAudioEngine();
