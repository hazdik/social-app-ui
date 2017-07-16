/**
*
* Modal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';

import ModalWrapper from './ModalWrapper';

function Modal(props) {
  return (
    <ModalWrapper
      width={800}
      wrapClassName="vertical-center-modal"
      footer={[
        <Button
          key="submit"
          type="primary"
          size="large"
          loading={props.loading}
          onClick={props.onOk}
        >
          Close
        </Button>,
      ]}
      {...props}
    >
      {React.Children.toArray(props.children)}
    </ModalWrapper>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  onOk: PropTypes.func,
};

Modal.defaultProps = {
  buttonText: 'Save',
};

export default Modal;
