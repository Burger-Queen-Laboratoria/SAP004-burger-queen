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

  collectionUser: (user, name, email, sector) => {
    const userInfos = {
      userId: user.uid,
      name: name,
      email: email,
      sector: sector,
    };
    return firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set(userInfos);
  },
  collectionAdd: (collectionName, doc) => {
    return firebase.firestore().collection(collectionName).add(doc);
  },

  getCurrentUser: (userId) => {
    return firebase.firestore().collection("users").doc(userId).get();
  },

  getLoggedUser: (callback) => {
    firebase.auth().onAuthStateChanged(callback);
  },

  getMenuItens: (menuNumb) => {
    return firebase
      .firestore()
      .collection("menus")
      .where("menu", "==", menuNumb)
      .get();
  },

  getCurrentOrders: (callback) => {
    return firebase
      .firestore()
      .collection("pedidos")
      .limit(2)
      .orderBy("hora", "desc")
      .onSnapshot(callback);
  },
};
