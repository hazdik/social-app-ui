/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';
import Link from 'components/Link';
import Input from 'antd/lib/input';

import Loader from 'components/Loader';
import Dropdown from 'components/Dropdown';
import AvatarWrapper from './AvatarWrapper';
import HeaderWrapper from './HeaderWrapper';
import MenuWrapper from './MenuWrapper';
import MenuItemWrapper from './MenuItemWrapper';
import ProfileCard from './ProfileCard';

function Header(props) {
  return (
    <HeaderWrapper>
      <MenuWrapper mode="horizontal">
        <MenuItemWrapper
          key="1"
        >
          <Link
            to={'/'}
            className="logo"
          >
            Socialify
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper
          key="2"
        >
          <Input
            size="large"
            placeholder="Search for members, job, people and more..."
            style={{ width: 400 }}
          />
        </MenuItemWrapper>
        <MenuItemWrapper
          key="3"
          style={{ float: 'right' }}
        >
          <Dropdown overlay={<ProfileCard />}>
            <a className="ant-dropdown-link" >
              { props.isLoading ?
                <Loader />
              :
                [
                  <AvatarWrapper
                    key={1}
                    src={props.avatar}
                    alt={`${props.firstName} ${props.lastName}`}
                  />,
                  <Icon
                    key={2}
                    type="down"
                  />,
                ]
              }
            </a>
          </Dropdown>
        </MenuItemWrapper>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Header;
