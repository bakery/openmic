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
import {
  AUDIO_RECORDING_STARTED,
  AUDIO_RECORDING_COMPLETE,
  AUDIO_RECORDING_FAILED,
} from 'MarkerOverlay/constants';

const initialState = fromJS({
  loading: false,
  recording: false,
  maxRecordingTime: 1000 * 15,
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
    case AUDIO_RECORDING_STARTED:
      return state.updateIn(['recording'], () => true);
    case AUDIO_RECORDING_COMPLETE:
    case AUDIO_RECORDING_FAILED:
      return state.updateIn(['recording'], () => false);
    default:
      return state;
  }
}

export default projectReducer;
