//Exercicio 4
const process2: number = Number(process.argv[2])
const process3: number = Number(process.argv[3])

export function comparaDoisNumeros(num1: number, num2: number): number {
    let maiorNumero: number;
    let menorNumero: number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca: number = maiorNumero - menorNumero;
  
    return diferenca 
  }

  console.log(comparaDoisNumeros(process2, process3))