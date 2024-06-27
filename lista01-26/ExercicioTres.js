const leia = require('readline-sync')

let salarioBruto, adicionalNoturno, horasExtras, descontos;

salarioBruto = leia.questionFloat('\nSalario Bruto: ', {limitMessage: 'Insira numeros do  tipo float'})

adicionalNoturno = leia.questionFloat('\nAdicional Noturno: ', {limitMessage: 'Insira numeros do  tipo float'})

horasExtras = leia.questionFloat('\nHoras Extras: ', {limitMessage: 'Insira numeros do  tipo float'})

descontos = leia.questionFloat('\nDescontos: ', {limitMessage: 'Insira numeros do  tipo float'})

const salarioLiquido = salarioBruto+adicionalNoturno+(horasExtras*5) - descontos

console.log('\nSalario Liquido: '+ salarioLiquido.toFixed(2))