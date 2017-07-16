import { createSelector } from 'reselect';

/**
 * Direct selector to the addBlogPage state domain
 */
const selectAddBlogPageDomain = () => (state) => state.get('addBlog');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddBlogPage
 */

const makeSelectBlogTitle = () => createSelector(
  selectAddBlogPageDomain(),
  (titleState) => titleState.get('blog').get('title')
);

const makeSelectBlogBody = () => createSelector(
  selectAddBlogPageDomain(),
  (bodyState) => bodyState.get('blog').get('body')
);

const makeSelectError = () => createSelector(
  selectAddBlogPageDomain(),
  (errorState) => errorState.get('blog').get('ui').get('error')
);

const makeSelectSaving = () => createSelector(
  selectAddBlogPageDomain(),
  (savingState) => savingState.get('blog').get('ui').get('saving')
);

export {
  selectAddBlogPageDomain,
  makeSelectBlogTitle,
  makeSelectBlogBody,
  makeSelectError,
  makeSelectSaving,
};
