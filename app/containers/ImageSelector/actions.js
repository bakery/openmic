/*
 *
 * ImageSelector actions
 *
 */

import {
  DEFAULT_ACTION,
  IMAGE_UPLOAD_REQUESTED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function uploadImage(file) {
  console.error('doing it');
  return {
    type: IMAGE_UPLOAD_REQUESTED,
    payload: file,
  };
}
