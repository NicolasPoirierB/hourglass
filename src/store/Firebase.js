
import React from 'react';
import firebase from 'firebase/app';

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

export class FirebaseManager {
	constructor() {
		firebase.initializeApp(config);
	}
}

export const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
	<FirebaseContext.Consumer>
		{firebase => <Component {...props} firebase={firebase} />}
	</FirebaseContext.Consumer>
);
