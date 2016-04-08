import expect from 'expect';
import audioReducer from '../reducer';

describe('audioReducer', () => {
  it('returns the initial state', () => {
    expect(audioReducer(undefined, {})).toEqual({});
  });
});
