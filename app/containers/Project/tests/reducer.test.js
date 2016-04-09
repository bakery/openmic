import expect from 'expect';
import projectReducer from '../reducer';

describe('projectReducer', () => {
  it('returns the initial state', () => {
    expect(projectReducer(undefined, {})).toEqual({});
  });
});
