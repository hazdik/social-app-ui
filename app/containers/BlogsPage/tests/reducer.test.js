
import { fromJS } from 'immutable';
import blogsPageReducer from '../reducer';

describe('blogsPageReducer', () => {
  it('returns the initial state', () => {
    expect(blogsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
