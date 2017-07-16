import React from 'react';
import { shallow } from 'enzyme';

import HeaderWrapper from '../header-wrapper';

const renderComponent = () => shallow(<HeaderWrapper />);

describe('<HeaderWrapper />', () => {
  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt any attribute', () => {
    const renderedComponent = shallow(
      <HeaderWrapper
        attribute={'test'}
        className={'test'}
      />
    );
    expect(renderedComponent.prop('attribute')).toBeDefined();
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});
