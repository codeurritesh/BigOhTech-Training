import { Product } from "../../../datatypes/Product"
import { Contants } from "../../Contants"
import { PageDetail } from "@/datatypes/PageDetail"

export const addPageVisit=(pageData:{
    pageDetails:PageDetail,
    products:Product[]
  })=>{
console.log("action page visit")
console.log(pageData)
    return {
        type:Contants.ADDVISIT,
        payLoad:pageData
    }
}
