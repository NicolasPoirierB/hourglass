


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { logOut } from '../reducers/user';

import LogoutButton from '../components/LogoutButton';

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
	};
};

export default withRouter(connect(
	mapStateToProps,
	dispatch => bindActionCreators({
		logOut,
	}, dispatch)
)(LogoutButton));
