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
        facetsInfo={[
          {count: 1, display_name: 'Facet1', name: 'facet1'},
          {count: 3, display_name: 'Facet2', name: 'facet2'},
          {count: 4, display_name: 'Facet3', name: 'facet3'},
          {count: 5, display_name: 'Facet4', name: 'facet4'},
          {count: 5, display_name: 'Facet5', name: 'facet5'},
          {count: 4, display_name: 'Facet6', name: 'facet6'},
          {count: 12, display_name: 'Facet7', name: 'facet7'},
          {count: 17, display_name: 'Facet8', name: 'facet8'},
          {count: 18, display_name: 'Facet9', name: 'facet9'},
          {count: 19, display_name: 'Facet10', name: 'facet10'},
        ]} />
    );
  });

  it('should be defined', () => {
    expect(Facet).toBeDefined();
  });

  it('should receive props', () => {
    expect(component.instance().props.facetKey).toBe('key')
    expect(component.instance().props.title).toBe('Facet title')
    expect(component.instance().props.facetsInfo[0].count).toBe(1)
    expect(component.instance().props.facetsInfo[0].display_name).toBe('Facet1')
    expect(component.instance().props.facetsInfo[0].name).toBe('facet1')
  });

  it('should handle facet click event', () => {
    const li = component.find('li.list-group-item').first()
    li.simulate('click')
    expect(onClick.mock.calls.length).toEqual(1);
  })

  it('should expand facet list', () => {
    expect(component.state().collapsed).toBe(true)
    const a = component.find('a.btn').first()
    a.simulate('click')
    expect(component.state().collapsed).toBe(false)
  })
});