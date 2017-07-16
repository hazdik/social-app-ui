/**
*
* SiderWrapper
*
*/

import Layout from 'antd/lib/layout';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

import variables from '../../global-css/variables';

const logoBorderColor = darken(0.05, `${variables.brandColor2}`);
const logoBackgroundColor = lighten(0.05, `${variables.brandColor2}`);
const backgroundColor = `${variables.brandColor2}`;
const headerHeight = `${variables.headerHeight}`;
const sidebarWidth = `${variables.leftSidebarWidth}`;
const shadowColor = `${variables.brandColor2}`;

const { Sider } = Layout;

const SiderWrapper = styled(Sider)`
  background-color: ${backgroundColor} !important;
  position: fixed !important;
  height: 100vh;
  width: ${sidebarWidth} !important;
  box-shadow: 10px 5px 10px -10px ${shadowColor};

  .logo {
    background-color: ${logoBackgroundColor} !important;
    height: ${headerHeight};
    border-bottom: 1px solid ${logoBorderColor};
    width: ${sidebarWidth};
  }
`;

export default SiderWrapper;
