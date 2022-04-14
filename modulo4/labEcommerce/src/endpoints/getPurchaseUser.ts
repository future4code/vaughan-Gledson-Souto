import { Request, Response } from "express";
import { connection } from "../data/connection";



export const getPurchaseUser = async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;
    try{
       const {user_id} = req.params;
       
        if(!user_id) {
            codeError = 422;
            throw new Error("Need user_id in path parameter")
        }

       const purchasesUser =  await connection
       .select("labecommerce_products.name", "labecommerce_products.price",
        "labecommerce_products.img_url", "quantity", "total_price")
       .from(`labecommerce_purchases`)
       .join("labecommerce_users", "user_id", "=", "labecommerce_users.id")
       .join("labecommerce_products", "product_id", "=", "labecommerce_products.id")
       .where({user_id});

        res.status(200).send({purchases: purchasesUser});
    }catch(error){
        if(error instanceof Error){
            res.status(codeError).send({message: error.message});
        }else{
            res.status(500).send({message: "Unexpected error."});
        }
    }
};