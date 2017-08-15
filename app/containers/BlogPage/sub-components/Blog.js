import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';

import Card from 'components/Card';
import BlogModal from './BlogModal';
import BlogEditor from './BlogEditor';

export default class Blog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    onChange: PropTypes.func,
    onUpdate: PropTypes.func,
    saving: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
  };

  constructor() {
    super();

    this.state = {
      editModalVisible: false,
    };
  }

  setEditModalVisible(editModalVisible) {
    this.setState({ editModalVisible });
  }

  editMediaModalNode() {
    return (
      <BlogModal
        title="Edit media"
        visible={this.state.editModalVisible}
        onOk={() => this.setEditModalVisible(false)}
        onCancel={() => this.setEditModalVisible(false)}
      >
        <BlogEditor
          title={this.props.title}
          body={this.props.body}
          onChange={this.props.onChange}
          onSave={this.props.onUpdate}
          saving={this.props.saving}
          error={this.props.error}
        />
      </BlogModal>
    );
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <div className="container">
        <div className="blog">
          {this.editMediaModalNode()}
          <Row>
            <Col
              className="row"
              md={24}
              style={{ marginBottom: 24 }}
            >
              <div className="box">
                <Card
                  title={this.props.title}
                  extra={
                    <Button
                      type="primary"
                      size="large"
                      onClick={() => this.setEditModalVisible(true)}
                    >
                      Edit
                    </Button>
                  }
                >
                  <div
                    className="card-body"
                    dangerouslySetInnerHTML={this.createMarkup(this.props.body)}
                  />
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
