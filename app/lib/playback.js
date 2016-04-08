class Playback {
  constructor() {
    this.audio = document.querySelector('audio');
  }

  play(sound) {
    return new Promise((resolve) => {
      const onEnded = () => {
        console.error('Playback:ended');
        resolve();
        this.audio.removeEventListener('ended', onEnded);
      };

      this.audio.addEventListener('ended', onEnded);
      this.audio.src = sound;
      this.audio.play();
    });
  }

  pause() {
    return new Promise((resolve) => {
      this.audio.pause();
      resolve();
    });
  }
}

export default Playback;
