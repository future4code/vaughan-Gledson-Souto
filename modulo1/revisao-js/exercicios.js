// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    array.sort(function (a, b) {
        return a - b;
    });
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const receber_numeros_pares = array.filter((numerosPares) => {
        if (numerosPares % 2 === 0) {
            return numerosPares
        }

    });

    return receber_numeros_pares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    for (let elevados of array) {
        console.log(elevados ^ 2)
    }
    return retornaNumerosPares(receber_numeros_pares())
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let numeroArray of array) {
        if (maiorNumero < numeroArray) {
            maiorNumero = numeroArray
        }
    }

    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maior = Math.max(num1, num2);

    function verdadeiroOuFalso() {
        if (Math.max(num1, num2) % Math.min(num1, num2) === 0) {
            return true
        } else {
            return false
        }
    }

    const diferenca = Math.max(num1, num2) - Math.min(num1, num2)

    const nome_do_objeto = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: verdadeiroOuFalso(),
        diferenca: diferenca,
    }

    return nome_do_objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayDePares = []

    for (let contador = 0; arrayDePares.length < n; contador++) {
        if (contador % 2 === 0) {
            arrayDePares.push(contador)
        }
    }
    return arrayDePares



}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoA === ladoC){
    return "Equilátero"
}else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    return "Isósceles"
}else {
    return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const dados = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci'],
    }

    return `Venha assistir ao filme ${dados.nome}, de ${dados.ano}, dirigido por ${dados.diretor} e estrelado por ${dados.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const novos_dados = [
        ...contas
         [{saldoTotal: 400 },
         { saldoTotal: 6260 },
         { saldoTotal: -3340 },
         { saldoTotal: -1900 },
         { saldoTotal: 1300 },
         { saldoTotal: 1200 }]
         ]
return novos_dados
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}