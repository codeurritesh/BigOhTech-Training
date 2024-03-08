import "./products.css";
import { Suspense, lazy} from "react";
import { getLikedProducts } from "../../ReduxManagement/Reducers/Cart-Reducer/Cart-Reducer";
import { Product } from "../../datatypes/Product";
import Loader from "../../components/Common/Loader";
import { createDelay } from "../../utils/CreateDelay";
import { apiManagement } from "@/services/ApiManagement";
import { paginationManagement } from "@/services/PaginationManagement";
import Pagination from "@/components/Pagination/Pagination";
import { useSelector } from "react-redux";

const Card = lazy(() =>
  createDelay(import("../../components/Section/Card/Card"))
);

function findObject(
  array: Product[],
  targetObject: Product
): Product | undefined {
  return array?.find(
    (item) => JSON.stringify(item) === JSON.stringify(targetObject)
  );
}

export async function getServerSideProps(props: {
  query: { page: number; limit: number };
}) {
  const currentPage = Number(props.query.page) || 0;
  const limit = Number(props.query.limit) || 20;
  let data = paginationManagement.findDataInRecords(currentPage, limit);
  console.log(JSON.stringify(data));
  if (data.length === 0) {
    console.log("Fetching API");
    data = await apiManagement.getAllProducts(currentPage, limit);
    paginationManagement.setAlreadyVisitedPages(
      { page: currentPage, limit: limit },
      data
    );
  }

  return {
    props: {
      data,
    },
  };
}

const ImageContainer = (props: { data: Product[] }) => {
  const allLikedProducts = useSelector(getLikedProducts);

  return (
    <>
      <section id="image-container">
        {props.data.length === 0 ? (
          <h1 style={{ color: "white" }}>No Result Found</h1>
        ) : (
          ""
        )}
        <Suspense fallback={<Loader />}>
          {props.data?.map((item: Product) => {
            return findObject(allLikedProducts, item) ? (
              <Card product={item} isInCart={true} />
            ) : (
              <Card product={item} isInCart={false} />
            );
          })}
        </Suspense>
      </section>
      <Pagination />
    </>
  );
};

export default ImageContainer;
