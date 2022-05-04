import { IUserData } from "../model/interfaceUserData";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements IUserData {
    TABLE_NAME = "labook_users";
    signup = async(
        user: User
        ) => {
            try{
                await this.connection
                .insert(user)
                .into(this.TABLE_NAME);
            }catch(e){
                if (e instanceof Error) {
                    throw new Error(e.message)
                } else {
                    throw new Error("Erro do banco!")
                }
            }
    }
}