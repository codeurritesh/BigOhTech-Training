import React, { Fragment, useContext } from "react";
import "./Navbar.css";
import { MyContext } from "../../utils/MyContext";
import { Product } from "../../datatypes/Product";
// import { ApiManagement } from "../../services/ApiManagement";
import { AllProduct } from "../../datatypes/All-products";
import { apiManagement } from "../../services/ApiManagement";
import { useNavigate } from "react-router-dom";

type NavBarProps = {
  isShowSearch?: boolean;
};
const Navbar = ({ isShowSearch = true }: NavBarProps) => {
  const contextData = useContext(MyContext);
  async function searchEventHandler() {
    const searchbar: any = document.querySelector("#searchbar");

    const allSearchedProducts: AllProduct =
      await apiManagement.getSearchedProduct(searchbar.value);
    contextData?.setAllProducts(allSearchedProducts);
  }
const navigate=useNavigate();

  return (
    <header className="navbar">
      {!isShowSearch && (
        <div className="header-component">
            <i className="fa-solid fa-arrow-left" style={{fontSize:"xx-large",cursor:"pointer"}} onClick={()=>{navigate('/')}}></i>
        </div>
      )}
      <div className="header-component">
        <h2>
          <i id="bag-icon" className="fa-solid fa-bag-shopping"></i>ShopMe
        </h2>
      </div>
      {isShowSearch && (
        <Fragment>
          <div className="header-component">
            <input
              type="text"
              id="searchbar"
              name="search"
              placeholder="Search Image"
            />
            <button
              className="hover-black"
              id="search-button"
              onClick={searchEventHandler}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="header-component">
              <button id="like-button" onClick={()=>navigate('/liked-product')}>
                <i className="fa-solid fa-heart hover-black" />
              </button>
            <h2 id="countLikes" />
          </div>
        </Fragment>
      )}
    </header>
  );
};

export default Navbar;
