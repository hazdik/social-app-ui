import React from 'react';
import { shallow } from 'enzyme';

import FormWrapper from '../form-wrapper';

const renderComponent = () => shallow(
  <FormWrapper>
    <input type="text" />
  </FormWrapper>
);

describe('<FormWrapper />', () => {
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
      <FormWrapper
        attribute={'test'}
        className={'test'}
      >
        <input type="text" />
      </FormWrapper>
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
