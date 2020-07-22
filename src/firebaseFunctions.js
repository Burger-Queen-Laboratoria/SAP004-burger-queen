import firebase from './init-firebase.js';

export const authSignIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const authSignOut = () => {
  return firebase.auth().signOut();
}