/**
*
* MenuItemWrapper
*
*/

import Menu from 'antd/lib/menu';
import styled from 'styled-components';

import variables from '../../css/Variables';

const color = `${variables.greyDark}`;

const MenuItemWrapper = styled(Menu.Item)`
  background-color: transparent !important;
  color: ${color} !important;
  font-size: ${variables.fs1} !important;
  padding: 0 !important;

  &::after {
    border-right: 0 !important;
  }
`;

export default MenuItemWrapper;
