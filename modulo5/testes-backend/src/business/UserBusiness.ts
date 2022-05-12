import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole } from "../model/User";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {

   constructor(
      private userDatabase: UserDatabase,
      private idGenerator: IdGenerator,
      private tokenGenerator: TokenGenerator,
      private hashGenerator: HashGenerator
   ) { }

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