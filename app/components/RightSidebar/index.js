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
      <div className="c-right-sidebar">
        <SiderWrapper collapsedWidth="0" />
      </div>
    );
  }
}

RightSidebar.propTypes = {

};

export default RightSidebar;
