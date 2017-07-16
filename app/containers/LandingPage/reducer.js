/*
 *
 * LandingPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from './constants';

const initialState = fromJS({
  auth: {
    data: {
      accessToken: null,
    },
    ui: {
      loading: false,
      error: false,
    },
  },
  metadata: {
    client: {},
  },
});

function landingPageReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return state
        .setIn(['auth', 'ui', 'loading'], true)
        .setIn(['auth', 'ui', 'error'], false)
        .setIn(['metadata', 'client'], action.response);
    case AUTH_SUCCESS:
      return state
        .setIn(['auth', 'data', 'accessToken'], action.response.access_token)
        .setIn(['auth', 'ui', 'loading'], false);
    case AUTH_ERROR:
      return state
        .setIn(['auth', 'ui', 'error'], action.error)
        .setIn(['auth', 'ui', 'loading'], false);
    default:
      return state;
  }
}

export default landingPageReducer;
