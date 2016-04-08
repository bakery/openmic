/*
 *
 * MarkerOverlay reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_MARKER,
  MARKER_STATE,
  AUDIO_RECORDING_STARTED,
  AUDIO_RECORDING_COMPLETE,
} from './constants';
import _ from 'underscore';

const createMarker = (markerData) => {
  return _.extend({}, {
    state: MARKER_STATE.NORMAL,
  }, markerData);
};


const initialState = fromJS({
  items: {},
});

function markerOverlayReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MARKER:
      return state.updateIn(['items'], (items) => {
        return items.set(action.payload.marker.id,
          fromJS(createMarker(action.payload.marker))
        );
      });
    case AUDIO_RECORDING_STARTED:
      return state.updateIn(['items', action.payload.markerId], (marker) => {
        return marker.set('state', MARKER_STATE.RECORDING);
      });
    case AUDIO_RECORDING_COMPLETE:
      return state.updateIn(['items', action.payload.markerId], (marker) => {
        return marker.set('state', MARKER_STATE.NORMAL);
      });
    default:
      return state;
  }
}

export default markerOverlayReducer;
