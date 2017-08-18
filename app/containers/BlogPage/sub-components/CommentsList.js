import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import Error from 'components/Error';
import Card from 'components/Card';

export default class CommentsList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    comments: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    isCommentsLoading: PropTypes.bool,
    commentsError: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
  };

  loadingCommentNode() {
    return (
      <Col
        className="row u-mb-20"
        md={24}
      >
        <div className="box">
          <Card loading />
        </div>
      </Col>
    );
  }

  loadingNode() {
    return (
      <div className="comments">
        {this.loadingCommentNode()}
        {this.loadingCommentNode()}
        {this.loadingCommentNode()}
      </div>
    );
  }

  noCommentsNode() {
    return (
      <div className="comments">
        <Col
          className="row u-mb-20"
          md={24}
        >
          <div className="box">
            <Card>
              <div className="card-body">
                No comments so far!
              </div>
            </Card>
          </div>
        </Col>
      </div>
    );
  }

  errorNode() {
    return <Error message={this.props.commentsError.message} />;
  }

  render() {
    if (this.props.isCommentsLoading) {
      // no need to show loading since it breaks the user experience while gettings new comments
      // return this.loadingNode();
    }

    if (this.props.commentsError) {
      return this.errorNode();
    }

    if (!this.props.comments.length) {
      return this.noCommentsNode();
    }

    return (
      <div className="comments">
        <Row>
          { [...this.props.comments].reverse().map((comment) =>
            // http://stackoverflow.com/questions/30019923/react-rendering-a-list-in-reverse-order#comment69686732_38860263
            <Col
              className="row u-mb-30"
              md={24}
              key={comment.id}
            >
              <div className="box">
                <Card title="John Doe">
                  <div className="card-body">
                    {comment.attributes.body}
                  </div>
                </Card>
              </div>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}
