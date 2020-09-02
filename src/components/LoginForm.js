
import React, { Component } from 'react';
import TextInput, { TEXTINPUT_TYPE } from './forms/TextInput'

export default class LoginForm extends Component {

	state = {
		email: '',
		password: '',
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		this.props.logIn(email, password);
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
				<h1>Log in form</h1>
				
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

				<button>Log in</button>
			</form>
		);
	}
}