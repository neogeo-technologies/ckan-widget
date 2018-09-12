import React from 'react';
import { shallow } from 'enzyme'
import App from '../App';


describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render correctly', () => {
    var config = {
      ckan_api: 'https://demo.org',
      ckan_organizations: undefined,
      ckan_groups: undefined,
      ckan_tags: undefined,
      ckan_facets: undefined,
      data_sort: 'title_string asc',
      result_page_size: 25,
      thumbnails_display: false
    }

    const component = shallow(
      <App config={config} />
    );
  });
});