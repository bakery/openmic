/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { apply, put } from 'redux-saga/effects';
import {
  REQUEST_AUDIO_RECORDING,
  AUDIO_RECORDING_STARTED,
  AUDIO_RECORDING_COMPLETE,
  AUDIO_RECORDING_FAILED,
  STOP_AUDIO_RECORDING,
} from 'MarkerOverlay/constants';
import AudioRecorder from 'audio-recorder';

const theRecorder = new AudioRecorder();

function* doRecordAudio(action) {
  try {
    if (action.type === REQUEST_AUDIO_RECORDING) {
      yield apply(theRecorder, theRecorder.startRecording);
      console.error('recording started ok');
      yield put({
        type: AUDIO_RECORDING_STARTED,
        payload: {
          markerId: action.payload.markerId,
        },
      });
    }

    if (action.type === STOP_AUDIO_RECORDING) {
      const sound = yield apply(theRecorder, theRecorder.stopRecording);
      console.error('recording stopped ok');
      yield put({
        type: AUDIO_RECORDING_COMPLETE,
        payload: {
          markerId: action.payload.markerId,
          sound,
        },
      });
    }
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
  yield* takeEvery([REQUEST_AUDIO_RECORDING, STOP_AUDIO_RECORDING], doRecordAudio);
}
