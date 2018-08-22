import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../../components/presentational/SearchBar';
import * as actions from '../../../actions'

describe('SearchBar', () => {
  it('should be defined', () => {
    expect(SearchBar).toBeDefined();
  });

  it('should render correctly', () => {
    actions.packageAutocomplete = () =>{
      return new Promise(
        function (resolve, reject) {
          const resp = {
            data: ['Samsung']
          };
          resolve(resp); // fulfilled
        }
      );
    }


    const tree = shallow(
      <SearchBar />
    );
    expect(tree).toMatchSnapshot();
  });
});