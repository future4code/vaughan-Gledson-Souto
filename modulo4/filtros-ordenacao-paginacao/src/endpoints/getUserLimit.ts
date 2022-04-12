import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercicio 3

export async function getUserLimit(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
       const pagination = Number(req.query.pagination);
       let size = 5
       let offset = size * (pagination - 1)

       const result = await connection("aula48_exercicio")
       .select("*")
       .limit(size)
       .offset(offset)


       res.status(200).send(result)
    } catch (error) {
       res.status(500).send("Internal server error")
    }
 }
 