//--------------Pré Incrementar----------------

let x = 10;
let y= 8;

console.log('P´re-incrementar: x = ++y');

//Sempre da direita para esquerda
x= ++y; //Incrementa o valor ao Y =9 e muda o valor do X para o mesmo que Y

console.log('\nValor de X: '+ x)
console.log('\nValor de Y: '+ y)

//--------------Pré Decrementar----------------

let a= 10;
let b =8;

a= --b; //Decrementa o valor do Y e muda o valor do X para o mesmo que Y

console.log('\nValor de A: '+ a)
console.log('\nValor de B: '+ b)

//--------------Pós Incrementar----------------

let i= 40;
let j =30;

i = j++; //Muda o valor do I para o mesmo que J e incrementa um 

console.log('\nValor de I: '+ i)
console.log('\nValor de J: '+ j)
