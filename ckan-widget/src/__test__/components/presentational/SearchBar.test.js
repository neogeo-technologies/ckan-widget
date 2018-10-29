import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../../../components/presentational/SearchBar';
import * as actions from '../../../actions'


let component;
let handleInputChange

describe('SearchBar', () => {
  beforeEach(() => {
    //Mocks packageAutocomplete from actions/index.js
    actions.packageAutocomplete = () => {
      return new Promise(
        function (resolve, reject) {
          const resp = {
            data: ['Suggestion1', 'Suggestion2']
          };
          resolve(resp);
        }
      );
    }

    handleInputChange = jest.fn()
    component = mount(
      <SearchBar handleInputChange={handleInputChange} />
    );
  })

  it('should be defined', () => {
    expect(SearchBar).toBeDefined();
  });

  it('should submit form', () => {
    const form = component.find('form')
    form.simulate('submit')
    expect(handleInputChange.mock.calls.length).toEqual(1);
  })

  it('should handle changes properly', () => {
    const input = component.find('input')
    input.simulate('submit')
    expect(handleInputChange.mock.calls.length).toEqual(1);
  })
});