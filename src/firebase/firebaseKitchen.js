import firebase from "./init-firebase.js";

export const getOrder = async () => {
  const i = await firebase.firestore().collection("teste-jessica").orderBy("hora", "asc").get();
  const ar = [];
  i.forEach((item) => {
    const o = {
      id: item.id,
      name: item.data().nome,
      hour: item.data().hora,
      table: item.data().mesa,
      status: item.data().status,
      itens: item.data().itens,
    }
    ar.push(o);
  });
  return ar;
}

export const accessCollectionOrder = () => {
  return firebase.firestore().collection("teste-jessica");
}
