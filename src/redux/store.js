import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
const composedEnhancer = composeWithDevTools();
const store = legacy_createStore(rootReducer, composedEnhancer);
export default store;
