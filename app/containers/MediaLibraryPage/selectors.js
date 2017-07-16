import { createSelector } from 'reselect';

/**
 * Direct selector to the mediaLibraryPage state domain
 */
const mediaLibraryPageDomain = () => (state) => state.get('media');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MediaLibraryPage
 */

const media = () => createSelector(
  mediaLibraryPageDomain(),
  (mediaState) => mediaState.get('medias').get('data')
);

const error = () => createSelector(
  mediaLibraryPageDomain(),
  (errorState) => errorState.get('medias').get('ui').get('error')
);

const isLoading = () => createSelector(
  mediaLibraryPageDomain(),
  (loadingState) => loadingState.get('medias').get('ui').get('loading')
);

const mediaId = () => createSelector(
  mediaLibraryPageDomain(),
  (idState) => idState.get('media').get('data').get('id')
);

const mediaName = () => createSelector(
  mediaLibraryPageDomain(),
  (nameState) => nameState.get('media').get('data').get('name')
);

const mediaDescription = () => createSelector(
  mediaLibraryPageDomain(),
  (descriptionState) => descriptionState.get('media').get('data').get('description')
);

const mediaUrl = () => createSelector(
  mediaLibraryPageDomain(),
  (urlState) => urlState.get('media').get('data').get('url')
);

const hasNewMedia = () => createSelector(
  mediaLibraryPageDomain(),
  (newMediaState) => newMediaState.get('metadata').get('hasNewMedia')
);

const hasUpdatedMedia = () => createSelector(
  mediaLibraryPageDomain(),
  (newMediaState) => newMediaState.get('metadata').get('hasUpdatedMedia')
);

const mediaSaving = () => createSelector(
  mediaLibraryPageDomain(),
  (savingState) => savingState.get('media').get('ui').get('saving')
);

const mediaError = () => createSelector(
  mediaLibraryPageDomain(),
  (errorState) => errorState.get('media').get('ui').get('error')
);

export {
  mediaLibraryPageDomain,
  media,
  error,
  isLoading,
  mediaId,
  mediaName,
  mediaDescription,
  mediaUrl,
  hasNewMedia,
  hasUpdatedMedia,
  mediaSaving,
  mediaError,
};
