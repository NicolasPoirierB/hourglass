import React from 'react';
import CreateUserForm from './containers/CreateUserForm';
import LoginForm from './containers/LoginForm';
import LogoutButton from './containers/LogoutButton';

function App() {
	return (
		<div>
			<CreateUserForm />
			<LoginForm />
			<LogoutButton />
		</div>
	);
}

export default App;
