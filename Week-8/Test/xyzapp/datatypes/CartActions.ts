import { Product } from "./Product"

export type CartAction={
    type: string,
    payLoad?: Product
}