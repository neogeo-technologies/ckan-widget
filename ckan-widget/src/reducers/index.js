import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import packageSearch from './package_search.js';

const rootReducer = combineReducers({
  form: formReducer,
  packageSearch,
});

export default rootReducer;
