/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { put, apply, take } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { START_LOADING_PROJECT, PROJECT_LOADED, PROJECT_IMAGE_LOADED } from 'Project/constants';
import { ADD_MARKERS } from 'MarkerOverlay/constants';
import ProjectApi from 'project.api';
import _ from 'underscore';

function* doGetProject(action) {
  const rx = /\/p\/([a-zA-z0-9]+)$/ig;
  const parts = rx.exec(action.payload.pathname);

  if (parts) {
    yield put({
      type: START_LOADING_PROJECT,
    });

    const project = yield apply(ProjectApi, ProjectApi.getProjectById, [parts[1]]);

    yield put({
      type: PROJECT_LOADED,
      payload: {
        project: {
          id: project.objectId,
          image: project.image,
        },
      },
    });

    yield take(PROJECT_IMAGE_LOADED);

    yield put({
      type: ADD_MARKERS,
      payload: {
        markers: _.map(project.markers, (m) => _.extend(m, { projectId: project.objectId })),
      },
    });
  }
}

export function* getProject() {
  yield* takeEvery(LOCATION_CHANGE, doGetProject);
}
