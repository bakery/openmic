import expect from 'expect';
import markerOverlayReducer from '../reducer';

describe('markerOverlayReducer', () => {
  it('returns the initial state', () => {
    expect(markerOverlayReducer(undefined, {})).toEqual({});
  });
});
