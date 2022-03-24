//Exercicio 2

//a) Entrada é o array de numeros que está vindo como paramentro e sainda é o objeto das estatisticas 

//b) numerosOrdenados é do tipo array ed numeros, soma tipo number e a estatistica que é do tipo objeto

//c)

function obterEstatisticas(numeros: number[]): {} {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type AmostraDeIdades = {

    numeros: number[],

    obterEstatisticas: (numeros: number) => {
        
    }
}
let amostra = {
    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros: number[]) => {
       return obterEstatisticas(numeros)
    }
}