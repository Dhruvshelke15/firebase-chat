import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyD_I7IT3ev_EoYz1HXitfCIl-hxT04x4a4',
  authDomain: 'firechat-efed3.firebaseapp.com',
  databaseURL:
    'https://firechat-efed3-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'firechat-efed3',
  storageBucket: 'firechat-efed3.appspot.com',
  messagingSenderId: '335131926486',
  appId: '1:335131926486:web:3410f8d436730071630e77',
  measurementId: 'G-BM586WYH4K',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
