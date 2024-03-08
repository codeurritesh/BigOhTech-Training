import { AllProduct } from "./All-products"

export type ContextType={
    allProduct:AllProduct;
    setAllProducts:React.Dispatch<React.SetStateAction<AllProduct>>
}