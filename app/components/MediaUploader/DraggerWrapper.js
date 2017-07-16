/**
*
* DraggerWrapper
*
*/

import Upload from 'antd/lib/upload';
import styled from 'styled-components';

import variables from '../../css/Variables';

const borderColor = `${variables.grey}`;

const Dragger = Upload.Dragger;

const DraggerWrapper = styled(Dragger)`
  .ant-upload.ant-upload-drag {
    border: 2px dashed ${borderColor};
    padding: 20px;
    border-radius: 2px;
  }

  .ant-upload-text {
    font-family: inherit;
  }

  .ant-upload-list-item {
    margin-top: 20px;
  }

  .ant-upload-list-picture .ant-upload-list-item {
    border-radius: 2px;
  }
`;

export default DraggerWrapper;
