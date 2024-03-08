import React, { useEffect, useState } from "react";
import "./ProductDetailsPage.css";
import { useParams } from "react-router-dom";
import { Product } from "../../datatypes/Product";
import { apiManagement } from "../../services/ApiManagement";

const ProductDetailsPage = () => {
  const params = useParams();
  const productId = parseInt(params.productId as string);
  const [productDetails, setProductDetails] = useState<Product>();
  const [mainImage, setMainImage] = useState<string>("");

  async function getSingleData() {
    const product = (await apiManagement.getProductById(productId)) as Product;
    setProductDetails(product);
    setMainImage(product?.thumbnail as string);
    console.log(product?.thumbnail);
  }

  useEffect(() => {
    getSingleData();
  }, []);

  function mainImageHandler(imageUrl: string) {
    setMainImage(imageUrl);
  }


  return (
    
    <div className="product-details">
      <div className="product-images">
        <img src={mainImage} className="main-image" alt="" />
        <div className="image-choice">
          {productDetails?.images.slice(0, 4).map((url) => {
            return (
              <img
                src={url}
                alt={productDetails.title + " Image"}
                className="small-img"
                onClick={() => mainImageHandler(url)}
              />
            );
          })}
        </div>
      </div>
      <div className="product-info">
        <div>
          <h2 className="title">
            <b>{productDetails?.title}</b>
          </h2>
          <h3>{productDetails?.brand}</h3>
          <p>{productDetails?.description}</p>
          <h1>
            ${productDetails?.price}
            <span className="discount">
              {" "}
              -{productDetails?.discountPercentage}% Off
            </span>
          </h1>
          <small>
            MRP:{" "}
            <span className="mrp-price">
              $
              {productDetails?.discountPercentage && productDetails?.price
                ? Math.ceil(
                    productDetails?.price +
                      (productDetails?.discountPercentage / 100) *
                        productDetails?.price
                  )
                : "$"}
            </span>
          </small>
          <h3>
            Rating: {productDetails?.rating}{" "}
            <i className="fa-solid fa-star rating-star"></i>
          </h3>
        </div>
        <div className="buttons">
          <button className="buy-button button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

