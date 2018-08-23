import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import DatasetInfoList from '../../../components/container/DatasetInfoList';


let component;
let store;
const mockStore = configureMockStore();
const initialState = {
  datasets: [],
  search: '',
  rows: 10,
  facets: [],
  total: 20,
  page: 1,
  sort: 'score desc, metadata_modified desc',
  error: '',
  facet_search: ''
};

describe('DatasetInfoList', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(
      <Provider store={store}>
        <DatasetInfoList />
      </Provider>
    );
  })

  it('should be defined', () => {
    expect(DatasetInfoList).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
})