let nota1 = Number(prompt ("Digite sua primeira nota: "));
let nota2 = Number(prompt ("Digite sua segunda nota: "));

let resultado = (nota1 + nota2) / 2;

if (resultado >= 5){
    alert ("Você foi aprovado! Parabéns pelo resultado.")
}
else{
    alert ("Você foi reprovado! Está de recuperação.")
}