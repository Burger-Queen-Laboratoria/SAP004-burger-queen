import firebase from "./init-firebase.js";

export const getOrder = () => {
  return firebase.firestore().collection("teste-jessica").get();
}
