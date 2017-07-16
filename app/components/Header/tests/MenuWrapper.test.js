import React from 'react';
import { shallow } from 'enzyme';

import MenuWrapper from '../menu-wrapper';

const renderComponent = () => shallow(<MenuWrapper />);

describe('<MenuWrapper />', () => {
  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt any attribute', () => {
    const renderedComponent = shallow(
      <MenuWrapper
        attribute={'test'}
        className={'test'}
      />
    );
    expect(renderedComponent.prop('attribute')).toBeDefined();
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});
