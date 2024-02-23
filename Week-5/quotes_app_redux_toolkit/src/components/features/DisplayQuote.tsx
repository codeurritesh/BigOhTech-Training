import "./displayQuote.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteQuote, quoteSelector } from "../../reduxStore/quoteSlice";
import { Quote } from "../../dataTypes/Quote";
import QuoteBox from "../shared/QuoteBox";

export type DeleteHandleType = (data: string) => void;
const DisplayQuote = () => {
  const allQuotes = useSelector(quoteSelector);
  const dispatch = useDispatch();
  const deleteHandler: DeleteHandleType = (quoteId: string) => {
    dispatch(deleteQuote(quoteId));
    console.log("Todo Deleted");
  };

  return (
    <section className="quotes-container">
      {allQuotes.quotes.map((quote: Quote) => {
        return <QuoteBox data={quote} deleteHandler={deleteHandler} />;
      })}
    </section>
  );
};

export default DisplayQuote;
