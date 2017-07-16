/*
 *
 * BlogsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { FormattedMessage } from 'react-intl';

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
import {
  blogs, isLoading, error,
  hasUpdatedBlogs,
  hasNewBlogs,
} from './selectors';
import BlogsList from './sub-components/BlogsList';
import { fetchBlogsRequest } from './actions';
import messages from './messages';

export class BlogsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.handleRefreshBlogs = this.handleRefreshBlogs.bind(this);
  }

  componentDidMount() {
    this.props.fetchBlogsRequest();
    this.props.fetchCurrentUserRequest();
  }

  handleRefreshBlogs() {
    this.props.fetchBlogsRequest();
  }

  refreshBlogsButtonNode() {
    if (!this.props.hasUpdatedBlogs && !this.props.hasNewBlogs) return false;

    return (
      <Row key={1}>
        <Col
          className="row"
          md={24}
          style={{ marginBottom: 24 }}
        >
          <Button
            type="primary"
            size="large"
            style={{ width: '100%' }}
            onClick={this.handleRefreshBlogs}
          >
            <FormattedMessage {...messages.getUpdatedBlogs} />
          </Button>
        </Col>
      </Row>
    );
  }

  blogListNode() {
    return [
      this.refreshBlogsButtonNode(),
      <BlogsList
        key={2}
        blogs={this.props.blogs}
      />,
    ];
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
            title="BlogsPage"
            meta={[
              { name: 'description', content: 'Description of BlogsPage' },
            ]}
          />
          { this.blogListNode() }
        </div>
      </SidebarCombo>
    );
  }
}

BlogsPage.propTypes = {
  blogs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  fetchBlogsRequest: PropTypes.func,
  hasUpdatedBlogs: PropTypes.bool,
  hasNewBlogs: PropTypes.bool,
  fetchCurrentUserRequest: PropTypes.func,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  currentUserIsLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  blogs: blogs(),
  loading: isLoading(),
  error: error(),
  hasUpdatedBlogs: hasUpdatedBlogs(),
  hasNewBlogs: hasNewBlogs(),
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
    fetchBlogsRequest: () => {
      dispatch(fetchBlogsRequest());
    },
    fetchCurrentUserRequest: () => {
      dispatch(fetchCurrentUserRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsPage);
