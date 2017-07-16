/*
 *
 * AddBlogPage actions
 *
 */

import {
  UPDATE_ATTRIBUTES,
  SAVE_BLOG_REQUEST,
  SAVE_BLOG_SUCCESS,
  SAVE_BLOG_ERROR,
} from './constants';

export const updateAttributes = (attributes) => ({
  type: UPDATE_ATTRIBUTES,
  attributes,
});

export const saveBlogRequest = () => ({
  type: SAVE_BLOG_REQUEST,
});

export const saveBlog = () => ({
  type: SAVE_BLOG_SUCCESS,
});

export const saveBlogError = (error) => ({
  type: SAVE_BLOG_ERROR,
  error,
});
