import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import Pagination from '../../../components/container/Pagination';


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

describe('Pagination', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
  })

  it('should be defined', () => {
    expect(Pagination).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
})