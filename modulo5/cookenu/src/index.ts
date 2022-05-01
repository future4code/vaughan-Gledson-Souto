import { app } from "./app"
import { createRecipes } from "./endpoints/createRecipes";
import { getProfile } from "./endpoints/getProfile";
import { getProfileUser } from "./endpoints/getProfileUser";
import { getRecipe } from "./endpoints/getRecipe";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup"

app.post("/signup", signup);

app.post("/login", login);

app.get("/user", getProfile);

app.get("/user/:id", getProfileUser);

app.post("/recipes", createRecipes);

app.get("/recipes/:id", getRecipe);





