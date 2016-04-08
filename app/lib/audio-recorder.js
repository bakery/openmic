// import Browser from './browser';


class AudioRecorder {
  constructor() {
    this.isReady = false;
    this.recordedBlobs = [];
  }

  initAudio(callback) {
    if (!navigator.getUserMedia) {
      navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    }

    navigator.getUserMedia({ audio: true }, (stream) => {
      this.onGotStream(stream);
      callback.call(this, null);
    }, (e) => {
      console.log('no functiona');
      console.log(e);
      callback.call(this, e);
    });
  }

  onGotStream(stream) {
    this.isReady = true;
    this.stream = stream;
    this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data);
      }
    };
  }

  startRecording() {
    return new Promise((resolve, reject) => {
      this.recordedBlobs = [];
      if (this.isReady) {
        this.__record();
        resolve();
        return;
      }

      // init recorder first
      this.initAudio((error) => {
        if (error) {
          reject(error);
          return;
        }

        this.__record();
        resolve();
      });
    });
  }

  __record() {
    console.log('RECORDER : recording');
    if (this.mediaRecorder) {
      this.mediaRecorder.start(10);
    }
  }

  stopRecording() {
    return new Promise((resolve) => {
      if (this.mediaRecorder) {
        this.mediaRecorder.stop();
      }
      this.saveRecording();
      resolve();
    });
  }

  saveRecording() {
    const blob = new Blob(this.recordedBlobs, { type: 'audio/webm' });
    const audioPlayer = document.querySelector('audio');
    audioPlayer.src = window.URL.createObjectURL(blob);
    audioPlayer.play();
  }
}

export default AudioRecorder;
