

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import App from '../App';

const mapStateToProps = (state) => {
	return {};
};

export default withRouter(connect(
	mapStateToProps,
	dispatch => bindActionCreators({}, dispatch)
)(App));
