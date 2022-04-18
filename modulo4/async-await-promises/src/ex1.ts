import axios from "axios";
import {baseURL} from "./baseURL"

//Exercicio 1
//a) Utilizo o endpoit get

//b) Promisse<any>

//c) 
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };