/**
*
* Form
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import FooterWrapper from './FooterWrapper';
import FormWrapper from './FormWrapper';

function Form(props) {
  return (
    <FormWrapper>
      <div className="form-body">
        {React.Children.toArray(props.children)}
      </div>
      <FooterWrapper>
        <span className="word-count">
          {props.wordCount ? `${props.wordCount}` : false}
        </span>
        {props.error ? props.error.message : false}
        <Button
          type="primary"
          size="large"
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.saving ? <FormattedMessage {...messages.saving} /> : <FormattedMessage {...messages.save} />}
        </Button>
      </FooterWrapper>
    </FormWrapper>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  saving: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  wordCount: PropTypes.number,
};

export default Form;
