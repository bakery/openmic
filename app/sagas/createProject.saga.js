/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { apply } from 'redux-saga/effects';
import { CREATE_PROJECT } from 'Project/constants';
import ProjectApi from 'project.api';
import { browserHistory } from 'react-router';

function* doCreateProject(action) {
  const project = yield apply(ProjectApi, ProjectApi.createProject, [action.payload.image]);
  browserHistory.push(`/p/${project.objectId}`);
}

export function* createProject() {
  yield* takeEvery(CREATE_PROJECT, doCreateProject);
}
