/**
*
* Card
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import CardWrapper from './CardWrapper';

function Card(props) {
  return (
    <div className="card">
      {props['data-meta'] ? props['data-meta'] : false}
      <CardWrapper
        {...props}
      >
        {React.Children.toArray(props.children)}
      </CardWrapper>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  'data-meta': PropTypes.node,
};

export default Card;
