import { take, call, put, cancel, takeLatest, fork, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  FETCH_BLOGS_REQUEST, FETCH_BLOGS_SUCCESS,
  HAS_UPDATED_BLOGS,
  HAS_NEW_BLOGS,
} from 'containers/BlogsPage/constants';
import {
  fetchBlogs, fetchBlogsError,
  checkForUpdatedBlogs,
  checkForNewBlogs,
} from 'containers/BlogsPage/actions';
import { locationState } from 'containers/App/selectors';
import request from 'utils/Request';
import getUrl from 'utils/GetUrl';
import { connectToSocket, joinChannel, createSocketChannel, handleUpdatedData } from 'utils/SocketSagas';
import { watchGetCurrentUser } from 'containers/App/sagas';

function* getBlogs() {
  const state = yield select(locationState());
  const requestURL = getUrl(state.locationBeforeTransitions.pathname);

  try {
    // Call our request helper (see 'utils/Request')
    const blogs = yield call(request, requestURL);
    yield put(fetchBlogs(blogs));
  } catch (err) {
    yield put(fetchBlogsError(err));
  }
}

export function* watchGetBlogs() {
  const watcher = yield takeLatest(FETCH_BLOGS_REQUEST, getBlogs);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

function* connectWithBlogsSocketForUpdatedBlogs() {
  const socket = yield call(connectToSocket);
  const channel = yield call(joinChannel, socket, 'blogs');

  const socketChannel = yield call(createSocketChannel, channel, HAS_UPDATED_BLOGS, checkForUpdatedBlogs);

  while (true) {
    const action = yield take(socketChannel);
    yield fork(handleUpdatedData, action);
  }
}

export function* watchConnectWithBlogsSocketForUpdatedBlogs() {
  const watcher = yield takeLatest(FETCH_BLOGS_SUCCESS, connectWithBlogsSocketForUpdatedBlogs);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

function* connectWithBlogsSocketForNewBlogs() {
  const socket = yield call(connectToSocket);
  const channel = yield call(joinChannel, socket, 'blogs');

  const socketChannel = yield call(createSocketChannel, channel, HAS_NEW_BLOGS, checkForNewBlogs);

  while (true) {
    const action = yield take(socketChannel);
    yield fork(handleUpdatedData, action);
  }
}

export function* watchConnectWithBlogsSocketForNewBlogs() {
  const watcher = yield takeLatest(FETCH_BLOGS_SUCCESS, connectWithBlogsSocketForNewBlogs);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watchGetBlogs,
  watchConnectWithBlogsSocketForUpdatedBlogs,
  watchConnectWithBlogsSocketForNewBlogs,
  watchGetCurrentUser,
];
