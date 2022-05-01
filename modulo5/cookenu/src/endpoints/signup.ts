import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export const signup = async (req: Request, res: Response): Promise<void> => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            res.statusCode = 422;
            throw new Error("Preencha os campos 'name', 'email' e 'password'.");
        }
        if(email.indexOf('@') === -1){
            res.statusCode = 400;
            throw new Error("Email invalido.");
        }
        if(password.length < 6){
            res.statusCode = 400;
            throw new Error("A senha deve conter, no mínimo, 6 caracteres.");
        }

        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserByEmail(email);

        if(user){
            res.statusCode = 409;
            throw new Error("Este email já está cadastrado!");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);

        const newUser = new User(id, name, email, hashPassword);
        await userDatabase.createUser(newUser);

        const authenticator = new Authenticator();
        const token = authenticator.generate({id})

        res.status(201).send({ 
            message: "Usuário criado com sucesso!",
            token: token
        });
        
    }catch(e: any) {
        if(res.statusCode === 200){
            res.status(500).send("Erro interno");
        }else{
            res.status(400).send({message: e.message || e.sqlMessage});
        }
    }
}