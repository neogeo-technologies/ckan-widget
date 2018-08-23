import React from 'react';
import { shallow } from 'enzyme';
import Facet from '../../../components/presentational/Facet';


let component;
let onClick;

describe('Facet', () => {
  beforeEach(() => {
    onClick = jest.fn()
    component = shallow(
      <Facet
        onClick={onClick}
        facetKey={'key'}
        title={'Facet title'}
        facetsInfo={[{
          count: 1, display_name: 'Licence Ouverte Version 2.0', name: 'license-3'}]} />
    );
  });

  it('should be defined', () => {
    expect(Facet).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should receive props', () => {
    expect(component.instance().props.facetKey).toBe('key')
    expect(component.instance().props.title).toBe('Facet title')
    expect(component.instance().props.facetsInfo[0].count).toBe(1)
    expect(component.instance().props.facetsInfo[0].display_name).toBe('Licence Ouverte Version 2.0')
    expect(component.instance().props.facetsInfo[0].name).toBe('license-3')
  });

  it('should handle facet click event', () => {
    const li = component.find('li.list-group-item')
    li.simulate('click')
    expect(onClick.mock.calls.length).toEqual(1);
  })
});