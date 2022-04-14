import { Request, Response } from "express";
import { connection } from "../data/connection";



export const getProducts = async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;
    try{
       const {search} = req.query;
       let order = req.query.order as string;

       if(order.toLowerCase() !== "asc" && order.toLowerCase() !== "desc"){
           order = "asc";
       }

       const products =  await connection(`labecommerce_products`)
       .select("*")
       .where("name", "like", `%${search}%`)
       .orderBy("name", `${order}`);

        res.status(200).send({users: products});
    }catch(error){
        if(error instanceof Error){
            res.status(codeError).send({message: error.message});
        }else{
            res.status(500).send({message: "Unexpected error."});
        }
    }
};