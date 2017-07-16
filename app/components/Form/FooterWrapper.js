/**
*
* FooterWrapper
*
*/

import styled from 'styled-components';

import variables from '../../css/Variables';

const borderColor = `${variables.grey}`;
const backgroundColor = `${variables.greyLight}`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  border-top: 0;
`;

export default FooterWrapper;
