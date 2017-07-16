import { take, call, put, cancel, takeLatest, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  AUTH_REQUEST,
} from 'containers/LandingPage/constants';
import {
  auth, authError,
} from 'containers/LandingPage/actions';
import request from 'utils/Request';
import getUrl from 'utils/GetUrl';
import {
  clientAuthToken, clientAuthEmail,
} from 'containers/LandingPage/selectors';

function* authenticate() {
  const token = yield select(clientAuthToken());
  const email = yield select(clientAuthEmail());
  const requestURL = getUrl(`/${process.env.RB_GOOGLE_AUTH_URL}`);

  try {
    // Call our request helper (see 'utils/Request')
    const response = yield call(request, requestURL, 'POST',
      {
        data: {
          type: 'auth',
          attributes: {
            token,
            email,
          },
        },
      },
    );

    yield put(auth(response));

    // store the access_token in the localStorage
    localStorage.setItem('accessToken', response.access_token);

    // redirect the user to /home
    window.location.href = '/home';
  } catch (err) {
    yield put(authError(err));
  }
}

export function* watchAuthenticate() {
  const watcher = yield takeLatest(AUTH_REQUEST, authenticate);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watchAuthenticate,
];
