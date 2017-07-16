/**
*
* InputWrapper
*
*/

import Input from 'antd/lib/input';
import styled from 'styled-components';

import variables from '../../global-css/variables';

const borderColor = `${variables.grey}`;
const bodyFontSize = `${variables.fs3}`;

const InputWrapper = styled(Input)`
  border-color: ${borderColor} !important;
  border-radius: 2px !important;
  padding: 20px !important;
  font-size: ${bodyFontSize};
`;

export default InputWrapper;
