import React from 'react';
import { mount, shallow } from 'enzyme';
import Sort from '../../../components/presentational/Sort';

describe('Sort', () => {
  it('should be defined', () => {
    expect(Sort).toBeDefined();
  });

  it('should render correctly', () => {
    const mockOnChange = jest.fn();
    const component = mount(
      <Sort handleSort={mockOnChange} sort={'score desc, metadata_modified desc'} />
    );

    expect(component.instance().props.sort).toBe('score desc, metadata_modified desc')
    expect(component).toMatchSnapshot();

    const selectElement = component.find('select')
    selectElement.simulate('change')
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });
});
