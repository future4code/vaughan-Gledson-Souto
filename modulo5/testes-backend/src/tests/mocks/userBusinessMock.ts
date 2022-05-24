import { User } from "../../model/User"
import { userMock, userMock2 } from "./userMock"

export class UserBusinessMock {
    public async getUserById(id: string): Promise<User | undefined> {
        if (id === 'id_mockado') {
            return userMock
        } else if (id === 'id_mockado2') {
            return userMock2
        } else {
            undefined
        }
    }
}