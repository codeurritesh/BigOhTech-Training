import { Product } from "../../../datatypes/Product";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../ReduxManagement/Actions/Cart-Actions/Cart-Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";
import { Box } from "@mui/material";

const CartCard = (props: { product: Product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product: Product) => {
    dispatch(addToCart(product));
  };

  const removeFromCartHandler = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <Box sx={styles.cartCard}>
      <Box sx={styles.cartProduct}>
        <Box sx={styles.cartProductInfo}>
          <img src={props.product.thumbnail} alt="" style={styles.cartProductImg} />
          <Box sx={styles.productInfos}>
            <b>{props.product.title}</b>
            <p>{props.product.description.substring(0, 50)}...</p>
          </Box>
        </Box>
        <h4 className="mrp">
          $ <span style={{ textDecoration: "line-through" }}>
            {props.product?.price
              ? Math.ceil(
                  props.product?.price +
                    (props.product?.discountPercentage / 100) *
                    props.product?.price
                )
              : "$"}
          </span>
          <small style={{ color: "green", marginLeft: "5px" }}>
            {props.product.discountPercentage}% Off
          </small>
        </h4>
        <h4>$ {props.product.price}</h4>
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={styles.deleteButton}
          onClick={(event) => {
            removeFromCartHandler(props.product);
            event.stopPropagation();
          }}
        />
      </Box>
    </Box>
  );
};

export default CartCard;
