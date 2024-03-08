import React, { useRef } from "react";
import "./Pagination.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

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

  // Define the number of buttons you want to show
  const numberOfButtons = 5;

  // Calculate the starting point for the loop
  const startPage = Math.max(currentPage - Math.floor(numberOfButtons / 2), 1);

  // Generate an array of button numbers
  const buttonNumbers = Array.from(
    { length: numberOfButtons },
    (_, index) => startPage + index
  );

  const changePageNumber = (pageNumber: number) => {
    const limit = offset.current?.value;
    router.push(`/products?page=${pageNumber}&limit=${limit}`);
  };

  return (
    <section className="paging-section">
      <div className="pagination">
        <label htmlFor="offset"> Offset</label>
        <input
          type="number"
          id="offset"
          defaultValue={20}
          // onChange={offsetHandler}
          placeholder="OffSet"
          ref={offset}
        />
      </div>

      <div className="pagination">
        <button
          id="paginate-back"
          className="shift-buttons"
          onClick={goToPreviousPage}
        >
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
        </button>
        <div className="paginate-buttons">
          {buttonNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={
                currentPage === pageNumber
                  ? "page-number active-page"
                  : "page-number"
              }
              onClick={() => changePageNumber(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          id="paginate-next"
          className="shift-buttons"
          onClick={goToNextPage}
        >
          <FontAwesomeIcon icon={faArrowRight} />{" "}
        </button>
      </div>
    </section>
  );
};

export default Pagination;
