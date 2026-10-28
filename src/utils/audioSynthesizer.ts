// Web Audio API based traditional Indian Nadaswaram / Shehnai & Tanpura Synthesizer
// Plays an auspicious Kalyana Melam melody in Raga Mohanam / Bhupali with resonant harmonics and Tanpura drone.

class TraditionalAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private tanpuraOscs: OscillatorNode[] = [];
  private melodyTimeout: number | null = null;
  private noteIndex: number = 0;

  // Notes in Raga Mohanam / Bhupali (frequencies in Hz)
  // Tonic C4 = 261.63 Hz
  // Sa (261.63), Ri2 (294.33), Ga3 (329.63), Pa (392.00), Dha2 (440.00), Sa' (523.25), Ri2' (588.66), Ga3' (659.25)
  private melodyNotes: { note: number; duration: number }[] = [
    // Traditional auspicious mangala vadyam opening phrase
    { note: 261.63, duration: 0.6 }, // Sa
    { note: 294.33, duration: 0.4 }, // Ri
    { note: 329.63, duration: 0.8 }, // Ga
    { note: 392.00, duration: 0.6 }, // Pa
    { note: 440.00, duration: 0.6 }, // Dha
    { note: 523.25, duration: 1.2 }, // Sa' (held high)
    { note: 440.00, duration: 0.5 }, // Dha
    { note: 392.00, duration: 0.5 }, // Pa
    { note: 329.63, duration: 0.8 }, // Ga
    { note: 294.33, duration: 0.5 }, // Ri
    { note: 261.63, duration: 1.2 }, // Sa

    // Second auspicious ascending flourish (Kalyana Mangalam)
    { note: 329.63, duration: 0.5 }, // Ga
    { note: 392.00, duration: 0.5 }, // Pa
    { note: 440.00, duration: 0.5 }, // Dha
    { note: 523.25, duration: 0.7 }, // Sa'
    { note: 588.66, duration: 0.6 }, // Ri'
    { note: 659.25, duration: 1.0 }, // Ga' (apex)
    { note: 588.66, duration: 0.4 }, // Ri'
    { note: 523.25, duration: 0.6 }, // Sa'
    { note: 440.00, duration: 0.5 }, // Dha
    { note: 392.00, duration: 0.7 }, // Pa
    { note: 329.63, duration: 0.6 }, // Ga
    { note: 294.33, duration: 0.6 }, // Ri
    { note: 261.63, duration: 1.6 }  // Sa
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime); // gentle, pleasant volume
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Starts the tanpura drone: Sa - Pa - Sa' - Sa with slow pulsating chorus
  private startTanpura() {
    if (!this.ctx || !this.masterGain) return;
    const droneFreqs = [130.81, 196.00, 261.63]; // C3, G3, C4
    this.tanpuraOscs = [];

    droneFreqs.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);

      // Soft breathing modulation
      gain.gain.setValueAtTime(0.04, this.ctx!.currentTime);

      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start();
      this.tanpuraOscs.push(osc);
    });
  }

  // Play a single Nadaswaram / Shehnai reed note with harmonics and gentle vibrato
  private playShehnaiNote(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    // Nadaswaram has rich nasal/reed harmonics (fundamental + 2nd, 3rd harmonics + gentle bandpass)
    const fundamental = this.ctx.createOscillator();
    const overtone = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const noteGain = this.ctx.createGain();

    // Fundamental (sawtooth slightly filtered gives reedy shehnai character)
    fundamental.type = 'sawtooth';
    fundamental.frequency.setValueAtTime(freq, now);

    // Overtone
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(freq * 2, now);

    // Bandpass resonant filter to emulate acoustic wooden horn body
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 1.5, now);
    filter.Q.setValueAtTime(2.2, now);

    // Vibrato LFO for traditional gamaka / meend (expressive pitch bend)
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(5.5, now); // 5.5 Hz vibrato
    lfoGain.gain.setValueAtTime(3.2, now);  // slight pitch modulation
    lfo.connect(fundamental.frequency);
    lfo.start(now);

    // Envelope
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.12, now + 0.08); // attack
    noteGain.gain.setValueAtTime(0.10, now + duration * 0.7);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // release

    fundamental.connect(filter);
    overtone.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    fundamental.start(now);
    overtone.start(now);
    fundamental.stop(now + duration);
    overtone.stop(now + duration);
    lfo.stop(now + duration);

    // Also occasionally add subtle bell chime at key accents
    if (freq === 523.25 || freq === 659.25) {
      this.playGhungrooChime();
    }
  }

  // Soft ghungroo / temple bell chime
  private playGhungrooChime() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const chime = this.ctx.createOscillator();
    const chimeGain = this.ctx.createGain();
    chime.type = 'sine';
    chime.frequency.setValueAtTime(1046.5, now); // C6
    chimeGain.gain.setValueAtTime(0.02, now);
    chimeGain.gain.exponentialRampToValueAtTime(0.00001, now + 0.6);

    chime.connect(chimeGain);
    chimeGain.connect(this.masterGain);
    chime.start(now);
    chime.stop(now + 0.6);
  }

  private scheduleNextNote() {
    if (!this.isPlaying) return;
    const current = this.melodyNotes[this.noteIndex];
    this.playShehnaiNote(current.note, current.duration);

    this.noteIndex = (this.noteIndex + 1) % this.melodyNotes.length;
    this.melodyTimeout = window.setTimeout(() => {
      this.scheduleNextNote();
    }, current.duration * 1000);
  }

  public play() {
    try {
      this.initContext();
      if (this.isPlaying) return;
      this.isPlaying = true;
      this.startTanpura();
      this.noteIndex = 0;
      this.scheduleNextNote();
    } catch {
      // Audio playback suppressed or blocked
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.melodyTimeout) {
      window.clearTimeout(this.melodyTimeout);
      this.melodyTimeout = null;
    }
    this.tanpuraOscs.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Already stopped
      }
    });
    this.tanpuraOscs = [];
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new TraditionalAudioSynthesizer();
