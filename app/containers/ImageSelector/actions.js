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
  const fileExtension = file.type.split('image/')[1];
  const fileName = `${(new Date()).getTime()}.${fileExtension}`;

  return {
    type: IMAGE_UPLOAD_REQUESTED,
    payload: {
      file,
      fileName,
      fileExtension,
    },
  };
}
