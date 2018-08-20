import axios from 'axios'

import {
    PACKAGE_SEARCH,
    ERROR
} from './types'

const SITE_URL = 'http://localhost:5000';

export function packageSearch({ q = '*:*', rows = 10, start = 0, page = 0, sort = 'score desc, metadata_modified desc'} = {}) {
    let facetsParams = 'facet.field=' + JSON.stringify(["organization", "groups", "tags", "res_format", "license_id"]);

    return dispatch => {
        axios.get(`${SITE_URL}/api/action/package_search?q=${q}&rows=${rows}&start=${start}&${facetsParams}&sort=${sort}`)
            .then(response => {
                dispatch({
                    type: PACKAGE_SEARCH,
                    search: q !== '*:*' ? q : '',
                    page: page,
                    rows: rows,
                    sort: sort,
                    payload: response.data
                })
            })
            .catch(error => {
                let errorMsg = ''
                if (error.response !== undefined) {
                    errorMsg = error.response.data
                } else {
                    errorMsg = error.message
                }

                dispatch({
                    type: ERROR,
                    payload: errorMsg
                })
            })
    }
}

export function packageAutocomplete({q='', limit=10} = {}) {
    return axios.get(`${SITE_URL}/api/action/package_autocomplete?q=${q}&limit=${limit}`)
        .then(response => {
            return response.data
        })
}
