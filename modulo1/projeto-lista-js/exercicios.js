// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(area) {
  // implemente sua lógica aqui
  const altura = prompt("Digite a altura do retângulo: ")
  const largura = prompt("Digite a largura do retângulo: ")
  
  area = altura * largura
  
  console.log(area)

} area

// EXERCÍCIO 02
function imprimeIdade(idade) {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual o ano atual? ")
  const anoNascimento = prompt("Qual seu ano de nascimento? ")

  idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const IMC = peso / (altura * altura)
  
  return IMC
} 

console.log(calculaIMC(85 ,1.8))


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 const nome = prompt ("Qual seu nome? ")
 const idade = prompt ("Qual sua idade? ")
 const gmail = prompt ("Qual seu e-mail? ")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${gmail}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(coresFavoritas) {
  // implemente sua lógica aqui
const cor1 = prompt("Digite uma cor favorita: ")
const cor2 = prompt("Digite outra cor favorita: ")
const cor3 = prompt("Digite mais uma cor favorita: ")

coresFavoritas  = [cor1,cor2,cor3] 

console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const string1 = string.toUpperCase()

return string1

}
 console.log(retornaStringEmMaiuscula("oi"))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 const semPrejuizo = custo / valorIngresso 

 return semPrejuizo
}
 console.log(calculaIngressosEspetaculo(3000,100))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const tamanhoString = string1.length === string2.length

return tamanhoString
}

console.log(checaStringsMesmoTamanho("",""))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const array1 = array[0]

return array1
}
console.log(retornaPrimeiroElemento())

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let arrayUltimo = array.pop()

  return arrayUltimo
}
console.log(retornaUltimoElemento())

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
//Desculpa não consegui fazer 
return 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}