require("firebase/firestore");

const firebase = require("firebase/app");
const fireconfig = require("./init-config");

const listMenu = [
  { menu: 1, type: null, item: "Café americano", price: 5 },
  { menu: 1, type: null, item: "Café com leite", price: 7 },
  { menu: 1, type: null, item: "Misto Quente", price: 10 },
  { menu: 1, type: null, item: "Suco de fruta natural", price: 7 },
  { menu: 2, type: "Hambúrgueres", item: "Hambúrguer Simples", price: 20 },
  { menu: 2, type: "Hambúrgueres", item: "Hambúrguer Duplo", price: 25 },
  { menu: 2, type: "Acompanhamentos", item: "Batata frita", price: 5 },
  { menu: 2, type: "Acompanhamentos", item: "Anéis de cebola", price: 5 },
  { menu: 2, type: "Bebidas", item: "Água 500ml", price: 5 },
  { menu: 2, type: "Bebidas", item: "Água 750ml", price: 7 },
  { menu: 2, type: "Bebidas", item: "Refrigerante 500ml", price: 7 },
  { menu: 2, type: "Bebidas", item: "Refrigerante 750ml", price: 10 },
];

firebase.initializeApp(fireconfig);

for (let element of listMenu) {
  console.log(element);
  firebase
    .firestore()
    .collection("menus")
    .add(element)
    .then(() => {
      console.timeLog("Elemento Adicionado: " + element.item);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
