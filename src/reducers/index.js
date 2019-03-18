import {combineReducers} from "redux";
import isLoadingReducer from "./isLoadingReducer";
import ThemeReducer from "./ThemeReducer";
import LinkReducer from "./LinkReducer";

export default combineReducers({
	isLoadingReducer,
	ThemeReducer,
	LinkReducer,
})
