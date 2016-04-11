/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { take, call, apply, put, cancel, fork } from 'redux-saga/effects';
import {
  INIT_MARKER_DELETION,
  DELETE_MARKER,
  MARKER_DELETION_CONFIRMED,
  CANCEL_MARKER_DELETION,
} from 'MarkerOverlay/constants';
import { SagaCancellationException } from 'redux-saga';

const delay = (timeout) => new Promise((resolve) => setTimeout(() => resolve(), timeout));
let __currentDeletionTask = null;

function* deleteMarker(action) {
  try {
    yield call(delay, 3000);

    yield put({
      type: MARKER_DELETION_CONFIRMED,
      payload: {
        marker: action.payload.marker,
      },
    });

    yield call(delay, 400);

    yield put({
      type: DELETE_MARKER,
      payload: {
        marker: action.payload.marker,
      },
    });
  } catch (error) {
    if (error instanceof SagaCancellationException) {
      // the task has been cancelled
    }
  } finally {
    __currentDeletionTask = null;
  }
}

function* manageMarkerDeletion(action) {
  if (action.type === INIT_MARKER_DELETION) {
    __currentDeletionTask = yield fork(deleteMarker, action);
  }

  if (action.type === CANCEL_MARKER_DELETION) {
    console.error('@@@ got CANCEL_MARKER_DELETION');
    if (__currentDeletionTask) {
      yield cancel(__currentDeletionTask);
    }
  }
}


export function* delayedMarkerDelete() {
  yield* takeEvery([INIT_MARKER_DELETION, CANCEL_MARKER_DELETION], manageMarkerDeletion);
}
