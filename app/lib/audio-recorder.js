/* global MediaRecorder: false */

class AudioRecorder {
  constructor() {
    this.isReady = false;
    this.recordedBlobs = [];
    this.recording = false;
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
    if (this.mediaRecorder) {
      this.mediaRecorder.start(10);
      this.recording = true;
    }
  }

  stopRecording() {
    return new Promise((resolve) => {
      if (this.mediaRecorder) {
        this.mediaRecorder.stop();
        this.recording = false;
      }

      resolve(this.saveRecording());
    });
  }

  saveRecording() {
    const file = new Blob(this.recordedBlobs, { type: 'audio/webm' });
    return {
      file,
      url: window.URL.createObjectURL(file),
    };
  }

  isRecording() {
    return this.recording;
  }
}

export default AudioRecorder;
