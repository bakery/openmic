class Playback {
  constructor() {
    this.audio = document.querySelector('audio');
    this.playing = false;
  }

  play(sound) {
    return new Promise((resolve) => {
      const onEnded = () => {
        console.error('Playback:ended');
        resolve();
        this.audio.removeEventListener('ended', onEnded);
        this.playing = false;
      };

      this.audio.addEventListener('ended', onEnded);
      this.audio.src = sound;
      this.audio.play();
      this.playing = true;
    });
  }

  stop() {
    return new Promise((resolve) => {
      this.audio.stop();
      resolve();
    });
  }

  pause() {
    return new Promise((resolve) => {
      this.audio.pause();
      resolve();
    });
  }

  isPlaying() {
    return this.playing;
  }
}

export default Playback;
