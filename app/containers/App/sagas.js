import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  FETCH_CURRENT_USER_REQUEST,
} from 'containers/App/constants';
import {
  fetchCurrentUser, fetchCurrentUserError,
} from 'containers/App/actions';
import request from 'utils/Request';
import getUrl from 'utils/GetUrl';

function* getCurrentUser() {
  const requestURL = getUrl('/users/current');

  try {
    // Call our request helper (see 'utils/Request')
    const currentUser = yield call(request, requestURL);
    yield put(fetchCurrentUser(currentUser));
  } catch (err) {
    yield put(fetchCurrentUserError(err));
  }
}

export function* watchGetCurrentUser() {
  const watcher = yield takeLatest(FETCH_CURRENT_USER_REQUEST, getCurrentUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watchGetCurrentUser,
];
