import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { ROUTES } from '../constants';

export default function withAuth(WrappedComponent) {
	class AuthenticatedComponent extends Component {
		componentDidMount() {
			this.checkAuth();
		}

		componentDidUpdate() {
			this.checkAuth();
		}

		checkAuth() {
			console.log(this.props.auth);
			if (
				this.props.auth && 
				!this.props.auth.is_logged_in
			) {
				this.props.history.push(ROUTES.LOGIN)
			}
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	const mapStateToProps = (state, ownProps) => {
		return {
			auth: state.auth,
		};
	};
	
	return withRouter(connect(
		mapStateToProps,
		dispatch => bindActionCreators({}, dispatch)
	)(AuthenticatedComponent));
}
