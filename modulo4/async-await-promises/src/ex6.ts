import axios from "axios";
import {baseURL} from "./baseURL"


//Exercicio 6
//a) ele otimiza todo esse processo de passar por cada elementos

//b) Deixar o codigo mais rapido

//c)
const notifyAllSubscribers = async (ids: string[]): Promise<void> => {
    try{
        const requests = ids.map(id => axios
            .post(`${baseURL}/notifications`, {
                subscribersId: id,
                message: "Confira as suas ultimas noticias!"
            }))
        await Promise.all(requests)
        console.log("Notificações enviadas")
    }catch(err){
        console.log("Erro ao notificar os assinantes")
    }
}