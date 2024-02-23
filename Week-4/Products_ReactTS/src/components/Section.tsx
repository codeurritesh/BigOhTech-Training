import React, { useCallback, useMemo, useState } from "react";
import FilterContainer from "./Section/FilterContainer";
import ImageContainer from "./Section/ImageContainer";
import Pagination from "./Section/Pagination";
import { AllProduct } from "../datatypes/All-products";
import { Alert } from "@mui/material";

const Section = () => {

  return (
    <div>
      <FilterContainer />
      <Alert variant="filled" severity="success" onClose={() => {}} style={{width:"80vw", margin:"0px auto 10px auto"}}>Product deleted Successfully</Alert>

      <ImageContainer/>
      <Pagination />
    </div>
  );
};

export default Section;
