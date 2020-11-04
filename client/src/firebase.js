import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBsHGQEcbDlsRFlIcs-Jm1wcmx7p0I1rv4",
   authDomain: "agency-287b9.firebaseapp.com",
   databaseURL: "https://agency-287b9.firebaseio.com",
   projectId: "agency-287b9",
   storageBucket: "agency-287b9.appspot.com",
   messagingSenderId: "1090208115684",
   appId: "1:1090208115684:web:11174638b85c99e65435f1",
   measurementId: "G-D0Y59M0CP7",
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var google = new firebase.auth.GoogleAuthProvider();
var storage = firebase.storage();
export { auth, google, storage };
