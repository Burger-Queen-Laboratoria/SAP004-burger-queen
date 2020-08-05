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
      finalHour: item.data().horaFinal,
      prepareTime: item.data().tempoPreparo,
      waiter: item.data().garcom,
      totalPrice: item.data().total,
      chef: item.data().cozinheiro,
    };
    ar.push(o);
  });
  return ar;
}

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

  getCurrentOrders: (callback, numb) => {
    return firebase
      .firestore()
      .collection("pedidos")
      .limit(numb)
      .orderBy("hora", "desc")
      .get();
    // .onSnapshot(callback);
  },

  snapshotOrders: (funcSetOrders) => {
    const status = "Em andamento";
    const time = "horaInicial";
    const ascOrDesc = "asc";
    firebase
      .firestore()
      .collection("pedidos")
      .onSnapshot(() => {
        getOrder(status, time, ascOrDesc).then(funcSetOrders);
    });
  },

  snapshotConcludeOrders: (funcSetOrders) => {
    const status = "concluído";
    const time = "horaFinal";
    const ascOrDesc = "desc";
    firebase
      .firestore()
      .collection("pedidos")
      .onSnapshot(() => {
        getOrder(status, time, ascOrDesc).then(funcSetOrders);
    });
  },

  concludeOrder: (order) => {
    const name = firebase.auth().currentUser.displayName;
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
        cozinheiro: name,
      });
  }
};
