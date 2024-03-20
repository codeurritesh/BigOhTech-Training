import { Styles } from "@/datatypes/Styles";

export const styles :Styles = {
    card: {
      width: "300px",
      height: "fit-content",
      padding: "10px",
      marginBottom: "30px",
      backgroundColor: "info.main",
      borderRadius: "10px",
      boxSizing: "border-box",
      cursor: "pointer",
    },
    cardImage: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
    },
    cardName: {
      color: "black",
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    cardLike: {
      border: "0px",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "x-large",
      cursor: "pointer",
      backgroundColor: "info.main",
    },
    cardIcon: {
      color: "info.dark",
    },
  };
  
  export default styles;
  