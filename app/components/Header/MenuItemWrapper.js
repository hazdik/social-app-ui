/**
*
* MenuItemWrapper
*
*/

import Menu from 'antd/lib/menu';
import styled from 'styled-components';

import variables from '../../css/Variables';

const linkColor = `${variables.brandColor1}`;
const headerHeight = `${variables.headerHeight}`;
const logoFontSize = `${variables.fs5}`;
const logoFontWeight = `${variables.fw3}`;
const logoFontColor = `${variables.black}`;
const searchFontSize = `${variables.fs2}`;

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

  .logo {
    font-size: ${logoFontSize};
    font-weight: ${logoFontWeight};
    color: ${logoFontColor} !important;
  }

  .ant-input {
    border: none;
    font-size: ${searchFontSize};
  }
`;

export default MenuItemWrapper;
