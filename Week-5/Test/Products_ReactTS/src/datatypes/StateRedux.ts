import { Login } from "./Login"
import { Product } from "./Product"
import { SignUp } from "./SignUp"

export type StateRedux={
    LoginReducer:SignUp[],
    RegisterReducer:SignUp[],
    cartReducer:Product[]
}