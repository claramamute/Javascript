const leia = require('readline-sync')

let n1, n2, n3,n4;

n1 = leia.questionFloat('\nNota 1: ', {limitMessage: 'Insira o numero do tipo float'})

n2 = leia.questionFloat('\nNota 2: ', {limitMessage: 'Insira o numero do tipo float'})

n3 = leia.questionFloat('\nNota 3: ', {limitMessage: 'Insira o numero do tipo float'})

n4 = leia.questionFloat('\nNota 4: ', {limitMessage: 'Insira o numero do tipo float'})

const media = (n1+n2+n3+n4)/4;

console.log('\nMédia final: ' + media.toFixed(1))