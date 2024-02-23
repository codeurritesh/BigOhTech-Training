import React, { Fragment, useContext, useEffect, useState } from "react";
import { LocalStorageManagement } from "../../services/LocalStorageManagement";
import "./LikePage.css";
import { apiManagement } from "../../services/ApiManagement";
import { Product } from "../../datatypes/Product";
import Card from "../Section/Card";
import { useNavigate } from "react-router-dom";

const localStorageManagement = new LocalStorageManagement();

const LikedPage = () => {
  const [allLikedProducts, setAllLikedProducts] = useState<Product[]>([]);
  
  console.log("Rendering");
  useEffect(() => {
    const allLikedKeys: number[] | null =
      localStorageManagement.getItem("likedProducts");

    if (allLikedKeys) {
      for (const iterator of allLikedKeys) {
        getSingleDatById(iterator);
      }
    }
  }, []);

  async function getSingleDatById(productId: number) {
    const singleLikedProduct: Product = await apiManagement.getProductById(
      productId
    );
    setAllLikedProducts((previousLiked) => {
      return [...previousLiked, singleLikedProduct];
    });
    return;
  }
  return (
    <>
      <h1 className="like-product-heading">WishList</h1>
      <section
        id="like-image-container"
        style={{
          backgroundColor: allLikedProducts.length === 0 ? "white" : "",
        }}
      >
        {/* TRY TO USE EFFICIANT USES OF THE OPERATORS */}
        {allLikedProducts.length !== 0 ? (
          allLikedProducts.map((product: Product) => {
            return (
              <Card
                product={product}
                allLikedProducts={allLikedProducts}
                setLikedImages={setAllLikedProducts}
              />
            );
          })
        ) : (
          <img
            src="https://img.freepik.com/premium-vector/file-found-illustration-with-confused-people-holding-big-magnifier-search-no-result_258153-336.jpg"
            alt=""
          />
          
        )}
      </section>
    </>
  );
};

export default LikedPage;
