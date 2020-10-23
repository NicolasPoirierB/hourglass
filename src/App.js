import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateUserForm from './containers/pages/CreateUserForm';
import LoginForm from './containers/pages/LoginForm';
import Home from './containers/pages/Home';
import { ROUTES } from './constants';

function App() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<Switch>
						<Route exact path={ROUTES.CREATE_ACCOUNT} component={CreateUserForm} />
						<Route exact path={ROUTES.LOGIN} component={LoginForm} />
						<Route path={ROUTES.HOME} component={Home} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
