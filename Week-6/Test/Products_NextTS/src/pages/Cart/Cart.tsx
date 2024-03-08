import "./cart.css";
import { Product } from "../../datatypes/Product";
import { useSelector } from "react-redux";
import { getLikedProducts } from "../../ReduxManagement/Reducers/Cart-Reducer/Cart-Reducer";
import { Suspense, lazy, useEffect } from "react";
import Loader from "../../components/Common/Loader";
import { createDelay } from "../../utils/CreateDelay";
const CartCard = lazy(() =>
  createDelay(import("../../components/Section/Card/CartCard"))
);

const LikedPage = () => {
  const allLikedProducts = useSelector(getLikedProducts);
  console.log(allLikedProducts);

  console.log("card rerender...."); // bad practice
  const totalCost = allLikedProducts.reduce(
    (acc, product) => acc + product.price,
    0
  ); // useEffect here...

  return (
    <section style={{ overflow: "scroll" }} className="main-cart">
      <h1 className="like-product-heading">Your Cart</h1>
      <Suspense fallback={<Loader />}>
        {allLikedProducts?.length != 0 ? (
          <>
            <section id="like-image-container">
              <tr className="cart-header">
                <td>Product Details</td>
                <td>MRP</td>
                <td>Total Price</td>
              </tr>
              {allLikedProducts?.map((product) => {
                return <CartCard product={product} />;
              })}
            </section>
            <section className="main-summary">
              <div className="summary-box">
                <h4>Total Price-</h4>
                <h4>$ {totalCost}</h4>
              </div>
              <div className="summary-box">
                <p>Shipping-</p>
                <p>$ 8.5</p>
              </div>
              <div className="summary-box border-top">
                <h1>Estimated Total-</h1>
                <h1>$ {totalCost + 8.5}</h1>
              </div>
              <button className="checkout-button">CheckOut</button>
            </section>
          </>
        ) : (
          <img
            className="no-result"
            src="https://img.freepik.com/premium-vector/file-found-illustration-with-confused-people-holding-big-magnifier-search-no-result_258153-336.jpg"
            alt=""
          ></img>
        )}
      </Suspense>
    </section>
  );
};

export default LikedPage;
