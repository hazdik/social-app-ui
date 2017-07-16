/**
*
* MenuItemWrapper
*
*/

import Menu from 'antd/lib/menu';
import styled from 'styled-components';

import variables from '../../global-css/variables';

const linkColor = `${variables.brandColor1}`;
const headerHeight = `${variables.headerHeight}`;

const MenuItemWrapper = styled(Menu.Item)`
  border-bottom: none !important;
  display: flex !important;
  align-items: center;
  height: ${headerHeight};

  &:hover,
  &.ant-menu-item-selected {
    border-bottom: none !important;
  }
  .active {
    color: ${linkColor} !important;
  }
`;

export default MenuItemWrapper;
