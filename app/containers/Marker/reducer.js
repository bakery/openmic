import { fromJS } from 'immutable';
import {
  AUDIO_RECORDING_STARTED,
  MARKER_STATE,
  // AUDIO_RECORDING_FAILED,
  // REQUEST_AUDIO_RECORDING,
} from './constants';

const initialState = fromJS({
});

function markerReducer(state = initialState, action) {
  switch (action.type) {
    case AUDIO_RECORDING_STARTED:
      return state.updateIn(['recording'], () => true);
    default:
      return state;
  }
}

export default markerReducer;
