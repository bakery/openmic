/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  IMAGE_UPLOAD_REQUESTED,
  // IMAGE_UPLOAD_FAILED,
  IMAGE_UPLOAD_COMPLETE,
} from '../containers/ImageSelector/constants';
import uploader from 'uploader';

// TODO: replace this with an actual file upload
function* doUploadImage(action) {
  console.error('uploading image', action);
  const uploadedFile = yield call((data) => {
    console.error('running saga', data);
    uploader.upload(action.payload[0]);
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        imageUrl: 'http://images6.fanpop.com/image/photos/33400000/Cute-Cats-cats-33440930-1280-800.jpg',
      }), 5000);
    });
  }, action.payload);

  // yield put({ type: IMAGE_UPLOAD_COMPLETE, payload: uploadedFile });
}

export function* uploadImage() {
  yield* takeEvery(IMAGE_UPLOAD_REQUESTED, doUploadImage);
}
