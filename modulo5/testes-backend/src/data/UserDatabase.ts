import { CustomError } from "../errors/CustomError";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async getUserById(id: string) {
        const user = await this.userDatabase.getUserById(id);
    
        if (!user) {
          throw new CustomError(404, "User not found");
        }
    
        return {
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          role: user.getRole(),
        };
    }
} 