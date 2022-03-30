//Exercicio 3

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const pegarFilme = (nome: string, anoLancamento: number, genero: GENERO, nota?: number)=> {
type movies = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    nota?: number

}

const Filme: movies = {
    nome,
    anoLancamento,
    genero,
    nota
}

  console.table(Filme)
}
pegarFilme(process.argv[2], Number(process.argv[3]), GENERO.ACAO, Number(process.argv[4]))