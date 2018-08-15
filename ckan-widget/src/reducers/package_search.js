import {
    PACKAGE_SEARCH,
    ERROR,
    UPDATE_ROWS
} from '../actions/types'

const INITIAL_STATE = {
    datasets: [],
    rows : 10,
    total: 0,
    error: ''
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case PACKAGE_SEARCH:
            return {...state, datasets: action.payload.result.results, total: action.payload.result.count}
        case ERROR:
            return {...state, error: action.payload}
        case UPDATE_ROWS:
            return {...state, rows: action.payload}
        default:
            return state
    }
}