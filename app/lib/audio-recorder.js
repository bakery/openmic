// import Browser from './browser';


class AudioRecorder {
  constructor() {
    this.isReady = false;
    this.recordedBlobs = [];
  }

  initAudio() {
    if (!navigator.getUserMedia) {
      navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    }

    navigator.getUserMedia({ audio: true }, (stream) => this.onGotStream(stream), (e) => {
      console.log('no functiona');
      console.log(e);
    });
  }

  onGotStream(stream) {
    this.isReady = true;
    this.stream = stream;
    this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    // this.mediaRecorder.onstop = (event) => {
    //   console.log('Recorder stopped: ', event);
    // };
    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data);
      }
    };
  }

  startRecording() {
    console.log('RECORDER : start recording');
    if (this.mediaRecorder) {
      this.mediaRecorder.start(10);
    }
  }

  stopRecording() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
    }
  }

  saveRecording() {
    const blob = new Blob(this.recordedBlobs, { type: 'audio/webm' });
    const audioPlayer = document.querySelector('audio');
    audioPlayer.src = window.URL.createObjectURL(blob);
    audioPlayer.play();
  }
}

export default AudioRecorder;
