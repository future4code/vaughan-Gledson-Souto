import express from 'express';
import cors from 'cors';
import { users, posts } from './data';

const app = express();

app.use(express.json());
app.use(cors());
//1)

app.get("/", (req, res)=>{
    res.status(200).send("Hello from Express")
})

//4)
app.get("/users", (req, res)=>{
    res.status(200).send(users)
})

//7)
app.get("/posts", (req, res)=>{
    res.status(200).send(posts)
})

//8)
app.get("/posts/:userId", (req, res)=>{
    const userId = Number(req.params.userId)

    const filterPost = posts.filter((post)=>{
        return post.userId === userId
    })

    res.status(200).send(filterPost)
})
//9)
app.delete("/posts/:postId", (req, res)=>{
    const postId = Number(req.params.postId)

    const filterPost = posts.filter((post)=>{
        return post.userId !== postId
    })

    res.status(200).send(filterPost)
})

//10)
app.delete("/users/:id", (req, res)=>{
    const userId = Number(req.params.id)

    const filterUser = users.filter((user)=>{
        return user.id !== userId
    })

    res.status(200).send(filterUser)
})


app.listen(3003, ()=>{
    console.log("rodando http://localhost:3003");
});