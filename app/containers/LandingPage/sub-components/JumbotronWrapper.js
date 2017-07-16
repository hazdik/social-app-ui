/**
*
* JumbotronWrapper
*
*/

import styled from 'styled-components';

import variables from '../../../css/Variables';

const marginTop = `${variables.headerHeight}`;
const backgroundColor = `${variables.brandColor1}`;
const color = `${variables.white}`;

const JumbotronWrapper = styled.div`
  .jumbotron {
    margin-top: ${marginTop};
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${backgroundColor};
    color: ${color};
  }
`;

export default JumbotronWrapper;
