import { DELETE_CONECTED_USER, ADD_CONECTED_USER,ADD_TO_CART,REMOVE_FROM_CART} from "../action/AuthAction";

const initState = {
  items: [], // Vous pouvez ajouter d'autres propriétés du panier ici
};

const authReducer = (state = initState, action) => {
  if (action.type === DELETE_CONECTED_USER) {
    return action.payload;
  }
  if (action.type === ADD_CONECTED_USER) {
    return action.payload;
  }
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  if (action.type === REMOVE_FROM_CART) {
    return {
      ...state,
      items: state.items.filter((itemId) => itemId !== action.payload),
    };
  }
  return state;
};

export default authReducer;