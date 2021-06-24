import { combineReducers } from "redux";
import homesReducer from "./homesReducer";
import signUpReducer from "./signUpReducer";

const rootReducer = combineReducers({
	homesReducer,
	signUpReducer,
});

export default rootReducer;
