import firebase from "./init-firebase.js";

export const fireFuncs = {
  authSignIn: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  authSignOut: () => {
    return firebase.auth().signOut();
  },
  authCreateUser: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  collectionUser: (user, name, sector) => {
    console.log(user);
    const userInfos = {
      user: user.uid,
      name: name,
      sector: sector,
    };
    return firebase.firestore().collection("users").add(userInfos);
  },
};
