/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  //document.querySelector("#refresh").addEventListener("click", () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
} /*)*/;
console.log("Hello from the console of Bastián");
/*};*/

let generateExcuse = () => {
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "my crazy uncle",
    "the cat lady"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "threw",
    "took",
    "scream at",
    "stole",
    "bit"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my shoes",
    "my laptop",
    "my switch",
    "my ps4"
  ];
  let when = [
    "before the class",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "on the street",
    "in my balcony",
    "in the shower"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
