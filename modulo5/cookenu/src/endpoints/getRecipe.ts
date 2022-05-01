import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getRecipe = async (req: Request, res: Response): Promise<void> => {
    try{
        const token = req.headers.authorization;
        const id = req.params.id;

        if(!token){
            res.statusCode = 422;
            throw new Error("Este endpoint exige uma authorization a ser passada no headers.");
        }
        if(!id){
            res.statusCode = 422;
            throw new Error("Este endpoint exige que o id do usario seja passado no path params")
        }
        const authenticator = new Authenticator();
        const tokenData = authenticator.getTokenData(token)

        const userDatabase = new UserDatabase();
        const recipes = await userDatabase.getRecipe(id);

        res.status(200).send(recipes);
    }catch(e: any) {
      
            res.status(400).send({message: e.message || e.sqlMessage});
        
    }
}