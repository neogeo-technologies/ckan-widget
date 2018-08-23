import React from 'react';
import { shallow } from 'enzyme'
import App from '../App';


describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render correctly', () => {
    const component = shallow(
      <App />
    );
    expect(component).toMatchSnapshot();
  });
});