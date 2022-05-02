import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { user } from "../types/user";

const userBusiness = new UserBusiness();


export class UserController {
    signup = async (
        req: Request,
        res: Response
     ) => {
        try {
           const { name, email, password, role } = req.body
     
           const token = await userBusiness.signup(name, email, password, role)
     
           res.status(201).send({
                message: "Usuário criado!",
                token
            })
     
        } catch (error: any) {
           res.status(400).send(error.message)
        }
     }
    login = async (
        req: Request,
        res: Response
     ): Promise<void> => {
        try {
           const { email, password } = req.body
     
           const token = await userBusiness.login(email, password)
     
           res.status(200).send({
              message: "Usuário logado!",
              token
           })
     
        } catch (error: any) {
           res.status(400).send(error.message)
        }
     }
     getAllUsers = async(
      req: Request,
      res: Response
     ) => {
        try {
         const token = req.headers.authorization!;
         const users = await userBusiness.getAllUsers(token);
   
            res.status(200).send(users)
        }catch (error: any){
            res.status(400).send(error.message || error.sqlMessage);
        }
     }
     deleteUser = async(
        req: Request, res: Response
        ) => {
           try{
            const input = {
               id: req.params.id,
               token: req.headers.authorization!
            }
 
            await userBusiness.deleteUser(input)
            

            res.status(200).send({
               message: "Usuário deletado com sucesso!"
            })
           }catch (error: any){
            res.status(400).send(error.message || error.sqlMessage);
           }

        }
}