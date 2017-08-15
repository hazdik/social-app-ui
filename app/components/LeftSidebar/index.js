/**
*
* LeftSidebar
*
*/

import React from 'react';
import Icon from 'antd/lib/icon';
import { FormattedMessage } from 'react-intl';

import Link from 'components/Link';
import SiderWrapper from './SiderWrapper';
import MenuWrapper from './MenuWrapper';
import MenuItemWrapper from './MenuItemWrapper';
import messages from './messages';

function LeftSidebar() {
  return (
    <SiderWrapper collapsedWidth="0">
      <MenuWrapper mode="inline" defaultSelectedKeys={['4']}>
        <MenuItemWrapper
          key="1"
          className=" logo"
        >
          <Link
            to={'/'}
            activeClassName="active"
          >
            <Icon type="home" />
            <FormattedMessage {...messages.home} />
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper key="2">
          <Link
            to={'/blogs'}
            activeClassName="active"
          >
            <Icon type="file-text" />
            <FormattedMessage {...messages.blogs} />
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper key="3">
          <Link
            to={'/media'}
            activeClassName="active"
          >
            <Icon type="picture" />
            <FormattedMessage {...messages.mediaLibrary} />
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper key="4">
          <Link
            to={'/add/blog'}
            activeClassName="active"
          >
            <Icon type="edit" />
            <FormattedMessage {...messages.addBlog} />
          </Link>
        </MenuItemWrapper>
      </MenuWrapper>
    </SiderWrapper>
  );
}

export default LeftSidebar;
