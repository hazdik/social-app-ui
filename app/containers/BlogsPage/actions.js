/*
 *
 * BlogsPage actions
 *
 */
import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  HAS_UPDATED_BLOGS,
  HAS_NEW_BLOGS,
} from './constants';

export const fetchBlogsRequest = () => ({
  type: FETCH_BLOGS_REQUEST,
});

export const fetchBlogs = (blogs) => ({
  type: FETCH_BLOGS_SUCCESS,
  blogs,
});

export const fetchBlogsError = (error) => ({
  type: FETCH_BLOGS_ERROR,
  error,
});

export const checkForUpdatedBlogs = () => ({
  type: HAS_UPDATED_BLOGS,
});

export const checkForNewBlogs = () => ({
  type: HAS_NEW_BLOGS,
});
