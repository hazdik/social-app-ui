/*
 *
 * BlogPage actions
 *
 */

import {
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_ERROR,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  UPDATE_COMMENT,
  UPDATE_ATTRIBUTES,
  SAVE_COMMENT_REQUEST,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_ERROR,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_ERROR,
  SET_BLOG_ID,
  HAS_UPDATED_OR_NEW_COMMENTS,
  UPDATE_COMMENTS,
} from './constants';

export const fetchBlogRequest = () => ({
  type: FETCH_BLOG_REQUEST,
});

export const fetchBlog = (blog) => ({
  type: FETCH_BLOG_SUCCESS,
  blog,
});

export const fetchBlogError = (error) => ({
  type: FETCH_BLOG_ERROR,
  error,
});

export const fetchCommentsRequest = () => ({
  type: FETCH_COMMENTS_REQUEST,
});

export const fetchComments = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  comments,
});

export const fetchCommentsError = (error) => ({
  type: FETCH_COMMENTS_ERROR,
  error,
});

export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

export const saveCommentRequest = () => ({
  type: SAVE_COMMENT_REQUEST,
});

export const saveComment = () => ({
  type: SAVE_COMMENT_SUCCESS,
});

export const saveCommentError = (error) => ({
  type: SAVE_COMMENT_ERROR,
  error,
});

export const updateBlogRequest = () => ({
  type: UPDATE_BLOG_REQUEST,
});

export const updateBlog = () => ({
  type: UPDATE_BLOG_SUCCESS,
});

export const updateBlogError = (error) => ({
  type: UPDATE_BLOG_ERROR,
  error,
});

export const setBlogId = (id) => ({
  type: SET_BLOG_ID,
  id,
});

export const checkForUpdatedComments = () => ({
  type: HAS_UPDATED_OR_NEW_COMMENTS,
});

export const updateCommentsState = (comment) => ({
  type: UPDATE_COMMENTS,
  comment,
});

export const updateAttributes = (attributes) => ({
  type: UPDATE_ATTRIBUTES,
  attributes,
});
