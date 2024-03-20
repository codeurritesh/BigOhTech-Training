import { Colors } from "@/Constants/Colors";
import { Styles } from "@/datatypes/Styles";

export const styles: Styles = {
    addQuoteInput: {
    //   minWidth: '300px',
      width: '92%',
      margin: '10px',
      padding: '10px',
      border: '0px',
      borderRadius: '10px',
    },
    addQuoteButton: {
      height: '40px',
      width: '100px',
      borderRadius: '10px',
      border: '0px',
      fontSize: 'large',
      fontWeight: 'bold',
      color: Colors.primary,
      backgroundColor: '#0092ca',
      cursor: 'pointer',
    },
    error: {
      marginLeft: '20px',
      color: Colors.warning,
    },
    formInputControl: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
  
  export default styles;
  