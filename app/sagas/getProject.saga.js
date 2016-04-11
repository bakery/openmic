/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { put, apply } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { START_LOADING_PROJECT, PROJECT_LOADED } from 'Project/constants';
import { ADD_MARKERS } from 'MarkerOverlay/constants';
import ProjectApi from 'project.api';

function* doGetProject(action) {
  const rx = /\/p\/([a-zA-z0-9]+)$/ig;
  const parts = rx.exec(action.payload.pathname);

  if (parts) {
    console.error('@@getting project', action);
    yield put({
      type: START_LOADING_PROJECT,
    });

    const project = yield apply(ProjectApi, ProjectApi.getProjectById, [parts[1]]);

    yield put({
      type: ADD_MARKERS,
      payload: {
        markers: project.markers,
      },
    });

    yield put({
      type: PROJECT_LOADED,
      payload: {
        project: {
          id: project.objectId,
          image: project.image,
        },
      },
    });
  }
}

export function* getProject() {
  yield* takeEvery(LOCATION_CHANGE, doGetProject);
}
