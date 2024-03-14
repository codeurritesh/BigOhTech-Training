import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeContext } from "../ThemeContext/themeContext";
import { Paper, ThemeOptions, createMuiTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { localStorageManagement } from "../services/LocalStorageManagement";
import { themeColors } from "../utils/themeColors";

const Main = () => {
  const [darkMode, setDarkMode] = useState(localStorageManagement.getValue('isDarkMode')=='dark'? true : false);
  const [themeColor,setInitialThemeColor]=useState(localStorageManagement.getValue('initialThemeColor') ?? themeColors.blue);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode?'#222831':'#38598b',
      },
      secondary: {
        main: darkMode?'#31363F':'#ffffff',
      },
      // themeColor:{
      //   main:initialThemeColor

      // }
    },
  } as ThemeOptions);
  return (
    <ThemeProvider theme={theme}>
    <ThemeContext.Provider value={{ darkMode, setDarkMode, themeColor, setInitialThemeColor}}>
        <Header/>
        <Outlet/>
        <Footer/>
    </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Main;
