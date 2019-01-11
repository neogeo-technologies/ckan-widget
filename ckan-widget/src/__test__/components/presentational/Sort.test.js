import React from 'react';
import { shallow } from 'enzyme';
import Sort from '../../../components/presentational/Sort';

let component;
let handleSort

describe('Sort', () => {
  beforeEach(() => {
    handleSort = jest.fn();
    component = shallow(
      <Sort handleSort={handleSort} sort={'score desc, metadata_modified desc'} />
    );
  })

  it('should be defined', () => {
    expect(Sort).toBeDefined();
  });

  it('should handle change correctly', () => {
    const selectElement = component.find('select')
    selectElement.simulate('change', {target: {value: 25}})
    expect(handleSort.mock.calls.length).toEqual(1);
  })
});
