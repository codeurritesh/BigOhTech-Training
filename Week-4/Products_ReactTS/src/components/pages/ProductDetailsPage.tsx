import React, { useContext, useEffect, useState } from "react";
import "./ProductDetailsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../datatypes/Product";
import { apiManagement } from "../../services/ApiManagement";

const ProductDetailsPage = () => {
  const navigate=useNavigate();
  const params = useParams();
  const productId = parseInt(params.productId as string);
  const [productDetails, setProductDetails] = useState<Product | undefined>(
    undefined
  );
  const [mainImage, setMainImage] = useState<string>("");

  async function getSingleData() {
    const product = (await apiManagement.getProductById(productId)) as Product;
    setProductDetails(product); 
    setMainImage(product?.thumbnail as string); 
    console.log(product?.thumbnail);
  }

  useEffect(() => {
    getSingleData();
  },[]); // try to know about technical term, dependency array

  // function setThumbNail(){
  //   setMainImage(productDetails?.thumbnail as string)
  // }

  function mainImageHandler(imageUrl:string){
    setMainImage(imageUrl);
  }
  async function deleteHandler(productId:number){
    const deletedProduct=await apiManagement.deleteProduct(productId);
    if(deletedProduct){
      console.log("Product Deleted Successfully")
      navigate("/")
    }
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
                onClick={()=>mainImageHandler(url)}

              />
            );
          })}
        </div>
      </div>
      <div className="product-info">
        <div>
          <h2 className="title">
            <b>{productDetails?.title}</b>
            <i onClick={()=>deleteHandler(productDetails?.id as number)} className="fa-solid fa-trash-can"></i>
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
          <button className="cart-button button">
            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

// react query, react hook form, use memo, lazy loading,
