import { createSelector } from 'reselect';

const imageUploaderSelector = (state) => {
  return state.get('imageSelector');
};

export default imageUploaderSelector;
