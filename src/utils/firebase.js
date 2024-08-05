import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCUW72SzJt6aWv8Xi8a3AE56x1qqNGo04c",
    authDomain: "react-my-pets-e31b7.firebaseapp.com",
    projectId: "react-my-pets-e31b7",
    storageBucket: "react-my-pets-e31b7",
    messagingSenderId: "713864537698",
    appId: "1:713864537698:web:d54333b39237a0e87c133b"
};

// Check if Firebase app is already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export default firebase;

