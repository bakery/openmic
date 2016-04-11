/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  IMAGE_UPLOAD_REQUESTED,
  IMAGE_UPLOAD_COMPLETE,
} from 'ImageSelector/constants';
import { CREATE_PROJECT } from 'Project/constants';
import uploader from 'uploader';

// TODO: replace this with an actual file upload
function* doUploadImage(action) {
  console.error('uploading image', action);
  const uploadedFile = yield call((data) => {
    console.error('running saga', data);
    return uploader.upload(action.payload.file, action.payload.fileName);
  }, action.payload);

  yield put({ type: IMAGE_UPLOAD_COMPLETE, payload: uploadedFile });
  yield put({ type: CREATE_PROJECT, payload: { image: uploadedFile } });
}

export function* uploadImage() {
  yield* takeEvery(IMAGE_UPLOAD_REQUESTED, doUploadImage);
}
