import express from "express"
import cors from "cors"
import { products } from "./data"
const app = express();

app.use(express.json());
app.use(cors())

//Exercicio 1
app.get("/test", (req, res) => {
    res.status(200).send("Api está funcionando!")
})

//Exercicio 3 && 7
app.post("/products", (req, res) => {
    try {
        const createProducts = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price
        }
        if (req.body.price <= 0) {
            throw new Error("price não pode ser numero negativo!")
        }
        if (typeof req.body.price !== "number") {
            throw new Error("price não pode ser diferente de number")
        }

        if (typeof req.body.name !== "string") {
            throw new Error("name não pode ser diferente de string")
        }

        if (!req.body.id) {
            throw new Error("id não definido!")
        }

        products.push(createProducts)

        res.status(201).send(products)
    } catch (err: any) {
        switch (err.message) {
            case "id não dsefinido!":
                res.status(422).send(err.message)
                break
            case "name não dsefinido!":
                res.status(422).send(err.message)
                break
            case "price não pode ser numero negativo!":
                res.status(422).send(err.message)
                break
            case "price não pode ser diferente de number":
                res.status(422).send(err.message)
                break
            default:
                res.status(500).send("Erro no servidor")
                break
        }
    }
})

//Exercicio 4
app.get("/products", (req, res) => {
    res.status(200).send(products)
})

//Exercicio 5 && 8
app.put("/products/:Id", (req, res) => {
    try {
        const productId = req.params.Id;
        const price = req.body.price;
        let foundProduct: Boolean = false
        
        if (typeof price !== "number") {
            throw new Error("Price não pode ser diferente de numero")
        } 
         if (price <= 0) {
            throw new Error("Price não pode ser negativo")
        }
    
    

        products.forEach(product => {
            if (product.id === productId) {
                product.price = price
                foundProduct = true
            }
        })
        if(!foundProduct){
            throw new Error("Produto não encontrado")
        }
        res.status(200).send(products)
    } catch (err: any) {
        switch (err.message) {
            case "Price não pode ser diferente de numero":
                res.status(422).send(err.message)
                break
            case "Price não pode ser negativo":
                res.status(422).send(err.message)
                break
            case "Produto não encontrado":
                res.status(404).send(err.message)
                break
            default:
                res.status(500).send("Erro no servidor")
                break
        }
    }
})

//Exercicio 6 && 9
app.delete("/products/:id", (req, res) => {
    try{
        const productId = req.params.id
        let foundProduct: boolean = false

        const filterProducts = products.filter(product => {
           if(product.id !== productId){
               return product.id !== productId
           }
            foundProduct = true
        })
    
        if(!foundProduct){
            throw new Error("Produto não encontrado")
        }

        res.status(200).send(filterProducts)
    }catch(err:any){
        switch(err.message){
            case "Produto não encontrado":
                res.status(404).send(err.message)
                break
            default:
                res.status(500).send("Erro no servidor")
        }
    }
})









app.listen(3003, () => {
    console.log("Back-end Rodando! http://localhost:3003")
})