import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({

  userData: authReducer,
  
});

export default rootReducer;