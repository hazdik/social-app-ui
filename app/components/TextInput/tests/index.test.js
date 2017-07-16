import React from 'react';
import { mount } from 'enzyme';

import TextInput from '../index';

const renderComponent = (props = {}) => mount(
  <TextInput
    disabled={props.saving}
    autoComplete="off"
    {...props}
  />
);

describe('<TextInput />', () => {
  it('should render an <input /> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('input').length).toEqual(1);
  });

  it('should render an <textarea /> tag when textarea is passed inside type prop', () => {
    const renderedComponent = renderComponent({
      type: 'textarea',
    });
    expect(renderedComponent.find('textarea').length).toEqual(1);
  });
});
