import React from 'react';
import { shallow } from 'enzyme';
import Error from '../../../components/presentational/Error';

let component

describe('Error', () => {
  beforeEach(() => {
    component = shallow(
      <Error error={'Network error!'} />
    );
  })

  it('should be defined', () => {
    expect(Error).toBeDefined();
  });

  it('should be shown at the begging', () => {
    expect(component.find('div.alert').length).toEqual(1);
  })

  it('should close the alert', () => {
    expect(component.instance().state.show).toBe(true)

    const alert = component.find('button')
    alert.simulate('click')
    expect(component.instance().state.show).toBe(false)
    expect(component.find('div.alert').length).toEqual(0);
  })
});
