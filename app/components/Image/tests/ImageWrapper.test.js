import React from 'react';
import { shallow } from 'enzyme';

import ImageWrapper from '../image-wrapper';

const src = 'test.png';
const alt = 'test';
const className = 'someClass';
const renderComponent = () => shallow(
  <ImageWrapper
    src={src}
    alt={alt}
    className={className}
  />
);

describe('<ImageWrapper />', () => {
  it('should render a <img> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('img');
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should not adopt any attribute', () => {
    const renderedComponent = shallow(
      <ImageWrapper
        attribute={'test'}
        className={'test'}
      >
        <input type="text" />
      </ImageWrapper>
    );
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
