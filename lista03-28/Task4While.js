const leia = require("readline-sync")

let continuar;
let idade, idGenero, dev;
let mulherCis, homemCis,naoBinario,mulherTrans,homemTrans,outros = 0;

continuar = leia.keyInYNStrict("\nDeseja responder nossa pesquisa? ");

while(continuar == true){

    idade = leia.questionInt("Idade: ")
    console.log('----------------------')
    console.log(' Identidade de Gênero ')
    console.log('     1- Mulher Cis    ')
    console.log('     2- Homem Cis     ')
    console.log('     3- Não binário   ')
    console.log('     4- Mulher Trans  ')
    console.log('     5- Homem Trans   ')
    console.log('     6- Outros        ')
    console.log('----------------------\n')

    idGenero = leia.questionInt('Identidade de genero: ')

    switch(idGenero){
        case 1:
            mulherCis++
            break
        case 2:
            homemCis++
            break
        case 3:
            naoBinario++
            break
        case 4:
            mulherTrans++
            break
        case 5:
            homemTrans++
            break
        case 6:
            outros++
            break
    }

    // console.log(' Pessoa Desenvolvedora')
    // console.log('     1- Back End      ')
    // console.log('     2- Front End     ')
    // console.log('     3- Mobile        ')
    // console.log('     4- Full Stack    ')
    // console.log('----------------------\n')


    // dev = leia.questionInt('Digite o ultimo numero do intervalo: ')

    // switch(dev){
    //     case 1:
    //         back
    //         break
    //     case 2:
    //         front
    //         break
    //     case 3:
    //         mobile
    //         break
    //     case 4:
    //         full
    //         break
    // }

    continuar = leia.keyInYNStrict("\nDeseja responder nossa pesquisa? ");

}
    
console.log (`O numero de mulher cis é: ${mulherCis}`)