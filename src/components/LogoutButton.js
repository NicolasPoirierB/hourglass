
import React, { Component } from 'react';

export default class LogoutButton extends Component {
	render() {
		return this.props.auth.is_logged_in ? (
			<button onClick={this.props.logOut}>Log out</button>
		) : null;
	}
}