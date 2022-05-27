import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDCVZ2eaCm1cGJjRXw7P0jNCb6ALCxX5AM",
  authDomain: "react-faculdade.firebaseapp.com",
  projectId: "react-faculdade",
  storageBucket: "react-faculdade.appspot.com",
  messagingSenderId: "432356865493",
  appId: "1:432356865493:web:a9f043d56db7c58230f95c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth } ;