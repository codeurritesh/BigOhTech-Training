import { Colors } from "@/Constants/Colors";

interface CartCardStyles {
    cartCard: React.CSSProperties;
    cartProduct: React.CSSProperties;
    cartProductImg: React.CSSProperties;
    cartCardIcon: React.CSSProperties;
    cartProductInfo: React.CSSProperties;
    productInfos: React.CSSProperties;
    deleteButton: React.CSSProperties;
  }
  
  const styles: CartCardStyles = {
    cartCard: {
      width: '100%',
      height: '100px',
      marginTop: '10px',
      padding: '10px 50px 10px 30px',
      boxSizing: 'border-box',
      borderRadius: '10px',
      borderBottom: '2px dashed #eee',
      display: 'flex',
      justifyContent: 'space-between',
    },
    cartProduct: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cartProductImg: {
      width: '80px',
      objectFit: 'cover',
    },
    cartCardIcon: {
      fontSize: 'large',
      cursor: 'pointer',
    },
    cartProductInfo: {
      width: '450px',
      height: '100%',
      display: 'flex',
    },
    productInfos: {
      marginLeft: '20px',
    },
    deleteButton: {
      fontSize: 'x-large',
      color: Colors.secondaryText,
      cursor: 'pointer',
    },
  };
  
  export default styles;
  