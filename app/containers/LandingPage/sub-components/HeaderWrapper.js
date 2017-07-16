/**
*
* HeaderWrapper
*
*/

import Layout from 'antd/lib/layout';
import styled from 'styled-components';

import variables from '../../../global-css/variables';

const backgroundColor = `${variables.white}`;
const height = `${variables.headerHeight}`;

const { Header } = Layout;

const HeaderWrapper = styled(Header)`
  background: ${backgroundColor} !important;
  padding: 0 !important;
  position: fixed;
  width: 100%;
  z-index: 2;
  height: ${height};
`;

export default HeaderWrapper;
