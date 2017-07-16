/**
*
* LinkWrapper
*
*/

import { Link } from 'react-router';
import styled from 'styled-components';

import variables from '../../global-css/variables';

const color = `${variables.greyDark}`;
const activeColor = `${variables.white}`;
const fontSize = `${variables.fs5}`;
const fontWeight = `${variables.fw3}`;

const LinkWrapper = styled(Link)`
  color: ${color} !important;
  font-size: ${fontSize};
  width: 100%;
  height: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;

  &.active {
    color: ${activeColor} !important;
    font-weight: ${fontWeight};
  }
`;

export default LinkWrapper;
