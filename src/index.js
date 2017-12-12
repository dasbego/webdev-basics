// import { concat } from 'lodash'
import './assets/css/styles.css'

// const greet = (name) => {
//   return `Hola ${name}!`;
// }

const salut = document.createElement("div");
salut.innerText = greet("Bego");
const body = document.querySelector("#root");
body.appendChild(salut);

// const array0 = concat(
//   [1], [2, 3], [[4]]
// )

// const isInArray = (array, target) => {
//   console.log(array.includes(target));
// }

// const array2 = [1, 2, 3, 4, 5];
// array2.find(5);
// for (item in array2) {
//   console.log(item)
// }

// const array = [1, 2, 3, 4];
// isInArray(array, 5);
