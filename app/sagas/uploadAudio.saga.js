/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  AUDIO_RECORDING_COMPLETE,
  AUDIO_RECORDING_UPLOADED,
  AUDIO_RECORDING_UPLOADING,
} from 'MarkerOverlay/constants';
import uploader from 'uploader';

function* doUploadAudio(action) {
  yield put({
    type: AUDIO_RECORDING_UPLOADING,
    payload: {
      marker: action.payload.marker,
    },
  });

  const uploadedFile = yield call(
    () => uploader.upload(action.payload.file, `${new Date().getTime()}.webm`),
    action.payload
  );

  yield put({
    type: AUDIO_RECORDING_UPLOADED,
    payload: {
      marker: action.payload.marker,
      sound: uploadedFile,
    },
  });
}

export function* uploadAudio() {
  yield* takeEvery(AUDIO_RECORDING_COMPLETE, doUploadAudio);
}
