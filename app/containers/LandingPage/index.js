/*
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import GoogleLogin from 'react-google-login';
import message from 'antd/lib/message';

import Button from 'components/Button';
import LayoutWrapper from 'components/Layout/sub-components/LayoutWrapper';
import HeaderWrapper from './sub-components/HeaderWrapper';
import MenuWrapper from './sub-components/MenuWrapper';
import MenuItemWrapper from './sub-components/MenuItemWrapper';
import JumbotronWrapper from './sub-components/JumbotronWrapper';
import Jumbotron from './sub-components/Jumbotron';
import messages from './messages';
import {
  auth, isLoading, error,
} from './selectors';
import { authRequest } from './actions';

export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleFailure = this.handleFailure.bind(this);
  }

  handleClick(response) {
    this.props.authRequest(response);
  }

  handleFailure() {
    message.error('Something went wrong. Please try again');
  }

  renderGoogleLoginButtonNode() {
    if (this.props.loading) {
      return (
        <Button
          loading
          text={<FormattedMessage {...messages.loading} />}
        />
      );
    }

    if (localStorage.getItem('accessToken')) {
      return (
        <Button
          text={<FormattedMessage {...messages.signOut} />}
          onClick={
            () => {
              localStorage.removeItem('accessToken');
              window.location.reload();
            }
          }
        />
      );
    }

    return (
      <GoogleLogin
        clientId="188598186288-4acr27sb57bolo7e4eqdsvh1lettada4.apps.googleusercontent.com"
        buttonText={<FormattedMessage {...messages.signIn} />}
        onSuccess={this.handleClick}
        onFailure={this.handleFailure}
        className="ant-btn ant-btn-primary"
      />
    );
  }

  render() {
    return (
      <LayoutWrapper>
        <LayoutWrapper>
          <HeaderWrapper>
            <MenuWrapper mode="horizontal">
              <MenuItemWrapper
                key="1"
                style={{ float: 'right' }}
              >
                {this.renderGoogleLoginButtonNode()}
              </MenuItemWrapper>
            </MenuWrapper>
          </HeaderWrapper>
        </LayoutWrapper>
        <LayoutWrapper>
          <JumbotronWrapper>
            <Jumbotron />
          </JumbotronWrapper>
        </LayoutWrapper>
      </LayoutWrapper>
    );
  }
}

LandingPage.propTypes = {
  loading: PropTypes.bool,
  authRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  auth: auth(),
  loading: isLoading(),
  error: error(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    authRequest: (response) => {
      dispatch(authRequest(response));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
