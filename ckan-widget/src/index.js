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

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// Configuration for running Widget locally for testing purposes
// var localConfig = {
//   ckan_api: 'https://ckan-api.com',
//   ckan_organizations: ['id'],
//   ckan_groups: ['id'],
//   ckan_tags: ['id'],
//   ckan_facets: {
//     res_format: 'HTML'
//   },
//   data_sort: 'title_string asc',
//   result_page_size: 25,
//   thumbnails_display: false
// }

class CKANWidget {
  constructor() {
    if (window) {
      window.ckanWidget = this;
    }
  }

  init = ({
    ckan_api = 'https://trouver.datasud.fr',
    ckan_organizations = undefined,
    ckan_groups = undefined,
    ckan_tags = undefined,
    ckan_facets = undefined,
    facet_display = undefined,
    data_sort = 'score desc, metadata_modified desc',
    result_page_size = 10,
    thumbnails_display = true
  } = {}) => {

    const config = {
      ckan_api: ckan_api,
      ckan_organizations: ckan_organizations,
      ckan_groups: ckan_groups,
      ckan_tags: ckan_tags,
      ckan_facets: ckan_facets,
      facet_display: facet_display,
      data_sort: data_sort,
      result_page_size:result_page_size,
      thumbnails_display: thumbnails_display
    }

    render(
      <Provider store={store}>
        <App config={config} />
      </Provider>,
      document.getElementById('ckan-widget'),
    );
  }
}

const instance = new CKANWidget();
export { instance as ckanWidget };

// Run the Widget locally for testing purposes
// instance.init(localConfig)
instance.init()

registerServiceWorker();
