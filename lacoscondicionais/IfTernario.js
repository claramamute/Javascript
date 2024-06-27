const leia = require("readline-sync")

let idade;
idade = leia.questionInt(`Qual sua idade?`)

            
console.log((idade>18) ? 'Maior que 18': 'Menor que 18')
// (condição) ? Verdadeiro(correponde com a condicao) : Falso(não condiz)
