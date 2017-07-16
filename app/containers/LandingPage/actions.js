/*
 *
 * LandingPage actions
 *
 */

import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from './constants';

export const authRequest = (response) => ({
  type: AUTH_REQUEST,
  response,
});

export const auth = (response) => ({
  type: AUTH_SUCCESS,
  response,
});

export const authError = (error) => ({
  type: AUTH_ERROR,
  error,
});
