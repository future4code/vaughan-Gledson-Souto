import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

const expiresIn = "2min"

export const generateToken = (input: authenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
      role: input.role
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

