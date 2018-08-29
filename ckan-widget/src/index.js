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


class CKANWidget {
  constructor() {
    window.ckanWidget = this;
  }

  init = ({
    ckan_api = 'https =//trouver.datasud.fr',
    ckan_organizations = 'all',
    ckan_groups = 'all',
    ckan_tags = 'all',
    ckan_facets = undefined,
    facet_display = 'all',
    data_sort = 'score desc, metadata_modified desc',
    result_page_size = 10,
    thumbnails_display = false
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
      document.getElementById('root'),
    );
  }
}

const instance = new CKANWidget();
instance.init()

export { instance as ckanWidget };

registerServiceWorker();
