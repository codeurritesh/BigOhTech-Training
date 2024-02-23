import "./App.css";
import AddQuote from "../src/components/features/AddQuote";
import DisplayQuote from "./components/features/DisplayQuote";

const App = () => {
  return (
    <>
      <h1 className="main-heading">Redux Quotes App</h1>
      <AddQuote />
      <DisplayQuote />
    </>
  );
};

export default App;
