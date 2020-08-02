import firebase from "./init-firebase.js";

const getInProgressOrder = async () => {
  const i = await firebase
    .firestore()
    .collection("teste-jessica")
    .where("status", "==", "andamento")
    .orderBy("hora", "asc")
    .get();
  const ar = [];
  i.forEach((item) => {
    const o = {
      id: item.id,
      name: item.data().nome,
      hour: item.data().hora,
      table: item.data().mesa,
      status: item.data().status,
      itens: item.data().itens,
    };
    ar.push(o);
  });
  return ar;
}

export const concludeOrder = (id) => {
  return firebase
    .firestore()
    .collection("teste-jessica")
    .doc(id)
    .update({status: "concluído"});
}

export const snapshotOrders = (funcSetOrders) => {
  firebase
    .firestore()
    .collection("teste-jessica")
    .onSnapshot(() => {
      getInProgressOrder().then(funcSetOrders);
  });
}