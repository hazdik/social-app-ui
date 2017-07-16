/*
 *
 * BlogPage
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
import Card from 'components/Card';
import {
  firstName,
  lastName,
  email,
  avatar,
  isLoading as currentUserIsLoading, error as currentUserError,
} from 'containers/App/selectors';
import { fetchCurrentUserRequest } from 'containers/App/actions';
import {
  blogTitle, blogBody, blogLoading, blogSaving, blogError,
  comments, isCommentsLoading, commentsError,
  commentBody, commentSaving, commentError,
  hasUpdatedComments,
} from './selectors';
import Blog from './sub-components/Blog';
import {
  fetchBlogRequest,
  updateBlogRequest,
  fetchCommentsRequest,
  updateComment, saveCommentRequest,
  setBlogId,
  updateAttributes,
} from './actions';
import CommentsList from './sub-components/CommentsList';
import CommentInput from './sub-components/CommentInput';

export class BlogPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.setBlogId(this.props.router.params.blog_id);
    this.props.fetchBlogRequest();
    this.props.fetchCommentsRequest();
    this.props.fetchCurrentUserRequest();
  }

  blogNode() {
    return (
      <Blog
        title={this.props.title}
        body={this.props.body}
        onChange={(val) => this.props.updateAttributes(val)}
        onUpdate={() => this.props.updateBlogRequest()}
        saving={this.props.blogSaving}
        error={this.props.blogError}
      />
    );
  }

  commentInputNode() {
    return (
      <CommentInput
        saving={this.props.commentSaving}
        onSave={() => this.props.saveCommentRequest()}
        onChange={(val) => this.props.updateComment(val)}
      />
    );
  }

  commentListNode() {
    return (
      <CommentsList
        comments={this.props.comments}
        isCommentsLoading={this.props.isCommentsLoading}
        commentsError={this.props.commentsError}
      />
    );
  }

  loadingNode() {
    return <Loader />;
  }

  errorNode() {
    return <Error message={this.props.blogError.message} />;
  }

  render() {
    if (this.props.blogLoading) {
      return this.loadingNode();
    }

    if (this.props.blogError) {
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
            title="BlogPage"
            meta={[
              { name: 'description', content: 'Description of BlogPage' },
            ]}
          />
          { this.blogNode() }
          <Card
            title={`comments (${this.props.comments.length})`}
            className="comments-card"
          >
            {this.commentInputNode()}
            {this.commentListNode()}
          </Card>
        </div>
      </SidebarCombo>
    );
  }
}

BlogPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  blogLoading: PropTypes.bool,
  blogError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  blogSaving: PropTypes.bool,
  fetchBlogRequest: PropTypes.func,
  fetchCommentsRequest: PropTypes.func,
  updateBlogRequest: PropTypes.func,
  comments: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  isCommentsLoading: PropTypes.bool,
  commentsError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  saveCommentRequest: PropTypes.func,
  updateComment: PropTypes.func,
  commentSaving: PropTypes.bool,
  setBlogId: PropTypes.func,
  router: PropTypes.object,
  updateAttributes: PropTypes.func,
  fetchCurrentUserRequest: PropTypes.func,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  currentUserIsLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  title: blogTitle(),
  body: blogBody(),
  blogLoading: blogLoading(),
  blogError: blogError(),
  blogSaving: blogSaving(),
  comments: comments(),
  isCommentsLoading: isCommentsLoading(),
  commentsError: commentsError(),
  commentBody: commentBody(),
  commentSaving: commentSaving(),
  commentError: commentError(),
  hasUpdatedComments: hasUpdatedComments(),
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
    fetchBlogRequest: () => {
      dispatch(fetchBlogRequest());
    },
    fetchCommentsRequest: () => {
      dispatch(fetchCommentsRequest());
    },
    saveCommentRequest: () => {
      dispatch(saveCommentRequest());
    },
    updateComment: (val) => {
      dispatch(updateComment(val));
    },
    setBlogId: (id) => {
      dispatch(setBlogId(id));
    },
    updateAttributes: (val) => {
      dispatch(updateAttributes(val));
    },
    updateBlogRequest: () => {
      dispatch(updateBlogRequest());
    },
    fetchCurrentUserRequest: () => {
      dispatch(fetchCurrentUserRequest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
