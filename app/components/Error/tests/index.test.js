import React from 'react';
import { shallow } from 'enzyme';
import Alert from 'antd/lib/alert';

import Error from '../index';

const renderComponent = (props = {}) => shallow(
  <Error message={props.message} />
);

describe('<Error />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = renderComponent({ message: 'Unauthorized!' });
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should contain an <Alert /> component with type="error"', () => {
    const renderedComponent = renderComponent({ message: 'Unauthorized!' });
    expect(renderedComponent.contains(
      <Alert
        message="Unauthorized!"
        type="error"
        showIcon
      />
    )).toBe(true);
  });

  it('should contain a <Button /> component', () => {
    const renderedComponent = renderComponent({ message: 'Unauthorized!' });
    expect(renderedComponent.find('Button').length).toEqual(1);
  });

  it('should contain a <FormattedMessage /> component', () => {
    const renderedComponent = renderComponent({ message: 'Unauthorized!' });
    expect(renderedComponent.find('FormattedMessage').length).toEqual(1);
  });
});
