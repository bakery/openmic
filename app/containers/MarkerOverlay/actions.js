/*
 *
 * MarkerOverlay actions
 *
 */

import {
  ADD_MARKER,
  REQUEST_AUDIO_RECORDING,
  STOP_AUDIO_RECORDING,
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

export function stopAudioRecording(markerId) {
  return {
    type: STOP_AUDIO_RECORDING,
    payload: {
      markerId,
    },
  };
}