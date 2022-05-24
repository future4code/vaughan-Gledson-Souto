import { CustomError } from "../errors/CustomError";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  tableName = ""
  private toModel(dbModel?: any): User | undefined {
    return (
       dbModel &&
       new User(
          dbModel.id,
          dbModel.name,
          dbModel.email,
          dbModel.password,
          dbModel.role
       )
    );
 }
 
  public async getUserById(id: string): Promise<User | undefined> {
    try {
       const result = await BaseDatabase.connection.raw(`
          SELECT * from ${this.tableName} WHERE id = '${id}'
       `);
       return this.toModel(result[0][0]);
    } catch (error:any) {
       throw new Error(error.sqlMessage || error.message)
    }
 }
} 