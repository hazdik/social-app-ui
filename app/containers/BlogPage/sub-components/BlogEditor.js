import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import Card from 'components/Card';
import Form from 'components/Form';
import TextInput from 'components/TextInput';

export default class BlogEditor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    saving: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
    onSave: PropTypes.func,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      body: this.props.body,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      body: nextProps.body,
    });
  }

  handleSubmit() {
    // doing this will make the component faster
    // since it doesn't have to re-render on each state updation
    this.props.onChange({
      title: this.state.title,
      body: this.state.body,
    });

    this.props.onSave();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="blog-editor">
        <Row gutter={24}>
          <Col
            className="row"
            md={24}
          >
            <div className="box">
              <Card title="Edit blog">
                <Row>
                  <Col
                    className="row"
                    md={24}
                  >
                    <Form
                      onClick={this.handleSubmit}
                      disabled={!this.state.title || !this.state.body || this.props.saving}
                      saving={this.props.saving}
                      wordCount={this.state.body ? this.state.body.split(' ').length : 0}
                      error={this.props.error}
                    >
                      <TextInput
                        placeholder="Title of the blog"
                        value={this.state.title}
                        autosize={{ minRows: 4, maxRows: 6 }}
                        style={{ marginBottom: 24 }}
                        onChange={this.handleChange}
                        disabled={this.props.saving}
                        name="title"
                      />
                      <TextInput
                        type="textarea"
                        placeholder="Body of the blog"
                        value={this.state.body}
                        autosize={{ minRows: 4 }}
                        onChange={this.handleChange}
                        disabled={this.props.saving}
                        name="body"
                      />
                    </Form>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
