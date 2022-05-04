import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { generateId } from "./services/generateId";
import { createUser, getUserByEmail, getUserById } from "./data/connection";
import { generateToken } from "./services/generateToken";
import { compare, hash } from "./services/HasheManager";
import { getData } from "./services/getData";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


app.post('/user/signup', async(req: Request, res: Response) => {
  try{
      const {email, password, role} = req.body;
  
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
      }
    
      if (!req.body.password || req.body.password.length < 6) {
          throw new Error("Invalid password");
      }

      const hashPassword = await hash(password);
      console.log(hashPassword);
      
      const id = generateId();

    
      await createUser(id, email, hashPassword, role)
  
      const token = generateToken({
          id,
          role
      })
  
      res.status(200).send({ 
          token 
      })
  }catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    });
  }
  });
  
  
  app.post('/user/login', async(req: Request, res: Response) => {
      try{
          const {email, password, role} = req.body;
      
          if (!req.body.email || req.body.email.indexOf("@") === -1) {
              throw new Error("Invalid email");
          }
  
          const user = await getUserByEmail(email);
          
          const compareResult = await compare(
            password,
            user.password
          )
          if (!compareResult) {
              throw new Error("Incorrect password");
          }
  
          const token = generateToken({
              id: user.id,
              role: user.role
          })
      
          res.status(200).send({ 
              token 
          })
      }catch (error) {
          res.status(400).send({
            message: error.message || error.sqlMessage
          });
        }
  });


  app.get('/user/profile', async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string;
        
        const authenticationData = getData(token);

        if(authenticationData.role !== "normal"){
          throw new Error("Only a normal user can access this funcionality")
        }
        const user = await getUserById(authenticationData.id);
        
        res.status(200).send({ 
            id: user.id,
            email: user.email
        });

    }catch (error) {
        res.status(400).send({
          message: error.message  || error.sqlMessage
        });
      }
});
