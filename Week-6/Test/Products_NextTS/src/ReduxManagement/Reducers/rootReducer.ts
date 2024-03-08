import { combineReducers } from "redux";
import LoginReducer from "./Auth-Reducers/Auth-Reducers";
import RegisterReducer from "../Reducers/Register-Reducers/Register-Reducers";
import cartReducer from "./Cart-Reducer/Cart-Reducer";
const rootReducers = combineReducers({ LoginReducer, RegisterReducer, cartReducer });
export default rootReducers;
