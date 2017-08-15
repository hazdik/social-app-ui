/**
*
* SiderWrapper
*
*/

import Layout from 'antd/lib/layout';
import styled from 'styled-components';

import variables from '../../css/Variables';

const sidebarWidth = `${variables.sidebarWidth}`;

const { Sider } = Layout;

const SiderWrapper = styled(Sider)`
  background-color: transparent;
  width: ${sidebarWidth} !important;
  padding: 20px 20px 0;
`;

export default SiderWrapper;
