/*
 *
 * MediaLibraryPage actions
 *
 */

import {
  FETCH_MEDIA_REQUEST,
  FETCH_MEDIA_SUCCESS,
  FETCH_MEDIA_ERROR,
  UPDATE_ATTRIBUTES,
  UPDATE_MEDIA_REQUEST,
  SAVE_MEDIA_REQUEST,
  SAVE_MEDIA_SUCCESS,
  SAVE_MEDIA_ERROR,
  SET_MEDIA_ID,
  HAS_NEW_MEDIA,
  HAS_UPDATED_MEDIA,
  ADD_NEW_MEDIA,
  UPDATE_OLD_MEDIA,
} from './constants';

export const fetchMediaRequest = () => ({
  type: FETCH_MEDIA_REQUEST,
});

export const fetchMedia = (media) => ({
  type: FETCH_MEDIA_SUCCESS,
  media,
});

export const fetchMediaError = (error) => ({
  type: FETCH_MEDIA_ERROR,
  error,
});

export const updateAttributes = (attributes) => ({
  type: UPDATE_ATTRIBUTES,
  attributes,
});

export const updateMediaRequest = () => ({
  type: UPDATE_MEDIA_REQUEST,
});

export const saveMediaRequest = () => ({
  type: SAVE_MEDIA_REQUEST,
});

export const saveMedia = () => ({
  type: SAVE_MEDIA_SUCCESS,
});

export const saveMediaError = (error) => ({
  type: SAVE_MEDIA_ERROR,
  error,
});

export const setMediaId = (id) => ({
  type: SET_MEDIA_ID,
  id,
});

export const checkForNewMedia = () => ({
  type: HAS_NEW_MEDIA,
});

export const checkForUpdatedMedia = () => ({
  type: HAS_UPDATED_MEDIA,
});

export const addNewMedia = (media) => ({
  type: ADD_NEW_MEDIA,
  media,
});

export const updateOldMedia = (media) => ({
  type: UPDATE_OLD_MEDIA,
  media,
});
