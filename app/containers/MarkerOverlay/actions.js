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

export function playSound(markerId, sound) {
  return {
    type: PLAY_AUDIO,
    payload: {
      markerId,
      sound,
    },
  };
}

export function pauseSound(markerId, sound) {
  return {
    type: PAUSE_AUDIO,
    payload: {
      markerId,
      sound,
    },
  };
}
