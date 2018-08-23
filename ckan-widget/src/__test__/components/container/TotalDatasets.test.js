import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import TotalDatasets from '../../../components/container/TotalDatasets';


let component;
const mockStore = configureMockStore();
const initialState = {
  datasets: [],
  search: '',
  rows: 10,
  facets: [],
  total: 0,
  page: 0,
  sort: 'score desc, metadata_modified desc',
  error: '',
  facet_search: ''
};

describe('TotalDatasets', () => {
  beforeEach(() => {
    const store = mockStore(initialState);
    component = shallow(
      <Provider store={store}>
        <TotalDatasets />
      </Provider>
    );
  })

  it('should be defined', () => {
    expect(TotalDatasets).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
})