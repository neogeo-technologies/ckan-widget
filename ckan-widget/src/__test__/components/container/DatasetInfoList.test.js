import React from 'react';
import { shallow } from 'enzyme';
import  configureMockStore from 'redux-mock-store';
import DatasetInfoListConnected, { DatasetInfoList } from '../../../components/container/DatasetInfoList';


let component;
let store;
let mockPackageSearch;
const mockStore = configureMockStore();
const initialState = {
  packageSearch: {
    datasets: [{name: 'dataset1'}],
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

describe('DatasetInfoList', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    mockPackageSearch = jest.fn()
    component = shallow(
      <DatasetInfoList ckanAPI={'https://demo.org/'} datasets={[{ name: 'dataset1' }]} packageSearch={mockPackageSearch} />
    );

    shallow(
      <DatasetInfoListConnected store={store} />
    );
  })

  it('should be defined', () => {
    expect(DatasetInfoList).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call packageSearch', () => {
    expect(mockPackageSearch.mock.calls.length).toEqual(1);
2  })
})