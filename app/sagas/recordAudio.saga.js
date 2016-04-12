/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { apply, put, call } from 'redux-saga/effects';
import {
  REQUEST_AUDIO_RECORDING,
  AUDIO_RECORDING_STARTED,
  AUDIO_RECORDING_COMPLETE,
  AUDIO_RECORDING_FAILED,
  STOP_AUDIO_RECORDING,
} from 'MarkerOverlay/constants';
import AudioRecorder from 'audio-recorder';

const theRecorder = new AudioRecorder();
const delay = (timeout) => new Promise((resolve) => setTimeout(() => resolve(), timeout));

function* doRecordAudio(action) {
  try {
    if (action.type === REQUEST_AUDIO_RECORDING) {
      yield apply(theRecorder, theRecorder.startRecording);

      yield put({
        type: AUDIO_RECORDING_STARTED,
        payload: {
          marker: action.payload.marker,
        },
      });

      yield call(delay, action.payload.maxRecordingTime);

      if (theRecorder.isRecording()) {
        yield put({
          type: STOP_AUDIO_RECORDING,
          payload: {
            marker: action.payload.marker,
          },
        });
      }
    }

    if (action.type === STOP_AUDIO_RECORDING && theRecorder.isRecording()) {
      const sound = yield apply(theRecorder, theRecorder.stopRecording);
      console.error('recording stopped ok');
      yield put({
        type: AUDIO_RECORDING_COMPLETE,
        payload: {
          marker: action.payload.marker,
          sound: sound.url,
          file: sound.file,
        },
      });
    }
  } catch (e) {
    console.error('recording did not start', e);
    yield put({
      type: AUDIO_RECORDING_FAILED,
      payload: {
        error: e,
        markerId: action.payload.marker.id,
      },
    });
  }
}


export function* recordAudio() {
  yield* takeEvery([REQUEST_AUDIO_RECORDING, STOP_AUDIO_RECORDING], doRecordAudio);
}
