import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../components/presentational/SearchBar';

describe('SearchBar', () => {
 it('should be defined', () => {
   expect(SearchBar).toBeDefined();
 });
 /*it('should render correctly', () => {
   const tree = shallow(
     <SearchBar />
   );
   expect(tree).toMatchSnapshot();
 });
 */
});