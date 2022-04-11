import axios from "axios";
import {baseURL} from "./baseURL"

//Exercicio 3
//a) Acredito que não, mas depende que como vem os dados da requisição

//b) fazemos pra deixar as coisas mais amarradas 

//c)
  type user = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async(): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any)=>{
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    });
};
