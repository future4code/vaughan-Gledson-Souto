import axios from "axios";
import {baseURL} from "./baseURL"

// Exercicio 1
// a) Arrow function, gosto mais de essa por ser mais simples

// b)
const createNews = async(title: string, content: string, date: number): Promise<void> => {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }