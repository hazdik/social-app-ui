
import { fromJS } from 'immutable';
import addBlogPageReducer from '../reducer';

describe('addBlogPageReducer', () => {
  it('returns the initial state', () => {
    expect(addBlogPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
