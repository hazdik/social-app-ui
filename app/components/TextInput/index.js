/**
*
* TextInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './InputWrapper';

function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.name}>
        {props.placeholder}
      </label>
      <InputWrapper
        disabled={props.saving}
        autoComplete="off"
        {...props}
      />
    </div>
  );
}

TextInput.propTypes = {
  saving: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;
