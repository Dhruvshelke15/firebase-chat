import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBaNLb1Axa1hsFRIRy7jlCttXjRlwmVHus',
  authDomain: 'fir-chat-812ce.firebaseapp.com',
  databaseURL:
    'https://fir-chat-812ce-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'fir-chat-812ce',
  storageBucket: 'fir-chat-812ce.appspot.com',
  messagingSenderId: '387257584392',
  appId: '1:387257584392:web:5b1f27165a80786f6dfabd',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
