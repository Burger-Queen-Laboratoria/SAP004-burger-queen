import firebase from "./init-firebase.js";

export const getOrder = async () => {
  const i = await firebase.firestore().collection("teste-jessica").get();
  const ar = [];
  i.forEach((item) => {
    const o = {
      item: item.id,
      name: item.data().nome,
      hour: item.data().hora,
      table: item.data().mesa,
    }
    ar.push(o);
  });
  return ar;
}

export const accessCollectionOrder = () => {
  return firebase.firestore().collection("teste-jessica");
}
