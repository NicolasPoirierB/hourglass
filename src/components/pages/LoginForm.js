
import React, { Component } from 'react';
import TextInput, { TEXTINPUT_TYPE } from '../forms/TextInput'
import { ROUTES } from '../../constants';
import Button from '../ui/Button';

import styled from 'styled-components';

//#region styles
const FormContainer = styled.div`
	text-align: center;
	padding: 50px 0;
`;

const FormFooter = styled.div`
	padding: 30px 0;
	border-top: 1px solid #eee;
	margin-top: 50px;
`;
//#endregion

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
			<FormContainer className="col-md-8 offset-md-1">
				<form onSubmit={this.onSubmit}>
					<h1>Log in</h1>
					
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

					<Button>Log in</Button>
				</form>

				<FormFooter>
					<h2>Don't have an account?</h2>
					<Button to={ROUTES.CREATE_ACCOUNT}>Create one</Button>
				</FormFooter>
			</FormContainer>
		);
	}
}