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
    <div className="c-form">
      <FormWrapper>
        <div className="form">
          {React.Children.toArray(props.children)}
        </div>
        <FooterWrapper>
          {props.error ? props.error.message : false}
          <Button
            type="primary"
            size="large"
            className="u-right"
            onClick={props.onClick}
            disabled={props.disabled}
          >
            {props.saving ? <FormattedMessage {...messages.saving} /> : <FormattedMessage {...messages.save} />}
          </Button>
        </FooterWrapper>
      </FormWrapper>
    </div>
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
};

export default Form;
