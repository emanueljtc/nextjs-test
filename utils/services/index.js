// Services
import {DELETE_USER, LIST_USERS} from './endpoints'
import axios from 'axios';

export async function getListUsers() {
  let users;
  try {
    users = await axios.get(LIST_USERS).then((response) => {
    // console.log(response)
      if (response.status !== 200) {
        throw new Error("Algo salio mal con la solicitud");
      }
      return response.data
    });
  } catch (e) {
    console.log("...cargando error");
    throw e;
  }
  return users;
}

export async function deleteUserSelected(id) {
  console.log('id delete', id)
  let users;
  try {
    users = await axios.delete(`${DELETE_USER}${id}`).then((response) => {
    console.log(response)
      if (response.status !== 200) {
        throw new Error("Algo salio mal con la solicitud");
      }
      return response.data
    });
  } catch (e) {
    console.log("...cargando error");
    throw e;
  }
  return users;
}