/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  AUDIO_RECORDING_COMPLETE,
  AUDIO_RECORDING_UPLOADED,
} from 'MarkerOverlay/constants';
import uploader from 'uploader';

// TODO: replace this with an actual file upload
function* doUploadAudio(action) {
  console.error('uploading sound', action);
  const uploadedFile = yield call((data) => {
    console.error('running saga', data);
    return uploader.upload(action.payload.file, `${new Date().getTime()}.webm`);
  }, action.payload);

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
