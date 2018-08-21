import React from 'react';
import { shallow } from 'enzyme';
import DatasetInfo from '../components/presentational/DatasetInfo';

describe('DatasetInfo', () => {
 it('should be defined', () => {
   expect(DatasetInfo).toBeDefined();
 });
 /*it('should render correctly', () => {
   const tree = shallow(
     <DatasetInfo />
   );
   expect(tree).toMatchSnapshot();
 });
 */
});