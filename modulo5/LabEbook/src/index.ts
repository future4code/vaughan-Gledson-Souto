import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import { UserDatabase } from "./data/UserDatabase";

const userBusiness = new UserBusiness(
    new UserDatabase()
);

app.post("/user/signup", userBusiness.signup);