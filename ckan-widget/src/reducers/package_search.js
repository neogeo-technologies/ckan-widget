import {
  PACKAGE_SEARCH,
  ERROR,
  ADD_ORG,
  ADD_GROUP,
  ADD_TAG
} from '../actions/types';

const INITIAL_STATE = {
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
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PACKAGE_SEARCH:
      return {
        ...state,
        datasets: action.payload.result.results,
        total: action.payload.result.count,
        search: action.search,
        page: action.page,
        rows: action.rows,
        facets: action.payload.result.search_facets,
        sort: action.sort,
        facet_search: action.facet_search,
        ckanAPI: action.ckanAPI,
        firstCall: action.firstCall
      };
    case ADD_ORG:
      return {
        ...state,
        organizations: [...state.organizations, action.payload.result.name]
      };
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload.result.name]
      };
     case ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload.result.name]
      }
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
