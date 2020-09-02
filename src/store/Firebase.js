
import firebase from 'firebase/app';
import 'firebase/firebase-auth';

export const USERS_COLLECTION = 'users';
export const PROJECTS_COLLECTION = 'projects';
export const TASKS_COLLECTION = 'tasks';

const config = {
	apiKey: "AIzaSyBT1gfdSzRplovQ507eIMTlWco9eglgths",
	authDomain: "hourglass-3c4be.firebaseapp.com",
	databaseURL: "https://hourglass-3c4be.firebaseio.com",
	projectId: "hourglass-3c4be",
	storageBucket: "hourglass-3c4be.appspot.com",
	messagingSenderId: "244153524026",
	appId: "1:244153524026:web:4be53459b91ca7bed27a03"
};

class Firebase {
	constructor() {
		firebase.initializeApp(config);
		this.auth_manager = firebase.auth();
	}

	fetchCurrentUser = () => {
		const user = this.auth_manager.currentUser;
		console.log('complete user object');
		console.dir(user);

		return user ? {
			display_name: user.displayName,
			email: user.email,
			uid: user.uid,
			creation_time: user.metadata.creationTime,
			last_signin_time: user.metadata.lastSignInTime,
		} : null;
	}

	createUser = (email, password) => this.auth_manager.createUserWithEmailAndPassword(email, password);
	
	logIn = (email, password) => this.auth_manager.signInWithEmailAndPassword(email, password);
	 
	logOut = () => this.auth_manager.signOut();
	
	sendPasswordResetEmail = email => this.auth_manager.sendPasswordResetEmail(email);
	 
	updatePassword = password => this.auth_manager.currentUser.updatePassword(password);
}

export const FirebaseManager = new Firebase();
