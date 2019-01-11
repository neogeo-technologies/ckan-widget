import {
  PACKAGE_SEARCH,
  ERROR
} from '../actions/types';

const INITIAL_STATE = {
  ckanAPI: 'https://trouver.datasud.fr',
  datasets: [],
  search_facets: {},
  organizations: [],
  groups: [],
  tags: [],
  search: '',
  rows: 10,
  facets: [],
  total: 0,
  page: 0,
  sort: 'score desc, metadata_modified desc',
  error: '',
  facet_search: '',
  firstCall: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PACKAGE_SEARCH:
      return {
        ...state,
        search_facets: action.payload.result.search_facets,
        datasets: action.payload.result.results,
        total: action.payload.result.count,
        search: action.search,
        page: action.page,
        rows: action.rows,
        facets: action.payload.result.search_facets,
        sort: action.sort,
        facet_search: action.facet_search,
        ckanAPI: action.ckanAPI,
        firstCall: action.firstCall,
        organizations: action.organizations,
        groups: action.groups,
        tags: action.tags
      };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
