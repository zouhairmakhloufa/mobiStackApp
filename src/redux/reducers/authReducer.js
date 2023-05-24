import { DELETE_CONECTED_USER, ADD_CONECTED_USER } from "../action/AuthAction";

const initState = {};

const authReducer = (state = initState, action) => {
  if (action.type === DELETE_CONECTED_USER) {
    return action.payload;
  }
  if (action.type === ADD_CONECTED_USER) {
    return action.payload;
  }
  return state;
};

export default authReducer;