import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Users } from "../types";



export const createUser = async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            codeError = 422;
            throw new Error("Parameters need to be filled!");
        };

        const newUser: Users = {
            id: Date.now().toString(),
            name,
            email,
            password
        };

        await connection(`labecommerce_users`).insert(newUser);

        res.status(201).send({message: "User created!"});
    }catch(error){
        if(error instanceof Error){
            res.status(codeError).send({message: error.message});
        }else{
            res.status(500).send({message: "Unexpected error."});
        }
    }
};