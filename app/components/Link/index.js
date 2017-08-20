/**
*
* Link
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import LinkWrapper from './LinkWrapper';

function Link(props) {
  return (
    <div className="o-link">
      <LinkWrapper
        {...props}
      >
        {React.Children.toArray(props.children)}
      </LinkWrapper>
    </div>
  );
}

Link.propTypes = {
  children: PropTypes.node,
};

export default Link;
