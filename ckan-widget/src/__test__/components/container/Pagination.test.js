import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import PaginationConnected, { Pagination } from '../../../components/container/Pagination';


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

describe('Pagination', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    mockPackageSearch = jest.fn()
    component = shallow(
      <Pagination packageSearch={mockPackageSearch} />
    );

    shallow(
      <PaginationConnected store={store} />
    );
  })

  it('should be defined', () => {
    expect(Pagination).toBeDefined();
  });

  it('should handle click', () => {
    component.instance().handlePagination(1)
    expect(mockPackageSearch.mock.calls.length).toEqual(1);
  })
})