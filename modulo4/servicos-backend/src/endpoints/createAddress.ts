import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAddressInfo";
import { Address } from "../types";

export default async function GetAddress(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { zipcode, numero, complemento } = req.body

      const address = await getAddressInfo(zipcode)

      const newAddress: Address = {
         id: Date.now().toString(),
         cep: zipcode,
         logradouro: address?.logradouro,
         numero: numero,
         complemento: complemento,
         bairro: address?.bairro,
         cidade: address?.localidade,
         estado: address?.uf,
      }

      await connection("Address").insert(newAddress)

      res.status(201).send({message: "Endereço cadastrado!"})
   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}