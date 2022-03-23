import {imprimeTresCoresFavoritas} from "./exer2"
import {checaAnoBissexto} from "./exer3"
import {comparaDoisNumeros} from "./exer4"
import {checaRenovacaoRG} from "./exer5"


const process2: number = Number(process.argv[2])
const process3: number = Number(process.argv[3])
const process4: number = Number(process.argv[4])

//Exercicio 1
const checaTriangulo = (a: number, b: number, c: number): string => {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
console.log(checaTriangulo(process2, process3, process4))
imprimeTresCoresFavoritas
checaAnoBissexto
comparaDoisNumeros
checaRenovacaoRG
