import firebase from "./init-firebase.js";
import moment from "moment";

const getOrder = async (status, time, ascOrDesc) => {
  const i = await firebase
    .firestore()
    .collection("pedidos")
    .where("status", "==", status)
    .orderBy(time, ascOrDesc)
    .get();
  const ar = [];
  i.forEach((item) => {
    const o = {
      id: item.id,
      name: item.data().cliente,
      initialHour: item.data().horaInicial.toDate(),
      table: item.data().mesa,
      status: item.data().status,
      itens: item.data().pedido,
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
    .collection("pedidos")
    .doc(order.id)
    .update({
      status: "concluído",
      horaFinal: time,
      tempoPreparo: calc,
    });
}

export const snapshotOrders = (funcSetOrders) => {
  const status = "Pedido enviado para cozinha";
  const time = "horaInicial";
  const ascOrDesc = "asc";
  firebase
    .firestore()
    .collection("pedidos")
    .onSnapshot(() => {
      getOrder(status, time, ascOrDesc).then(funcSetOrders);
  });
}

export const snapshotConcludeOrders = (funcSetOrders) => {
  const status = "concluído";
  const time = "horaFinal";
  const ascOrDesc = "desc";
  firebase
    .firestore()
    .collection("pedidos")
    .onSnapshot(() => {
      getOrder(status, time, ascOrDesc).then(funcSetOrders);
  });
}