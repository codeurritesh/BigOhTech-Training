import { PageDetail } from "@/datatypes/PageDetail";
import { Product } from "../../../datatypes/Product";
import { StateRedux } from "../../../datatypes/StateRedux";
import { LocalStorageManagement } from "../../../services/LocalStorageManagement";
import { Contants } from "../../Contants";
import { VisitAction } from "@/datatypes/VisitAction";

type SingleRecord={
    pageDetails:PageDetail,
    products:Product[]
  }
//   type PageDetail = {
//     page: number;
//     limit: number;
// }
const initialState:SingleRecord | null = null
const visitReducer = (state = initialState, action: VisitAction) => {

//   switch (action.type) {
//     case Contants.ADDCART: {
//         if(action.payLoad)
//         localStorageManagement.setItem("likedProducts",action.payLoad)
//         console.log("Product Successfully added to Cart")
//         return state ? [...state, action.payLoad]:[action.payLoad];
//     }
//     default: {
//       return state;
//     }
//   }
  if(action.type==Contants.ADDVISIT){
    console.log("Inside Actionss")
  }else{
    return state
  }
};
export default visitReducer;
export const getVisitedPageDetails = (state:StateRedux) => state?.visitReducer;
