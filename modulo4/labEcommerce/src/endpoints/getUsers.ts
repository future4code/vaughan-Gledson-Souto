import { Request, Response } from "express";
import { connection } from "../data/connection";



export const getUsers = async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;
    try{
        const users =  await connection(`labecommerce_users`);
        
         const purchases =  []
        
        for(let user of users) {
            const purchasesInfo = await connection("").select("labecommerce_products.name", "labecommerce_products.price",
            "labecommerce_products.img_url", "quantity", "total_price")
           .from(`labecommerce_purchases`)
           .join("labecommerce_users", "user_id", "=", "labecommerce_users.id")
           .join("labecommerce_products", "product_id", "=", "labecommerce_products.id")
           .where({user_id: user.id});

           purchases.push({
               ...user,
               purchasesInfo
           })
        }
    
        res.status(200).send({users: purchases});
    }catch(error){
        if(error instanceof Error){
            res.status(codeError).send({message: error.message});
        }else{
            res.status(500).send({message: "Unexpected error."});
        }
    }
};