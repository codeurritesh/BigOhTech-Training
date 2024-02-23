import { Route, Routes } from "react-router-dom";
import Form from "./components/pages/Form";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />}/>
    </Routes>
  );
};

export default App;
