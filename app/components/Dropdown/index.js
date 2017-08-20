/**
*
* Dropdown
*
*/

import React from 'react';

import DropdownWrapper from './DropdownWrapper';

function Dropdown(props) {
  return (
    <div className="c-dropdown">
      <DropdownWrapper
        {...props}
      />
    </div>
  );
}

export default Dropdown;
