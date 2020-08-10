import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOQ8T01A-Cd2KQC5poNQkMhum6aDCvzEw",
  authDomain: "firegram-85076.firebaseapp.com",
  databaseURL: "https://firegram-85076.firebaseio.com",
  projectId: "firegram-85076",
  storageBucket: "firegram-85076.appspot.com",
  messagingSenderId: "379309767359",
  appId: "1:379309767359:web:32563e644539468172a40a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
