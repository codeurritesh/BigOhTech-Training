import React, { useEffect, useState } from "react";
import { MyContext } from "../../utils/MyContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AllProduct } from "../../datatypes/All-products";
import { apiManagement } from "../../services/ApiManagement";
import { Outlet, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedInUser } from "../../ReduxManagement/Reducers/Auth-Reducers/Auth-Reducers";
import { RoutesManager } from "../../utils/RoutesManager";
const Home = () => {
  const [allProducts, setAllProducts] = useState<AllProduct>([]);
  const isloggedIn = useSelector(getLoggedInUser);
  const navigate=useNavigate();
  const location=useLocation();

  useEffect(()=>{

    if(!isloggedIn && location.pathname!==RoutesManager.HOME && location.pathname!==RoutesManager.REGISTER){
      navigate(RoutesManager.LOGIN);
    }
  },[])
  
  async function getProducts() {
    apiManagement
      .getAllProducts()
      .then((res) => {
        setAllProducts(res);
      })
      .catch((error) => {});
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <MyContext.Provider
        value={{ allProduct: allProducts, setAllProducts: setAllProducts }}>
        <Header />
        <Outlet />
        <Footer />
      </MyContext.Provider>
    </div>
  );
};

export default Home;
