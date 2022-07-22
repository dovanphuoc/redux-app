import { combineReducers } from "redux";
import { addPostReducer } from "./addPostReducer";
import { postReducer } from "./postReducer";

const rootReducer = combineReducers({
	allPosts: postReducer,
	addNewPost: addPostReducer,
});
export default rootReducer;
