/*
 *
 * MarkerOverlay actions
 *
 */

import {
  ADD_MARKER,
  REQUEST_AUDIO_RECORDING,
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

export function requestAudioRecording(markerId) {
  return {
    type: REQUEST_AUDIO_RECORDING,
    payload: {
      markerId,
    },
  };
}
