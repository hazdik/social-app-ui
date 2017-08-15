/*
 *
 * AddBlogPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import SidebarCombo from 'components/Layout/SidebarCombo';
import Card from 'components/Card';
import {
  firstName,
  lastName,
  email,
  avatar,
  isLoading as currentUserIsLoading, error as currentUserError,
} from 'containers/App/selectors';
import { fetchCurrentUserRequest } from 'containers/App/actions';
import { updateAttributes, saveBlogRequest } from './actions';
import AddBlogForm from './sub-components/AddBlogForm';
import {
  makeSelectBlogTitle, makeSelectBlogBody,
  makeSelectError, makeSelectSaving,
} from './selectors';

export class AddBlogPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchCurrentUserRequest();
  }

  render() {
    return (
      <SidebarCombo
        avatar={this.props.avatar}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        isLoading={this.props.currentUserIsLoading}
      >
        <div className="page">
          <Helmet
            title="AddBlogPage"
            meta={[
              { name: 'description', content: 'Description of AddBlogPage' },
            ]}
          />
          <Card>
            <AddBlogForm
              onChange={(val) => this.props.updateAttributes(val)}
              onSave={() => this.props.saveBlogRequest()}
              saving={this.props.saving}
            />
          </Card>
        </div>
      </SidebarCombo>
    );
  }
}

AddBlogPage.propTypes = {
  updateAttributes: PropTypes.func,
  saveBlogRequest: PropTypes.func,
  saving: PropTypes.bool,
  fetchCurrentUserRequest: PropTypes.func,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  currentUserIsLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  title: makeSelectBlogTitle(),
  body: makeSelectBlogBody(),
  saving: makeSelectSaving(),
  error: makeSelectError(),
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
    updateAttributes: (val) => {
      dispatch(updateAttributes(val));
    },
    saveBlogRequest: () => {
      dispatch(saveBlogRequest());
    },
    fetchCurrentUserRequest: () => {
      dispatch(fetchCurrentUserRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogPage);
