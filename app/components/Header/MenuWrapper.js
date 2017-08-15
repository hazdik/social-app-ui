/**
*
* MenuWrapper
*
*/

import Menu from 'antd/lib/menu';
import styled from 'styled-components';

import variables from '../../css/Variables';

const headerHeight = `${variables.headerHeight}`;
const width = `${variables.bigScreen}`;

const MenuWrapper = styled(Menu)`
  line-height: ${headerHeight} !important;
  border: 0;
  width: ${width};
  margin: 0 auto;
`;

export default MenuWrapper;
