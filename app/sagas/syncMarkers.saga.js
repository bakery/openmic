/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { put, apply } from 'redux-saga/effects';
import { AUDIO_RECORDING_UPLOADED, DELETE_MARKER } from 'MarkerOverlay/constants';
import ProjectApi from 'project.api';
import _ from 'underscore';

function* doSyncMarkers(action) {
  // if (action.type === ADD_MARKER) {
  //   yield apply(ProjectApi, ProjectApi.syncMarker, [action.payload.marker]);
  // }

  if (action.type === AUDIO_RECORDING_UPLOADED) {
    const markerWithSoundFile = _.extend({}, action.payload.marker, {
      sound: action.payload.sound,
    });
    yield apply(ProjectApi, ProjectApi.syncMarker, [markerWithSoundFile]);
  }

  if (action.type === DELETE_MARKER) {
    yield apply(ProjectApi, ProjectApi.deleteMarker, [action.payload.marker]);
  }
}

export function* syncMarkers() {
  yield* takeEvery([AUDIO_RECORDING_UPLOADED, DELETE_MARKER], doSyncMarkers);
}
