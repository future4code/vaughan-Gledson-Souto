//Exercicio 5
const process2: number = Number(process.argv[2])
const process3: number = Number(process.argv[3])
const process4: number = Number(process.argv[4])

export function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ): string {
    let idade: number = anoAtual - anoNascimento
    let tempoCarteira: number = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
}
console.log(checaRenovacaoRG(process2, process3, process4))