import express, {Express, Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { usuarios, TypeUsuarios, TypeExtrato } from "./data";

const app: Express = express();
app.use(express.json());
app.use(cors());

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()






app.post("/cadastro", (req: Request, res: Response)=>{
    let erroCode: number = 400
    try{
        const {nome, cpf, dataNascimento, saldo, extrato} = req.body
        const novoUsuario: TypeUsuarios = {
            nome, cpf, dataNascimento, saldo, extrato}

        const novaDataNascimento: string[] = dataNascimento.split('/')

        if(typeof nome !== "string"){
            erroCode = 422
            throw new Error("Propriedade nome não pode ser diferente de string")
        }
        if(typeof cpf !== "number"){
            erroCode = 422
            throw new Error("Propriedade cpf não pode ser diferente de number e menor que 11 digítos")
        }
        if(typeof dataNascimento !== "string"){
            erroCode = 422
            throw new Error("Propriedade Data de nascimento não pode ser diferente de string")
        }
        if(anoAtual - Number(novaDataNascimento[2]) < 18){
            erroCode = 422
            throw new Error("É necessário ter no mínimo 18 anos")
        }
        if(typeof saldo !== "number"){
            erroCode = 422
            throw new Error("Propriedade saldo não pode ser diferente de number")
        }
        if(typeof extrato[0].valor !== "number"){
            erroCode = 422
            throw new Error("Propriedade valor do array de extratos não pode ser diferente de number")
        }
        if(typeof extrato[0].data !== "string"){
            erroCode = 422
            throw new Error("Propriedade data do array de extratos não pode ser diferente de string")
        }
        if(typeof extrato[0].descricao !== "string"){
            erroCode = 422
            throw new Error("Propriedade descricao do array de extratos não pode ser diferente de string")
        }
        console.log()
        usuarios.push(novoUsuario)
        res.status(200).send(usuarios)
    }catch(error: any){
        if(res.status(erroCode).send({message: error.message})){
            res.status(erroCode).send({message: error.message})
        }else{
            res.status(500).send("Erro no servidor!")
        }
    }
})

app.post("/usuarios", (req: Request, res: Response)=>{
    let erroCode: number = 400
    try{
        const {nome, cpf} = req.body
        
        const filtrarUsuario = usuarios.filter(usuario =>{
            return usuario.nome || usuario.cpf === nome || cpf
        })

        res.status(200).send(filtrarUsuario)
    }catch(error: any){
        if(res.status(erroCode).send({message: error.message})){
            res.status(erroCode).send({message: error.message})
        }else{
            res.status(500).send("Erro no servidor!")
        }
    }
})


app.put("/usuarios", (req: Request, res: Response)=>{
    let erroCode: number = 400
    try{
        const {nome, cpf, saldo} = req.body
        
        const filtrarUsuario = usuarios.filter(usuario =>{
            return usuario.nome || usuario.cpf === nome || cpf
        })

        res.status(200).send(filtrarUsuario)
    }catch(error: any){
        if(res.status(erroCode).send({message: error.message})){
            res.status(erroCode).send({message: error.message})
        }else{
            res.status(500).send("Erro no servidor!")
        }
    }
})






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});