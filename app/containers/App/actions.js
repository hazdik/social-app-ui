/*
 *
 * App actions
 *
 */

import {
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_ERROR,
} from './constants';

export const fetchCurrentUserRequest = () => ({
  type: FETCH_CURRENT_USER_REQUEST,
});

export const fetchCurrentUser = (user) => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  user,
});

export const fetchCurrentUserError = (error) => ({
  type: FETCH_CURRENT_USER_ERROR,
  error,
});
