import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types";



export const createProduct = async(req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;
    try{
        const {name, price, img_url} = req.body;

        if(!name || !price || !img_url){
            codeError = 422
            throw new Error("Parameters need to be filled!");
        };

        const newProduct: Product = {
            id: Date.now().toString(),
            name,
            price,
            img_url
        };

        await connection(`labecommerce_products`).insert(newProduct);

        res.status(201).send({message: "Registered product!"});
    }catch(error){
        if(error instanceof Error){
            res.status(codeError).send({message: error.message});
        }else{
            res.status(500).send({message: "Unexpected error."});
        }
    }
};