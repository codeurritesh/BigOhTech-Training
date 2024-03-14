// Footer.js
import React, { CSSProperties, useContext } from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { ThemeContext } from "../../ThemeContext/themeContext";
import "./style.css";
import { themeColors } from "../../utils/themeColors";
import { localStorageManagement } from "../../services/LocalStorageManagement";
const Footer = () => {
  const theme = useTheme();
  const themeContext = useContext(ThemeContext);
  const toggleTheme = () => {
    localStorageManagement.setValue('isDarkMode',themeContext?.darkMode? 'light':'dark');
    themeContext?.setDarkMode(!themeContext.darkMode);
  };
  const changeThemeHandler=(color:string)=>{
    localStorageManagement.setValue('initialThemeColor',color);
    themeContext?.setInitialThemeColor(color);
    // make custom hook using callback 
  }
  return (
    <footer
      className="main-footer"
      style={{
        backgroundColor: theme.palette.primary.main,
        padding: "20px",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }} 

      // make style common
    >
      <Typography variant="body2" color="white">
        All rights reserved. Quotes-app © 2024.
      </Typography>
      <Button
        variant="outlined"
        onClick={toggleTheme}
        style={{ color: "white", borderColor: "white", marginTop: "10px" }}
      >
        Toggle Theme
      </Button>
      <div className="theme-choice">

        {
          Object.entries(themeColors).map(([color, value]) => (
            <div
              key={color}
              onClick={() => changeThemeHandler(value)}
              className="choose-theme-button"
              style={{ backgroundColor: value }}
            ></div>
          ))
        }
      </div>
    </footer>
  );
};

export default Footer;


// // const styles
// const styles = {
//   footer: {
//     backgroundColor: theme.palette.primary.main,
//     padding: "20px",
//     textAlign: "center",
//     position: "fixed",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//   },
// } satisfies Record<string, CSSProperties>;
