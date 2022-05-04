import { User } from "./User";

export interface IUserData {
    signup(user: User): void
}