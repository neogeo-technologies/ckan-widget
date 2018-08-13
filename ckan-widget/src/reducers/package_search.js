import { PACKAGE_SEARCH } from '../actions/types'

const INITIAL_STATE = {
    datasets: [],
    total: 0
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case PACKAGE_SEARCH:
            return { ...state, datasets: action.payload.result.results, total: action.payload.result.count}
    }

    return state
}