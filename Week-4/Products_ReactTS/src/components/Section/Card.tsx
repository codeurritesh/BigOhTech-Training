/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Product } from "../../datatypes/Product";
import "./Card.css";
import { LocalStorageManagement } from "../../services/LocalStorageManagement";
import { AllProduct } from "../../datatypes/All-products";
import { useNavigate } from "react-router-dom";
const localStorageManagement = new LocalStorageManagement();

type Props = {
  setLikedImages?: any;
  product: Product;
  setLikedCount?: number;
  allLikedProducts?: Product[];
  onUnLike?: (product: Product, isLiked: boolean) => void;
};
const Card = (props: Props) => {
  const [isLiked, setLike] = useState<boolean>(false);
  useEffect(() => {
    const isexist: boolean = localStorageManagement.doesValueExits(
      "likedProducts",
      props.product.id
    ) as boolean;
    setLike(isexist);
  });

  const likeEventHandler = (productId: number) => {
    props?.onUnLike && props?.onUnLike(props.product, isLiked);
    localStorageManagement.setItem("likedProducts", productId);

    if (isLiked) {
      setLike(false);
      const deletedProductKey = localStorageManagement.removeValue(
        "likedProducts",
        productId
      );

      props.setLikedImages &&
        props.setLikedImages((previousLiked: Product[]) => {
          return previousLiked.filter((product) => {
            return product.id != deletedProductKey;
          });
        });
      return;
    }
    setLike(true);
  };
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={(event: any) => {
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
          <i
            style={{ color: isLiked ? "red" : "" }}
            className={`fa${isLiked ? "s" : "r"} fa-heart like-card`}
            onClick={(event) => {
              likeEventHandler(props.product.id);
              event.stopPropagation();
            }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
