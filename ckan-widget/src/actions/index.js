import axios from 'axios';

import {
  PACKAGE_SEARCH,
  ERROR,
  ADD_ORG,
  ADD_GROUP,
  ADD_TAG
} from './types';


export function packageSearch({
  ckanAPI = 'https://trouver.datasud.fr', q = '*:*', rows = 10, start = 0, page = 0, sort = 'score desc, metadata_modified desc', fq='',
  firstCall=false} = {}) {
  const facetsParams = `facet.field=${JSON.stringify(['organization',
                                                      'groups',
                                                      'tags',
                                                      'res_format',
                                                      'license_id',
                                                      'datatype',
                                                      'support',
                                                      'update_frequency'])}`;

  return (dispatch) => {
    axios.get(`${ckanAPI}/api/action/package_search?q=${q}&rows=${rows}&start=${start}&${facetsParams}&sort=${sort}&fq=${fq}`)
      .then((response) => {
        dispatch({
          type: PACKAGE_SEARCH,
          search: q !== '*:*' ? q : '',
          page,
          rows,
          sort,
          facet_search : fq,
          payload: response.data,
          ckanAPI: ckanAPI,
          firstCall
        });
      })
      .catch((error) => {
        let errorMsg = '';
        if (error.response !== undefined) {
          errorMsg = error.response.data;
        } else {
          errorMsg = error.message;
        }

        dispatch({
          type: ERROR,
          payload: errorMsg,
        });
      });
  };
}

export function packageAutocomplete({ ckanAPI = 'https://trouver.datasud.fr', q = '', limit = 10 } = {}) {
  return axios.get(`${ckanAPI}/api/action/package_autocomplete?q=${q}&limit=${limit}`)
    .then(response => response.data);
}

export function organizationShow({ ckanAPI = 'https://trouver.datasud.fr', id = '' } = {}) {
  return (dispatch) => {
    axios.get(`${ckanAPI}/api/action/organization_show?id=${id}&include_dataset_count=false&include_extras=false&include_users=false&include_groups=false`)
    .then((response) => {
      dispatch({
        type: ADD_ORG,
        payload: response.data,
      });
    })
    .catch((error) => {
      let errorMsg = '';
      if (error.response !== undefined) {
        errorMsg = error.response.data.error.message;
      } else {
        errorMsg = error.message;
      }

      dispatch({
        type: ERROR,
        payload: errorMsg,
      });
    });
  };
}

export function groupShow({ ckanAPI = 'https://trouver.datasud.fr', id = '' } = {}) {
  return (dispatch) => {
    axios.get(`${ckanAPI}/api/action/group_show?id=${id}&include_dataset_count=false&include_extras=false&include_users=false&include_groups=false`)
      .then((response) => {
        dispatch({
          type: ADD_GROUP,
          payload: response.data,
        });
      })
      .catch((error) => {
        let errorMsg = '';
        if (error.response !== undefined) {
          errorMsg = error.response.data.error.message;
        } else {
          errorMsg = error.message;
        }

        dispatch({
          type: ERROR,
          payload: errorMsg,
        });
      });
  };
}

export function tagShow({ ckanAPI = 'https://trouver.datasud.fr', id = '' } = {}) {
  return (dispatch) => {
    axios.get(`${ckanAPI}/api/action/tag_show?id=${id}&include_dataset_count=false&include_extras=false&include_users=false&include_groups=false`)
      .then((response) => {
        dispatch({
          type: ADD_TAG,
          payload: response.data,
        });
      })
      .catch((error) => {
        let errorMsg = '';
        if (error.response !== undefined) {
          errorMsg = error.response.data.error.message;
        } else {
          errorMsg = error.message;
        }

        dispatch({
          type: ERROR,
          payload: errorMsg,
        });
      });
  }
}
