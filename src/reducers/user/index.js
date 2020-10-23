
import { FirebaseManager } from '../../store/Firebase';

const CREATE_USER_ATTEMPT = 'CREATE_USER_ATTEMPT';
const CREATE_USER_RESPONSE = 'CREATE_USER_RESPONSE';

const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const LOGIN_RESPONSE = 'LOGIN_RESPONSE';

const LOGOUT_ATTEMPT = 'LOGOUT_ATTEMPT';
const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';

export function createUser(email, password) {
	return (dispatch) => {
		dispatch({
			type: CREATE_USER_ATTEMPT,
			payload: { email, password }, 
		});

		FirebaseManager.createUser(email, password)
			.then(() => {
				dispatch({
					type: CREATE_USER_RESPONSE,
					payload: { success: true }
				});
			})
			.catch((error) => {
				dispatch({
					type: CREATE_USER_RESPONSE,
					payload: { success: false, error }
				})
			});
	};
}

export function logIn(email, password) {
	return (dispatch) => {
		dispatch({
			type: LOGIN_ATTEMPT,
			payload: { email, password }, 
		});

		FirebaseManager.logIn(email, password)
			.then(() => {
				dispatch({
					type: LOGIN_RESPONSE,
					payload: { success: true }
				});
			})
			.catch((error) => {
				dispatch({
					type: LOGIN_RESPONSE,
					payload: { success: false, error }
				})
			});
	};
}

export function logOut() {
	return (dispatch) => {
		dispatch({
			type: LOGOUT_ATTEMPT,
		});

		FirebaseManager.logOut()
			.then(() => {
				dispatch({
					type: LOGOUT_RESPONSE,
					payload: { success: true }
				});
			})
			.catch((error) => {
				dispatch({
					type: LOGOUT_RESPONSE,
					payload: { success: false, error }
				})
			});
	};
}


const defaultAuthState = {
	is_logged_in: true,
	is_creating_account: false,
	is_logging_in: false,
	error: null,
};
export function auth(state = defaultAuthState, action) {
	switch (action.type) {
		case LOGIN_ATTEMPT:
			return { ...defaultAuthState, is_logging_in: true };
		case CREATE_USER_ATTEMPT:
			return { ...defaultAuthState, is_creating_account: true };
		case LOGIN_RESPONSE:
		case CREATE_USER_RESPONSE:
			return {
				...state,
				is_logged_in: action.payload.success,
				error: action.payload.error,
			};
		case LOGOUT_ATTEMPT:
			return {
				...state,
				is_creating_account: false,
				is_logging_in: false,
				error: null,
			};
		case LOGOUT_RESPONSE:
			return {
				...state,
				is_logged_in: !action.payload.success,
				error: action.payload.error,
			}
		default:
			return state;
	}
}


const defaultUserState = {};
export function user(state = defaultUserState, action) {
	switch (action.type) {
		case LOGOUT_RESPONSE:
		case LOGIN_RESPONSE:
		case CREATE_USER_RESPONSE:
			return action.payload.success ? { ...FirebaseManager.fetchCurrentUser() } : defaultUserState;
		case CREATE_USER_ATTEMPT:
		case LOGIN_ATTEMPT:
		case LOGOUT_ATTEMPT:
				return defaultUserState;
		default:
			return state;
	}
}
