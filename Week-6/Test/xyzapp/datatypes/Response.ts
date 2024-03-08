import { AllProduct } from "./All-products"
export type Response<dType extends AllProduct = AllProduct>={
    limit:number,
    products:dType,
    skip:number,
    total:number
}