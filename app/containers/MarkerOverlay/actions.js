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
  INIT_MARKER_DELETION,
  CANCEL_MARKER_DELETION,
  CLICKED_OUTSIDE_OFF_MARKER_OVERLAY,
} from './constants';

export function addMarker(marker) {
  return {
    type: ADD_MARKER,
    payload: {
      marker,
    },
  };
}

export function requestAudioRecording(marker, maxRecordingTime) {
  return {
    type: REQUEST_AUDIO_RECORDING,
    payload: {
      marker,
      maxRecordingTime,
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

export function initMarkerDeletion(marker) {
  return {
    type: INIT_MARKER_DELETION,
    payload: {
      marker,
    },
  };
}

export function cancelMarkerDeletion(marker) {
  return {
    type: CANCEL_MARKER_DELETION,
    payload: {
      marker,
    },
  };
}

export function clickOutsideOfMarkerOverlay() {
  return {
    type: CLICKED_OUTSIDE_OFF_MARKER_OVERLAY,
  };
}

