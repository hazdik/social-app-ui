import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import _ from 'lodash';

import Card from 'components/Card';
import MediaUploader from 'components/MediaUploader';
import MediaModal from './MediaModal';
import Media from './Media';
import MediaEditor from './MediaEditor';

export default class MediaList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    media: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    setId: PropTypes.func,
    onChange: PropTypes.func,
    onSave: PropTypes.func,
    onUpdate: PropTypes.func,
    mediaSaving: PropTypes.bool,
    mediaError: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
  };

  constructor() {
    super();

    this.state = {
      clickedMediaId: null,
      addMediaModalVisible: false,
      editMediaModalVisible: false,
    };
  }

  setAddMediaModalVisible(addMediaModalVisible) {
    this.setState({ addMediaModalVisible });
  }

  setEditMediaModalVisible(editMediaModalVisible, id) {
    this.setState({
      editMediaModalVisible,
      clickedMediaId: id,
    });

    this.props.setId(id);
  }

  handleMediaUpload(obj) {
    if (obj.file.status === 'done') {
      this.props.onChange({
        url: obj.file.response.url,
      });

      this.props.onSave();
    }
  }

  addMediaModalNode() {
    return (
      <MediaModal
        title="Add media"
        visible={this.state.addMediaModalVisible}
        onOk={() => this.setAddMediaModalVisible(false)}
        onCancel={() => this.setAddMediaModalVisible(false)}
      >
        <MediaUploader
          onUpload={(obj) => this.handleMediaUpload(obj)}
        />
      </MediaModal>
    );
  }

  findMedia() {
    const mediaObject = _.find(this.props.media, { id: this.state.clickedMediaId });

    return mediaObject ? mediaObject.attributes : false;
  }

  editMediaModalNode() {
    return (
      <MediaModal
        title="Edit media"
        visible={this.state.editMediaModalVisible}
        onOk={() => this.setEditMediaModalVisible(false)}
        onCancel={() => this.setEditMediaModalVisible(false)}
      >
        <MediaEditor
          media={this.findMedia()}
          onChange={this.props.onChange}
          onSave={this.props.onUpdate}
          saving={this.props.mediaSaving}
          error={this.props.mediaError}
        />
      </MediaModal>
    );
  }

  render() {
    return (
      <div className="media">
        {this.addMediaModalNode()}
        {this.editMediaModalNode()}
        <div className="box">
          <Card
            title="Media Library"
            extra={
              <Button
                type="primary"
                size="large"
                onClick={() => this.setAddMediaModalVisible(true)}
              >
                Add Media
              </Button>
            }
          >
            <Row gutter={24}>
              { [...this.props.media].reverse().map((media) =>
                // http://stackoverflow.com/questions/30019923/react-rendering-a-list-in-reverse-order#comment69686732_38860263
                <Col
                  className="row"
                  md={6}
                  key={media.id}
                  style={{ marginBottom: 24 }}
                >
                  <Media
                    onClick={() => this.setEditMediaModalVisible(true, media.id)}
                    media={media.attributes}
                  />
                </Col>
              )}
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
