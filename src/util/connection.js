import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBS49ZX2JH3o1nzafdz24AGfM5TUcXqEdI",
    authDomain: "dorethy-s-somecrust.firebaseapp.com",
    projectId: "dorethy-s-somecrust",
    storageBucket: "dorethy-s-somecrust.appspot.com",
    messagingSenderId: "968918896014",
    appId: "1:968918896014:web:50c56448b441e49f4f68df"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  // connect notes component to the database
 // const databaseRef = firebase.firestore().ref()
 // const noteRef = databaseRef.child('notes');
  // connect file upload component to the database
  const projectFirestore = firebase.firestore();
  const projectStorage = firebase.storage()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const auth = firebase.auth();

export {projectFirestore, projectStorage, timestamp};