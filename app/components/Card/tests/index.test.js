import React from 'react';
import { shallow } from 'enzyme';

import Card from '../index';

const renderComponent = () => shallow(
  <Card>
    <div>Hello world!</div>
  </Card>
);

describe('<Card />', () => {
  it('should render children', () => {
    const renderedComponent = renderComponent({ message: 'Unauthorized!' });
    expect(renderedComponent.contains(
      <div>Hello world!</div>
    )).toBe(true);
  });
});
