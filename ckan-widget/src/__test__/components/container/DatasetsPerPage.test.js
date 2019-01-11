import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import DatasetsPerPageConnected, { DatasetsPerPage } from '../../../components/container/DatasetsPerPage';


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

describe('DatasetsPerPage', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    mockPackageSearch = jest.fn()
    component = shallow(
      <DatasetsPerPage packageSearch={mockPackageSearch} />
    );

    shallow(
      <DatasetsPerPageConnected store={store} />
    );
  })

  it('should be defined', () => {
    expect(DatasetsPerPage).toBeDefined();
  });

  it('should handle input change', () => {
    component.instance().handleOnChange({ target: {value: 25} })
    expect(mockPackageSearch.mock.calls.length).toEqual(1);
  })
})