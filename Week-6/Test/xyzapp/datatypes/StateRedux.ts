import { Login } from "./Login"
import { PageDetail } from "./PageDetail"
import { Product } from "./Product"
import { SignUp } from "./SignUp"

export type StateRedux={
    LoginReducer:SignUp[],
    RegisterReducer:SignUp[],
    cartReducer:Product[]
    visitReducer:{
        pageDetails:PageDetail,
        products:Product[]
      }[]
}