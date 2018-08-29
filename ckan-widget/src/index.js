import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// const config = {
//   ckan_api: 'https://trouver.datasud.fr',
//   ckan_organizations: 'org1, org2',
//   ckan_groups: 'group1. group2',
//   ckan_facet: {
//     'res_format': 'XLSX'
//   },
//   ckan_tags: 'vote, vendor',
//   facet_display: 'organizations, tags, groups, formats, licenses',
//   data_sort: 'title_string asc',
//   result_page_size: 25,
//   thumbnails_display: false
// }

class CKANWidget {
  constructor() {
    window.ckanWidget = this;
  }

  init = config => {
    render(
      <Provider store={store}>
        <App config={config} />
      </Provider>,
      document.getElementById('root'),
    );
  }
}

const instance = new CKANWidget();
export { instance as ckanWidget };

registerServiceWorker();
