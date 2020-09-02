

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import App from '../App';
import { withFirebase } from '../store/Firebase';

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	return {};
};

export default withRouter(withFirebase(connect(
	mapStateToProps,
	dispatch => bindActionCreators({}, dispatch)
)(App)));
