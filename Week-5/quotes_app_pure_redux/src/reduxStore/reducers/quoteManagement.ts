import { Quote } from "../../dataTypes/Quote";
import { RootState } from "./RootState";

let initialState: Quote[] = [];

type Actiontype = {
  type: string;
  payLoad: Quote | number;
};

const quoteManagement = (state = initialState, action: Actiontype) => {

  switch (action.type) {
    case "addQuote": {
      return [...state, action.payLoad];
    }
    case "removeQuote": {
      return state.filter((_,index)=>index!==action.payLoad)
    }
    default: {
      return state as Quote[];
    }
  }
  
};
export default quoteManagement;

export const quoteSelector = (state:RootState) => state.quoteManagement;
