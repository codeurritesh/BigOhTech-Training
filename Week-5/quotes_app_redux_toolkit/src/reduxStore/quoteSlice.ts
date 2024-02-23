import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Quote } from "../dataTypes/Quote";

// why you are avoiding types????????????????????????????
const initialState = {
  quotes: [
    { id: "1", quote: "Hello World", author: "Ritesh", date: "20/02/2024" },
  ]as Quote[],
};
const quoteSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addQuote: (state, action) => {
      const quote = {
        id: nanoid(),
        quote: action.payload.newQuote,
        author: action.payload.author,
        date: new Date().toLocaleDateString(),
      };
      state.quotes.push(quote);
    },
    deleteQuote: (state, action) => {
      state.quotes = state.quotes.filter(
        (quote) => quote.id !== action.payload
      );
    },
  },
});
export const { addQuote, deleteQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
export const quoteSelector = (state: { quotes: Quote[] }) => state;

// Need to know about redux, redux toolkit, context api, react query
// need to know to use selector,
// i don't see again without types of anythings
