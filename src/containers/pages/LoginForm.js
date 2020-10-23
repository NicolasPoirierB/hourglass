


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { logIn } from '../../reducers/user';

import LoginForm from '../../components/pages/LoginForm';

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
	};
};

export default withRouter(connect(
	mapStateToProps,
	dispatch => bindActionCreators({
		logIn,
	}, dispatch)
)(LoginForm));
