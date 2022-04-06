import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { users, TypeUsers, USERTYPE } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());


//Exercicio 1
//a) Utilizo o método http "get"
//b) A entidade coloco o que se espera receber com esta requisição
app.get("/users", (req: Request, res: Response) => {
   let codeError: number = 400
   try {
      if (!users) {
         codeError = 404
         throw new Error("Lista não encontrada")
      }
      res.status(200).send(users)
   } catch (error: any) {
      if(res.status(codeError).send({ message: error.message })){
         res.status(codeError).send({ message: error.message })
      }else{
         res.status(500).send("Erro no servidor!")
      }
   }
})

//Exercicio 2
//a) passei como path parameters, como estou usando um método get, seria inviavel passar por body, minha outra opção seria as
//query parameters
//b) Com um condicional para verificar se o type passado é o mesmo que está dentro do array de users
app.get("/users/:type", (req: Request, res: Response) => {
   let codeError: number = 400
   try {
      const type: string = req.params.type;

      if (type !== USERTYPE.ADMIN.toLowerCase() && type !== USERTYPE.NORMAL.toLowerCase()) {
         throw new Error("parametro está incorreto")
      }
      const filterUser = users.filter(user => {
         return user.type.toLowerCase().includes(type.toLowerCase())
      })

      res.status(200).send(filterUser)
   } catch (error: any) {
      if(res.status(codeError).send({ message: error.message })){
         res.status(codeError).send({ message: error.message })
      }else{
         res.status(500).send("Erro no servidor!")
      }
   }
})

//Exercicio 3
//a) uma busca pelo parametro, como na questão anteria, utilizei agora o query parameters, mudei a entidade desta requisição
//pois estava dando conflito com a primeira
//b) 
app.get("/user-name", (req: Request, res: Response) => {
   let codeError: number = 400
   try {
      const name: string = req.query.name as string;
      const user: TypeUsers | undefined = users.find((user) => user.name === name)
      if (!user) {
         codeError = 404
         throw new Error("Não encontrado")
      }
      res.status(200).send(user)
   } catch (error: any) {
      if(res.status(codeError).send({ message: error.message })){
         res.status(codeError).send({ message: error.message })
      }else{
         res.status(500).send("Erro no servidor!")
      }
   }
})

//Exercicio 4
//a) Funcionou da mesma forma
//b) Não pois o metodo put é para fazer alterações
app.put("/users", (req: Request, res: Response) => {
   let codeError: number = 400
   try {
      const {id, name, email, type, age} = req.body
      const newUser: TypeUsers = {id, name, email, type, age}

      if(typeof id !== "number"){
         codeError = 422
         throw new Error("Parametro Id precisa ser um number")

      }else if(typeof name !== "string"){
         codeError = 422
         throw new Error("Parametro Name precisa ser uma string")

      }else if(typeof email !== "string"){
         codeError = 422
         throw new Error("Parametro Email precisa ser uma string")

      }else if(typeof type !== "string"){
         codeError = 422
         throw new Error("Parametro Type precisa ser uma string")

      }else if(typeof age !== "number"){
         codeError = 422
         throw new Error("Parametro Age precisa ser um number")
      }


      users.push(newUser)
      res.status(201).send(users)

   } catch (error: any) {
      if(res.status(codeError).send({ message: error.message })){
         res.status(codeError).send({ message: error.message })
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