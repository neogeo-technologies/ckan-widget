import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import DatasetSearchBarConnected, { DatasetSearchBar } from '../../../components/container/DatasetSearchBar';


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

describe('DatasetSearchBar', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    mockPackageSearch = jest.fn()
    component = shallow(
      <DatasetSearchBar
        organizations={['org1', 'org12']}
        groups={['group1', 'group2']}
        tags={['tag1', 'tag2']}
        packageSearch={mockPackageSearch} />
    );
    shallow(
      <DatasetSearchBarConnected store={store} />
    );
  })

  it('should be defined', () => {
    expect(DatasetSearchBar).toBeDefined();
  });

  it('should handle input change', () => {
    component.instance().handleInputChange(null, 'S')
    expect(mockPackageSearch.mock.calls.length).toEqual(1);
  })
})