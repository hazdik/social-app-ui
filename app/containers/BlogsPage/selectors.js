import { createSelector } from 'reselect';

/**
 * Direct selector to the blogsPage state domain
 */
const blogsPageDomain = () => (state) => state.get('blogs');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BlogsPage
 */

const blogs = () => createSelector(
  blogsPageDomain(),
  (blogsState) => blogsState.get('blogs').get('data')
);

const error = () => createSelector(
  blogsPageDomain(),
  (errorState) => errorState.get('blogs').get('ui').get('error')
);

const isLoading = () => createSelector(
  blogsPageDomain(),
  (loadingState) => loadingState.get('blogs').get('ui').get('loading')
);

const hasUpdatedBlogs = () => createSelector(
  blogsPageDomain(),
  (updatedBlogsState) => updatedBlogsState.get('metadata').get('hasUpdatedBlogs')
);

const hasNewBlogs = () => createSelector(
  blogsPageDomain(),
  (newBlogsState) => newBlogsState.get('metadata').get('hasNewBlogs')
);

export {
  blogsPageDomain,
  blogs,
  error,
  isLoading,
  hasUpdatedBlogs,
  hasNewBlogs,
};
