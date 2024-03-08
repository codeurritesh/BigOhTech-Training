import { SignUp } from "../../../datatypes/SignUp"
import { Contants } from "../../Contants"

export const registerActions=(userData:SignUp)=>{
    return {
        type:Contants.REGISTER,
        payLoad:userData
    }
}