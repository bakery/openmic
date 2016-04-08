/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { apply, put } from 'redux-saga/effects';
import {
  REQUEST_AUDIO_RECORDING,
  AUDIO_RECORDING_STARTED,
  AUDIO_RECORDING_FAILED,
} from 'MarkerOverlay/constants';
import AudioRecorder from 'audio-recorder';

const theRecorder = new AudioRecorder();

function* doRecordAudio(action) {
  try {
    yield apply(theRecorder, theRecorder.startRecording);
    console.error('recording started ok');
    yield put({
      type: AUDIO_RECORDING_STARTED,
      payload: {
        markerId: action.payload.markerId,
      },
    });
  } catch (e) {
    console.error('recording did not start', e);
    yield put({
      type: AUDIO_RECORDING_FAILED,
      payload: {
        error: e,
        markerId: action.payload.markerId,
      },
    });
  }
}

export function* recordAudio() {
  yield* takeEvery(REQUEST_AUDIO_RECORDING, doRecordAudio);
}
