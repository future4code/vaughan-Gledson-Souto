import express, {Express, Request, Response} from 'express';
import cors from 'cors'
import { AddressInfo } from "net";
import connection from "./connection";



const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/user/register",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
        const {name, nickname, email} = req.body
        if(!name){
            codeError = 422
            throw new Error("Need name in body")
        }
        if(!nickname){
            codeError = 422
            throw new Error("Need nickname in body")
        }
        if(!email){
            codeError = 422
            throw new Error("Need email in body")
        }
        await connection.insert({id: Date.now().toString(), name, nickname, email}).into(("to_do_list_users"))
        
        res.status(201).send({message: `User Created`})
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.get("/user/:id",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
        const id = req.params.id
        if(!id){
            codeError = 422
            throw new Error("Need id in path variables")
        }

        const userForId = await connection.select("*").from("to_do_list_users").where({id})
        
        res.status(200).send(userForId)
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.put("/user/edit/:id",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
        const {name, nickname} = req.body
        if(!name){
            codeError = 422;
            throw new Error("Need name in body")
        }
        if(!nickname){
            codeError = 422;
            throw new Error("Need nickname in body")
        }
        if(!req.params.id){
            codeError = 422;
            throw new Error("Need id in path variables")
        }
        console.log(!req.params.id)
        await connection("to_do_list_users").update({name, nickname}).where({id: req.params.id})
        
        res.status(201).send({message: `Usuário alterado`})
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.post("/task",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
       
        const {title, description, date_limit, user_id} = req.body
        let dateBrazilian = date_limit
        let dateAmerica = dateBrazilian.split("/").reverse().join("-")

        if(!title){
            codeError = 422;
            throw new Error("Need title in body")
        }
        if(!description){
            codeError = 422;
            throw new Error("Need nickname in body")
        }
        if(!date_limit){
            codeError = 422;
            throw new Error("Need description in body")
        }
        if(!user_id){
            codeError = 422;
            throw new Error("Need user_id in body")
        }
        await connection.insert(
            {
                id: Date.now().toString(),
                title,
                description,
                date_limit: dateAmerica,
                user_id
            })
            .into(("to_do_list_tasks"))
        
        res.status(201).send({message: `Tarefa criada`})
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.get("/task/:id",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
        const id = req.params.id
        if(!id){
            codeError = 422
            throw new Error("Need id in path variables")
        }

        const tasksForId = await connection.select("*").from("to_do_list_tasks").where({id})
        
        res.status(200).send(tasksForId)
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.get("/users/all",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
        const users = await connection("to_do_list_users")

        res.status(200).send(users)
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.get("/task",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
        const userId = req.query.user_id;
        if(!userId){
            codeError = 422
            throw new Error("Need id in query parameters")
        }
        const users = await connection.raw(`
          SELECT to_do_list_tasks.id, title, description, date_limit, user_id, status, to_do_list_users.nickname FROM to_do_list_tasks
          JOIN to_do_list_users
          ON to_do_list_users.id = to_do_list_tasks.user_id;
        `)
   
        const filterUsers = users[0].filter((user: any) => {
            return user.user_id === userId
        })

        res.status(200).send({tasks: filterUsers})
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.get("/user",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
        const query = req.query.query 
        const users = await connection("to_do_list_users")
        if(!query){
            codeError = 422
            throw new Error("Need query in query parameters")
        }

        const filterUsers = users.filter((user: any) => {
            return user.nickname.toLowerCase().includes(query) || user.email.toLowerCase() === query
        })

        if(filterUsers.length === 0){
            codeError = 404
            throw new Error("Not found")
        }

        res.status(200).send({users: filterUsers})
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.post("/task/responsible",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
       
        const {task_id, responsible_user_id} = req.body
        
        if(!task_id){
            codeError = 422;
            throw new Error("Need task_id in body")
        }
        if(!responsible_user_id){
            codeError = 422;
            throw new Error("Need responsible_user_id in body")
        }
        await connection.insert(
            {
                task_id,
                responsible_user_id
            })
            .into(("to_do_list_responsible_user"))
        
        res.status(201).send({message: `Success`})
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});


app.get("/task/:id/responsible",  async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try{
        const taskId = req.params.task_id;
        
        const tasks = await connection.raw(`
            SELECT task_id, nickname FROM to_do_list_responsible_user
            JOIN to_do_list_users
            ON to_do_list_users.id = responsible_user_id  
            JOIN to_do_list_tasks
            ON to_do_list_tasks.id = task_id
            WHERE task_id = "${taskId}";
        `)
        if(tasks.length === 0){
            codeError = 404;
            throw new Error("task not found")
        }else{
            res.status(200).send({users: tasks})
        }
        
    }catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});




















const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
