import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { signupInputDTO } from "../types/signupInputDTO";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ){
    }
    signup = async(
        req: Request,
        res: Response
    ) => {
        const {name, email, password} = req.body;
        const input: signupInputDTO = {
            name,
            email,
            password
        }
        try{
            const token = await this.userBusiness.signup(input);

            res.status(201).send({
                message: "Usário criado com sucesso!",
                token
            });
        }catch(e){
            if (e instanceof Error) {
                throw new Error(e.message)
            } else {
                throw new Error("Erro do banco!")
            }
        }
    }
}