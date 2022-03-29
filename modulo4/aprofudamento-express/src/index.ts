import express from "express"
import cors from "cors"
import { tasks } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

//1)
app.get("/ping" , (req, res) => {
    res.status(200).send("Pong 🏓")
})

//4)
app.get(`/afazeres/:task`, (req, res) => {
    const changeTask = req.params.task.toLowerCase()

    if(changeTask === "true" || changeTask === "false"){
        const taskCompleted = tasks.filter(task => {
            if(changeTask === "true"){
                return task.completed === true
            }else if(changeTask === "false"){
                return task.completed === false
            }
        })
        res.status(200).send(taskCompleted)
    }
})


//5)
app.post("/afazeres", (req, res) => {
    const title: string = req.body.title
    const completed: boolean = req.body.completed
    const body = {
        userId: Date.now().toString(),
        id: Date.now().toString(),
        title: title,
        completed: completed
    }
   tasks.push(body)

    res.status(200).send(tasks)
})

//6)
app.put("/afazeres/:id", (req, res) =>{
    const taskId = req.params.id
    const body = {
        completed: req.body.completed
    }
    const filterTask = tasks.filter(task=>{
        return task.id === Number(taskId)
    })
    const mapTask = filterTask.map(value =>{
        return {
            ...value,
            completed: body.completed
        }
    })
    res.status(200).send(mapTask)
})



//7)
app.delete("/afazeres/:taskId", (req, res)=>{
    const taskId = req.params.taskId
    const deleteTask = tasks.filter(task=>{
        return task.id !== Number(taskId)
    })

    res.status(200).send(deleteTask)
})


//8)
app.get("/afazeres/user/:userId", (req, res)=>{
    const userId = Number(req.params.userId)
    if(userId === Number(userId)){
        const filterTask = tasks.filter(userTask =>{
            return userTask.userId === Number(userId)
        })
        res.status(200).send(filterTask)
    }else{
        res.status(400).send("Esse valor não é um número")
    }
 
})


app.listen(3003, () => {
    console.log("Back-end Rodando! http://localhost:3003")
})
