import firebase from "./init-firebase.js";
import moment from "moment";

const getInProgressOrder = async () => {
  const i = await firebase
    .firestore()
    .collection("teste-jessica")
    .where("status", "==", "andamento")
    .orderBy("horaInicial", "asc")
    .get();
  const ar = [];
  i.forEach((item) => {
    const o = {
      id: item.id,
      name: item.data().nome,
      initialHour: item.data().horaInicial.toDate(),
      table: item.data().mesa,
      status: item.data().status,
      itens: item.data().itens,
    };
    ar.push(o);
  });
  return ar;
}

export const concludeOrder = (order) => {
  const time = new Date(Date.now());
  const calc = moment(new Date(time - order.initialHour)).utc().format("HH:mm:ss")

  return firebase
    .firestore()
    .collection("teste-jessica")
    .doc(order.id)
    .update({
      status: "concluído",
      horaFinal: time,
      calc: calc,
    });
}

export const snapshotOrders = (funcSetOrders) => {
  firebase
    .firestore()
    .collection("teste-jessica")
    .onSnapshot(() => {
      getInProgressOrder().then(funcSetOrders);
  });
}