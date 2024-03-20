import { Product } from "../../../datatypes/Product";
import { Contants } from "../../../Constants/Actions";

export const addToCart = (product: Product) => {
  console.log("action runnign");
  return {
    type: Contants.ADDCART,
    payLoad: product,
  };
};
export const removeFromCart = (product: Product) => {
  return {
    type: Contants.REMOVECART,
    payLoad: product,
  };
};
