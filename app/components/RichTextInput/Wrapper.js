/**
*
* Wrapper
*
*/

import styled from 'styled-components';

import variables from '../../css/variables';

const bodyFontSize = `${variables.fs3}`;
const borderColor = `${variables.grey}`;

const Wrapper = styled.div`
  .rich-text-input-editor {
    border: 1px solid ${borderColor};
    border-radius: 2px;
    padding: 10px 20px;
    font-size: ${bodyFontSize};
  }
`;

export default Wrapper;
