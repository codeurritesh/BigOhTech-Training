import { Product } from "../../../datatypes/Product";
import "./CartCard.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../ReduxManagement/Actions/Cart-Actions/Cart-Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


const CartCard = (props: { product: Product}) => {
  const dispatch = useDispatch();
  const addToCartHandler = (product: Product) => {
    dispatch(addToCart(product));
  };
  const removeFromCartHandler = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cart-card">
        <div className="cart-product">
            <div className="cart-product-info">
            <img src={props.product.thumbnail} alt="" />
            <div className="product-infos">
                <b>{props.product.title}</b>
                <p>{props.product.description.substring(0,50)}...</p>
            </div>
            </div>
            <h4 className="mrp">$ <span style={{textDecoration:"line-through"}}>{props.product?.price
                ? Math.ceil(
                    props.product?.price +
                      (props.product?.discountPercentage / 100) *
                      props.product?.price
                  )
                : "$"}</span><small style={{color:"green",marginLeft:"5px"}}>{props.product.discountPercentage}% Off</small></h4>
            <h4>$ {props.product.price}</h4>

              <FontAwesomeIcon icon={faCircleXmark} className="delete-Button" onClick={(event) => {
                removeFromCartHandler(props.product);
                event.stopPropagation();
              }} />
        </div>


    </div>
  );
};

export default CartCard;
