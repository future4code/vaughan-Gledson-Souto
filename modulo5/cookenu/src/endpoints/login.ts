import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export const login = async (req: Request, res: Response): Promise<void> => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            res.statusCode = 422;
            throw new Error("Preencha os campos 'email' e 'password'.");
        }
        if(email.indexOf('@') === -1){
            res.statusCode = 400;
            throw new Error("Email invalido.");
        }

        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserByEmail(email);

        if(!user){
            res.statusCode = 409;
            throw new Error("Este email não foi cadastrado ainda");
        }

        const hashManager = new HashManager();
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword());

        if(!passwordIsCorrect){
            res.statusCode = 401;
            throw new Error("Email ou senha incorreto.");
        }

        const authenticator = new Authenticator();
        const token = authenticator.generate({id: user.getId()})

        res.status(200).send({ 
            message: "Usuário logado com sucesso!",
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