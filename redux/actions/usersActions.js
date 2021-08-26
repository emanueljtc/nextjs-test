import { SHOW_USERS, DELETE_USER } from './types';
import { getListUsers, deleteUserSelected } from '../../utils/services';
export const showUsers = () => async (dispatch) => {
  let res;
  try {
    res = await getListUsers();
    console.log('Respuesta en la accion show users', res)
    dispatch({
      type: SHOW_USERS,
      payload: res,
    });
  } catch (error) {
    console.error('Ocurrio algun error mostrando los usuarios', error);
  }
};

export const deleteUser = (id, setShowModal) => async dispatch => {
  let res;
  try {
    res = await deleteUserSelected(id);
    console.log('Respuesta en la accion delete user', res)
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
    setShowModal(false)
  } catch (error) {
    console.error('Ocurrio algun error eliminando usuario', error);
  }
}
