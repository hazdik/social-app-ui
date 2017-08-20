/**
*
* Error
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'antd/lib/alert';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import messages from './messages';

function Error(props) {
  return (
    <div className="c-error">
      <Alert
        message={props.message}
        type="error"
        showIcon
      />
      <Button
        text={<FormattedMessage {...messages.retry} />}
        onClick={() => window.location.reload()}
      />
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
