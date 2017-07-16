import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { Link } from 'react-router';

import Card from 'components/Card';

export default class BlogsList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    blogs: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
  };

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
              className="row"
              md={24}
              key={blog.id}
              style={{ marginBottom: 24 }}
            >
              <div className="box">
                <Link to={`/blogs/${blog.id}`}>
                  <Card
                    title={blog.attributes.title}
                  >
                    <div dangerouslySetInnerHTML={this.createMarkup(blog.attributes.body)} />
                  </Card>
                </Link>
              </div>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}
