/**
 * Export all your sagas here so the sagaMiddleware imports them
 */
import { uploadImage } from './uploadImage.saga';
import { routing } from './routing.saga';

export default [
  uploadImage,
  routing,
];
