
import React, { Component } from 'react';
import TextInput, { TEXTINPUT_TYPE } from '../forms/TextInput'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

export default class CreateUserForm extends Component {

	state = {
		email: '',
		password: '',
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		this.props.createUser(email, password);
	}

	onInputChange = (newValue) => {
		this.setState({
			...newValue,
		});
	}

	getErrorMessage() {
		const { error } = this.props.auth;

		return error ? (
			<div>{error.message}</div>
		) : null;
	}

	render() {
		const { email, password} = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<h1>Create your account</h1>
				
				{this.getErrorMessage()}

				<TextInput 
					name="email"
					value={email}
					type={TEXTINPUT_TYPE}
					onChange={this.onInputChange}
				/>

				<TextInput 
					name="password"
					value={password}
					type={TEXTINPUT_TYPE}
					onChange={this.onInputChange}
				/>

				<button>Create account</button>

				<hr />

				<div>
					<h2>Already have an account?</h2>
					<Link to={ROUTES.LOGIN}>Log in</Link>
				</div>
			</form>
		);
	}
}