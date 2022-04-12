import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getUserName } from "./endpoints/getUserName";
import { getUserType } from "./endpoints/getUserType";
import { getUserOrderBy } from "./endpoints/getUserOrderBy";
import { getUserLimit } from "./endpoints/getUserLimit";
import { getUsersOrdenation } from "./endpoints/getUsersOrdenation";



app.get("/recipes", getAllRecipes)

app.get("/user", getUserName)

app.get("/user/:type", getUserType)

app.get("/users", getUserOrderBy)

app.get("/user-limit", getUserLimit)

app.get("/users-ordenation", getUsersOrdenation)








