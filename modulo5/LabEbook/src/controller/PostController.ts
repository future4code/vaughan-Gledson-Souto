import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { postInputDTO } from "../types/postInputDTO";


export default class PostController {
    constructor(
        private postBusiness: PostBusiness
    ){
    }
    postCreator = async(
        req: Request,
        res: Response
    ) => {
        const {photo, description, type_post} = req.body;
        const input: postInputDTO = {
            photo,
            description,
            type_post,
        }
        try{
            await this.postBusiness.postCreator(input);

            res.status(201).send({
                message: "Post criado com sucesso!",
            });
        }catch(e){
            if (e instanceof Error) {
                res.send({message: e.message});
            } else {
                throw new Error("Erro do banco!")
            }
        }
    }
    findPost = async(req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const result = await this.postBusiness.findPost(id);
            res.status(200).send({
                result
            });

        }catch(e) {
            if (e instanceof Error) {
                res.send({message: e.message});
            } else {
                throw new Error("Erro do banco!")
            }
        }
    }
    
}