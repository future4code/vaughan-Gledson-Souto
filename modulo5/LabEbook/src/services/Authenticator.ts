import * as jwt from "jsonwebtoken";

type authenticationData = {
    id: string
}

export class Authenticator {
   static generateToken = (
      payload: authenticationData
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: "24min"
         }
      )
   }

   static getTokenData = (
      token: string
   ): authenticationData => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as authenticationData
   }
}