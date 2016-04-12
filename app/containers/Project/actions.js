/*
 *
 * Project actions
 *
 */

import {
  PROJECT_IMAGE_LOADED,
} from './constants';

export function reportProjectImageLoaded(project) {
  return {
    type: PROJECT_IMAGE_LOADED,
    payload: {
      project,
    },
  };
}
