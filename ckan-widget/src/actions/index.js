import axios from 'axios'

import {
    PACKAGE_SEARCH,
    ERROR,
    UPDATE_ROWS
} from './types'

const SITE_URL = 'https://trouver.datasud.fr'

export function packageSearch({q="*:*", rows=10, start=0} = {}) {
    return dispatch => {
        axios.get(`${SITE_URL}/api/action/package_search?q=${q}&rows=${rows}&start=${start}`)
            .then(response => {
                dispatch({
                    type: PACKAGE_SEARCH,
                    payload: response.data
                })
            })
            .catch(error => {
                if (error.response !== undefined) {
                    dispatch({
                        type: ERROR,
                        payload: error.response.data
                    })
                }
            })
    }
}

export function updateRows(rows) {
    return dispatch => {
        dispatch({
            type: UPDATE_ROWS,
            payload: rows
        })
    }
}
