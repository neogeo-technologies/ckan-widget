import axios from 'axios'

import {
    PACKAGE_SEARCH,
    ERROR,
    SEARCH_TEXT
} from './types'

const SITE_URL = 'https://trouver.datasud.fr'

export function packageSearch({q = "*:*", rows = 10} = {}) {
    return dispatch => {
        axios.get(`${SITE_URL}/api/action/package_search?q=${q}&rows=${rows}`)
            .then(response => {
                dispatch({
                    type: PACKAGE_SEARCH,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.response.data
                })
            })
    }
}
