const leia = require('readline-sync')

let n1, n2, n3, n4

n1 = leia.questionFloat('\nnumero1: ', {limitMessage: 'Insira o numero do tipo float'})

n2 = leia.questionFloat('\nnumero2: ', {limitMessage: 'Insira o numero do tipo float'})

n3 = leia.questionFloat('\nnumero3: ', {limitMessage: 'Insira o numero do tipo float'})

n4 = leia.questionFloat('\nnumero4: ', {limitMessage: 'Insira o numero do tipo float'})

const diferenca = (n1*n2)-(n3*n4)

console.log('\nDiferenca: ' + diferenca.toFixed(1))

