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
      {props.author ? props.author : false}
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
  author: PropTypes.node,
};

export default Card;
