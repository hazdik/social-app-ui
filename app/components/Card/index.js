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
    <CardWrapper
      {...props}
    >
      {React.Children.toArray(props.children)}
    </CardWrapper>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
