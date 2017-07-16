/**
*
* LayoutWrapper
*
*/

import Layout from 'antd/lib/layout';
import styled from 'styled-components';

import variables from '../../../global-css/variables';

const backgroundColor = `${variables.greyDark}`;

const LayoutWrapper = styled(Layout)`
  width: 100%;
  background-color: ${backgroundColor} !important;
  overflow: initial !important;
  flex: initial;
`;

export default LayoutWrapper;
