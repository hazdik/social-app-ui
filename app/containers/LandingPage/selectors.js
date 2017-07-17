import { createSelector } from 'reselect';

/**
 * Direct selector to the landingPage state domain
 */
const selectLandingPageDomain = () => (state) => state.get('landingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LandingPage
 */

const auth = () => createSelector(
  selectLandingPageDomain(),
  (authState) => authState.get('auth').get('data')
);

const error = () => createSelector(
  selectLandingPageDomain(),
  (errorState) => errorState.get('auth').get('ui').get('error')
);

const isLoading = () => createSelector(
  selectLandingPageDomain(),
  (loadingState) => loadingState.get('auth').get('ui').get('loading')
);

const clientAuthToken = () => createSelector(
  selectLandingPageDomain(),
  (metadataState) => metadataState.get('metadata').get('client').tokenId
);

const clientAuthEmail = () => createSelector(
  selectLandingPageDomain(),
  (metadataState) => metadataState.get('metadata').get('client').profileObj.email
);

const clientAuthFirstName = () => createSelector(
  selectLandingPageDomain(),
  (metadataState) => metadataState.get('metadata').get('client').profileObj.givenName
);

const clientAuthLastName = () => createSelector(
  selectLandingPageDomain(),
  (metadataState) => metadataState.get('metadata').get('client').profileObj.familyName
);

const clientAuthAvatar = () => createSelector(
  selectLandingPageDomain(),
  (metadataState) => metadataState.get('metadata').get('client').profileObj.imageUrl
);

export {
  selectLandingPageDomain,
  auth,
  error,
  isLoading,
  clientAuthToken,
  clientAuthEmail,
  clientAuthFirstName,
  clientAuthLastName,
  clientAuthAvatar,
};
