import TodoReducer from "./todorducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
	TodoReducer,
});
export default RootReducer;
