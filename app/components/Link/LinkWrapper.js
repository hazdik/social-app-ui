/**
*
* LinkWrapper
*
*/

import { Link } from 'react-router';
import styled from 'styled-components';

import variables from '../../css/Variables';

const color = `${variables.greyDark}`;
const activeColor = `${variables.black}`;
const fontSize = `${variables.fs3}`;
const fontWeight = `${variables.fw2}`;

const LinkWrapper = styled(Link)`
  color: ${color} !important;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;

  &.active {
    color: ${activeColor} !important;
    font-weight: ${fontWeight};
  }
`;

export default LinkWrapper;
