const leia = require("readline-sync")

let nome;
let idade;

nome = leia.question("Qual  seu nome?", {limitMessage: "Escreva seu nome"});
idade = leia.questionInt(`Qual sua idade ${nome}?`)

if(idade >= 0 && idade<=10){
    console.log("\nSeu plano de saúde custará R$100,00/mês")
}else if(idade <=29){
    console.log("\nSeu plano custara R$300,00")
}else if(idade <=45){

}else if(idade<=59){

}else if(idade<=65){

}
else{
    console.log("\nSeu plano custara R$500,00")
}

if (nome.toLowerCase() === "clara"){
    console.log(`\nMuito obrigado ${nome}!`)
}