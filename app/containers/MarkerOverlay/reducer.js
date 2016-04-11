/*
 *
 * MarkerOverlay reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_MARKER,
  ADD_MARKERS,
  MARKER_STATE,
  AUDIO_RECORDING_STARTED,
  AUDIO_RECORDING_COMPLETE,
  PLAY_AUDIO,
  PAUSE_AUDIO,
  AUDIO_PLAYBACK_COMPLETE,
  AUDIO_RECORDING_UPLOADED,
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
    case ADD_MARKERS:
      return state.withMutations((s) => {
        (action.payload.markers || []).forEach((marker) => {
          s.updateIn(['items'], (items) => {
            return items.set(marker.id, fromJS(createMarker(marker)));
          });
        });
      });
    case AUDIO_RECORDING_STARTED:
      return state.updateIn(['items', action.payload.marker.id], (marker) => {
        return marker.set('state', MARKER_STATE.RECORDING);
      });
    case AUDIO_RECORDING_COMPLETE:
      return state.updateIn(['items', action.payload.marker.id], (marker) => {
        return marker.withMutations((m) => {
          m.set('state', MARKER_STATE.NORMAL);
          m.set('sound', action.payload.sound);
        });
      });
    case AUDIO_RECORDING_UPLOADED:
      return state.updateIn(['items', action.payload.marker.id], (marker) => {
        return marker.withMutations((m) => {
          m.set('sound', action.payload.sound);
        });
      });
    case PLAY_AUDIO:
      return state.updateIn(['items', action.payload.marker.id], (marker) => {
        return marker.set('state', MARKER_STATE.PLAYING);
      });
    case PAUSE_AUDIO:
      return state.updateIn(['items', action.payload.marker.id], (marker) => {
        return marker.set('state', MARKER_STATE.NORMAL);
      });
    case AUDIO_PLAYBACK_COMPLETE:
      const currentlyPlaying = state.get('items').find(
        (i) => i.get('state') === MARKER_STATE.PLAYING
      );
      if (currentlyPlaying) {
        return state.updateIn(['items', currentlyPlaying.get('id')], (marker) => {
          return marker.set('state', MARKER_STATE.NORMAL);
        });
      }
      return state;
    default:
      return state;
  }
}

export default markerOverlayReducer;
