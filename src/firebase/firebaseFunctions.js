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

  collectionUser: (user, name, email, sector, userName) => {
    const userInfos = {
      userId: user.uid,
      name: name,
      email: email,
      sector: sector,
      userName: user.displayname,
    };
    return firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set(userInfos);
  },

  getCurrentUser: (userId) => {
    return firebase.firestore().collection("users").doc(userId).get();
  },
};
