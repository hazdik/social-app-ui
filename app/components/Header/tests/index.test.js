import React from 'react';
import { shallow } from 'enzyme';
import Icon from 'antd/lib/icon';
import { Link } from 'react-router';

import Header from '../index';

const renderComponent = () => shallow(<Header />);

describe('<Header />', () => {
  it('should not have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeUndefined();
  });

  it('should contain <Link /> component', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.contains(
      <Link to={'/'}>
        <Icon type="home" />
      </Link>
    )).toBe(true);
  });
});
