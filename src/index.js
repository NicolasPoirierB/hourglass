import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './store/Firebase';

import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

const store = configureStore();

ReactDOM.render(
	(
		<BrowserRouter>
			<Provider store={store}>
				<Route component={AppContainer} />
			</Provider>
		</BrowserRouter>
	),
	document.getElementById('root')
);
