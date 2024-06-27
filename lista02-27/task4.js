const leia = require("readline-sync")

let caract1, caract2, caract3;

caract1 = leia.question('\nEscreva a primeira caracteristica: ', {limitMessage: 'Digite em formato de texto'})

caract2 = leia.question('\nEscreva a segunda caracteristica: ', {limitMessage: 'Digite em formato de texto'})

caract3 = leia.question('\nEscreva a terceira caracteristica: ', {limitMessage: 'Digite em formato de texto'})

if(caract1.toLowerCase() == "vertebrado"){
    if(caract2.toLowerCase() == "ave"){
        if(caract3.toLowerCase() == "carnivoro"){
            console.log("\nÁguia")
        }else{
            console.log("\Pomba")
        }
    } else if(caract3.toLowerCase() == "onivoro"){
        console.log("\nHomem")
    }else{
        console.log("\nVaca")
    }
}else {
    if(caract2.toLowerCase() == "inseto" ){
        if(caract3.toLowerCase() == "hematofago"){
            console.log("\nPulga")
        }else {
            console.log("\nLagarta")
        }
    }else if(caract2.toLowerCase() == "anelideo"){
        if(caract3.toLowerCase() == "hematofago"){
            console.log("\nSanguessuga")
        }else{
            console.log("\nMinhoca")
        }
    }
}
