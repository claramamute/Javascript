const leia = require('readline-sync'); //Requerimento da biblioteca, objetos com funções

let quantidade; //undefined
let altura;

quantidade = leia.questionInt("Digite um valor inteiro: ") //Valida se o numero é inteiro e atribui à variavel o valor digitado

console.log('O valor digitado foi: ' + quantidade)

altura = leia.questionFloat("\nDigite sua altura: ", {limitMessage: 'Digite um numero tipo float'}) //Valida se um numero é float e exibe mensagem personalizada, caso não seja 

console.log('O valor digitado foi: ' + altura)

// Operadores:

let x = 4;
let y = 2;
let z = 3;
let w = -5;

console.log("Soma (4+2): " + (x + y));
console.log("\nSoma com numero negativo (4 + (-5)): " + (x + w));
console.log("\nSubtração (4-2): " + (x - y));
console.log("\nMultiplicação (4*2): " + x * y);
console.log("\nDivisão (4/2): " + x / y);
console.log("\nMódulo (resto da divisão): " + (x % 2));
console.log("\nMódulo (resto da divisão): " + (z % 2));

console.log("\nResultado da operação x + y * z: " + (x + y * z));
console.log("\nResultado da operação (x + y) * z: " + (x + y) * z);