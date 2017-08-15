/**
*
* ContentWrapper
*
*/

import Layout from 'antd/lib/layout';
import styled from 'styled-components';

import variables from '../../../css/Variables';

const headerHeight = `${variables.headerHeight}`;

const { Content } = Layout;

const ContentWrapper = styled(Content)`
  padding: 20px 20px 0;
  height: 100%;
  min-height: calc(100vh - ${headerHeight});
`;

export default ContentWrapper;
