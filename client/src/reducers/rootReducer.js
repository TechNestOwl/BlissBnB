import { combineReducers } from "redux";
import homesReducer from "./homesReducer";
import signUpReducer from "./signUpReducer";
import signInReducer from "./signInReducer";

const rootReducer = combineReducers({

  homesReducer,
  signUpReducer,
  signInReducer,



});

export default rootReducer;
