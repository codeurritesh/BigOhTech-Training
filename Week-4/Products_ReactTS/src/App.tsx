import Section from "./components/Section";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LikedPage from "./components/pages/LikedPage";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import AddNewProduct from "./components/pages/AddNewProduct";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Section />} />
        <Route path="liked-product" element={<LikedPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/add-new-product" element={<AddNewProduct />} />
      </Route>
    </Routes>
  );
};

export default App;

// Axios
// Props drilling - redux, contextAPI
// useCallback/useMemo - theory
// Key - index
// Nextjs
// routing route v6

// react query
// react hook form  - 3 step form
// User ->
// Family ->
// Addres
// Stepper
// requried fields , email, phone

// component
// common - input btn card
// feature -
// pages
