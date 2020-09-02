import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { auth, user } from './user';

const appReducer = combineReducers({
	routing: routerReducer,
	auth,
	user,
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
