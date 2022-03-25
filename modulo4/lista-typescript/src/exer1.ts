//Exercicio 1

const separaData = (nome: string, data: string) => {
    const separar = data.split('/')

    console.log(`Olá me chamo ${nome}, nasci no dia ${separar[0]} do mês de 
    ${separar[1]} do ano de ${separar[2]}`)
}

separaData(process.argv[2], process.argv[3])
