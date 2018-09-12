import React from 'react';
import { shallow } from 'enzyme';
import DatasetDetails from '../../../components/presentational/DatasetDetails';

let component;

describe('DatasetDetails', () => {
  beforeEach(() => {
    component = shallow(
      <DatasetDetails
        name={'Dataset1'}
        notes={'Describe dataset1'}
        dataset_creation_date={'2018-03-30'}
        dataset_modification_date={'2018-05-30'}
        dataset_publication_date={'2018-04-30'}
        organization={{ name: 'org1' }}
        resources={[{ restricted: "{\"level\": \"public\"}", format: 'CSV', name: 'rsc1', last_modified: '21 June 2018' }]} />
    );
  })

  it('should be defined', () => {
    expect(DatasetDetails).toBeDefined();
  });

  it('should receive props', () => {
    expect(component.instance().props.name).toBe('Dataset1')
    expect(component.instance().props.notes).toBe('Describe dataset1')
    expect(component.instance().props.dataset_creation_date).toBe('2018-03-30')
    expect(component.instance().props.dataset_modification_date).toBe('2018-05-30')
    expect(component.instance().props.dataset_publication_date).toBe('2018-04-30')
    expect(component.instance().props.organization.name).toBe('org1')
    expect(component.instance().props.resources.length).toEqual(1)

  });

  it('should format data properly', () => {
    expect(component.instance().formatDate('2018-03-30')).toBe('Fri, 30 Mar 2018 00:00:00 GMT')
  })
});