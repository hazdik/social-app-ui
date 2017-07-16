/*
 *
 * BlogPage reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_ERROR,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_ERROR,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  SAVE_COMMENT_REQUEST,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_ERROR,
  UPDATE_COMMENT,
  UPDATE_ATTRIBUTES,
  SET_BLOG_ID,
  HAS_UPDATED_OR_NEW_COMMENTS,
  UPDATE_COMMENTS,
} from './constants';

const initialState = fromJS({
  blog: {
    data: {
      id: null,
      title: '',
      body: '',
    },
    ui: {
      loading: false,
      error: false,
      saving: false,
    },
  },
  comments: {
    data: List(),
    ui: {
      loading: false,
      error: false,
    },
  },
  comment: {
    data: {
      body: '',
    },
    ui: {
      saving: false,
      error: false,
    },
  },
  metadata: {
    hasUpdatedComments: false,
  },
});

let updatedState;

function blogPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOG_REQUEST:
      return state
        .setIn(['blog', 'ui', 'loading'], true)
        .setIn(['blog', 'ui', 'error'], false);
    case FETCH_BLOG_SUCCESS:
      return state
        .setIn(['blog', 'data', 'id'], action.blog.data.id)
        .setIn(['blog', 'data', 'title'], action.blog.data.attributes.title)
        .setIn(['blog', 'data', 'body'], action.blog.data.attributes.body)
        .setIn(['blog', 'ui', 'loading'], false);
    case FETCH_BLOG_ERROR:
      return state
        .setIn(['blog', 'ui', 'error'], action.error)
        .setIn(['blog', 'ui', 'loading'], false);
    case FETCH_COMMENTS_REQUEST:
      return state
        .setIn(['comments', 'ui', 'loading'], true)
        .setIn(['comments', 'ui', 'error'], false);
    case FETCH_COMMENTS_SUCCESS:
      return state
        .setIn(['comments', 'data'], action.comments.data)
        .setIn(['comments', 'ui', 'loading'], false);
    case FETCH_COMMENTS_ERROR:
      return state
        .setIn(['comments', 'ui', 'error'], action.error)
        .setIn(['comments', 'ui', 'loading'], false);
    case UPDATE_COMMENT:
      return state
        .setIn(['comment', 'data', 'body'], action.comment);
    case SAVE_COMMENT_REQUEST:
      return state
        .setIn(['comment', 'ui', 'saving'], true)
        .setIn(['comment', 'ui', 'error'], false);
    case SAVE_COMMENT_SUCCESS:
      return state
        .setIn(['comment', 'data', 'body'], '')
        .setIn(['comment', 'ui', 'saving'], false);
    case SAVE_COMMENT_ERROR:
      return state
        .setIn(['comment', 'ui', 'error'], action.error)
        .setIn(['comment', 'ui', 'saving'], false);
    case SET_BLOG_ID:
      return state
        .setIn(['blog', 'data', 'id'], action.id);
    case HAS_UPDATED_OR_NEW_COMMENTS:
      return state
        .setIn(['metadata', 'hasUpdatedComments'], true);
    case UPDATE_COMMENTS:
      updatedState = state.get('comments').get('data');
      updatedState.push(action.comment);

      return state
        .setIn(['comments', 'data'], updatedState)
        .setIn(['metadata', 'hasUpdatedComments'], false);
    case UPDATE_ATTRIBUTES:
      return state
        .setIn(['blog', 'data', 'title'], action.attributes.title)
        .setIn(['blog', 'data', 'body'], action.attributes.body);
    case UPDATE_BLOG_REQUEST:
      return state
        .setIn(['blog', 'ui', 'saving'], true)
        .setIn(['blog', 'ui', 'error'], false);
    case UPDATE_BLOG_SUCCESS:
      return state
        .setIn(['blog', 'blog'], action.attributes)
        .setIn(['blog', 'ui', 'saving'], false);
    case UPDATE_BLOG_ERROR:
      return state
        .setIn(['blog', 'ui', 'error'], action.error)
        .setIn(['blog', 'ui', 'saving'], false);
    default:
      return state;
  }
}

export default blogPageReducer;
