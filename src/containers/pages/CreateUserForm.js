


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { createUser } from '../../reducers/user';

import CreateUserForm from '../../components/pages/CreateUserForm';

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
	};
};

export default withRouter(connect(
	mapStateToProps,
	dispatch => bindActionCreators({
		createUser,
	}, dispatch)
)(CreateUserForm));
