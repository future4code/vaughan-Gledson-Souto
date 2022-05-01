import { Recipes } from "../entities/Recipes";
import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void> {
        try{
           await BaseDatabase.connection("cookenu_users").insert({
              id: user.getId(),
              name: user.getName(),
              email: user.getEmail(),
              password: user.getPassword()
           });
        }catch(e: any){
            throw new Error(e.message  || e.sqlMessage);
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try{
            const user = await BaseDatabase.connection("cookenu_users")
                .select("*")
                .where({email});
            return user[0] && User.toUserModel(user[0]);
        }catch(e: any){
            throw new Error(e.message || e.sqlMessage);
        }
    }

    public async getUser(): Promise<User> {
        try{
            const user = await BaseDatabase.connection("cookenu_users")
                .select("id", "name", "email");
            return user[0] && User.toUserModel(user[0]);
        }catch(e: any){
            throw new Error(e.message || e.sqlMessage);
        }
    }
    public async getProfile(id: string): Promise<User> {
        try{
            const user = await BaseDatabase.connection("cookenu_users")
                .select("name", "email")
                .where({id});
                
            return user[0] && User.toUserModel(user[0]);
        }catch(e: any){
            throw new Error(e.message || e.sqlMessage);
        }
    }

    public async createRecipes(recipe: Recipes): Promise<void> {
        try{
           await BaseDatabase.connection("cookenu_recipes").insert({
              id: recipe.getId(),
              title: recipe.getTitle(),
              description: recipe.getDescription(),
              date: recipe.getDate(),
              user_id: recipe.getUserId()
           });
        }catch(e: any){
            throw new Error(e.message  || e.sqlMessage);
        }
    }

    public async getRecipe(id: string): Promise<Recipes> {
        try{
            const recipes = await BaseDatabase.connection("cookenu_recipes")
                .select("id", "title", "description", "date")
                .where({id});
            return recipes[0] && Recipes.toRecipesModel(recipes[0]);
        }catch(e: any){
            throw new Error(e.message || e.sqlMessage);
        }
    }
    
}