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
import { styles } from "./styles";
import { Box, Button } from "@mui/material";

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
    <Box component="header" sx={styles.navbar}>
      {router.pathname !== RoutesManager.PRODUCTS &&
      router.pathname !== RoutesManager.HOME ? (
        <Box sx={styles.headerComponent}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ fontSize: "xx-large", cursor: "pointer" }}
            onClick={() => {
              ["/login", "/register"].includes(router.pathname)
                ? router.push("/")
                : router.push("/products");
            }}
          />
        </Box>
      ) : (
        ""
      )}

      <Box
        sx={styles.headerComponent}
        onClick={() => router.push(RoutesManager.HOME)}
      >
        <h2>
          <FontAwesomeIcon icon={faBagShopping} style={styles.bagIcon} />
          Next-shop
        </h2>
      </Box>

      <Box sx={styles.headerComponent}>
        {isloggedIn ? (
          <>
            <h4>
              Hey <span>&#x1F44B;</span>, {isloggedIn[0]?.name.split(" ")[0]}!
            </h4>
            {router.pathname !== "/products" ? (
              <Button
                sx={styles.navButtons}
                onClick={() => router.push(RoutesManager.PRODUCTS)}
              >
                All Products <FontAwesomeIcon icon={faBagShopping} />
              </Button>
            ) : (
              ""
            )}

            <Button variant="contained"
              sx={styles.cartButton}
              onClick={() => router.push(RoutesManager.CART)}
            >
              <FontAwesomeIcon icon={faCartShopping} />{" "}
              {cartProducts?.length ? <b> {cartProducts?.length}</b> : ""}
            </Button>

            <Button sx={styles.navButtons} onClick={logoutHandler}>
              Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Button>
          </>
        ) : (
          <>
            {router.pathname !== RoutesManager.LOGIN ? (
              <Button variant="contained"
                // color="primary"
                // sx={styles.navButtons}
                onClick={() => router.push(RoutesManager.LOGIN)}
              >
                Login <FontAwesomeIcon icon={faRightToBracket} />
              </Button>
            ) : (
              ""
            )}
            {router.pathname !== RoutesManager.REGISTER ? (
              <Button variant="contained"
                sx={styles.navButtons}
                onClick={() => router.push(RoutesManager.REGISTER)}
              >
                Register <FontAwesomeIcon icon={faUserPlus} />
              </Button>
            ) : (
              ""
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
