import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import connection from "./connection"


const app: Express = express();

app.use(express.json());
app.use(cors());


// Exercicio 01

//a) Quando usamos raw ele outras informações, além da tabela

//b)
const actor = async (name: string) => {
    const result = connection.raw(`
        SELECT * FROM Actor
        WHERE name = ${name}
    `)
    return result;
}


//c) 
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    const count = result[0][0].count;
    return count;
};

// Ecercicio 2
//a) 
const changeSalary = async (id: string, salary: number): Promise<any> => {
    const result = await connection("Actor").update({salary}).where({id})
    return result
}


//b)
const deleteActor = async (id: string): Promise<void> => {
    const result = await connection("Actor").where({id}).delete()
}


//c) 
const averageWage = async (gender: string): Promise<any> => {
    const result = await connection("Actor").avg("salary all this gender").where({gender})
    return result[0].average
}

// Exercicio 3
//a)

app.get("/actor/:id", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
      const id = req.params.id;
      const actor = await connection("Actor").where({id});
  
      res.status(200).send(actor)
    } catch (err: any) {
      res.status(codeError).send({message: err.sqlMessage || err.message });
    }
  });


//b) 
app.get("/actor", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
      const count = await countActors(req.query.gender as string);

      res.status(200).send({quantity: count});
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
  });

// Exercicio 4

//a) 
app.put("/actor", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
      await changeSalary(
        req.body.id, 
        req.body.salary
      );

      res.status(200).send({message: "success"});
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
  });

  
//b) 
app.delete("/actor/:id", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
      await deleteActor(req.params.id);

      res.status(200).send({message: "deleted"});
    } catch (err: any) {
        res.status(codeError).send({message: err.sqlMessage || err.message });
    }
  });









  
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});