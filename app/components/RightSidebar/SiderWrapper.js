/**
*
* SiderWrapper
*
*/

import Layout from 'antd/lib/layout';
import styled from 'styled-components';

import variables from '../../css/Variables';

const bigScreen = `${variables.bigScreen}`;

const { Sider } = Layout;

const SiderWrapper = styled(Sider)`
  background-color: transparent;

  @media (max-width: ${bigScreen}) {
    display: none;
  }
`;

export default SiderWrapper;
