import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import Card from 'components/Card';
import Form from 'components/Form';
import TextInput from 'components/TextInput';

export default class MediaEditor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    media: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
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
      name: this.props.media.name,
      description: this.props.media.description,
      url: this.props.media.url,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.media.name,
      description: nextProps.media.description,
      url: nextProps.media.url,
    });
  }

  handleSubmit() {
    // doing this will make the component faster
    // since it doesn't have to re-render on each state updation
    this.props.onChange({
      name: this.state.name,
      description: this.state.description,
      url: this.state.url,
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
      <div className="media-editor">
        <Row gutter={24}>
          <Col
            className="row"
            md={12}
          >
            <div className="box">
              <Card>
                <img
                  src={this.props.media.url}
                  role="presentation"
                />
              </Card>
            </div>
          </Col>
          <Col
            className="row"
            md={12}
          >
            <div className="box">
              <Card title="Edit media">
                <Row>
                  <Col
                    className="row"
                    md={24}
                  >
                    <Form
                      onClick={this.handleSubmit}
                      disabled={!this.state.name || !this.state.description || this.props.saving}
                      saving={this.props.saving}
                      wordCount={this.state.description ? this.state.description.split(' ').length : 0}
                      error={this.props.error}
                    >
                      <TextInput
                        placeholder="Name of the media"
                        value={this.state.name}
                        autosize={{ minRows: 4, maxRows: 6 }}
                        style={{ marginBottom: 24 }}
                        onChange={this.handleChange}
                        disabled={this.props.saving}
                        name="name"
                      />
                      <TextInput
                        type="textarea"
                        placeholder="Description of the media"
                        value={this.state.description}
                        autosize={{ minRows: 4 }}
                        onChange={this.handleChange}
                        disabled={this.props.saving}
                        name="description"
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
