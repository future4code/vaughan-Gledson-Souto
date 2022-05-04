import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";



export class UserDatabase extends BaseDatabase {
    createUser = async(
        user: user
    ) => {
        await this.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        })
        .into("User");
    }
    findUserByEmail = async(
        email: string
    ): Promise<user> => {
        try{
            const result = await this.connection("User")
                .select("*")
                .where({ email });
            return {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                role: result[0].role
            }
        }catch(e: any){
            throw new Error(e.message || e.sqlMessage);
        }
    }
    getAllUsers = async() => {
        try{
            const users: any = [];

            const result = await this.connection()
                .select("*")
                .from("User");

				for(let user of result){
					users.push(user);
				}

            return users;
        }catch(e: any){
            throw new Error(e.message || e.sqlMessage);
        }
    }
    deleteUser = async(
        id: string,
    ): Promise<void> => {
        await this.connection()
        .where({ id })
        .from("User")
        .del();
    }
}