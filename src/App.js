import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateUserForm from './containers/CreateUserForm';
import LoginForm from './containers/LoginForm';
import Home from './containers/Home';
import { ROUTES } from './constants';

function App() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<Switch>
						<Route exact path={ROUTES.CREATE_ACCOUNT} component={CreateUserForm} />
						<Route exact path={ROUTES.LOGIN} component={LoginForm} />
						<Route exact path={ROUTES.HOME} component={Home} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
