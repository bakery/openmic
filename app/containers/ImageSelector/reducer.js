/*
 *
 * ImageSelector reducer
 *
 */

import { fromJS } from 'immutable';
import {
  IMAGE_UPLOAD_REQUESTED,
  IMAGE_UPLOAD_FAILED,
  IMAGE_UPLOAD_COMPLETE,
  UPLOADER_STATUS,
  RESET_IMAGE_SELECTOR,
} from './constants';

const initialState = fromJS({
  status: UPLOADER_STATUS.IDLE,
});

function imageSelectorReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_IMAGE_SELECTOR:
      return state.updateIn(['status'], () => UPLOADER_STATUS.IDLE);
    case IMAGE_UPLOAD_REQUESTED:
      return state.updateIn(['status'], () => UPLOADER_STATUS.UPLOADING);
    case IMAGE_UPLOAD_FAILED:
      return state.updateIn(['status'], () => UPLOADER_STATUS.FAILED);
    case IMAGE_UPLOAD_COMPLETE:
      return state.updateIn(['status'], () => UPLOADER_STATUS.COMPLETE);
    default:
      return state;
  }
}

export default imageSelectorReducer;
