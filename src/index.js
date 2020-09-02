import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { FirebaseContext, FirebaseManager } from './store/Firebase';

import AppContainer from './containers/AppContainer';

const store = configureStore();

ReactDOM.render(
	(
		<BrowserRouter>
			<FirebaseContext.Provider value={new FirebaseManager()}>
				<Provider store={store}>
					<Route component={AppContainer} />
				</Provider>
			</FirebaseContext.Provider>
		</BrowserRouter>
	),
	document.getElementById('root')
);
