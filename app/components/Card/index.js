/**
*
* Card
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import CardWrapper from './CardWrapper';

function Card(props) {
  return (
    <div className="c-card">
      <Wrapper>
        {props['data-meta'] ? props['data-meta'] : false}
        <CardWrapper
          {...props}
        >
          {React.Children.toArray(props.children)}
        </CardWrapper>
      </Wrapper>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  'data-meta': PropTypes.node,
};

export default Card;
