import expect from 'expect';
import imageSelectorReducer from '../reducer';

describe('imageSelectorReducer', () => {
  it('returns the initial state', () => {
    expect(imageSelectorReducer(undefined, {})).toEqual({});
  });
});
