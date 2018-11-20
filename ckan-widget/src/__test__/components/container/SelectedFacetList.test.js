import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import SelectedFacetListConnected, { SelectedFacetList } from '../../../components/container/SelectedFacetList';


let component;
const mockStore = configureMockStore();
let mockPackageSearch;
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
    facet_search: '',
    tags: []
  }
};

describe('TotalDatasets', () => {
  beforeEach(() => {
    const store = mockStore(initialState);
    mockPackageSearch = jest.fn()
    component = shallow(
      <SelectedFacetList
        tags={[]}
        packageSearch={mockPackageSearch}
        selected_facets={'organization:org1+tags:economy'} />
    );

    shallow(
      <SelectedFacetListConnected store={store} />
    );
  })

  it('should be defined', () => {
    expect(SelectedFacetList).toBeDefined();
  });

  it('should handle onClick event', () => {
    component.instance().onClick('organization:org1')
    expect(mockPackageSearch.mock.calls.length).toEqual(1);
  })
})