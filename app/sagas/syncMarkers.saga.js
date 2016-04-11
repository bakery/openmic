/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { put, apply } from 'redux-saga/effects';
import { ADD_MARKER, AUDIO_RECORDING_UPLOADED } from 'MarkerOverlay/constants';
import ProjectApi from 'project.api';
import _ from 'underscore';

function* doSyncMarkers(action) {
  // const rx = /\/p\/([a-zA-z0-9]+)$/ig;
  // const parts = rx.exec(action.payload.pathname);

  // if (parts) {
  //   console.error('@@getting project', action);
  //   yield put({
  //     type: START_LOADING_PROJECT,
  //   });

  //   const project = yield apply(ProjectApi, ProjectApi.getProjectById, [parts[1]]);

  //   yield put({
  //     type: ADD_MARKERS,
  //     payload: {
  //       markers: project.markers,
  //     },
  //   });

  //   yield put({
  //     type: PROJECT_LOADED,
  //     payload: {
  //       project: {
  //         id: project.objectId,
  //         image: project.image,
  //       },
  //     },
  //   });
  // }

  if (action.type === ADD_MARKER) {
    yield apply(ProjectApi, ProjectApi.syncMarker, [action.payload.marker]);
  }

  if (action.type === AUDIO_RECORDING_UPLOADED) {
    const markerWithSoundFile = _.extend({}, action.payload.marker, {
      sound: action.payload.sound,
    });
    yield apply(ProjectApi, ProjectApi.syncMarker, [markerWithSoundFile]);
  }
}

export function* syncMarkers() {
  yield* takeEvery([ADD_MARKER, AUDIO_RECORDING_UPLOADED], doSyncMarkers);
}
