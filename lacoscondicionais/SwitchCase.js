const leia = require("readline-sync")

let nome;
let codigo;

nome = leia.question("Qual  seu nome?", {limitMessage: "Escreva seu nome"});

console.log("\n 1 -- De 0 a 10 anos ");
console.log("\n 2 -- De 11 a 29 anos ");
console.log("\n 3 -- De 30 a 45 anos ");
console.log("\n 4 -- De 46 a 59 anos");
console.log("\n 5 -- De 60 a 65 anos ");
console.log("\n 6 -- Acima de 65 anos ");

codigo = leia.questionInt(`\nQual faixa de idade voce se enquadra, ${nome}? Digite o codigo para continuar`)

switch(codigo){
    case 1:
        console.log('\nSeu plano de saúde custará R$100,00/mês')
        break;
    case 2:
        console.log("\nSeu plano custara R$200,00")
        break;
    case 3:
        console.log("\nSeu plano custara R$300,00")
        break;
    case 4:
        console.log("\nSeu plano custara R$300,00")
        break;
    case 5:
        console.log("\nSeu plano custara R$400,00")
        break;
    case 6:
        console.log("\nSeu plano custara R$500,00")
        break;
    default: //Se a opção não bate com nenhum caso, exibe msg erro
        console.log('\nDigite um código válido!')
}