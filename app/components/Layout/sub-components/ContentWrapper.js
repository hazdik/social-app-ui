/**
*
* ContentWrapper
*
*/

import Layout from 'antd/lib/layout';
import styled from 'styled-components';

import variables from '../../../css/Variables';

const backgroundColor = `${variables.greyLight}`;
const margin = `${variables.sidebarWidth}`;
const marginLeft = `${variables.leftSidebarWidth}`;
const headerHeight = `${variables.headerHeight}`;
const bigScreen = `${variables.bigScreen}`;

const { Content } = Layout;

const ContentWrapper = styled(Content)`
  margin: ${headerHeight} ${margin} 0 ${marginLeft};
  padding: 20px 20px 0;
  background-color: ${backgroundColor};
  height: 100%;
  min-height: calc(100vh - ${headerHeight});

  @media (max-width: ${bigScreen}) {
    margin: ${headerHeight} 0 0 ${marginLeft};
  }
`;

export default ContentWrapper;
