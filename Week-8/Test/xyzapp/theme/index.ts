import { CommonColors, PaletteOptions, createTheme } from "@mui/material";
import { blue, blueGrey, grey, lime, purple } from "@mui/material/colors";
const commonColor: Partial<CommonColors> = {
  black: "red",
  white: "blue",
};

const palette: PaletteOptions = {
  primary: {
    main: "#222831",
    light: "blue",
    // 500: "#4284FB",
    // light: "white",
    contrastText: "white",
  },
  secondary: {
    main: "#393e46",
    contrastText: "white",
  },
  warning: {
    main: "#0092ca",
    contrastText: "white",
  },
  info: {
    main: "#eeeeee",
    light: "rgba(128, 128, 128, 0.879)",
    dark: "black",
    contrastText: "grey",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  mode:"dark"

};

const theme = createTheme({
  palette,
});

export default theme;
