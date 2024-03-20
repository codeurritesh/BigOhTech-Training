import { PageDetail } from "@/datatypes/PageDetail";
import { Product } from "../../../datatypes/Product";
import { StateRedux } from "../../../datatypes/StateRedux";
import { LocalStorageManagement } from "../../../services/LocalStorageManagement";
import { Contants } from "../../../Constants/Actions";
import { VisitAction } from "@/datatypes/VisitAction";

type SingleRecord = {
  pageDetails: PageDetail;
  products: Product[];
};

const initialState: SingleRecord | null = null;
const visitReducer = (state = initialState, action: VisitAction) => {
  if (action.type == Contants.ADDVISIT) {
    console.log("Inside Actionss");
  } else {
    return state;
  }
};
export default visitReducer;
export const getVisitedPageDetails = (state: StateRedux) => state?.visitReducer;
