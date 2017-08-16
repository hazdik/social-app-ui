import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { browserHistory } from 'react-router';

import Form from 'components/Form';
import TextInput from 'components/TextInput';

export default class AddBlogForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    saving: PropTypes.bool,
  };

  constructor() {
    super();

    this.state = {
      title: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
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

    this.setState({
      title: '',
      body: '',
    });

    // redirect to /blogs page after submitting
    browserHistory.push('/blogs');
  }

  render() {
    return (
      <div className="comment-input">
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
              title="Add new blog"
            >
              <TextInput
                placeholder="Title"
                value={this.state.title}
                style={{ marginBottom: 24 }}
                onChange={this.handleChange}
                disabled={this.props.saving}
                name="title"
              />
              <TextInput
                type="textarea"
                placeholder="Description"
                value={this.state.body}
                onChange={this.handleChange}
                disabled={this.props.saving}
                name="body"
              />
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
