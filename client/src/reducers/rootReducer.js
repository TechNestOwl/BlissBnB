import { combineReducers } from "redux";
import homesReducer from "./homesReducer";

const rootReducer = combineReducers({
	homesReducer,
});

export default rootReducer;
