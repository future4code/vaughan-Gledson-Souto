import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercicio 4

export async function getUsersOrdenation(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
       let {name, type} = req.query;
       let pagination = Number(req.query.pagination);

       let size = 5
       let offset = size * (pagination - 1)
       let ordenation = req.query.ordenation as string

       if(!name && !type){
        name = ""
        type = ""
       }

       if(ordenation.toLowerCase() !== "asc" && ordenation.toLowerCase() !== "desc"){
         ordenation = "desc"
        }

       if(pagination <= 0){
          pagination = 1
       }

       const result = await connection("aula48_exercicio")
       .select("*")
       .where("name", "like", `%${name}%`)
       .orWhere("type", "like", `%${type}%`)
       .orderBy("email", `${ordenation}`)
       .limit(size)
       .offset(offset)

       res.status(200).send(result)
    } catch (error) {
       res.status(500).send("Internal server error")
    }
 }
 