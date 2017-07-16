/**
*
* HeaderWrapper
*
*/

import Layout from 'antd/lib/layout';
import styled from 'styled-components';

import variables from '../../css/Variables';

const backgroundColor = `${variables.white}`;
const marginLeft = `${variables.leftSidebarWidth}`;
const height = `${variables.headerHeight}`;
const shadowColor = `${variables.greyDark}`;

const { Header } = Layout;

const HeaderWrapper = styled(Header)`
  background: ${backgroundColor} !important;
  padding: 0 !important;
  position: fixed;
  width: calc(100% - ${marginLeft});
  z-index: 2;
  margin-left: ${marginLeft};
  height: ${height};
  box-shadow: 2px 2px 15px -5px ${shadowColor};
`;

export default HeaderWrapper;
