/* eslint-disable no-lone-blocks */
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../../ReduxManagement/Reducers/Auth-Reducers/Auth-Reducers";
import { logoutAction } from "../../ReduxManagement/Actions/Auth-Actions/Auth-Actions";
import { getLikedProducts } from "../../ReduxManagement/Reducers/Cart-Reducer/Cart-Reducer";
import { RoutesManager } from "../../utils/RoutesManager";

const Navbar = () => { // isLoggedIn
  const isloggedIn = useSelector(getLoggedInUser); // naming conventions correct
  const cartProducts = useSelector(getLikedProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function logoutHandler() {
    dispatch(logoutAction());
    navigate(RoutesManager.LOGIN);
  }
  return (
    <header className="navbar">
      {location.pathname !== RoutesManager.PRODUCTS && location.pathname !== RoutesManager.HOME ? ( // same
        <div className="header-component">
          <i
            className="fa-solid fa-arrow-left"
            style={{ fontSize: "xx-large", cursor: "pointer" }}
            onClick={() => {
              {
                ['/login','register'].includes(location.pathname)? navigate("/")
                  : navigate("/products");
              }
            }}
          ></i>
        </div>
      ) : (
        ""
      )}

      <div className="header-component" onClick={() => navigate(RoutesManager.HOME)}>
        <h2>
          <i id="bag-icon" className="fa-solid fa-bag-shopping"></i>ShopMe
        </h2>
      </div>
      <div className="header-component">
        {isloggedIn ? (
          <>
            <h4>
              Hey <span className="wave">&#x1F44B;</span>,{" "}
              {isloggedIn[0]?.name.split(" ")[0]}!
            </h4>
            {location.pathname !== "/products" ? (
             <button className="nav-buttons" onClick={() => navigate(RoutesManager.PRODUCTS)}>
             All Products <i className="fa-solid fa-bag-shopping"></i>
           </button>
            ) : (
              ""
            )}
            
            <button
              className="cart-button"
              onClick={() => navigate(RoutesManager.CART)}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <b> {cartProducts?.length}</b>
            </button>

            <button className="nav-buttons" onClick={logoutHandler}>
              Logout <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </>
        ) : (
          <>
            {location.pathname !== RoutesManager.LOGIN ? (
              <button
                className="nav-buttons"
                onClick={() => navigate(RoutesManager.LOGIN)}
              >
                Login <i className="fa-solid fa-right-to-bracket"></i>
              </button>
            ) : (
              ""
            )}
            {location.pathname !== RoutesManager.REGISTER ? (
              <button
                className="nav-buttons"
                onClick={() => navigate(RoutesManager.REGISTER)}
              >
                Register <i className="fa-solid fa-user-plus"></i>
              </button>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
