import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import package_search from './package_search.js'

const rootReducer = combineReducers({
    form: formReducer,
    package_search
});

export default rootReducer;