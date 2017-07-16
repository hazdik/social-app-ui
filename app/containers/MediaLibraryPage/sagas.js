import { take, call, put, cancel, takeLatest, fork, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  FETCH_MEDIA_REQUEST, FETCH_MEDIA_SUCCESS,
  UPDATE_MEDIA_REQUEST,
  SAVE_MEDIA_REQUEST,
  HAS_NEW_MEDIA,
  HAS_UPDATED_MEDIA,
} from 'containers/MediaLibraryPage/constants';
import {
  fetchMedia, fetchMediaError,
  saveMedia as saveMediaDispatch, saveMediaError,
  checkForNewMedia, addNewMedia,
  checkForUpdatedMedia, updateOldMedia,
} from 'containers/MediaLibraryPage/actions';
import { locationState } from 'containers/App/selectors';
import {
  mediaName, mediaDescription, mediaUrl, mediaId,
} from 'containers/MediaLibraryPage/selectors';
import request from 'utils/Request';
import getUrl from 'utils/GetUrl';
import { connectToSocket, joinChannel, createSocketChannel, handleUpdatedData } from 'utils/SocketSagas';
import { watchGetCurrentUser } from 'containers/App/sagas';

function* getMedia() {
  const state = yield select(locationState());
  const requestURL = getUrl(state.locationBeforeTransitions.pathname);

  try {
    // Call our request helper (see 'utils/Request')
    const media = yield call(request, requestURL);
    yield put(fetchMedia(media));
  } catch (err) {
    yield put(fetchMediaError(err));
  }
}

export function* watchGetMedia() {
  const watcher = yield takeLatest(FETCH_MEDIA_REQUEST, getMedia);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* updateMedia() {
  const id = yield select(mediaId());
  const name = yield select(mediaName());
  const description = yield select(mediaDescription());
  const url = yield select(mediaUrl());
  const requestURL = `http://${process.env.RB_API_URI}/${process.env.RB_API_NAMESPACE}/media/${id}`;

  try {
    // Call our request helper (see 'utils/Request')
    yield call(request, requestURL, 'PATCH',
      {
        data: {
          type: 'media',
          id,
          attributes: {
            name,
            description,
            url,
          },
        },
      },
    );

    yield put(saveMediaDispatch());
  } catch (err) {
    yield put(saveMediaError(err));
  }
}

export function* watchUpdateMedia() {
  const watcher = yield takeLatest(UPDATE_MEDIA_REQUEST, updateMedia);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* saveMedia() {
  const url = yield select(mediaUrl());
  const requestURL = `http://${process.env.RB_API_URI}/${process.env.RB_API_NAMESPACE}/media`;

  try {
    // Call our request helper (see 'utils/Request')
    yield call(request, requestURL, 'POST',
      {
        data: {
          type: 'media',
          attributes: {
            url,
          },
        },
      },
    );

    yield put(saveMediaDispatch());
  } catch (err) {
    yield put(saveMediaError(err));
  }
}

export function* watchSaveMedia() {
  const watcher = yield takeLatest(SAVE_MEDIA_REQUEST, saveMedia);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

function* connectWithMediaSocketForNewMedia() {
  const socket = yield call(connectToSocket);
  const channel = yield call(joinChannel, socket, 'media');

  // this will update redux state flagging that there are updated media
  const socketChannelForFlag = yield call(createSocketChannel, channel, HAS_NEW_MEDIA, checkForNewMedia);

  // this will give the updated media to the action addNewMedia
  const socketChannelForCreate = yield call(createSocketChannel, channel, HAS_NEW_MEDIA, addNewMedia);

  while (true) {
    const actionForFlag = yield take(socketChannelForFlag);
    const actionForUpdate = yield take(socketChannelForCreate);
    yield fork(handleUpdatedData, actionForFlag);
    yield fork(handleUpdatedData, actionForUpdate);
  }
}

export function* watchConnectWithMediaSocketForNewMedia() {
  const watcher = yield takeLatest(FETCH_MEDIA_SUCCESS, connectWithMediaSocketForNewMedia);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

function* connectWithMediaSocketForUpdatedMedia() {
  const socket = yield call(connectToSocket);
  const channel = yield call(joinChannel, socket, 'media');

  // this will update redux state flagging that there are updated media
  const socketChannelForFlag = yield call(createSocketChannel, channel, HAS_UPDATED_MEDIA, checkForUpdatedMedia);

  // this will give the updated media to the action updateOldMedia
  const socketChannelForUpdate = yield call(createSocketChannel, channel, HAS_UPDATED_MEDIA, updateOldMedia);

  while (true) {
    const actionForFlag = yield take(socketChannelForFlag);
    const actionForUpdate = yield take(socketChannelForUpdate);
    yield fork(handleUpdatedData, actionForFlag);
    yield fork(handleUpdatedData, actionForUpdate);
  }
}

export function* watchConnectWithMediaSocketForUpdatedMedia() {
  const watcher = yield takeLatest(FETCH_MEDIA_SUCCESS, connectWithMediaSocketForUpdatedMedia);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watchGetMedia,
  watchUpdateMedia,
  watchSaveMedia,
  watchConnectWithMediaSocketForNewMedia,
  watchConnectWithMediaSocketForUpdatedMedia,
  watchGetCurrentUser,
];
