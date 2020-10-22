

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Home from '../components/Home';

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
	};
};

export default withRouter(connect(
	mapStateToProps,
	dispatch => bindActionCreators({}, dispatch)
)(Home));
