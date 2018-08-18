import axios from 'axios'

import {
    PACKAGE_SEARCH,
    ERROR
} from './types'

const SITE_URL = 'https://trouver.datasud.fr'

export function packageSearch({q='*:*', rows=10, start=0, page=0} = {}) {
    return dispatch => {
        axios.get(`${SITE_URL}/api/action/package_search?q=${q}&rows=${rows}&start=${start}`)
            .then(response => {
                dispatch({
                    type: PACKAGE_SEARCH,
                    search: q !== '*:*' ? q : '',
                    rows: rows,
                    page: page,
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
