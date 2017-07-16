import { take, call, put, cancel, takeLatest, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { SAVE_BLOG_REQUEST } from 'containers/AddBlogPage/constants';
import { saveBlog as saveBlogDispatch, saveBlogError } from 'containers/AddBlogPage/actions';
import { makeSelectBlogTitle, makeSelectBlogBody } from 'containers/AddBlogPage/selectors';
import request from 'utils/Request';
import { watchGetCurrentUser } from 'containers/App/sagas';

// Individual exports for testing
export function* saveBlog() {
  const title = yield select(makeSelectBlogTitle());
  const body = yield select(makeSelectBlogBody());
  const requestURL = `http://${process.env.RB_API_URI}/${process.env.RB_API_NAMESPACE}/blogs`;

  try {
    // Call our request helper (see 'utils/Request')
    yield put(saveBlogDispatch());
    yield call(request, requestURL, 'POST',
      {
        data: {
          type: 'blog',
          attributes: {
            title,
            body,
          },
        },
      },
    );
  } catch (err) {
    yield put(saveBlogError(err));
  }
}

export function* watchSaveBlog() {
  const watcher = yield takeLatest(SAVE_BLOG_REQUEST, saveBlog);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watchSaveBlog,
  watchGetCurrentUser,
];
