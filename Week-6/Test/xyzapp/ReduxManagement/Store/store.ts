import { createStore } from "redux";
import rootReducers from "../Reducers/rootReducer";
const store=createStore(rootReducers);
export default store;