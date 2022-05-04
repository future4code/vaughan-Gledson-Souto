import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { user, USER_ROLES } from "../types/user";

const userDB = new UserDatabase();
const authenticator = new Authenticator();
const hashManager = new HashManager();
const idGenerator = new IdGenerator();

export class UserBusiness {
    signup = async (name: string, email: string, password: string, role: USER_ROLES) => {

        if (!name || !email || !password || !role) {
            throw new Error('Preencha os campos "name", "email", "password" e "role"')
        }

        const id: string = idGenerator.generateId()

        const cypherPassword = await hashManager.hash(password);

        await userDB.createUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })

        const token: string = authenticator.generateToken({
            id,
            role
        })
        return token;
    }

    login = async (email: string, password: string) => {

        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user: user = await userDB.findUserByEmail(email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        })
        return token;
    }

    getAllUsers = async (token: string): Promise<user> => {
        authenticator.getTokenData(token);

        return await userDB.getAllUsers();
    }

    deleteUser = async (input: {id: string, token: string}) => {
        const verifyToken = await authenticator.getTokenData(input.token);

        if(verifyToken.role !== "ADMIN"){
            throw new Error("Apenas ADMIN tem permissão para deletar um usuário");
        }
        return await userDB.deleteUser(input.id)
    }
}