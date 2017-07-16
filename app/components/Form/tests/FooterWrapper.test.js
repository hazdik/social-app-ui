import React from 'react';
import { shallow } from 'enzyme';

import FooterWrapper from '../footer-wrapper';

const renderComponent = () => shallow(
  <FooterWrapper>
    <input type="text" />
  </FooterWrapper>
);

describe('<FooterWrapper />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should not adopt any attribute', () => {
    const renderedComponent = shallow(
      <FooterWrapper
        attribute={'test'}
        className={'test'}
      >
        <input type="text" />
      </FooterWrapper>
    );
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });

  it('should adopt children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(
      <input type="text" />
    )).toBe(true);
  });
});
