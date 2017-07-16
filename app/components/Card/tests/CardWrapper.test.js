import React from 'react';
import { shallow } from 'enzyme';

import CardWrapper from '../card-wrapper';

const renderComponent = () => shallow(
  <CardWrapper>
    <input type="text" />
  </CardWrapper>
);

describe('<CardWrapper />', () => {
  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt any attributes', () => {
    const renderedComponent = shallow(
      <CardWrapper
        className={'test'}
        style={{ width: '100vw' }}
      >
        <input type="text" />
      </CardWrapper>
    );
    expect(renderedComponent.prop('className')).toBeDefined();
    expect(renderedComponent.prop('style')).toBeDefined();
  });
});
