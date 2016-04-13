/* eslint-disable no-case-declarations */

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
  INIT_MARKER_DELETION,
  CANCEL_MARKER_DELETION,
  MARKER_DELETION_CONFIRMED,
  DELETE_MARKER,
  AUDIO_RECORDING_UPLOADING,
} from './constants';
import _ from 'underscore';

const createMarker = (markerData) => _.extend({}, { state: MARKER_STATE.NORMAL }, markerData);
const initialState = fromJS({
  items: {},
});

function markerOverlayReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MARKER:

      // XX: if there are any markers without sound attached to them,
      // get rid of them before adding a new marker
      return state.updateIn(['items'],
        (items) => items.filter((m) => typeof m.get('sound') !== 'undefined')
          .set(action.payload.marker.id,
            fromJS(createMarker(action.payload.marker))
          )
      );
    case ADD_MARKERS:
      return state.withMutations((s) => {
        (action.payload.markers || []).forEach((marker) => {
          s.updateIn(['items'],
            (items) => items.set(marker.id, fromJS(createMarker(marker)))
          );
        });
      });
    case AUDIO_RECORDING_STARTED:
      return state.updateIn(['items', action.payload.marker.id],
        (marker) => marker.set('state', MARKER_STATE.RECORDING)
      );
    case AUDIO_RECORDING_COMPLETE:
      return state.updateIn(['items', action.payload.marker.id],
        (marker) => marker.set('state', MARKER_STATE.NORMAL)
      );
    case AUDIO_RECORDING_UPLOADING:
      return state.updateIn(['items', action.payload.marker.id],
        (marker) => marker.set('state', MARKER_STATE.UPLOADING)
      );
    case AUDIO_RECORDING_UPLOADED:
      return state.updateIn(['items', action.payload.marker.id],
        (marker) => marker.withMutations((m) => {
          m.set('state', MARKER_STATE.NORMAL);
          m.set('sound', action.payload.sound);
        })
      );
    case PLAY_AUDIO:
      return state.updateIn(['items', action.payload.marker.id],
        (marker) => marker.set('state', MARKER_STATE.PLAYING)
      );
    case PAUSE_AUDIO:
      return state.updateIn(['items', action.payload.marker.id],
        (marker) => marker.set('state', MARKER_STATE.NORMAL)
      );
    case AUDIO_PLAYBACK_COMPLETE:
      return state.updateIn(['items', action.payload.marker.id],
        (marker) => marker.set('state', MARKER_STATE.NORMAL)
      );
    case INIT_MARKER_DELETION:
      return state.updateIn(['items', action.payload.marker.id],
        (marker) => marker.set('state', MARKER_STATE.DELETING)
      );
    case MARKER_DELETION_CONFIRMED:
      const mtd = state.get('items').find(
        (i) => i.get('id') === action.payload.marker.id
      );
      if (mtd && mtd.get('state') === MARKER_STATE.DELETING) {
        return state.updateIn(['items', action.payload.marker.id],
          (marker) => marker.set('state', MARKER_STATE.DELETION_CONFIRMED)
        );
      }

      return state;
    case CANCEL_MARKER_DELETION:
      return state.updateIn(['items', action.payload.marker.id],
        (marker) => marker.set('state', MARKER_STATE.NORMAL)
      );
    case DELETE_MARKER:
      return state.updateIn(['items'],
        (items) => items.filter((m) => m.get('id') !== action.payload.marker.id)
      );
    default:
      return state;
  }
}

export default markerOverlayReducer;
