/*
 *
 * AddcurrentUserPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_ERROR,
} from './constants';

const initialState = fromJS({
  currentUser: {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      avatar: '',
    },
    ui: {
      loading: false,
      error: false,
    },
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER_REQUEST:
      return state
        .setIn(['currentUser', 'ui', 'loading'], true)
        .setIn(['currentUser', 'ui', 'error'], false);
    case FETCH_CURRENT_USER_SUCCESS:
      return state
        .setIn(['currentUser', 'data', 'firstName'], action.user.data.attributes['first-name'])
        .setIn(['currentUser', 'data', 'lastName'], action.user.data.attributes['last-name'])
        .setIn(['currentUser', 'data', 'email'], action.user.data.attributes.email)
        .setIn(['currentUser', 'data', 'avatar'], action.user.data.attributes.avatar)
        .setIn(['currentUser', 'ui', 'loading'], false);
    case FETCH_CURRENT_USER_ERROR:
      return state
        .setIn(['currentUser', 'ui', 'error'], action.error)
        .setIn(['currentUser', 'ui', 'loading'], false);
    default:
      return state;
  }
}

export default appReducer;
