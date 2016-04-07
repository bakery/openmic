import expect from 'expect';
import soundButtonReducer from '../reducer';

describe('soundButtonReducer', () => {
  it('returns the initial state', () => {
    expect(soundButtonReducer(undefined, {})).toEqual({});
  });
});
