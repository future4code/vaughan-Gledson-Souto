import { UserDatabase } from "../data/UserDatabase";
import { IUserData } from "../model/interfaceUserData";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { signupInputDTO } from "../types/signupInputDTO";



export class UserBusiness {
    private userDB: IUserData;
    private authenticator: Authenticator;
    private hashManager: HashManager;
    private idGenerator: IdGenerator;

    constructor(
        private userDataRepository: IUserData
    ){
        this.userDB = userDataRepository;
        this.authenticator = new Authenticator;
        this.hashManager = new HashManager;
        this.idGenerator = new IdGenerator;
    }
    signup = async(
        input: signupInputDTO
    ) => {
        const {name, email, password} = input;

        if(!name || !email || !password){
            throw new Error('Preencha os campos "name", "email" e "password".')
        }
        if(email.indexOf('@') === -1){
            throw new Error('Email invalido.')
        }
        if(password.length > 6){
            throw new Error('Senha invalida.')
        }
        const id = this.idGenerator.generateId();

        const hashedPassword = await this.hashManager.hash(password);

        const user = new User(
            id,
            name,
            email,
            hashedPassword
        );
        
        await this.userDB.signup(user);

        const token = this.authenticator.generateToken({id});

        return token;
    }
}