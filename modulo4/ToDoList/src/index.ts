import express, {Express, Request, Response} from 'express';
import cors from 'cors'
import { AddressInfo } from "net";
import connection from "./connection";



const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/user/register",  async(req: Request, res: Response) => {
    let codeError: number = 400
    try{
        const {name, nickname, email} = req.body
        await connection.insert({id: Date.now().toString(), name, nickname, email}).into(("to_do_list_users"))
        
        res.status(201).send({message: `User Created`})
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.get("/user/:id",  async(req: Request, res: Response) => {
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

app.put("/user/edit/:id",  async(req: Request, res: Response) => {
    let codeError: number = 400
    try{
        const {name, nickname} = req.body
        if(!name){
            codeError = 422;
            throw new Error("O campo name precisa ser preenchido")
        }
        if(!nickname){
            codeError = 422;
            throw new Error("O campo nickname precisa ser preenchido")
        }
        if(!req.params.id){
            codeError = 422;
            throw new Error("A path variables id precisa ser preenchida")
        }
        console.log(!req.params.id)
        await connection("to_do_list_users").update({name, nickname}).where({id: req.params.id})
        
        res.status(201).send({message: `Usuário alterado`})
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
});

app.post("/task",  async(req: Request, res: Response) => {
    let codeError: number = 400
    try{
       
        const {title, description, date_limit, user_id} = req.body
        let dateBrazilian = date_limit
        let dateAmerica = dateBrazilian.split("/").reverse().join("-")

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

app.get("/task/:id",  async(req: Request, res: Response) => {
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























const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
