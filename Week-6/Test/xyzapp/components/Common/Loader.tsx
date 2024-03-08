import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Skeleton } from "@mui/material";
import { useRouter } from "next/router";

export default function Loader() {
  const [open, setOpen] = React.useState(true);
  function handleClose() {
    setOpen(false);
  }
  const router = useRouter();

  return router.pathname == "/products" ? (
    <>
      <Box sx={{ width: 300 }}>
        <Skeleton sx={{ width: 300, height: 300 }} />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ width: 300 }}>
        <Skeleton sx={{ width: 300, height: 300 }} />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ width: 300 }}>
        <Skeleton sx={{ width: 300, height: 300 }} />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ width: 300 }}>
        <Skeleton sx={{ width: 300, height: 300 }} />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </>
  ) : (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
