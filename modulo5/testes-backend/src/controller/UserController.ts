import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

   constructor(private userBusiness: UserBusiness){}

   public async getUserById(
       req: Request,
       res: Response
       ) {
    try {
       const id = req.params.id
       const result = await this.userBusiness.getUserById(id);
       
       res.status(200).send(result);
    } catch (error:any) {
       const { statusCode, message } = error
       res.status(statusCode || 400).send({ message });
    }
 }
}