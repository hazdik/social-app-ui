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
    <div className="c-text-input">
      { !props.noLabel ?
        <label htmlFor={props.name}>
          {props.placeholder}
        </label>
        : false
      }
      <InputWrapper
        disabled={props.saving}
        autoComplete="off"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
      />
    </div>
  );
}

TextInput.propTypes = {
  saving: PropTypes.bool,
  noLabel: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
