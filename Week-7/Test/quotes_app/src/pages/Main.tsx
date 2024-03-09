import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeContext } from "../ThemeContext/themeContext";
import { Paper, ThemeOptions, createMuiTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode?'#222831':'#38598b',
      },
      secondary: {
        main: darkMode?'#31363F':'#ffffff',
      },
    },
  } as ThemeOptions);
  return (
    <ThemeProvider theme={theme}>
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Header/>
        <Outlet/>
        <Footer/>
    </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Main;
