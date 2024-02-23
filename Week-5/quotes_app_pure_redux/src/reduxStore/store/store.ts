import { applyMiddleware, createStore } from "redux"; 
import rootReduces from "../reducers";

const store=createStore(rootReduces);

export default store;