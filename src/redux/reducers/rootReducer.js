import authReducer from "./authReducer";
import { combineReducers } from "redux";
// import cartReducer from '../cartRedux';

const rootReducer = combineReducers({

  userData: authReducer,
  // cart: cartReducer,
  
});

export default rootReducer;