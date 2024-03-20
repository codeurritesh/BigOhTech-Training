import { Colors } from "@/Constants/Colors";
import { Styles } from "@/datatypes/Styles";

export const styles:Styles = {
    mainContainer:{
        width:"100vw",
        minHeight: `calc(100vh - 200px)`,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage: 'url("https://team.kanakinfosystems.com/apps/assets/17.0/website_logins?imagepath=etc/1-background.jpg")'
    },
    formLoginBox: {
        width: '80%',
        maxWidth:'700px',
        minWidth:'250px',
        padding: '50px',
        margin: '20px auto 20px',
        boxSizing: 'border-box',
        borderRadius: '20px',
        backgroundColor: '#eee',
        boxShadow: '11px 11px 17px -10px rgba(0,0,0,0.75)',
        transition: '1s',
    },
    formDetails: {
        width: '100%',
    },
    formElement: {
        width: '100%',
        fontSize: 'large',
        borderRadius: '10px',
        border: '0px',
    },
    formButtons: {
        width: '96%',
        height: '40px',
        margin: '10px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'bold',
        fontSize: 'large',
        borderRadius: '10px',
        border: '0px',
    },
    reset: {
        backgroundColor: Colors.warning,
    },
    submit: {
        color: 'secondary.contrastText',
        backgroundColor: 'secondary.main',
    },
    select: {
        height: '50px',
    },
    textarea: {
        width: '89%',
        height: '50px',
    }
};
