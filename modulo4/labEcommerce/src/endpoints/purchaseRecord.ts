import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Purchase, Users } from "../types";



export const purchaseRecord = async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;
    try{
        const {user_id, product_id , quantity} = req.body;

        if(!user_id || !product_id){
            codeError = 422;
            throw new Error("Parameters need to be filled!");
        };
        if(quantity <= 0){
            codeError = 422;
            throw new Error("quantity needs to be different from 0");
        };

        let id = product_id;

        const total_price = await connection.select("price").from(`labecommerce_products`).where({id});

        const mapTotalPrice = total_price.map(price => price.price);
       
        const record: Purchase = {
            id: Date.now().toString(),
            user_id,
            product_id,
            quantity,
            total_price: mapTotalPrice[0] * quantity
        };

        await connection(`labecommerce_purchases`).insert(record);

        res.status(201).send({message: "Purchase made!"});
    }catch(error){
        if(error instanceof Error){
            res.status(codeError).send({message: error.message});
        }else{
            res.status(500).send({message: "Unexpected error."});
        }
    }
};