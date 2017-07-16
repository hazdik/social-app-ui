/*
 *
 * AddBlogPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_ATTRIBUTES,
  SAVE_BLOG_REQUEST,
  SAVE_BLOG_SUCCESS,
  SAVE_BLOG_ERROR,
} from './constants';

const initialState = fromJS({
  blog: {
    title: '',
    body: '',
    ui: {
      saving: false,
      error: false,
    },
  },
});

function addBlogPageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ATTRIBUTES:
      return state
        .setIn(['blog', 'title'], action.attributes.title)
        .setIn(['blog', 'body'], action.attributes.body);
    case SAVE_BLOG_REQUEST:
      return state
        .setIn(['blog', 'ui', 'saving'], true)
        .setIn(['blog', 'ui', 'error'], false);
    case SAVE_BLOG_SUCCESS:
      return state
        .setIn(['blog', 'title'], '')
        .setIn(['blog', 'body'], '')
        .setIn(['blog', 'ui', 'saving'], false);
    case SAVE_BLOG_ERROR:
      return state
        .setIn(['blog', 'ui', 'error'], action.error)
        .setIn(['blog', 'ui', 'saving'], false);
    default:
      return state;
  }
}

export default addBlogPageReducer;
