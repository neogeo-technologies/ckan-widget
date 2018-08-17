import {
    PACKAGE_SEARCH,
    ERROR
} from '../actions/types'

const INITIAL_STATE = {
    datasets: [],
    search: '',
    rows: 10,
    facets: [],
    total: 0,
    page: 1,
    error: ''
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case PACKAGE_SEARCH:
            return {
                ...state,
                datasets: action.payload.result.results,
                total: action.payload.result.count,
                search: action.search,
                page: action.page,
                rows: action.rows,
                facets: action.payload.result.search_facets
            }
        case ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}