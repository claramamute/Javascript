const leia = require("readline-sync")

let numero;

numero = leia.questionInt('\nDigite um numero inteiro: ', {limitMessage: 'Digite um numero inteiro, por favor'})

if(numero % 2 == 0 && numero >= 0 ){
    console.log(`\nO numero ${numero} é par e positivo!`)
}else if(numero % 2 !=0 && numero < 0){
    console.log(`\nO numero ${numero} é ímpar e negativo!`)
} else if( numero >=0){
    console.log(`\nO numero ${numero} é ímpar e positivo!`)
}else{
    console.log(`\nO numero ${numero} é par e negativo!`)
}

//const sinal = numero >= 0 ? 'positivo' : 'negativo'
//const paridade = numero %2 ===0 ? 'par' : 'ímpar'

//console.log(`O numero ${numero} é ${paridade} e ${sinal}`)