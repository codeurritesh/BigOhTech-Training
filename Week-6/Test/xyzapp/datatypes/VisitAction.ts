import { type } from "os"
import { Product } from "./Product"
import { PageDetail } from "./PageDetail"

export type VisitAction={
    type:string,
    payLoad:{
        pageDetails:PageDetail,
        products:Product[]
    }    
}