import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./init-config";

firebase.initializeApp(firebaseConfig);

export default firebase;

window.firebase = firebase;
