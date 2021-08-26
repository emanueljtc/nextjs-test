import { DELETE_USER, SHOW_USERS } from '../actions/types';

const initialState = {
  users: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
     
      return {
        ...state,
        users: state.users.filter(
          (user, index) => {return user.id !== action.payload}
        ),
      };
    default:
      return { ...state };
  }
};

export default usersReducer;
