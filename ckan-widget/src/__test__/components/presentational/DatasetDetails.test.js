import React from 'react';
import { shallow } from 'enzyme';
import DatasetDetails from '../../../components/presentational/DatasetDetails';

describe('DatasetDetails', () => {
 it('should be defined', () => {
   expect(DatasetDetails).toBeDefined();
 });
 /*it('should render correctly', () => {
   const tree = shallow(
     <DatasetDetails />
   );
   expect(tree).toMatchSnapshot();
 });
 */
});