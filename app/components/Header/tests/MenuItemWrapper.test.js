import React from 'react';
import { shallow } from 'enzyme';

import MenuItemWrapper from '../menu-item-wrapper';

const renderComponent = () => shallow(<MenuItemWrapper />);

describe('<MenuItemWrapper />', () => {
  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt any attribute', () => {
    const renderedComponent = shallow(
      <MenuItemWrapper
        attribute={'test'}
        className={'test'}
      />
    );
    expect(renderedComponent.prop('attribute')).toBeDefined();
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});
