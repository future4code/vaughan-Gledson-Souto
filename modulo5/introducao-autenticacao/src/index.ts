import app from "./app"
import { generateId } from "./services/generateId"
import { Request, Response } from "express"
import { createUser, getUserByEmail, getUserById } from "./data/connection";
import { generateToken } from "./services/generateToken";
import { getData } from "./services/getData";

app.post('/user/signup', async(req: Request, res: Response) => {
try{
    const {email, password} = req.body;

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
    }
  
    if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
    }

    const id = generateId();

    await createUser(id, email, password)

    const token = generateToken({
        id,
    })

    res.status(200).send({ 
        token 
    })
}catch (err: any) {
    res.status(400).send({
      message: err.message  || err.sqlMessage
    });
  }
});


app.post('/user/login', async(req: Request, res: Response) => {
    try{
        const {email, password} = req.body;
    
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        const user = await getUserByEmail(email);
        
        if (user.password !== password) {
            throw new Error("Invalid password");
        }

        const token = generateToken({
            id: user.id,
        })
    
        res.status(200).send({ 
            token 
        })
    }catch (err: any) {
        res.status(400).send({
          message: err.message  || err.sqlMessage
        });
      }
});

app.get('/user/profile', async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string;
        
        const authenticationData = getData(token);

        const user = await getUserById(authenticationData.id);
        
        res.status(200).send({ 
            id: user.id,
            email: user.email
        });

    }catch (err: any) {
        res.status(400).send({
          message: err.message  || err.sqlMessage
        });
      }
});

