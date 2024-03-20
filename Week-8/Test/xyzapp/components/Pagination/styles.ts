import { Colors } from "@/Constants/Colors";
import { Styles } from "@/datatypes/Styles";

const styles:Styles = {
    pagingSection: {
      width: '100vw',
      height: '20px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    pagination: {
      display: 'flex',
    },
    activePage: {
      backgroundColor: 'warning.main',
      color: 'warning.contrastText',
    },
    offset: {
      width: '40px',
      fontWeight: 'bold',
    },
    paginateButtons: {
      maxWidth: '114px',
      height: '25px',
      overflowX: 'scroll',
      scrollbarWidth: "none",  
      display: 'flex',
      justifyContent: 'space-between',
    },
    paginateButtonsScrollbar: {
      width: '0',
      height: '0',
    },
    paginateButton: {
      border: '0px',
      width: '20px',
      height: '20px',
      cursor: 'pointer',
      margin: '2px',
      borderRadius: '50%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    pagingSectionInput: {
      marginLeft: '5px',
    },
    shiftButtons: {
      width: '25px',
      height: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      border: '0px',
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
      margin: '0px 5px',
      cursor: 'pointer',
    },
  };
  
  export default styles;
  