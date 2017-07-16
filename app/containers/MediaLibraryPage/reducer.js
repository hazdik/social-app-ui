/*
 *
 * MediaLibraryPage reducer
 *
 */

import { fromJS, List } from 'immutable';

import {
  FETCH_MEDIA_REQUEST,
  FETCH_MEDIA_SUCCESS,
  FETCH_MEDIA_ERROR,
  SAVE_MEDIA_REQUEST,
  SAVE_MEDIA_SUCCESS,
  SAVE_MEDIA_ERROR,
  UPDATE_ATTRIBUTES,
  SET_MEDIA_ID,
  UPDATE_MEDIA_REQUEST,
  HAS_NEW_MEDIA,
  HAS_UPDATED_MEDIA,
  ADD_NEW_MEDIA,
  UPDATE_OLD_MEDIA,
} from './constants';

const initialState = fromJS({
  medias: {
    data: List(),
    ui: {
      loading: false,
      error: false,
    },
  },
  media: {
    data: {
      id: null,
      name: '',
      description: '',
      url: '',
    },
    ui: {
      saving: false,
      error: false,
    },
  },
  metadata: {
    hasNewMedia: false,
    hasUpdatedMedia: false,
  },
});

let updatedState;

function mediaLibraryPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEDIA_REQUEST:
      return state
        .setIn(['medias', 'ui', 'loading'], true)
        .setIn(['medias', 'ui', 'error'], false);
    case FETCH_MEDIA_SUCCESS:
      return state
        .setIn(['medias', 'data'], action.media.data)
        .setIn(['medias', 'ui', 'loading'], false);
    case FETCH_MEDIA_ERROR:
      return state
        .setIn(['medias', 'ui', 'error'], action.error)
        .setIn(['medias', 'ui', 'loading'], false);
    case SET_MEDIA_ID:
      return state
        .setIn(['media', 'data', 'id'], action.id);
    case UPDATE_ATTRIBUTES:
      return state
        .setIn(['media', 'data', 'name'], action.attributes.name)
        .setIn(['media', 'data', 'description'], action.attributes.description)
        .setIn(['media', 'data', 'url'], action.attributes.url);
    case SAVE_MEDIA_REQUEST:
    case UPDATE_MEDIA_REQUEST:
      return state
        .setIn(['media', 'ui', 'saving'], true)
        .setIn(['media', 'ui', 'error'], false);
    case SAVE_MEDIA_SUCCESS:
      return state
        .setIn(['media', 'ui', 'saving'], false);
    case SAVE_MEDIA_ERROR:
      return state
        .setIn(['media', 'ui', 'error'], action.error)
        .setIn(['media', 'ui', 'saving'], false);
    case HAS_NEW_MEDIA:
      return state
        .setIn(['metadata', 'hasNewMedia'], true);
    case HAS_UPDATED_MEDIA:
      return state
        .setIn(['metadata', 'hasUpdatedMedia'], true);
    case ADD_NEW_MEDIA:
      updatedState = state.get('medias').get('data');
      updatedState.push(action.media);
      return state
        .setIn(['medias', 'data'], updatedState)
        .setIn(['metadata', 'hasNewMedia'], false);
    case UPDATE_OLD_MEDIA:
      return state
        .setIn(['medias', 'data'], state.get('medias').get('data').map((m) => m.id === action.media.id ? action.media : m))
        .setIn(['metadata', 'hasUpdatedMedia'], false);
    default:
      return state;
  }
}

export default mediaLibraryPageReducer;
