import { LocalStorageManagement } from "../../../services/LocalStorageManagement";
import { AuthAction } from "../../../datatypes/AuthAction";
import { SignUp } from "../../../datatypes/SignUp";
import { StateRedux } from "../../../datatypes/StateRedux";
import { Contants } from "../../Contants";

const localStorageManagement = new LocalStorageManagement<SignUp>();

const initialState = localStorageManagement.getItem("loggedInUser");

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case Contants.LOGIN: {
        
      const allRegisteredUsers =
        localStorageManagement.getItem("registeredUser");

      const foundUser = allRegisteredUsers?.find(
        (object: SignUp) =>
          object.email === action.payLoad?.email &&
          object.confirmPassword === action.payLoad?.password
      );

      if (foundUser) {
        localStorageManagement.setItem("loggedInUser", foundUser);
        console.log("Login Successfully");
        return state ? [...state, foundUser] : [foundUser];
      }

      console.log("Please Register");
      alert("Porfile Not Found | Incorrect Password")
      return state;
    }
  case Contants.LOGOUT:{
    localStorage.removeItem("loggedInUser");
    return null;
  }
    default: {
      return state;
    }
  }
};
export default authReducer;
export const getLoggedInUser = (state:StateRedux) => state.LoginReducer;
