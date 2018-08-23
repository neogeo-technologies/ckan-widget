import React from 'react';
import { mount } from 'enzyme';
import Error from '../../../components/presentational/Error';

describe('Error', () => {
  it('should be defined', () => {
    expect(Error).toBeDefined();
  });

  it('should render correctly', () => {
    const component = mount(
      <Error error={'Network error!'} />
    );

    expect(component).toMatchSnapshot();
  });
});
