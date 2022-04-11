import axios from "axios";
import {baseURL} from "./baseURL";

// Exercicio 5
type user = {
	id: string;
	name: string;
	email: string;
}

const sendNotifications = async (users: user[], message: string): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("Notificações enviadas");
      } catch {
          console.log("Erro ao notificar os assinantes");
      }
  };

