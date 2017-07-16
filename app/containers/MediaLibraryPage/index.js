/*
 *
 * MediaLibraryPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import SidebarCombo from 'components/Layout/SidebarCombo';
import Loader from 'components/Loader';
import Error from 'components/Error';
import {
  firstName,
  lastName,
  email,
  avatar,
  isLoading as currentUserIsLoading, error as currentUserError,
} from 'containers/App/selectors';
import { fetchCurrentUserRequest } from 'containers/App/actions';
import MediaList from './sub-components/MediaList';
import {
  media, isLoading, error,
  hasNewMedia, hasUpdatedMedia,
  mediaSaving, mediaError,
} from './selectors';
import {
  fetchMediaRequest,
  setMediaId,
  updateAttributes,
  updateMediaRequest,
  saveMediaRequest,
} from './actions';

export class MediaLibraryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchMediaRequest();
    this.props.fetchCurrentUserRequest();
  }

  loadingNode() {
    return <Loader />;
  }

  errorNode() {
    return <Error message={this.props.error.message} />;
  }

  render() {
    if (this.props.loading) {
      return this.loadingNode();
    }

    if (this.props.error) {
      return this.errorNode();
    }

    return (
      <SidebarCombo
        avatar={this.props.avatar}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        isLoading={this.props.currentUserIsLoading}
      >
        <div className="page">
          <Helmet
            title="MediaLibraryPage"
            meta={[
              { name: 'description', content: 'Description of MediaLibraryPage' },
            ]}
          />
          <MediaList
            media={this.props.medias}
            setId={this.props.setMediaId}
            onChange={(val) => this.props.updateAttributes(val)}
            onSave={() => this.props.saveMediaRequest()}
            onUpdate={() => this.props.updateMediaRequest()}
            mediaSaving={this.props.mediaSaving}
            mediaError={this.props.mediaError}
          />
        </div>
      </SidebarCombo>
    );
  }
}

MediaLibraryPage.propTypes = {
  medias: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  fetchMediaRequest: PropTypes.func,
  setMediaId: PropTypes.func,
  updateAttributes: PropTypes.func,
  saveMediaRequest: PropTypes.func,
  updateMediaRequest: PropTypes.func,
  mediaSaving: PropTypes.bool,
  mediaError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  fetchCurrentUserRequest: PropTypes.func,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  currentUserIsLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  medias: media(),
  loading: isLoading(),
  error: error(),
  hasNewMedia: hasNewMedia(),
  hasUpdatedMedia: hasUpdatedMedia(),
  mediaSaving: mediaSaving(),
  mediaError: mediaError(),
  currentUserIsLoading: currentUserIsLoading(),
  currentUserError: currentUserError(),
  firstName: firstName(),
  lastName: lastName(),
  email: email(),
  avatar: avatar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchMediaRequest: () => {
      dispatch(fetchMediaRequest());
    },
    setMediaId: (id) => {
      dispatch(setMediaId(id));
    },
    updateAttributes: (val) => {
      dispatch(updateAttributes(val));
    },
    saveMediaRequest: () => {
      dispatch(saveMediaRequest());
    },
    updateMediaRequest: () => {
      dispatch(updateMediaRequest());
    },
    fetchCurrentUserRequest: () => {
      dispatch(fetchCurrentUserRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaLibraryPage);
