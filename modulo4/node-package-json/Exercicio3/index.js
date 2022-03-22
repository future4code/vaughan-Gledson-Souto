
//Exercicio 3

const listTask = [
    "Lavar roupa"
]

if(process.argv[2] !== ""){
    listTask.push(process.argv[2])
    console.log("Tarefa adicionada com sucesso!")
    console.table(listTask)
}else{
    console.log("Nenhuma tarefa adicionada ou não é uma tarefa!")
}



