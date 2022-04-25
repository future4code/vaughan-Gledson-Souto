import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

const expiresIn = "2min"

export const generateToken = (id: authenticationData): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

