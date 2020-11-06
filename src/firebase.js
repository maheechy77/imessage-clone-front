import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyB02jP0EpIZK1Q-yMSJ2XBnt1GlpOXyI2U",
	authDomain: "imessage-clone-ccb33.firebaseapp.com",
	databaseURL: "https://imessage-clone-ccb33.firebaseio.com",
	projectId: "imessage-clone-ccb33",
	storageBucket: "imessage-clone-ccb33.appspot.com",
	messagingSenderId: "124014402467",
	appId: "1:124014402467:web:2383c03ee6d7c19ac61816",
	measurementId: "G-BHZJJ2HLHR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
