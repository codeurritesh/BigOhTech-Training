import { CartAction } from "../../../datatypes/CartActions";
import { Product } from "../../../datatypes/Product";
import { StateRedux } from "../../../datatypes/StateRedux";
import { LocalStorageManagement } from "../../../services/LocalStorageManagement";
import { Contants } from "../../../Constants/Actions";

const localStorageManagement = new LocalStorageManagement<Product>();

const initialState = localStorageManagement.getItem("likedProducts");
const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case Contants.ADDCART: {
      if (action.payLoad)
        localStorageManagement.setItem("likedProducts", action.payLoad);
      console.log("Product Successfully added to Cart");
      return state ? [...state, action.payLoad] : [action.payLoad];
    }
    case Contants.REMOVECART: {
      if (action.payLoad)
        localStorageManagement.removeValue("likedProducts", action.payLoad);
      const afterRemovalProducts =
        state?.filter((product) => product.id !== action.payLoad?.id) ?? [];
      console.log("Product Successfully removed from Cart");
      console.log(afterRemovalProducts);
      return afterRemovalProducts;
    }
    default: {
      return state;
    }
  }
};
export default cartReducer;
export const getLikedProducts = (state: StateRedux) => state?.cartReducer;
