import { Product } from "../../../datatypes/Product";
import "./Card.css";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../ReduxManagement/Actions/Cart-Actions/Cart-Actions";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

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
    <div className="card">
      <img src={props.product.thumbnail} className="card-image" />
      <div className="card-content">
        <div>
          <p className="card-name">
            <b> {props.product.title}</b>
          </p>
          <p className="card-name">Brand: {props.product.brand} </p>
          <p className="card-name">Price: {props.product.price} $</p>
          <p className="card-name">
            Rating: {props.product.rating} <FontAwesomeIcon style={{color:"orange",fontSize:"larger"}} icon={faStar} />
          </p>
        </div>
        <button className="card-like">
          {props.isInCart ? (
            <FontAwesomeIcon
              onClick={(event) => {
                removeFromCartHandler(props.product);
                event.stopPropagation();
              }}
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
        </button>
      </div>
    </div>
  );
};

export default Card;
