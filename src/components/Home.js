import React, { Component } from 'react';
import { ROUTES } from '../constants';

export default class Home extends Component {

	componentDidMount() {
		if (!this.props.auth.is_loggedin) {
			this.props.history.push(ROUTES.LOGIN)
		}
	}

	render() {
		return (
			<div></div>
		);
	}
}