/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import ButtonWrapper from './ButtonWrapper';

function Button(props) {
  return (
    <div className="c-button">
      <ButtonWrapper
        type={props.type}
        loading={props.loading}
        onClick={props.onClick}
        size={props.size}
        style={props.style}
        icon={props.icon}
      >
        {props.text}
      </ButtonWrapper>
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  loading: PropTypes.bool,
  text: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  loading: false,
  text: '',
  size: 'default',
};

export default Button;
