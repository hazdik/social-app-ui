/**
*
* SidebarCombo
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import Header from 'components/Header';
import ContentWrapper from './sub-components/ContentWrapper';
import LayoutWrapper from './sub-components/LayoutWrapper';

class SidebarCombo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LayoutWrapper>
        <LayoutWrapper>
          <Header
            avatar={this.props.avatar}
            firstName={this.props.firstName}
            lastName={this.props.lastName}
            isLoading={this.props.isLoading}
          />
        </LayoutWrapper>
        <LayoutWrapper
          className="ant-layout-has-sider"
          style={{
            width: '1200px',
            margin: '60px auto 0',
          }}
        >
          <LeftSidebar />
          <ContentWrapper>
            {React.Children.toArray(this.props.children)}
          </ContentWrapper>
          <RightSidebar />
        </LayoutWrapper>
      </LayoutWrapper>
    );
  }
}

SidebarCombo.propTypes = {
  children: PropTypes.node,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default SidebarCombo;
