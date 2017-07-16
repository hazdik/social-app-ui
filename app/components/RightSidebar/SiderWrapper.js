/**
*
* SiderWrapper
*
*/

import Layout from 'antd/lib/layout';
import styled from 'styled-components';

import variables from '../../global-css/variables';

const backgroundColor = `${variables.white}`;
const headerHeight = `${variables.headerHeight}`;
const bigScreen = `${variables.bigScreen}`;
const shadowColor = `${variables.greyDark}`;

const { Sider } = Layout;

const SiderWrapper = styled(Sider)`
  margin-top: ${headerHeight};
  background-color: ${backgroundColor} !important;
  position: fixed;
  right: 0;
  height: 100vh;
  box-shadow: -2px 2px 15px -5px ${shadowColor};

  @media (max-width: ${bigScreen}) {
    display: none;
  }
`;

export default SiderWrapper;
