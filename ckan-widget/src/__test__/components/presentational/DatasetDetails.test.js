import React from 'react';
import { shallow } from 'enzyme';
import DatasetDetails from '../../../components/presentational/DatasetDetails';

describe('DatasetDetails', () => {
  it('should be defined', () => {
    expect(DatasetDetails).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <DatasetDetails organization={{ name: 'org1' }} resources={[{ restricted: "{\"level\": \"public\"}", format: 'CSV', name: 'rsc1', last_modified: '21 June 2018' }]}  />
    );
    expect(tree).toMatchSnapshot();
  });
});