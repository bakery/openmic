/*
 *
 * MarkerOverlay actions
 *
 */

import {
  ADD_MARKER,
} from './constants';

export function addMarker(marker) {
  console.error('adding marker', marker);
  return {
    type: ADD_MARKER,
    payload: {
      marker,
    },
  };
}
