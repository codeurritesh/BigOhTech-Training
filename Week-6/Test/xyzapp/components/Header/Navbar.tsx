import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../../ReduxManagement/Reducers/Auth-Reducers/Auth-Reducers";
import { logoutAction } from "../../ReduxManagement/Actions/Auth-Actions/Auth-Actions";
import { getLikedProducts } from "../../ReduxManagement/Reducers/Cart-Reducer/Cart-Reducer";
import { RoutesManager } from "../../utils/RoutesManager";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRightFromBracket,
  faBagShopping,
  faCartShopping,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const isloggedIn = useSelector(getLoggedInUser);
  const cartProducts = useSelector(getLikedProducts);
  const dispatch = useDispatch();
  const router = useRouter();

  function logoutHandler() {
    dispatch(logoutAction());
    router.push(RoutesManager.LOGIN);
  }
  return (
    <header className="navbar">
      {router.pathname !== RoutesManager.PRODUCTS &&
      router.pathname !== RoutesManager.HOME ? ( // same
        <div className="header-component">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ fontSize: "xx-large", cursor: "pointer" }}
            onClick={() => {
              ["/login", "/register"].includes(router.pathname)
                ? router.push("/")
                : router.push("/products");
            }}
          />
        </div>
      ) : (
        ""
      )}

      <div
        className="header-component"
        onClick={() => router.push(RoutesManager.HOME)}
      >
        <h2>
          <FontAwesomeIcon icon={faBagShopping} id="bag-icon" />
          ShopMe
        </h2>
      </div>
      <div className="header-component">
        {isloggedIn ? (
          <>
            <h4>
              Hey <span className="wave">&#x1F44B;</span>,{" "}
              {isloggedIn[0]?.name.split(" ")[0]}!
            </h4>
            {router.pathname !== "/products" ? (
              <button
                className="nav-buttons"
                onClick={() => router.push(RoutesManager.PRODUCTS)}
              >
                All Products <FontAwesomeIcon icon={faBagShopping} />
              </button>
            ) : (
              ""
            )}

            <button
              className="cart-button"
              onClick={() => router.push(RoutesManager.CART)}
            >
              <FontAwesomeIcon icon={faCartShopping} />{" "}
              {cartProducts?.length ? <b> {cartProducts?.length}</b> : ""}
            </button>

            <button className="nav-buttons" onClick={logoutHandler}>
              Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </>
        ) : (
          <>
            {router.pathname !== RoutesManager.LOGIN ? (
              <button
                className="nav-buttons"
                onClick={() => router.push(RoutesManager.LOGIN)}
              >
                Login <FontAwesomeIcon icon={faRightToBracket} />
              </button>
            ) : (
              ""
            )}
            {router.pathname !== RoutesManager.REGISTER ? (
              <button
                className="nav-buttons"
                onClick={() => router.push(RoutesManager.REGISTER)}
              >
                Register <FontAwesomeIcon icon={faUserPlus} />
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
