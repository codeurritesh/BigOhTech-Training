import { RegisterAction } from "../../../datatypes/RegisterAction";
import { SignUp } from "../../../datatypes/SignUp";
import { StateRedux } from "../../../datatypes/StateRedux";
import { LocalStorageManagement } from "../../../services/LocalStorageManagement";
import { Contants } from "../../../Constants/Actions";
const localStorageManagement = new LocalStorageManagement<SignUp>();

const initialState = localStorageManagement.getItem("registeredUser");
const RegisterReducer = (state = initialState, action: RegisterAction) => {
  switch (action.type) {
    case Contants.REGISTER: {
      console.log(state);
      console.log("Signing up");

      const allRegisteredUsers =
        localStorageManagement.getItem("registeredUser");

      const foundUser = allRegisteredUsers?.find(
        (object: SignUp) =>
          object.email === action.payLoad?.email &&
          object.number === action.payLoad?.number
      );
      if (foundUser) {
        alert("Email/Phone Number Already Used");
        return state;
      }
      if (state !== null) {
        localStorageManagement.setItem("registeredUser", action.payLoad);
        console.log("Already Present");
        alert("User Registered Successfully");
        return [...state, action.payLoad];
      }
      localStorageManagement.setItem("registeredUser", action.payLoad);
      console.log("User Registered Successfully");
      alert("User Registered Successfully");
      return [action.payLoad];
    }
    default: {
      return state;
    }
  }
};
export default RegisterReducer;
export const getRegisterdUsers = (state: StateRedux) => state.RegisterReducer;
