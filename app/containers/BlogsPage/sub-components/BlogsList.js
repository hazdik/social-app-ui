import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import Card from 'components/Card';
import messages from '../messages';

export default class BlogsList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    blogs: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
  };

  static DESCRIPTION_LENGTH = 200;

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    if (!this.props.blogs) return false;

    return (
      <div className="blogs">
        <Row>
          { [...this.props.blogs].reverse().map((blog) =>
            // http://stackoverflow.com/questions/30019923/react-rendering-a-list-in-reverse-order#comment69686732_38860263
            <Col
              className="row u-mb-30"
              md={24}
              key={blog.id}
            >
              <div className="box">
                <Link to={`/blogs/${blog.id}`}>
                  <div className="feed-card">
                    <Card
                      title={blog.attributes.title}
                      data-meta={
                        <div className="feed-card__meta">
                          <div className="meta__avatar">
                            <img
                              src="https://lh4.googleusercontent.com/-AFFfk87qRL0/AAAAAAAAAAI/AAAAAAAAGhs/6WEDDZ5iVhE/s96-c/photo.jpg"
                              role="presentation"
                              alt="author"
                              className="avatar"
                            />
                          </div>
                          <div className="meta__author-name">
                            John Doe
                          </div>
                          <span className="meta__time">2h</span>
                        </div>
                      }
                    >
                      <div
                        className="card-body"
                        dangerouslySetInnerHTML={this.createMarkup(`${blog.attributes.body.substring(0, this.constructor.DESCRIPTION_LENGTH)}...`)}
                      />
                      <div className="u-read-more">
                        <FormattedMessage {...messages.readMore} />
                      </div>
                    </Card>
                  </div>
                </Link>
              </div>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}
