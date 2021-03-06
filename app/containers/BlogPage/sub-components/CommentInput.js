import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import Form from 'components/Form';
import TextInput from 'components/TextInput';

export default class CommentInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    saving: PropTypes.bool,
  };

  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    this.setState({
      value: e.target.value,
    });

    this.props.onChange(e.target.value);
  }

  handleSubmit() {
    this.setState({
      value: '',
    });

    this.props.onSave();
  }

  render() {
    return (
      <Row>
        <Col
          className="row"
          md={24}
        >
          <Form
            onClick={this.handleSubmit}
            disabled={!this.state.value || this.props.saving}
            saving={this.props.saving}
            wordCount={this.state.value ? this.state.value.split(' ').length : 0}
          >
            <TextInput
              type="textarea"
              placeholder="Write a comment"
              value={this.state.value}
              onChange={this.handleChange}
              disabled={this.props.saving}
              noLabel
            />
          </Form>
        </Col>
      </Row>
    );
  }
}
