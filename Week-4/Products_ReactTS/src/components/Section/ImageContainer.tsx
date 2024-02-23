import "./ImageContainer.css";
import { AllProduct } from "../../datatypes/All-products";
import Card from "./Card";
import { MyContext } from "../../utils/MyContext";
import { useContext } from "react";

const ImageContainer = () => {
  const contextData = useContext(MyContext);
  return (
    <section id="image-container">
      {contextData?.allProduct?.map((item) => {
        return <Card product={item}/>;
      })}
    </section>
  );
};

export default ImageContainer;
