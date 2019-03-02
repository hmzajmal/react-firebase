import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCHOmG9b8djtID5Ctt2lOALILvT7kpGA9M",
  authDomain: "react-firebase-practice-a8d54.firebaseapp.com",
  databaseURL: "https://react-firebase-practice-a8d54.firebaseio.com",
  projectId: "react-firebase-practice-a8d54",
  storageBucket: "react-firebase-practice-a8d54.appspot.com",
  messagingSenderId: "459826499606"
};
firebase.initializeApp(config);

export default firebase;
