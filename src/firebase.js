import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-dfPVGM2WVbPxcLU-38um2bE7I9nYrpA",
    authDomain: "linkedin-clone-db6bd.firebaseapp.com",
    projectId: "linkedin-clone-db6bd",
    storageBucket: "linkedin-clone-db6bd.appspot.com",
    messagingSenderId: "526437747683",
    appId: "1:526437747683:web:fad39d5e84bf662b1d2ed6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }