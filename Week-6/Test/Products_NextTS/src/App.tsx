import Section from "./components/Section/Section";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import LikedPage from "./pages/Cart/Cart";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Index from "./pages/Index/Index";
import { RoutesManager } from "./utils/RoutesManager";

const App = () => {
  return (
    <Routes>
      <Route path={RoutesManager.HOME} element={<Home />}>
        <Route index element={<Index />} />
        <Route path={RoutesManager.PRODUCTS} element={<Section />} />
        <Route path={RoutesManager.CART} element={<LikedPage />} />
        <Route path={RoutesManager.SINGLEPRODUCT} element={<ProductDetailsPage />} />
        <Route path={RoutesManager.REGISTER} element={<Register />} />
        <Route path={RoutesManager.LOGIN} element={<Login />} />  
        {/* why you not make it enum or type of this ????/ */}
      </Route>
    </Routes>
  );
};

export default App;
