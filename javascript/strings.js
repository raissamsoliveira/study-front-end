// Como declarar uma variável do tipo STRING

let string = "texto";

// Concatenação - juntar um texto ao outro

let msg1 = "Olá! ";
let msg2 = "Seja Bem-vindo (a)!";
let concatenar = msg1 + msg2

let pessoa ="Raissa";
// let msg3 = pessoa + " , seja bem vindo (a)"; //modelo antigo de concatenação
let msg3 = `${pessoa}, seja bem-vindo (a)`;

console.log(msg3);    //Método utilizado para um determinado fim

// Exercício

let usuario = prompt ("Qual é o seu nome? ");
alert (`${usuario}, seja bem-vindo (a)`);
console.log(usuario);
