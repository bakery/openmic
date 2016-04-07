/*
 *
 * MarkerOverlay reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_MARKER,
} from './constants';

const initialState = fromJS({
  markers: [],
});

function markerOverlayReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MARKER:
      return state.updateIn(['markers'], (markers) => markers.push(action.payload.marker));
    default:
      return state;
  }
}

export default markerOverlayReducer;
