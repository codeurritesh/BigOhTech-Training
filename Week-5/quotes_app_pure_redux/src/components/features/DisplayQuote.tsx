import "./displayQuote.css";
import { useSelector } from "react-redux";
import { Quote } from "../../dataTypes/Quote";
// import QuoteBox from "../shared/QuoteBox";
import { RootState } from "../../reduxStore/reducers/RootState";
import { Suspense, lazy, useState } from "react";
import { quoteSelector } from "../../reduxStore/reducers/quoteManagement";

const QuoteBox = lazy(() => createDelay(import("../shared/QuoteBox")));

function createDelay(component: any) {// do not use any
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => component);
}
export type DeleteHandleType = (data: number) => void;
const DisplayQuote = () => {
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const data = useSelector(quoteSelector);
  console.log(data);
  function showPreviewHandler() {
    setShowPreview(!showPreview);
  }
  return (
    <div className="display-container"> 
      <button onClick={showPreviewHandler} className="show-button">Show Quotes</button>
        <section className="quotes-container">
          {showPreview && (
            <Suspense fallback={<h1>Loading...</h1>}>
              {data.map((quote: Quote, index: number) => {
                return <QuoteBox data={quote} ind={index} />;
              })}
            </Suspense>
          )}
        </section>
    </div>
  );
};

export default DisplayQuote;
