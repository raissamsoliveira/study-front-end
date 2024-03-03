//for (inicializador; condição-saída ; expressão-final) {executar o código}

//Inicializador: variável que vai contar aquantidade de vezes que algo foi repetido. 
//Condição de saída: quando a repetição deve ser encerrada - geralmente é utilizado com um operador de comparação.
//Expressão Final: Quando queremos que o inicializador faz mais ou menos contagens. 

let notas = [2, 5, 10, 20, 50, 100, 2, 5, 10, 20, 50, 100, 2, 5, 10, 20, 50, 100, 2, 5, 10, 20, 50, 100, 100];
let total = 0; 

//Exercício: 
// Explicação do for:  a quantidade de repetiçoes vai acontecer até chegar no final do array. mas, se add mais itens no array, será incrementado mais uma repetição.

for (let repeticoes = 0; repeticoes < notas.length; repeticoes++ ){
    //total = total + notas[repeticoes]
    total += notas[repeticoes]
}

console.log (`O total do seu dinheiro é ${total}`)
