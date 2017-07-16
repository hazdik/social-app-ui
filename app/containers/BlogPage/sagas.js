import { take, call, put, cancel, takeLatest, fork, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  FETCH_BLOG_REQUEST,
  FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS,
  SAVE_COMMENT_REQUEST,
  HAS_UPDATED_OR_NEW_COMMENTS,
  UPDATE_BLOG_REQUEST,
  } from 'containers/BlogPage/constants';
import { fetchBlog, fetchBlogError, fetchBlogRequest,
  fetchCommentsRequest, fetchComments, fetchCommentsError,
  saveComment as saveCommentDispatch, saveCommentError,
  updateBlog as updateBlogDispatch, updateBlogError,
  checkForUpdatedComments, updateCommentsState } from 'containers/BlogPage/actions';
import { locationState } from 'containers/App/selectors';
import {
  commentBody,
  blogId, blogTitle, blogBody,
} from 'containers/BlogPage/selectors';
import request from 'utils/Request';
import getUrl from 'utils/GetUrl';
import { connectToSocket, joinChannel, createSocketChannel, handleUpdatedData } from 'utils/SocketSagas';
import { watchGetCurrentUser } from 'containers/App/sagas';

// Individual exports for testing
export function* getBlog() {
  const state = yield select(locationState());
  const requestURL = getUrl(state.locationBeforeTransitions.pathname);

  try {
    // Call our request helper (see 'utils/Request')
    const blog = yield call(request, requestURL);
    yield put(fetchBlog(blog));
  } catch (err) {
    yield put(fetchBlogError(err));
  }
}

export function* watchGetBlog() {
  const watcher = yield takeLatest(FETCH_BLOG_REQUEST, getBlog);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getComments() {
  const state = yield select(locationState());
  const requestURL = getUrl(`${state.locationBeforeTransitions.pathname}/comments`);
  // const id = yield select(blogId()); // this id will be the id of the blog

  try {
    // Call our request helper (see 'utils/Request')
    const comments = yield call(request, requestURL);
    yield put(fetchComments(comments));
  } catch (err) {
    yield put(fetchCommentsError(err));
  }
}

export function* watchGetComments() {
  const watcher = yield takeLatest(FETCH_COMMENTS_REQUEST, getComments);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* saveComment() {
  const comment = yield select(commentBody());
  const id = yield select(blogId());
  const requestURL = `http://${process.env.RB_API_URI}/${process.env.RB_API_NAMESPACE}/blog_comments`;

  try {
    // Call our request helper (see 'utils/Request')
    yield call(request, requestURL, 'POST',
      {
        data: {
          type: 'blog_comment',
          attributes: {
            body: comment,
          },
          relationships: {
            blog_id: parseInt(id, 10),
          },
        },
      },
    );

    yield put(saveCommentDispatch());
    yield put(fetchCommentsRequest());
  } catch (err) {
    yield put(saveCommentError(err));
  }
}

export function* watchSaveComment() {
  const watcher = yield takeLatest(SAVE_COMMENT_REQUEST, saveComment);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

function* connectWithCommentsSocket() {
  const socket = yield call(connectToSocket);
  const channel = yield call(joinChannel, socket, 'comments');

  // this will update redux state flagging that there are updated comments
  const socketChannelForFlag = yield call(createSocketChannel, channel, HAS_UPDATED_OR_NEW_COMMENTS, checkForUpdatedComments);

  // this will give the updated comment to the action updateCommentsState
  const socketChannelForUpdate = yield call(createSocketChannel, channel, HAS_UPDATED_OR_NEW_COMMENTS, updateCommentsState);

  while (true) {
    const actionForFlag = yield take(socketChannelForFlag);
    const actionForUpdate = yield take(socketChannelForUpdate);
    yield fork(handleUpdatedData, actionForFlag);
    yield fork(handleUpdatedData, actionForUpdate);
  }
}

export function* watchConnectWithCommentsSocket() {
  const watcher = yield takeLatest(FETCH_COMMENTS_SUCCESS, connectWithCommentsSocket);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* updateBlog() {
  const id = yield select(blogId());
  const title = yield select(blogTitle());
  const body = yield select(blogBody());
  const requestURL = `http://${process.env.RB_API_URI}/${process.env.RB_API_NAMESPACE}/blogs/${id}`;

  try {
    // Call our request helper (see 'utils/Request')
    yield call(request, requestURL, 'PATCH',
      {
        data: {
          type: 'blog',
          id,
          attributes: {
            title,
            body,
          },
        },
      },
    );

    yield put(updateBlogDispatch());
    yield put(fetchBlogRequest());
  } catch (err) {
    yield put(updateBlogError(err));
  }
}

export function* watchUpdateBlog() {
  const watcher = yield takeLatest(UPDATE_BLOG_REQUEST, updateBlog);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watchGetBlog,
  watchGetComments,
  watchSaveComment,
  watchConnectWithCommentsSocket,
  watchUpdateBlog,
  watchGetCurrentUser,
];
