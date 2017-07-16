import { createSelector } from 'reselect';

// locationState expects a plain JS object for the routing state
const locationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

/**
 * Direct selector to the app state domain
 */
const currentUserDomain = () => (state) => state.get('currentUser');

/**
 * Other specific selectors
 */


/**
 * Default selector used by app
 */

const firstName = () => createSelector(
  currentUserDomain(),
  (currentUserState) => currentUserState.get('currentUser').get('data').get('firstName')
);

const lastName = () => createSelector(
  currentUserDomain(),
  (currentUserState) => currentUserState.get('currentUser').get('data').get('lastName')
);

const email = () => createSelector(
  currentUserDomain(),
  (currentUserState) => currentUserState.get('currentUser').get('data').get('email')
);

const avatar = () => createSelector(
  currentUserDomain(),
  (currentUserState) => currentUserState.get('currentUser').get('data').get('avatar')
);

const error = () => createSelector(
  currentUserDomain(),
  (errorState) => errorState.get('currentUser').get('ui').get('error')
);

const isLoading = () => createSelector(
  currentUserDomain(),
  (loadingState) => loadingState.get('currentUser').get('ui').get('loading')
);

export {
  locationState,
  firstName,
  lastName,
  email,
  avatar,
  currentUserDomain,
  error,
  isLoading,
};
