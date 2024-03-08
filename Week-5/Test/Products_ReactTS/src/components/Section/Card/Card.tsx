import { Product } from "../../../datatypes/Product";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../ReduxManagement/Actions/Cart-Actions/Cart-Actions";


const Card = (props: { product: Product, isInCart?:boolean }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCartHandler = (product: Product) => {
    dispatch(addToCart(product));
  };
  const removeFromCartHandler = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/product/${props.product.id}`);
      }}
    >
      <img src={props.product.thumbnail} className="card-image" />
      <div className="card-content">
        <div>
          <p className="card-name">
            <b> {props.product.title}</b>
          </p>
          <p className="card-name">Brand: {props.product.brand} </p>
          <p className="card-name">Price: {props.product.price} $</p>
          <p className="card-name">
            Rating: {props.product.rating} <i className="fa-solid fa-star"></i>
          </p>
        </div>
        <button className="card-like">
          {props.isInCart ? (
            <i
              className="fa-solid fa-cart-shopping"
              onClick={(event) => {
                removeFromCartHandler(props.product);
                event.stopPropagation();
              }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-cart-plus"
              style={{color:"grey"}}
              onClick={(event) => {
                addToCartHandler(props.product);
                event.stopPropagation();
              }}
            ></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
