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
   let numeros = []
    for (let i = 0;i < array.length; i ++) {
       if(array[i] % 2 === 0){
        numeros.push(array[i] * array[i])
       }
    }
    
    return numeros
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
    const novo_array = []
    let menorNumero = Infinity
    let maiorNumero = -Infinity
    let segundoMaiorNumero = -Infinity
    let segundoMenorNumero = Infinity

    for (let i of array) {
        if (i < menorNumero) {
            menorNumero = i
        }
        if (i > maiorNumero) {
            maiorNumero = i
        }
    }

    for (let i of array) {
        if (i < segundoMenorNumero && i !== menorNumero) {
            segundoMenorNumero = i;
        }
        if (i > segundoMaiorNumero && i !== maiorNumero) {
            segundoMaiorNumero = i;
        }
    }

    novo_array.push(segundoMaiorNumero)
    novo_array.push(segundoMenorNumero)

    return novo_array
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
const novo_objeto = {
    ...pessoa,
    nome: "ANÔNIMO"
}
    return novo_objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoas_autorizadas = [];
    for (let i of pessoas) {
      if (i.altura >= 1.5 && i.idade > 14 && i.idade < 60) {
        pessoas_autorizadas.push(i);
      }
    }
    return pessoas_autorizadas;

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoas_nao_autorizadas = [];
    for (let i of pessoas) {
      if (i.altura < 1.5 || i.idade <= 14 || i.idade >= 60) {
        pessoas_nao_autorizadas.push(i);
      }
    }
    return pessoas_nao_autorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 for (const conta of contas){
     let compraTotal = 0;
     conta.compras.forEach(valor => {
         compraTotal = compraTotal + valor
     });
     conta.saldoTotal = conta.saldoTotal - compraTotal
     conta.compras = []
 }

    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        return 0;
      });
      return consultas
}
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function (a, b) {
        if (a.dataDaConsulta < b.dataDaConsulta) {
          return 1;
        }
        if (a.dataDaConsulta > b.dataDaConsulta) {
          return -1;
        }
        return 0;
      });
      return consultas
}