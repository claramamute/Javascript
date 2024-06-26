const leia = require('readline-sync')

let salario;
let abono;

salario = leia.questionFloat('\nDigite o Salario: ' ,{limitMessage: 'Digite um número do tipo float'})

abono = leia.questionFloat('\nDigite o Abono: ' ,{limitMessage: 'Digite um número do tipo float'})

const novoSalario = (salario + abono)

console.log('\nNovo salário: ' + novoSalario.toFixed(2))