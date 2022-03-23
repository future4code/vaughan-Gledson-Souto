//Desafios

//Exercicio 6
const process2: number = Number(process.argv[2])
const process3: number = Number(process.argv[3])
const process4: number = Number(process.argv[4])

const calcular = (num1: number, num2: number): void => {
  console.log(num1 + num2)
  console.log(num1 - num2)
  console.log(num1 * num2)

  if(num1 > num2){
      return console.log(num1)
  }else if (num2 > num1){
      return console.log(num2)
  }else{
      return console.log("numeros são iguais")
  }
}
console.log(calcular(process2, process3))

