import { Login } from "../../../datatypes/Login";
import { Contants } from "../../../Constants/Actions";

export const loginActions = (userData: Login) => {
  return {
    type: Contants.LOGIN,
    payLoad: userData,
  };
};
export const logoutAction = () => {
  return {
    type: Contants.LOGOUT,
  };
};
