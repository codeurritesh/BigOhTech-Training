import { Colors } from "@/Constants/Colors";
import { Styles } from "@/datatypes/Styles";

export const styles = {
  navbar: {
    width: "100vw",
    height: "100px",
    paddingLeft: "40px",
    paddingRight: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "primary.contrastText",
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "primary.main",
    boxSizing: "border-box",
  },
  headerComponent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  cartButton: {
    width: "80px",
    height: "50px",
    marginLeft: "20px",
    borderRadius: "10px",
    border: "0px",
    color: 'secondary.contrastText',
    fontWeight: "bold",
    fontSize: "large",
    backgroundColor: "warning.main",
  },
  navButtons: {
    minWidth: "100px",
    padding: "5px",
    marginLeft: "20px",
    boxSizing: "border-box",
    border: "0px",
    borderRadius: "5px",
    color: 'secondary.contrastText',
    fontWeight: "bold",
    backgroundColor: "secondary.main",
    cursor: "pointer",
  },
  bagIcon: {
    marginRight: "10px",
    fontSize: "xx-large",
  },
} satisfies Styles;
