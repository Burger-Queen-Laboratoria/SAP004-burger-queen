import firebase from "./init-firebase.js";

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
      hour: item.data().horaInicial,
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

const convertHour = (type) => {
  return type >= "0" && type < "10" ? `0${type}`: type;
}

export const addHourWhenConcludeOrder = (id) => {
  const hour = new Date();
  const idOrder = firebase
    .firestore()
    .collection("teste-jessica")
    .doc(id);
  const getHourConvert = convertHour(hour.getHours());
  const getMinuteConvert = convertHour(hour.getMinutes());
  return idOrder
    .update({horaFinal: `${getHourConvert}:${getMinuteConvert}`});
}

// export const calcBetweenInicialAndFinalTimeOrder = (id) => {
//   const idOrder = firebase.firestore().collection("teste-jessica").doc(id);
//   const inicialHour = idOrder.get().then(item => item.data().horaInicial).then(hour => {
//     const separateHour = hour.split(":");
//     return (Number(separateHour[0])*60)+Number(separateHour[1]);
//   });
//   const finalHour = idOrder.get().then(item => item.data().horaFinal).then(hour => {
//     const separateHour = hour.split(":");
//     return (Number(separateHour[0])*60)+Number(separateHour[1]);
//   });
//   console.log(finalHour.then() - inicialHour.then());
// }

export const snapshotOrders = (funcSetOrders) => {
  firebase
    .firestore()
    .collection("teste-jessica")
    .onSnapshot(() => {
      getInProgressOrder().then(funcSetOrders);
  });
}