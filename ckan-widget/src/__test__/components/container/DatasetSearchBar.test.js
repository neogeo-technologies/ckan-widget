import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import DatasetSearchBar from '../../../components/container/DatasetSearchBar';


let component;
let store;
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
    component = shallow(
      <DatasetSearchBar store={store} />
    );
  })

  it('should be defined', () => {
    expect(DatasetSearchBar).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
})