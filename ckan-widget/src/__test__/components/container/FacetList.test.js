import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import FacetListConnected, { FacetList } from '../../../components/container/FacetList';


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

describe('FacetList', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    mockPackageSearch = jest.fn()
    component = shallow(
      <FacetList packageSearch={mockPackageSearch} />
    );

    shallow(
      <FacetListConnected store={store} />
    );
  })

  it('should be defined', () => {
    expect(FacetList).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should handle input change', () => {
    component.instance().onClick('data')
    expect(mockPackageSearch.mock.calls.length).toEqual(2);
  })
})