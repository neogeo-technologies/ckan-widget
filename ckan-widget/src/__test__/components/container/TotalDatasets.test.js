import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import TotalDatasetsConnected, { TotalDatasets } from '../../../components/container/TotalDatasets';


let component;
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

describe('TotalDatasets', () => {
  beforeEach(() => {
    const store = mockStore(initialState);
    component = shallow(
      <TotalDatasets total={5} />
    );

    shallow(
      <TotalDatasetsConnected store={store} />
    );
  })

  it('should be defined', () => {
    expect(TotalDatasets).toBeDefined();
  });
})