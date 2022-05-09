import { IUserData } from "../model/interfaceUserData";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { loginInputDTO } from "../types/loginInputDTO";
import { signupInputDTO } from "../types/signupInputDTO";


export class UserBusiness {
    private userData: IUserData;
    private authenticator: Authenticator;
    private hashManager: HashManager;
    private idGenerator: IdGenerator;

    constructor(
        userDataRepository: IUserData
    ){
        this.userData = userDataRepository;
        this.authenticator = new Authenticator;
        this.hashManager = new HashManager;
        this.idGenerator = new IdGenerator;
    }
    signup = async(input: signupInputDTO) => {
        const {name, email, password} = input;

        if(!name || !email || !password){
            throw new Error('Preencha os campos "name", "email" e "password".');
        }
        if(email.indexOf('@') === -1){
            throw new Error('Email invalido.');
        }
        if(password.length < 6){
            throw new Error('A senha deve conter, no mínimo, 6 caracteres.');
        }

        const registeredUser = await this.userData.findUserByEmail(email);
        if(registeredUser){
            throw new Error('Email já cadastrado.');
        }

        const id = this.idGenerator.generateId();

        const hashedPassword = await this.hashManager.hash(password);

        const user = new User(
            id,
            name,
            email,
            hashedPassword
        );
        
        await this.userData.insert(user);

        const token = this.authenticator.generateToken({id});
        
        return token;
    }
    login = async(input: loginInputDTO) => {
        const {email, password} = input;

        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user = await this.userData.findUserByEmail(email);
        if(!user){
            throw new Error('Email não encontrado.');
        }
        const passwordIsCorrect: boolean = await this.hashManager.compare(password, user.password);
        
        if (!passwordIsCorrect) {
            throw new Error("Senha incorreta.");
        }

        const token = this.authenticator.generateToken({
            id: user.id,
        });

        return token;
    }
}