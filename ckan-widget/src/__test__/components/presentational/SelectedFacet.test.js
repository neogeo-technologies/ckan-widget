import React from 'react';
import { shallow } from 'enzyme';
import SelectedFacet from '../../../components/presentational/SelectedFacet';

let component;
let onClick

describe('Sort', () => {
  beforeEach(() => {
    onClick = jest.fn();
    component = shallow(
      <SelectedFacet onClick={onClick} facet={'organization:org1'} />
    );
  })

  it('should be defined', () => {
    expect(SelectedFacet).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component.instance().props.facet).toBe('organization:org1')
    expect(component).toMatchSnapshot();
  });

  it('should handle button click', () => {
    const buttonElement = component.find('button')
    buttonElement.simulate('click', { target: { value: 'event' }})
    expect(onClick.mock.calls.length).toEqual(1);
  })
});