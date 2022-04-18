import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercicio 1
//b)
export async function getUserType(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
       const {type} = req.params;

       const result = await connection("aula48_exercicio")
       .select("*")
       .where("type", "like", `%${type}%`)
 

       res.status(200).send(result)
    } catch (error) {
       res.status(500).send("Internal server error")
    }
 }
 