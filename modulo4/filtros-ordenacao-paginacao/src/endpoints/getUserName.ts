import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercicio 1
//a)
export async function getUserName(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
       const {name} = req.query;

       const result = await connection("aula48_exercicio")
       .select("*")
       .where("name", "like", `%${name}%`)
 

       res.status(200).send(result)
    } catch (error) {
       res.status(500).send("Internal server error")
    }
 }
 