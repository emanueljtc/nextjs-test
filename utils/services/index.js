// Services
import {LIST_USERS} from './endpoints'

export async function getListUsers() {
  let users;
  try {
    users = await fetch(LIST_USERS).then((response) => {
      if (!response.ok) {
        throw new Error("Algo salio mal con la solicitud");
      }
      return response.json();
    });
  } catch (e) {
    console.log("...cargando error");
    throw e;
  }
  return users;
}