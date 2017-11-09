import './assets/css/styles.css';

const greet = (name) => {
  return `Hola ${name}!`;
}
const salut = document.createElement("div");
salut.innerText = greet("Bego");
const body = document.querySelector("#root");
body.appendChild(salut);
