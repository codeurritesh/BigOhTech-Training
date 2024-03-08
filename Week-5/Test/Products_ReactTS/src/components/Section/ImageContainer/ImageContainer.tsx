import "./ImageContainer.css";
import { MyContext } from "../../../utils/MyContext";
import { Suspense, lazy, useContext } from "react";
import { useSelector } from "react-redux";
import { getLikedProducts } from "../../../ReduxManagement/Reducers/Cart-Reducer/Cart-Reducer";
import { Product } from "../../../datatypes/Product";
import Loader from "../../Common/Loader";
import { createDelay } from "../../../utils/CreateDelay";
const Card = lazy(() => createDelay(import("../Card/Card")));

function findObject(
  array: Product[],
  targetObject: Product
): Product | undefined {
  return array?.find(
    (item) => JSON.stringify(item) === JSON.stringify(targetObject)
  );
}
const ImageContainer = () => {
  const allLikedProducts = useSelector(getLikedProducts);
  console.log(allLikedProducts);
  const contextData = useContext(MyContext);
  return (
    <section id="image-container">
      <Suspense fallback={<Loader />}>
        {contextData?.allProduct?.map((item) => {
          return findObject(allLikedProducts, item) ? (
            <Card product={item} isInCart={true} />
          ) : (
            <Card product={item} isInCart={false} />
          );
        })}
      </Suspense>
    </section>
  );
};

export default ImageContainer;
