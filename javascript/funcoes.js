//Calculadora

function soma (num1, num2){
    //código da função
    return  num1 + num2;
}

function subtracao (num1, num2){
    //código da função
    return  num1 - num2;
}

function multiplicacao (num1, num2){
    //código da função
    return  num1 * num2;
}

function divisao (num1, num2){
    //código da função
    return  num1 / num2;
}

let parametro1 = parseFloat(prompt("Insira o primeiro número: "));
let parametro2 = parseFloat(prompt("Insira o número 2: "));
let operacao = prompt("Escolha a operação (digite 1 para soma, 2 para subtração, 3 para multriplicação e 4 para divisão): ")

if (operacao === "1"){
    alert (soma(parametro1, parametro2))
} else if (operacao === "2"){
    alert (subtracao(parametro1,parametro2))
} else if (operacao === "3"){
    alert (multiplicacao(parametro1,parametro2))
} else if (operacao === "4"){
    alert (divisao(parametro1,parametro2))
} else {
    alert ("Operação digitada errada, tente novamente")
}
