const leia = require("readline-sync")

let numero, contador,cont=0, numero2;

numero = leia.questionInt("Digite o numero: ")

// for(contador = 1; contador<=10;contador++){
//     multiplicacao = numero*contador
//     console.log(`${contador} x ${numero} = ${multiplicacao}`)
// }

for(contador = 1; contador<=4;contador++){
    numero =leia.questionInt("Calcule a multiplicacao de: ")
    numero2 = leia.questionInt("Vezes o numero: ")
    multiplicacao = numero*numero2
    console.log(`${numero} x ${numero2} = ${multiplicacao}`)

    if(numero%2==0){
        cont++
    }
}

console.log(`Apareceu ${cont} vezes o numero par`)