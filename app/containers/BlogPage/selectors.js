import { createSelector } from 'reselect';

/**
 * Direct selector to the blogPage state domain
 */
const selectBlogPageDomain = () => (state) => state.get('blog');

/**
 * Other specific selectors
 */

/**
 * Default selector used by BlogPage
 */

const blogTitle = () => createSelector(
  selectBlogPageDomain(),
  (blogState) => blogState.get('blog').get('data').get('title')
);

const blogBody = () => createSelector(
  selectBlogPageDomain(),
  (blogState) => blogState.get('blog').get('data').get('body')
);

const blogLoading = () => createSelector(
  selectBlogPageDomain(),
  (loadingState) => loadingState.get('blog').get('ui').get('loading')
);

const blogSaving = () => createSelector(
  selectBlogPageDomain(),
  (loadingState) => loadingState.get('blog').get('ui').get('saving')
);

const blogError = () => createSelector(
  selectBlogPageDomain(),
  (errorState) => errorState.get('blog').get('ui').get('error')
);

const comments = () => createSelector(
  selectBlogPageDomain(),
  (commentsState) => commentsState.get('comments').get('data')
);

const isCommentsLoading = () => createSelector(
  selectBlogPageDomain(),
  (loadingState) => loadingState.get('comments').get('ui').get('loading')
);

const commentsError = () => createSelector(
  selectBlogPageDomain(),
  (errorState) => errorState.get('comments').get('ui').get('error')
);

const commentBody = () => createSelector(
  selectBlogPageDomain(),
  (commentState) => commentState.get('comment').get('data').get('body')
);

const commentSaving = () => createSelector(
  selectBlogPageDomain(),
  (loadingState) => loadingState.get('comment').get('ui').get('saving')
);

const commentError = () => createSelector(
  selectBlogPageDomain(),
  (errorState) => errorState.get('comment').get('ui').get('error')
);

const blogId = () => createSelector(
  selectBlogPageDomain(),
  (blogState) => blogState.get('blog').get('data').get('id')
);

const hasUpdatedComments = () => createSelector(
  selectBlogPageDomain(),
  (updatedcommentsState) => updatedcommentsState.get('metadata').get('hasUpdatedComments')
);

export {
  selectBlogPageDomain,
  blogTitle,
  blogBody,
  blogLoading,
  blogSaving,
  blogError,
  comments,
  isCommentsLoading,
  commentsError,
  commentBody,
  commentSaving,
  commentError,
  blogId,
  hasUpdatedComments,
};
