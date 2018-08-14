import {
    PACKAGE_SEARCH,
    ERROR
} from '../actions/types'

const INITIAL_STATE = {
    datasets: [],
    total: 0,
    error: ''
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case PACKAGE_SEARCH:
            return { ...state, datasets: action.payload.result.results, total: action.payload.result.count}
        case ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}