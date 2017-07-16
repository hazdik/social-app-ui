
import { fromJS } from 'immutable';
import blogPageReducer from '../reducer';

describe('blogPageReducer', () => {
  it('returns the initial state', () => {
    expect(blogPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
