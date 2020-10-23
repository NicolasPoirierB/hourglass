

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Home from '../../components/pages/Home';
import withAuth from '../withAuth';

const mapStateToProps = (state, ownProps) => {
	return {
	};
};

export default withAuth(withRouter(connect(
	mapStateToProps,
	dispatch => bindActionCreators({}, dispatch)
)(Home)));
