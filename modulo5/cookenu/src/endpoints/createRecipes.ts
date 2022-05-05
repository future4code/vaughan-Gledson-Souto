import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Recipes } from "../entities/Recipes";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export const createRecipes = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, user_id } = req.body;

        if (!title || !description || !user_id) {
            res.statusCode = 422;
            throw new Error("Preencha os campos 'title', 'description' e 'user_id'.");
        }

        const userDatabase = new UserDatabase();

      
        let date = new Date();
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();
        const actualDate = year + '-' + month + '-' + day;
        
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const newRecipe = new Recipes(id, title, description, actualDate, user_id);
        await userDatabase.createRecipes(newRecipe)

        const authenticator = new Authenticator();
        const token = authenticator.generate({ id })

        res.status(201).send({
            message: "Receita criada com sucesso!",
            token: token
        });

    } catch (e: any) {
        if (res.statusCode === 200) {
            res.status(500).send("Erro interno");
        } else {
            res.status(400).send({ message: e.message || e.sqlMessage });
        }
    }
}