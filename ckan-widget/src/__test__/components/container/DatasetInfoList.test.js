import React from 'react';
import { shallow } from 'enzyme';
import  configureStore from 'redux-mock-store';
import DatasetInfoList from '../../../components/container/DatasetInfoList';


let component;
let store;
const mockStore = configureStore();
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

describe('DatasetInfoList', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(
        <DatasetInfoList store={store} />
    );
  })

  it('should be defined', () => {
    expect(DatasetInfoList).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
})