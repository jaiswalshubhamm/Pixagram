import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBgdVqtY_Xr6tl5SysMDuxM4d6YjQGki7o",
    authDomain: "firegram-8d145.firebaseapp.com",
    databaseURL: "https://firegram-8d145.firebaseio.com",
    projectId: "firegram-8d145",
    storageBucket: "firegram-8d145.appspot.com",
    messagingSenderId: "860612522555",
    appId: "1:860612522555:web:cc1da1a3c8d7b8d8f5621e",
    measurementId: "G-2JG89754Q5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };