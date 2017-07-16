import React from 'react';
import { shallow } from 'enzyme';

import Form from '../index';

const renderComponent = () => shallow(
  <Form
    onClick={() => {}}
    disabled={false}
    saving={false}
    wordCount={10}
  >
    <input type="text" />
  </Form>
);

describe('<Form />', () => {
  it('should adopt children', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.contains(
      <div className="form-body">
        <input type="text" />
      </div>
    )).toBe(true);
  });

  it('should render a <Button /> component', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Button').length).toEqual(1);
  });
});
