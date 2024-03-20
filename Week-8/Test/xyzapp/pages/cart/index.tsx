import { Product } from "../../datatypes/Product";
import { useSelector } from "react-redux";
import { getLikedProducts } from "../../ReduxManagement/Reducers/Cart-Reducer/Cart-Reducer";
import { Suspense, lazy, useEffect } from "react";
import Loader from "../../components/Common/Loader";
import { createDelay } from "../../utils/CreateDelay";
import { styles } from "./style"; // Import the styles object from your style file
import { Box, Button, Typography } from "@mui/material";
const CartCard = lazy(() =>
  createDelay(import("../../components/Section/Card/CartCard"))
);

const LikedPage = () => {
  const allLikedProducts = useSelector(getLikedProducts);
  console.log(allLikedProducts);
  const totalCost = allLikedProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  return (
    <Box component="section" sx={styles.mainCart}>
      <Typography component={'h1'} sx={styles.likeProductHeading}>Your Cart</Typography>
      <Suspense fallback={<Loader />}>
        {allLikedProducts?.length != 0 ? (
          <>
            <Box component="section" sx={styles.likeImageContainer}>
              <Box sx={styles.cartHeader}>
                <Box>Product Details</Box>
                <Box>MRP</Box>
                <Box>Total Price</Box>
              </Box>
              {allLikedProducts?.map((product: Product) => {
                return <CartCard product={product} />;
              })}
            </Box>
            <Box component="section" sx={styles.mainSummary}>
              <Box sx={styles.summaryBox}>
                <Typography>Total Price-</Typography>
                <h4>$ {totalCost}</h4>
              </Box>
              <Box sx={styles.summaryBox}>
                <Typography>Shipping-</Typography>
                <Typography>$ 8.5</Typography>
              </Box>
              <Box sx={{ ...styles.summaryBox, ...styles.borderTop }}>
                <h1>Estimated Total-</h1>
                <h1>$ {totalCost + 8.5}</h1>
              </Box>
              <Button variant="contained" sx={styles.checkoutButton}>CheckOut</Button>
            </Box>
          </>
        ) : (
          <img
            className="no-result"
            src="https://img.freepik.com/premium-vector/file-found-illustration-with-confused-people-holding-big-magnifier-search-no-result_258153-336.jpg"
            alt=""
          ></img>
        )}
      </Suspense>
    </Box>
  );
};

export default LikedPage;
