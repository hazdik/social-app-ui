/**
*
* ModalWrapper
*
*/

import Modal from 'antd/lib/modal';
import styled from 'styled-components';

import variables from '../../css/Variables';

const backgroundColor = `${variables.greyLight}`;

const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    border-radius: 2px;
    background-color: ${backgroundColor};
  }

  .ant-modal-header {
    border-radius: 2px 2px 0 0;
  }

  .ant-modal-body {
    padding: 20px;
  }

  .ant-modal-footer {
    border-radius: 0 0 2px 2px;
  }

  .vertical-center-modal {
    text-align: center;
    white-space: nowrap;
  }

  .vertical-center-modal:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
  }

  .vertical-center-modal .ant-modal {
    display: inline-block;
    vertical-align: middle;
    top: 0;
    text-align: left;
  }
`;

export default ModalWrapper;
