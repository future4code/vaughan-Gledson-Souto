//Exercicio de interpretação de código
 
/*1.Resposta
10
10, 5 
*/

/*2.Resposta
10, 10, 10
*/

/*3.Resposta
p = trabalha
t = recebe
 */
 
let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);
//1.d) apareceu "undefined" por estarem vazias

nome = prompt ("Qual seu nome? ");
idade = prompt ("Qual sua idade? ")

console.log(typeof nome);
console.log(typeof idade);
//As variaveis agora estão definidas como sendo duas strings

console.log("Olá,", nome, ", você tem", idade, "anos");


let pergunta1 = prompt("O clima está agradavel? ");
let pergunta2 = prompt("Você gosta de acerola? "); 
let pergunta3 = prompt("Sopa é janta? "); 

console.log ("O clima está agradavel? ",pergunta1);
console.log ("Você gosta de acerola? ",pergunta2);
console.log ("Sopa é janta? ",pergunta3);



let a = 10
let b = 25

c = a;
a = b;
b = c;


console.log("O novo valor de a é", a)
console.log("O novo valor de b é",b)


//desafio
let numero1 = prompt ("Digite um numero: ");
let numero2 = prompt ("Digite outro numero: ");
let number1 = Number(numero1)
let number2 = Number(numero2)


console.log("O primeiro número somado ao segundo número resulta em: ", number1 + number2 );
console.log("O primeiro número multiplicado ao segundo número resulta em: ", number1 * number2 );


