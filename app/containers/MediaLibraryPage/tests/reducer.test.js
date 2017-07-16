
import { fromJS } from 'immutable';
import mediaLibraryPageReducer from '../reducer';

describe('mediaLibraryPageReducer', () => {
  it('returns the initial state', () => {
    expect(mediaLibraryPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
