import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercicio 2

export async function getUserOrderBy(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
       const {name, type} = req.query;

       let ordenation = req.query.ordenation as string

       if(ordenation.toLowerCase() !== "asc" && ordenation.toLowerCase() !== "desc"){
        ordenation = "asc"
       }
       
       const result = await connection("aula48_exercicio")
       .select("*")
       .where("name", "like", `%${name}%`)
       .orWhere("type", "like", `%${type}%`)
       .orderBy("email", `${ordenation}`)
 

       res.status(200).send(result)
    } catch (error) {
       res.status(500).send("Internal server error")
    }
 }
 