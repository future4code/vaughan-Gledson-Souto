import axios from "axios";
import {baseURL} from "./baseURL"

//Exercicio 2
//a) na arrow function o async  vai depois da declaração do nome da function, logo após o async vem 
// vem os paramentros e o nome promisse void


//b) 
const getSubscribers = async(): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };