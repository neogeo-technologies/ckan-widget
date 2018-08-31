import packageSearch from '../../reducers/package_search'
import { PACKAGE_SEARCH, ERROR } from '../../actions/types'

describe('Test package search redicer', () => {
  it('test initial state', () => {
    const action = { type: 'dummy_action' }
    const initialState = {
      ckanAPI: 'https://trouver.datasud.fr',
      datasets: [],
      search: '',
      rows: 10,
      facets: [],
      total: 0,
      page: 0,
      sort: 'score desc, metadata_modified desc',
      error: '',
      facet_search: '',
      organizations: [],
      groups: [],
      tags: [],
      firstCall: false
    }

    expect(packageSearch(undefined, action)).toEqual(initialState);
  })

  it('test error', () => {
    const action = {
      type: ERROR,
      payload: 'Network error!',
    }

    const newState = {
      ckanAPI: 'https://trouver.datasud.fr',
      datasets: [],
      search: '',
      rows: 10,
      facets: [],
      total: 0,
      page: 0,
      sort: 'score desc, metadata_modified desc',
      error: 'Network error!',
      facet_search: '',
      organizations: [],
      groups: [],
      tags: [],
      firstCall: false
    }

    expect(packageSearch(undefined, action)).toEqual(newState);
  })

  it('test package search', () => {
    const action = {
      type: PACKAGE_SEARCH,
      ckanAPI: 'https://trouver.datasud.fr',
      search: '',
      page: 1,
      rows: 25,
      sort: 'score desc, metadata_modified desc',
      facet_search: 'organization:org1',
      firstCall: true,
      payload: {
        result: {
          count: 46,
          results: ['dataset1', 'dataset2'],
          search_facets: {
            organizations: ['org1']
          }
        }
      }
    }

    const newState = {
      ckanAPI: 'https://trouver.datasud.fr',
      datasets: ['dataset1', 'dataset2'],
      search: '',
      rows: 25,
      facets: {
        organizations: ['org1']
      },
      total: 46,
      page: 1,
      sort: 'score desc, metadata_modified desc',
      error: '',
      facet_search: 'organization:org1',
      organizations: [],
      groups: [],
      tags: [],
      firstCall: true
    }

    expect(packageSearch(undefined, action)).toEqual(newState);
  })
});


