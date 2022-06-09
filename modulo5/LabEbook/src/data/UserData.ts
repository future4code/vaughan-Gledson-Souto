import { IUserData } from "../model/interfaceUserData";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export default class UserData extends BaseDatabase implements IUserData {
    TABLE_NAME = "labook_users";
    insert = async(
        user: User
        ): Promise<User> => {
            try{
                await this
                .connection(this.TABLE_NAME)
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password
                });
                return user;
            }catch(e){
                if (e instanceof Error) {
                    throw new Error(e.message)
                } else {
                    throw new Error("Erro do banco!")
                }
            }
    }
    findUserByEmail = async(
        email: string
        ): Promise<User> => {
            try{
                const result = await this.connection(this.TABLE_NAME)
                    .select("*")
                    .where({email});
                return result[0];
            }catch(e){
                if (e instanceof Error) {
                    throw new Error(e.message)
                } else {
                    throw new Error("Erro do banco!")
                }
            }
    }

}