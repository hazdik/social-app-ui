/**
*
* MenuWrapper
*
*/

import Menu from 'antd/lib/menu';
import styled from 'styled-components';

import variables from '../../global-css/variables';

const headerHeight = `${variables.headerHeight}`;

const MenuWrapper = styled(Menu)`
  line-height: ${headerHeight} !important;
  border: 0;
`;

export default MenuWrapper;