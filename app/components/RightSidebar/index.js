/**
*
* RightSidebar
*
*/

import React from 'react';

import SiderWrapper from './SiderWrapper';

class RightSidebar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SiderWrapper collapsedWidth="0" />
    );
  }
}

RightSidebar.propTypes = {

};

export default RightSidebar;
