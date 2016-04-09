/*
 *
 * Project reducer
 *
 */

import { fromJS } from 'immutable';
import {
  START_LOADING_PROJECT,
  PROJECT_LOADED,
} from './constants';

const initialState = fromJS({
  loading: false,
});

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_PROJECT:
      return state.updateIn(['loading'], () => true);
    case PROJECT_LOADED:
      return state.withMutations((s) => {
        s.updateIn(['loading'], () => false);
        s.set('project', action.payload.project);
      });
    default:
      return state;
  }
}

export default projectReducer;
