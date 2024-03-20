import { SignUp } from "../../../datatypes/SignUp";
import { Contants } from "../../../Constants/Actions";

export const registerActions = (userData: SignUp) => {
  return {
    type: Contants.REGISTER,
    payLoad: userData,
  };
};
