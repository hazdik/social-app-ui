/**
 *
 * Image
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';

import ImageWrapper from './ImageWrapper';

function Image(props) {
  return (
    <ImageWrapper
      className={props.className}
      src={props.src}
      alt={props.alt}
    />
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Image.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
};

export default Image;