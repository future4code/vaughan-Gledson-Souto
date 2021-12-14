/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

const carta_usuario = comprarCarta();
const carta_usuario1 = comprarCarta();

const carta_computador = comprarCarta();
const carta_computador1 = comprarCarta();


const carta_soma_usuario = carta_usuario1.valor + carta_usuario.valor
const carta_soma_computador = carta_computador1.valor + carta_computador.valor

function jogo_de_cartas() {
   if (confirm("Quer iniciar uma nova rodada?")) {
      console.log(`Usuário - cartas: ${carta_usuario.texto} ${carta_usuario1.texto} - pontuação: ${carta_soma_usuario}`)
      console.log(`Computador - cartas: ${carta_computador.texto} ${carta_computador1.texto} - pontuação: ${carta_soma_computador}`)


      if (carta_usuario.valor === carta_computador.valor) {
         console.log("Empate!")

      } else if (carta_usuario.valor > carta_computador.valor) {
         console.log("O usuário ganhou!")

      } else {
         console.log("O computador ganhou!")
      }

   } else {
      console.log("O jogo acabou!")
   }
}

jogo_de_cartas()

