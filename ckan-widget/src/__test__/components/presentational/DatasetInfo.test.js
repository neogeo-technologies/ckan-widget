import React from 'react';
import { shallow } from 'enzyme';
import DatasetInfo from '../../../components/presentational/DatasetInfo';

let component

describe('DatasetInfo', () => {
  beforeEach(() => {
    component = shallow(
      <DatasetInfo
        title={'Dataset title'}
        notes={'Describe dataset'}
        metadata_modified={'2018-08-23T07:26:42.122834'}
        thumbnailsDisplay={true}
        thumbnail={'https://demo.log.org'}
        resources={[{ restricted: "{\"level\": \"public\"}", format: 'CSV', name: 'rsc1', last_modified: '21 June 2018' }]} />
    )
  })

  it('should be defined', () => {
    expect(DatasetInfo).toBeDefined();
  });

  it('should receive props', () => {
    expect(component.instance().props.title).toBe('Dataset title')
    expect(component.instance().props.notes).toBe('Describe dataset')
    expect(component.instance().props.metadata_modified).toBe('2018-08-23T07:26:42.122834')
    expect(component.instance().props.resources.length).toEqual(1)
  });

  it('should format data properly', () => {
    expect(component.instance().formatDate('2018-08-23T07:26:42.122834')).toBe('Thu, 23 Aug 2018 07:26:42 GMT')
  })

  it('should find formats of the resources', () => {
    const resources = [
      { restricted: "{\"level\": \"public\"}", format: 'CSV', name: 'rsc1', last_modified: '21 June 2018' },
      { restricted: "{\"level\": \"public\"}", format: 'XML', name: 'rsc2', last_modified: '25 June 2018' }
    ]

    const formats = component.instance().findFormats(resources)
    expect(formats.length).toEqual(2)
  })

  it('should expand on click', () => {
    expect(component.instance().state.collapsed).toBe(true)

    const dataset = component.find('div.dataset')
    dataset.simulate('click')
    expect(component.instance().state.collapsed).toBe(false)
  })
});