import React from 'react';
import { shallow } from 'enzyme';
import DatasetDetails from '../../../components/presentational/DatasetDetails';

describe('DatasetDetails', () => {
  it('should be defined', () => {
    expect(DatasetDetails).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <DatasetDetails
        name={'Dataset1'}
        notes={'Describe dataset1'}
        dataset_creation_date={'2018-03-30'}
        dataset_modification_date={'2018-05-30'}
        dataset_publication_date={'2018-04-30'}
        organization={{ name: 'org1' }}
        resources={[{ restricted: "{\"level\": \"public\"}", format: 'CSV', name: 'rsc1', last_modified: '21 June 2018' }]} />
    );
    expect(tree).toMatchSnapshot();
  });
});