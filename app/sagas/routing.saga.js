/* eslint-disable no-constant-condition */

// import { take, call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { browserHistory } from 'react-router';
import {
  IMAGE_UPLOAD_COMPLETE,
} from '../containers/ImageSelector/constants';

function* navigateToEditor(action) {
  browserHistory.push('/editor?image=' + encodeURIComponent(action.payload));
}

export function* routing() {
  yield* takeEvery(IMAGE_UPLOAD_COMPLETE, navigateToEditor);
}
