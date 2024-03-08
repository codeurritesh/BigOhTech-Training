import { Login } from "../../../datatypes/Login"
import { Contants } from "../../Contants"

export const loginActions=(userData:Login)=>{
    return {
        type:Contants.LOGIN, // make it enum,
        payLoad:userData
    }
}
export const logoutAction=()=>{
    return{
        type:Contants.LOGOUT
    }
}