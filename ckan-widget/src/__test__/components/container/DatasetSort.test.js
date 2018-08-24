import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { DatasetSort } from '../../../components/container/DatasetSort';


let component;
let store;
let mockPackageSearch;
const mockStore = configureMockStore();
const initialState = {
  packageSearch: {
    datasets: [],
    search: '',
    rows: 10,
    facets: [],
    total: 20,
    page: 1,
    sort: 'score desc, metadata_modified desc',
    error: '',
    facet_search: ''
  }
};

describe('DatasetSort', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    mockPackageSearch = jest.fn()
    component = shallow(
      <DatasetSort packageSearch={mockPackageSearch} store={store} />
    );
  })

  it('should be defined', () => {
    expect(DatasetSort).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should handle input change', () => {
    component.instance().handleSort('score desc, metadata_modified desc')
    expect(mockPackageSearch.mock.calls.length).toEqual(1);
  })
})