//Exercicio 9

const anagramaPalavra = (palavra: string): number => {
    const anagrama: number = palavra.length
    let fatorial: number = 1

    for(let i = 1; i <= anagrama; i++){
        fatorial = fatorial * i
    }

    return fatorial
}
console.log(anagramaPalavra(process.argv[2]))
