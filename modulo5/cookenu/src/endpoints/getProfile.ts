import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getProfile = async (req: Request, res: Response): Promise<void> => {
    try{
        const token = req.headers.authorization;

        if(!token){
            res.statusCode = 422;
            throw new Error("Este endpoint exige uma authorization a ser passada no headers.");
        }
        const authenticator = new Authenticator();
        const tokenData = authenticator.getTokenData(token)

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUser();

        res.status(200).send(user);
    }catch(e: any) {
        if(res.statusCode === 200){
            res.status(500).send("Erro interno");
        }else{
            res.status(400).send({message: e.message || e.sqlMessage});
        }
    }
}