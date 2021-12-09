// Exercícios de interpretação de código

//Exercicio 1
//a) a posição do elementos , quantos elementos o array possui, aparecerá todo o array


//Exercicio 2
//b) apenas os nomes serão mostrados 

//Exercicio 3
//a) todos os apelidos diferente de Chijo


//Exercícios de escrita de código

//Exercicio 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//a)
//  const nome_doguinhos = pets.map((pet) => {
//     return pet.nome

//  }) 
//  console.log(nome_doguinhos)


//b)
// const raca_doguinhos = pets.filter((dogs) => {
//     return dogs.raca === "Salsicha"
//  })
 
//  console.log(raca_doguinhos)

// c)
// const cupom_de_desconto = [ "Você ganhou um cupom de desconto de 10% para tosar o/a"]

// const mensagem_clientes = pets.filter((poodles) => {
//    if (poodles.raca === "Poodle"){
//        console.log(`${cupom_de_desconto} ${poodles.nome}!`)
//    }
    
//    return 
//  })
 

//Exercicio 2
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
//a)
//  const nome_produtos = produtos.map((nomes) => {
//    const lista_produtos = []
//    lista_produtos.push(nomes.nome) 
//    console.log(lista_produtos)
//  }) 
 

// b)

// const nomes_precos = [
//     { nome: "Alface Lavada",preco: 2.5 },
//     { nome: "Guaraná 2l",preco: 7.8 },
//     { nome: "Veja Multiuso", preco: 12.6 },
//     { nome: "Dúzia de Banana", preco: 5.7 },
//     { nome: "Leite", preco: 2.99 },
//     { nome: "Cândida", preco: 3.30 },
//     { nome: "Detergente Ypê",preco: 2.2 },
//     { nome: "Vinho Tinto",preco: 55 },
//     { nome: "Berinjela kg", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", preco: 10.80 }
// ]
// const reducao_de_precos = nomes_precos.map((porcetagem) => {
//     nomes_precos
//     console.log(nomes_precos)
//     return preco_com_desconto
// })


// C)
//  const consumiveis = produtos.filter((bebidas) => {
//     const lista_bebidas = []
//     if(bebidas.categoria === "Bebidas"){
//         lista_bebidas.push(bebidas.nome, bebidas.categoria) 
//         console.log(lista_bebidas)
//    }

//  }) 

// d)

//  const limpar = produtos.filter((limpeza) => {
//     const lista_ype = []
//     if(limpeza.nome.includes("Ypê")){
//         lista_ype.push(limpeza.nome) 
//         console.log(lista_ype)
//    }
   
//  }) 

// e)
//  const limpar = produtos.filter((limpeza) => {
//     const lista_ype = []
//     if(limpeza.nome.includes("Ypê")){
//         lista_ype.push(`Compre ${limpeza.nome} por ${limpeza.preco}`)    
//         console.log(lista_ype)
//    }


//  }) 
 