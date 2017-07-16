/*
 *
 * BlogsPage reducer
 *
 */

import { fromJS, List } from 'immutable';

import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  HAS_UPDATED_BLOGS,
  HAS_NEW_BLOGS,
} from './constants';

const initialState = fromJS({
  blogs: {
    data: List(),
    ui: {
      loading: false,
      error: false,
    },
  },
  metadata: {
    hasUpdatedBlogs: false,
    hasNewBlogs: false,
  },
});

function blogsPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
      return state
        .setIn(['blogs', 'ui', 'loading'], true)
        .setIn(['blogs', 'ui', 'error'], false);
    case FETCH_BLOGS_SUCCESS:
      return state
        .setIn(['blogs', 'data'], action.blogs.data)
        .setIn(['blogs', 'ui', 'loading'], false)
        .setIn(['metadata', 'hasUpdatedBlogs'], false)
        .setIn(['metadata', 'hasNewBlogs'], false);
    case FETCH_BLOGS_ERROR:
      return state
        .setIn(['blogs', 'ui', 'error'], action.error)
        .setIn(['blogs', 'ui', 'loading'], false);
    case HAS_UPDATED_BLOGS:
      return state
        .setIn(['metadata', 'hasUpdatedBlogs'], true);
    case HAS_NEW_BLOGS:
      return state
        .setIn(['metadata', 'hasNewBlogs'], true);
    default:
      return state;
  }
}

export default blogsPageReducer;
