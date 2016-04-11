/*
 *
 * MarkerOverlay actions
 *
 */

import {
  ADD_MARKER,
  REQUEST_AUDIO_RECORDING,
  STOP_AUDIO_RECORDING,
  PLAY_AUDIO,
  PAUSE_AUDIO,
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

export function requestAudioRecording(marker) {
  return {
    type: REQUEST_AUDIO_RECORDING,
    payload: {
      marker,
    },
  };
}

export function stopAudioRecording(marker) {
  return {
    type: STOP_AUDIO_RECORDING,
    payload: {
      marker,
    },
  };
}

export function playSound(marker) {
  return {
    type: PLAY_AUDIO,
    payload: {
      marker,
    },
  };
}

export function pauseSound(marker) {
  return {
    type: PAUSE_AUDIO,
    payload: {
      marker,
    },
  };
}
