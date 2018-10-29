import React from 'react';
import { shallow } from 'enzyme';
import SelectedFacet from '../../../components/presentational/SelectedFacet';

let component;
let onClick

describe('Sort', () => {
  beforeEach(() => {
    onClick = jest.fn();
    component = shallow(
      <SelectedFacet onClick={onClick} search_facets={{
        organization: {"items": [{ "count": 150, "display_name": "Org1", "name": "org1" }]}}} facet={'organization:org1'} />
    );

    shallow(
      <SelectedFacet onClick={onClick} search_facets={{}} facet={''} />
    );
  })

  it('should be defined', () => {
    expect(SelectedFacet).toBeDefined();
  });

  it('should handle button click', () => {
    const buttonElement = component.find('li')
    buttonElement.simulate('click', { target: { value: 'event' }})
    expect(onClick.mock.calls.length).toEqual(1);
  })
});