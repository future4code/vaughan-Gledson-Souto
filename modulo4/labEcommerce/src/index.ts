import { app } from "./app";
import { createUser } from "./endpoints/createUser";
import { getUsers } from "./endpoints/getUsers";
import { createProduct } from "./endpoints/createProduct";
import { getProducts } from "./endpoints/getProducts";
import { purchaseRecord } from "./endpoints/purchaseRecord";
import { getPurchaseUser } from "./endpoints/getPurchaseUser";


app.post("/users", createUser);

app.get("/users", getUsers);

app.post("/products", createProduct);

app.get("/products", getProducts);

app.post("/purchases", purchaseRecord);

app.get("/users/:user_id/purchases", getPurchaseUser);


