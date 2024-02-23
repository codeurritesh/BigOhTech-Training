import React, { useEffect, useState } from "react";
import { MyContext } from "../../utils/MyContext";
import Header from "../Header";
import Section from "../Section";
import Footer from "../Footer";
import { AllProduct } from "../../datatypes/All-products";
import { apiManagement } from "../../services/ApiManagement";
import { Outlet } from "react-router-dom";
import { Alert } from "@mui/material";

const Home = () => {
  const [allProducts, setAllProducts] = useState<AllProduct>([]);

  async function getProducts() {
    // const allProducts = await apiManagement.getAllProducts();
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
        value={{ allProduct: allProducts, setAllProducts: setAllProducts }}
      >
        <Header />

        <Outlet />

        <Footer />
      </MyContext.Provider>
    </div>
  );
};

export default Home;
