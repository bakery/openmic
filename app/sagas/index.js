/**
 * Export all your sagas here so the sagaMiddleware imports them
 */
import { uploadImage } from './uploadImage.saga';
import { routing } from './routing.saga';
import { recordAudio } from './recordAudio.saga';
import { playback } from './playback.saga';

export default [
  uploadImage,
  routing,
  recordAudio,
  playback,
];
