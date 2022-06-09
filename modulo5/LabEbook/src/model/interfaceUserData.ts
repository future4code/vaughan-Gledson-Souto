import { User } from "./User";

export interface IUserData {
    insert(user: User): Promise<User>
    findUserByEmail(email: string): Promise<User>
}