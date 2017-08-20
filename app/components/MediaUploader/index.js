/**
*
* MediaUploader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import Card from 'components/Card';
import DraggerWrapper from './DraggerWrapper';

class MediaUploader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.configs = {
      name: 'file',
      multiple: true,
      action: process.env.RB_CLOUDINARY_UPLOAD_URL,
      listType: 'picture',
      data: (file) => {
        const media = file;
        media.api_key = process.env.RB_CLOUDINARY_API_KEY;
        media.upload_preset = process.env.RB_CLOUDINARY_UPLOAD_PRESET;

        return media;
      },
      onChange: (fileList) => { this.props.onUpload(fileList); },
    };
  }

  render() {
    return (
      <div className="c-media-uploader">
        <Row>
          <Col
            className="row"
            md={24}
          >
            <Card>
              <DraggerWrapper {...this.configs}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </DraggerWrapper>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

MediaUploader.propTypes = {
  onUpload: PropTypes.func,
};

export default MediaUploader;
