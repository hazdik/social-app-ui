import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';

export default class MediaModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Modal
        okText="Ok"
        cancelText="Cancel"
        {...this.props}
      >
        {React.Children.toArray(this.props.children)}
      </Modal>
    );
  }
}
