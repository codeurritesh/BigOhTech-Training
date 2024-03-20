import React, { useRef } from "react";
import styles from "./styles";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { Box, Input, InputLabel } from "@mui/material";

const Pagination = () => {
  const router = useRouter();
  const offset = useRef<HTMLInputElement | null>(null);
  const currentPage = Number(router.query.page) || 1;
  console.log(router.query.page);

  const goToPreviousPage = () => {
    const prevPage = Math.max(1, currentPage - 1);
    const limit = offset.current?.value;
    router.push(`/products?page=${prevPage}&limit=${limit}`);
  };

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    const limit = offset.current?.value;
    router.push(`/products?page=${nextPage}&limit=${limit}`);
  };

  const numberOfButtons = 5;
  const startPage = Math.max(currentPage - Math.floor(numberOfButtons / 2), 1);
  const buttonNumbers = Array.from(
    { length: numberOfButtons },
    (_, index) => startPage + index
  );

  const changePageNumber = (pageNumber: number) => {
    const limit = offset.current?.value;
    router.push(`/products?page=${pageNumber}&limit=${limit}`);
  };

  return (
    <Box component="section" sx={styles.pagingSection}>
      <Box sx={styles.pagination}>
        <InputLabel htmlFor="offset" sx={{marginRight:"20px"}}> Offset</InputLabel>
        <Input
          type="number"
          id="offset"
          defaultValue={20}
          placeholder="OffSet"
          ref={offset}
          sx={styles.offset}
        />
      </Box>

      <Box style={styles.pagination}>
        <Box
          id="paginate-back"
          sx={styles.shiftButtons}
          onClick={goToPreviousPage}
        >
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
        </Box>
        <Box style={styles.paginateButtons}>
          {buttonNumbers.map((pageNumber) => (
            <Box
              key={pageNumber}
              className={
                currentPage === pageNumber
                  ? "page-number active-page"
                  : "page-number"
              }
              onClick={() => changePageNumber(pageNumber)}
              sx={
                currentPage === pageNumber
                  ? { ...styles.paginateButton, ...styles.activePage }
                  : styles.paginateButton
              }
            >
              {pageNumber}
            </Box>
          ))}
        </Box>
        <Box
          id="paginate-next"
          sx={styles.shiftButtons}
          onClick={goToNextPage}
        >
          <FontAwesomeIcon icon={faArrowRight} />{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default Pagination;
