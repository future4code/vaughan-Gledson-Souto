import express, {Express, Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { usuarios, TypeUsuarios, TypeExtrato } from "./data";

const app: Express = express();
app.use(express.json());
app.use(cors());

let data = new Date();
let dia = String(data.getDate()).padStart(2, '0');
let mes = String(data.getMonth() + 1).padStart(2, '0');
let ano = data.getFullYear();
let dataAtual = dia + '/' + mes + '/' + ano;

app.get("/usuarios", (req: Request, res: Response)=>{
    let erroCode: number = 400
    try{
        res.status(200).send(usuarios)
    }catch(error: any){
        if(res.status(erroCode).send({message: error.message})){
            res.status(erroCode).send({message: error.message})
        }else{
            res.status(500).send("Erro no servidor!")
        }
    }
})

app.get("/usuarios/pesquisa", (req: Request, res: Response)=>{
    let erroCode: number = 400
    try{
        const {nome, cpf} = req.query
        if(!nome){
            erroCode = 422
            throw new Error("Necessita de um query parameters nome!")
        }
        if(!cpf){
            erroCode = 422
            throw new Error("Necessita de um query parameters cpf!")
        }

        const filtrarUsuario: TypeUsuarios[] = usuarios.filter(usuario =>{
            if(usuario.nome === nome && usuario.cpf === Number(cpf)){
               return res.status(200).send(`Saldo: ${usuario.saldo},00`)
            }
        })
      
        res.status(200).send(filtrarUsuario === []?  "": 
        res.status(404).send({message: "Usuário não encontrado"}))

    }catch(error: any){
        if(res.status(erroCode).send({message: error.message})){
            res.status(erroCode).send({message: error.message})
        }else{
            res.status(500).send("Erro no servidor!")
        }
    }
})

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
        for(let i = 0; i < usuarios.length; i++){
            if(usuarios[i].cpf === req.body.cpf){
                erroCode = 422
                throw new Error("CPF não pode ser igual a um já existente")
            }
        }
        if(typeof dataNascimento !== "string"){
            erroCode = 422
            throw new Error("Propriedade Data de nascimento não pode ser diferente de string")
        }
        if(ano - Number(novaDataNascimento[2]) < 18){
            erroCode = 422
            throw new Error("É necessário ter no mínimo 18 anos")
        }
        if(typeof saldo !== "number"){
            erroCode = 422
            throw new Error("Propriedade saldo não pode ser diferente de number")
        }else if(saldo > 0 || saldo < 0){
            erroCode = 422
            throw new Error("Estado inicial do saldo precisa ser 0")
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


app.post("/usuarios/pagamento", (req: Request, res: Response)=>{
    let erroCode: number = 400
    try{
        const {cpf ,valor, data, descricao} = req.body
        const filtrar = usuarios.find(usuario => usuario.cpf === cpf)
        const novoExtrato: TypeExtrato = {
            valor, data, descricao
        }
        const novaData = data.split('/')

        if(!data){
            req.body.data = dataAtual
        }
        if(Number(novaData[0]) < Number(dia) || Number(novaData[1]) < Number(mes) || Number(novaData[2]) < Number(ano)){
            erroCode = 422
            throw new Error("O pagamento não pode ser agendado para uma data anterior da atual")
        }

        for(let i = 0; i < usuarios.length; i++){
            if(usuarios[i].cpf === cpf){
               usuarios[i].extrato.push(novoExtrato)
               if(valor > usuarios[i].saldo){
                   erroCode = 422
                   throw new Error("O valor da conta é maior que seu saldo")
               }
            }
            
        }
        res.status(200).send(filtrar)
    }catch(error: any){
        if(res.status(erroCode).send({message: error.message})){
            res.status(erroCode).send({message: error.message})
        }else{
            res.status(500).send("Erro no servidor!")
        }
    }
})

app.post("/usuarios/transferencia", (req: Request, res: Response)=>{
    let erroCode: number = 400
    try{
        const {nome, cpf, cpfDestino, nomeDestino, saldo} = req.body
        const usuario = usuarios.find(usuario => usuario.nome === nomeDestino && usuario.cpf === cpfDestino)
        
        if(!nome || !cpf){
            erroCode = 422
            throw new Error("Necessita dos parametros nome e cpf")
        }
        if(!nomeDestino || !cpfDestino){
            erroCode = 422
            throw new Error("Necessita dos parametros nome e cpf do destinatario")
        }

        for(let i = 0; i < usuarios.length; i++){
            if(usuarios[i].nome === nomeDestino && usuarios[i].cpf === cpfDestino){
                usuarios[i].saldo = saldo
            }
            if(usuarios[i].nome === nome && usuarios[i].cpf === cpf){
                if(saldo > usuarios[i].saldo){
                    erroCode = 422
                    throw new Error("Sua conta não possui valor suficiente para o valor desta tranferência!")
                }
            }
            
        }
       
        res.status(200).send(usuario)
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
            return usuario.nome === nome && usuario.cpf === cpf
        })

        const novoSaldo = filtrarUsuario.map(usuario => {
            return {
                ...usuario, 
                saldo: usuario.saldo + saldo}
        })
   
        
    res.status(200).send(novoSaldo)
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