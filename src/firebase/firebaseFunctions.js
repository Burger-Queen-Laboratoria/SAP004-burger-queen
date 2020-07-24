import firebase from "./init-firebase.js";

export const fireFuncs = {
  authSignIn: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  authSignOut: () => {
    return firebase.auth().signOut();
  },
};
