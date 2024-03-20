import { Product } from "../../../datatypes/Product";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../ReduxManagement/Actions/Cart-Actions/Cart-Actions";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import {styles} from "./CardStyles";
import { Box, Button, Typography } from "@mui/material";

const Card = (props: { product: Product; isInCart?: boolean }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addToCartHandler = (product: Product) => {
    dispatch(addToCart(product));
  };
  const removeFromCartHandler = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <Box  sx={styles.card}>
      <img src={props.product.thumbnail}  style={styles.cardImage} />
      <Box  sx={styles.cardContent}>
        <Box>
          <Typography sx={styles.cardName}>
            <b> {props.product.title}</b>
          </Typography>
          <Typography sx={styles.cardName}>Brand: {props.product.brand} </Typography>
          <Typography sx={styles.cardName}>Price: {props.product.price} $</Typography>
          <Typography sx={styles.cardName}>
            Rating: {props.product.rating} <FontAwesomeIcon style={{color:"orange",fontSize:"larger"}} icon={faStar} />
          </Typography>
        </Box>
        <Button sx={styles.cardLike}>
          {props.isInCart ? (
            <FontAwesomeIcon
              onClick={(event) => {
                removeFromCartHandler(props.product);
                event.stopPropagation();
              }}
              style={{ color: "black" }}
              icon={faCartShopping}
            />
          ) : (
            <FontAwesomeIcon
              style={{ color: "grey" }}
              onClick={(event) => {
                addToCartHandler(props.product);
                event.stopPropagation();
              }}
              icon={faCartPlus}
            />
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
