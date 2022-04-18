import axios from "axios";
import { TypeAddress } from "../types";

const BASE_URL = "https://viacep.com.br/ws";

export const getAddressInfo = async (zipcode: string): Promise<TypeAddress | null> => {
    try {
        const response = await axios.get(`${BASE_URL}/${zipcode}/json/`)

        const address: TypeAddress = {
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            localidade: response.data.localidade,
            uf: response.data.uf,
        }

        return address
    } catch (err) {
        return null
    }
}