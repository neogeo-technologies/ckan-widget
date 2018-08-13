import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
    document.getElementById('root')
);

registerServiceWorker();