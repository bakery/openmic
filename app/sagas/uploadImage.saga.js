/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  IMAGE_UPLOAD_REQUESTED,
  IMAGE_UPLOAD_COMPLETE,
  RESET_IMAGE_SELECTOR,
} from 'ImageSelector/constants';
import { CREATE_PROJECT } from 'Project/constants';
import uploader from 'uploader';

function* doUploadImage(action) {
  const uploadedFile = yield call(
    () => uploader.upload(action.payload.file, action.payload.fileName),
    action.payload
  );

  yield put({ type: IMAGE_UPLOAD_COMPLETE, payload: uploadedFile });
  yield put({ type: CREATE_PROJECT, payload: { image: uploadedFile } });
}

function* resetImageLoader() {
  yield put({ type: RESET_IMAGE_SELECTOR });
}

function* dispatchAction(action) {
  if (action.type === IMAGE_UPLOAD_REQUESTED) {
    yield doUploadImage(action);
  }

  if (action.type === LOCATION_CHANGE && action.payload.pathname === '/') {
    yield resetImageLoader();
  }
}

export function* uploadImage() {
  yield* takeEvery([IMAGE_UPLOAD_REQUESTED, LOCATION_CHANGE], dispatchAction);
}
