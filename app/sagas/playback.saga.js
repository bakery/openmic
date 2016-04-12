/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga';
import { apply, put } from 'redux-saga/effects';
import {
  PLAY_AUDIO,
  PAUSE_AUDIO,
  AUDIO_PLAYBACK_COMPLETE,
} from 'MarkerOverlay/constants';
import Playback from 'playback';

const thePlayer = new Playback();
let currentlyPlayingMarker = null;

function* doPlay(action) {
  try {
    if (action.type === PLAY_AUDIO) {
      if (thePlayer.isPlaying() && currentlyPlayingMarker) {
        yield put({
          type: AUDIO_PLAYBACK_COMPLETE,
          payload: {
            marker: currentlyPlayingMarker,
          },
        });
      }

      currentlyPlayingMarker = action.payload.marker;
      yield apply(thePlayer, thePlayer.play, [action.payload.marker.sound]);
      yield put({
        type: AUDIO_PLAYBACK_COMPLETE,
        payload: {
          marker: action.payload.marker,
        },
      });

      currentlyPlayingMarker = null;
    }

    if (action.type === PAUSE_AUDIO) {
      yield apply(thePlayer, thePlayer.pause);
    }
  } catch (e) {
    console.error('error with playback', e);
    // yield put({
    //   type: AUDIO_RECORDING_FAILED,
    //   payload: {
    //     error: e,
    //     markerId: action.payload.markerId,
    //   },
    // });
  }
}


export function* playback() {
  yield* takeEvery([PLAY_AUDIO, PAUSE_AUDIO], doPlay);
}
