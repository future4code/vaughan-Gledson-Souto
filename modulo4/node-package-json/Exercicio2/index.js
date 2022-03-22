//Exercicio 2

switch (process.argv[2]){
    case "add":
        return  console.log(`\u001b[34m Resposta: ${Number(process.argv[3]) + Number(process.argv[4])}`)
    case "sub":
        return console.log(`Resposta: ${Number(process.argv[3]) - Number(process.argv[4])}`)
    case "mult": 
        return console.log(`Resposta: ${Number(process.argv[3]) * Number(process.argv[4])}`)
    case "div":
        return console.log(`Resposta: ${Number(process.argv[3]) / Number(process.argv[4])}`)
    default:
        console.log(`\u001b[31m Erro`) 
}