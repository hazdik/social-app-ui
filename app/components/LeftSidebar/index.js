/**
*
* LeftSidebar
*
*/

import React from 'react';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';
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
          <Tooltip
            placement="right"
            title={<FormattedMessage {...messages.home} />}
          >
            <Link
              to={'/'}
              activeClassName="active"
            >
              <Icon type="home" />
            </Link>
          </Tooltip>
        </MenuItemWrapper>
        <MenuItemWrapper key="2">
          <Tooltip
            placement="right"
            title={<FormattedMessage {...messages.blogs} />}
          >
            <Link
              to={'/blogs'}
              activeClassName="active"
            >
              <Icon type="file-text" />
            </Link>
          </Tooltip>
        </MenuItemWrapper>
        <MenuItemWrapper key="3">
          <Tooltip
            placement="right"
            title={<FormattedMessage {...messages.mediaLibrary} />}
          >
            <Link
              to={'/media'}
              activeClassName="active"
            >
              <Icon type="picture" />
            </Link>
          </Tooltip>
        </MenuItemWrapper>
        <MenuItemWrapper key="4">
          <Tooltip
            placement="right"
            title={<FormattedMessage {...messages.addBlog} />}
          >
            <Link
              to={'/add/blog'}
              activeClassName="active"
            >
              <Icon type="edit" />
            </Link>
          </Tooltip>
        </MenuItemWrapper>
      </MenuWrapper>
    </SiderWrapper>
  );
}

export default LeftSidebar;
