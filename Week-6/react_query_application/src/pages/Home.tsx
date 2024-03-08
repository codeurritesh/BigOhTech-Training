import React, { useEffect, useState } from "react";
import NavBar from "../components/shared/NavBar/NavBar";
import DisplayArea from "../components/shared/DisplayArea/DisplayArea";
import Footer from "../components/shared/Footer/Footer";
import { Response } from "../dataTypes/Response";

const Home = () => {
  return (
    <>
      <NavBar />
      <DisplayArea />
      <Footer />
    </>
  );
};

export default Home;
